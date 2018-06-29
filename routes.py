from flask import Flask, Response, render_template, jsonify, request
import json

app = Flask(__name__)


@app.route('/') # This is to get the layouts working so that it redirects
def index():
    return render_template("index.html")

@app.route('/saveList', methods=['POST'])
def save_list():

    with open('localStorage.txt', 'w') as out_file:
        #print(request.json)
        out_file.write(json.dumps(request.json))
    res = Response('')
    return res

@app.route('/getList')
# read json from file
def get_list():
    with open('localStorage.txt', 'r+') as in_file:
        ln = in_file.read()

    return jsonify(ln)

@app.route('/clearList', methods=['POST'])
def clear_list():
    with open('localStorage.txt', 'w') as out_file:
        out_file.write('')
    res = Response('Cleared Memory')
    return res

if __name__ == '__main__':
    app.run(debug = True, port = 5001)
