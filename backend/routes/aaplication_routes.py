from flask import Blueprint, request, jsonify
from database.db import db 
from models.application_model import Application
applications=Blueprint("applications", __name__)

@applications.route("/apply", methods=["POST"])
def apply():
    data=request.get_json()
    new_application=Application(
        user_id=data.get("user_id"),
        job_id=data.get("job_id"),
        resume_id=data.get("resume_id")
    )
    db.session.add(new_application)
    db.session.commit()
    return jsonify({"message":"Applied to the job successfully"})
@applications.route("/job/<int:job_id>", methods=["GET"])
def job_get(job_id):
    jobs=Application.query.filter_by(job_id=job_id).all()
    if not jobs:
        return jsonify({"message":"job not found"}),404
    result=[]
    for j in jobs:
        result.append({
            "id":j.id,
            "user_id":j.user_id,
            "resume_id":j.resume_id,
            "status":j.status,
            "applied_on":j.applied_at
        })
        return jsonify(result)
@applications.route("/user/<int:user_id>", methods=["GET"])
def user_get(user_id):
    user_job=Application.query.filter_by(user_id=user_id).all()
    if not user_job:
        return jsonify({"message":"application not found"}),404
    result=[]
    for u in user_job:
        result.append({
            "id":u.id,
            "job_id":u.job_id,
            "status":u.status,
            "applied_at":u.applied_at,
            "resume_id":u.resume_id,
            "user_id":u.user_id
        })
        return jsonify(result)
@applications.route("/<int:application_id>", methods=["PUT"])
def update_application(application_id):
    data=request.json
    application=Application.query.get(application_id)
    if not application :
        return jsonify({"message": "application not found"}),404
    application.status=data.get("status")
    db.session.commit()
    return jsonify({"message":"application status updated successfully"})
@applications.route("/<int:application_id>", methods=["DELETE"])
def delete_application(application_id):
    application =Application.query.get(application_id)
    if not application:
        return jsonify({"message":"Application not found"}),404
    db.session.delete(application)
    db.session.commit()
    return jsonify({"message":"Application deleted successfully"})
