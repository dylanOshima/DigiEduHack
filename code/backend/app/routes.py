from app import app
from time import time


@app.route('/time')
def home():
    return {'time': time()}
