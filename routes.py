from flask import Flask, Response, render_template
import random, json
from listItem import ListItem


app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/saveList')
#write json to file

@app.route('/getList')
# read json from file


if __name__ == '__main__':
    app.run(debug = True, port = 5001)
