from flask import Flask
from flask_cors import CORS
from database.db import db
from routes.auth_routes import auth
from routes.resume_routes import resume
from routes.job_routes import jobs
from routes.aaplication_routes import applications
app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///intellihire.db"
CORS(app)
db.init_app(app)
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(resume, url_prefix="/resume")
app.register_blueprint(jobs,url_prefix="/jobs")
app.register_blueprint(applications,url_prefix="/applications")
from models.user_model import User
from models.resume_model import Resume
from models.job_model import Job
with app.app_context():
    db.create_all()
@app.route('/')
def home():
    return {"message": "Intellihire running succesfully"}
if __name__=="__main__":
    app.run(debug=True)