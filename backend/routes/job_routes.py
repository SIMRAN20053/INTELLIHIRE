from models.job_model import Job
from flask import Blueprint, request, jsonify
from database.db import db

jobs=Blueprint("jobs", __name__)
@jobs.route("/create", methods=["POST"])
def create():
    data=request.get_json()
    new_job=Job(
        recruiter_id=data.get("recruiter_id"),
        title=data.get("title"),
        company=data.get("company"),
        location=data.get("location"),
        description=data.get("description"),
        skills_required=data.get("skills"),
    )
    db.session.add(new_job)
    db.session.commit()
    return jsonify({"message":"Job created successfully"})
@jobs.route("/", methods=["GET"])
def get_jobs():
    job_list=Job.query.all()
    result=[]
    for j in job_list:
        result.append({
            "id":j.id,
            "title":j.title,
            "skill":j.skills_required,
            "company":j.company,
            "location":j.location
        })
        return jsonify(result)
@jobs.route("/<int:job_id>", methods=["GET"])
def getjob_id(job_id):
    job=Job.query.get(job_id)
    if not job:
        return jsonify({"message":"job not found"}),404
    return jsonify({
        "id":job.id,
        "title":job.title,
        "company":job.company,
        "skills":job.skills_required,
        "location":job.location,
        "description":job.description
    })

    