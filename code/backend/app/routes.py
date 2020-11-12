from app import app
from uuid import uuid4
from time import time

from flask import request, jsonify
from firebase_admin import credentials, auth, firestore, initialize_app

# Connect to firebase
cred = credentials.Certificate("fbAdminConfig.json")
firebase = initialize_app(cred)
db = firestore.client()
sessions_ref = db.collection("Sessions")


@app.route('/time')
def home():
    return {'time': time()}


@app.route('/create-session', methods=['POST'])
def create_session():
    post_data = request.get_json()
    token = str(uuid4())[:8]
    try:
        sessions_ref.document(token).set(post_data)
    except Exception as e:
        print(e)
        return jsonify(message="There was an error in creating session"), 400
    return jsonify(token=token), 200


@app.route('/update-session', methods=['PUT'])
def update_session():
    # Expects token to be sent in the json
    post_data = request.get_json()
    try:
        token = post_data.pop("token")
        sessions_ref.document(token).update(post_data)
    except Exception as e:
        print(e)
        return jsonify(message="There was an error in updating session"), 400
    return jsonify(token=token), 200
