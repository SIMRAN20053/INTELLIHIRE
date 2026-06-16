from database.db import db
from datetime import datetime
class ParsedResume(db.Model):
    __tablename__="parsed_resumes"
    parsed_resume_id=db.Column(db.Integer, primary_key=True)
    resume_id=db.Column(db.Integer, db.ForeignKey("resumes.id"), nullable=False)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    skills=db.Column(db.String(200))
    education=db.Column(db.String(500))
    experience=db.Column(db.String(500))
    phone=db.Column(db.String(20))