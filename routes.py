from flask import Flask, Response, render_template
import random, json
import time


app = Flask(__name__)



@app.route('/')
def index():
    return render_template("index2.html")


@app.route('/saveList')
#write json to file

@app.route('/getList')
# read json from file

'''
@app.route('/getnum')
def anyname():
    time.sleep(2)
    res = Response(json.dumps({'number':random.randrange(100)}))
    #res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Content-type'] = 'application/json'
    return res
@app.route('/hello')
def hello():
    return "<h1>Hello World</h1>"

@app.route('/saveList')
def saveToFile(file):

    for row in table:
        comma seperated identities
        [name, quantity, price, ]
    '''
if __name__ == '__main__':
    app.run(debug = True, port = 5001)
