from database.db import db
from datetime import datetime
class User(db.Model):
    __tablename__="Users"
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(50), nullable=False)
    email=db.Column(db.String(200), unique=True, nullable=False)
    password_hashed=db.Column(db.String(200), nullable=False)
    role=db.Column(db.String(50), default="Candidate")
    created_on=db.Column(db.DateTime, default=datetime.utcnow)