from flask import Flask, Response, render_template, jsonify, request
import json

app = Flask(__name__)


@app.route('/') # This is to get the layouts working so that it redirects
def index():
    return render_template("index.html")


@app.route('/saveList', methods=['POST'])
def saveList():

    with open('localStorage.txt', 'w') as outFile:
        #print(request.json)
        outFile.write(json.dumps(request.json))
    res = Response('')
    return res

@app.route('/getList')
# read json from file
def getList():
    with open('localStorage.txt', 'r') as inFile:
        ln = inFile.read()

    return jsonify(ln)

@app.route('/clearList', methods=['POST'])
def clearList():
    with open('localStorage.txt', 'w') as outFile:
        outFile.write('')
    res = Response('Cleared Memory')
    return res

if __name__ == '__main__':
    app.run(debug = True, port = 5001)
