from database.db import db
from datetime import datetime
class Resume(db.Model):
    __tablename__="resumes"
    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey("Users.id"))
    file_name=db.Column(db.String(500))
    file_path=db.Column(db.String(500))
    uploaded_on=db.Column(db.DateTime,default=datetime.utcnow)
