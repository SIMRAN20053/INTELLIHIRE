from database.db import db 
from datetime import datetime 
class Application(db.Model):
    __tablename__="application"
    id=db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, nullable=False)
    job_id=db.Column(db.Integer, nullable=False)
    resume_id=db.Column(db.Integer, nullable=False)
    status=db.Column(db.String(200),default="applied")
    aaplied_at=db.Column(db.DateTime, default=datetime.utcnow)
