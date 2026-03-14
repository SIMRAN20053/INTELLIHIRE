from flask import Blueprint,request,jsonify
from models.resume_model import Resume
from database.db import db
import os
resume=Blueprint("resume", __name__)
UPLOAD_FOLDER="uploads"
@resume.route("/upload", methods=["POST"])
def upload():
    file=request.files.get["resume"]
    user_id=request.form.get("user_id")
    filepath= os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)
    new_resume=Resume(
        user_id=user_id,
        file_name=file.filename,
    )
    db.session.add(new_resume)
    db.session.commit()
    return jsonify({"message":"resume uploaded successfully"})
  