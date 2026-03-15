from database.db import db 
from datetime import datetime 
class Job(db.Model):
    __tablename__="jobs"

    id=db.Column(db.Integer,primary_key=True)
    recruiter_id=db.Column(db.Integer,nullable=False)
    title=db.Column(db.String(200), nullable=False)
    company=db.Column(db.String(200),nullable=False)
    location=db.Column(db.String(200))
    description=db.Column(db.Text)
    skills_required=db.Column(db.String(500))
    created_at=db.Column(db.DateTime, default=datetime.utcnow)
