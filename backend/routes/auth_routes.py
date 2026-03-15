from flask import Blueprint,request,jsonify
from models.user_model import User
from database.db import db
import bcrypt
auth=Blueprint("auth", __name__)
@auth.route("/signup", methods=["POST"])
def signup():
    data=request.get_json()
    name=data.get("name")
    email=data.get("email")
    password=data.get("password")
    hashed_password=bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    existing_user=User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message":"email already registered"}),400
    new_user=User(
        name=name,
        email=email,
        password_hashed=hashed_password.decode("utf-8")
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"new user created successfully"})
@auth.route("/login", methods=["POST"])
def login():
    data=request.get_json()
    email=data.get("email")
    password=data.get("password")
    user=User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message":"Invalid email"}),404
    if not bcrypt.checkpw(password.encode("utf-8"), user.password_hashed.encode("utf-8")):
        return jsonify({"message":"Invalid password"}),401
    return jsonify({
        "message":"login successful",
        "user":{
            "id":user.id,
            "name":user.name,
            "email":user.email,
            "role":user.role
        }
    })