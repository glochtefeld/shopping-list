from flask import Flask, Response, render_template

app = Flask(__name__)



@app.route('/') # This is to get the layouts working so that it redirects
def index():
    return render_template("index.html")

@app.route('/saveList')
#write json to file

@app.route('/getList')
# read json from file


if __name__ == '__main__':
    app.run(debug = True, port = 5001)
