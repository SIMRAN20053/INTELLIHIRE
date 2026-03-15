from flask import Blueprint,request,jsonify
from models.resume_model import Resume
from database.db import db
import os
resume=Blueprint("resume", __name__)
UPLOAD_FOLDER="uploads"
@resume.route("/upload", methods=["POST"])
def upload(): ## this allows user to upload resume in the resume field in the form 
    file=request.files.get("resume")
    user_id=request.form.get("user_id")
    filepath= os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)
    new_resume=Resume(
        user_id=user_id,
        file_name=file.filename,
        file_path=filepath
    )
    db.session.add(new_resume)
    db.session.commit()
    return jsonify({"message":"resume uploaded successfully"})
@resume.route("/user/<int:user_id>",methods=["GET"]) ## this allows user to view their uploaded resume 
def get_resume(user_id):
    resumes=Resume.query.filter_by(user_id=user_id).all()
    result=[]
    for r in resumes:
        result.append({
            "id":r.id,
            "file_name":r.file_name,
            "file_path":r.file_path,
            "uploaded_on":r.uploaded_on
        })
    return jsonify(result)
@resume.route("/<int:resume_id>",methods=["DELETE"])
def delete_resume(resume_id):
    resume=Resume.query.get(resume_id)
    if not resume:
        return jsonify({"message": "no valid resume found"}),404
    db.session.delete(resume)
    db.session.commit()
    return jsonify({"message":"resume deleted successfully"})
   


  