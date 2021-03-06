from flask import Flask, render_template
from flask.ext.socketio import SocketIO

app = Flask(__name__)
app.debug = True
socketio = SocketIO(app)

@app.route('/')
def index_endpoint():
    return render_template('index.html')

#The data is going to be the absolute coordinates the top
#left to the person's screen is looking.
@socketio.on('get_graphics')
def handle_get_graphics(data):
    pass

if __name__ == '__main__':
    socketio.run(app)
