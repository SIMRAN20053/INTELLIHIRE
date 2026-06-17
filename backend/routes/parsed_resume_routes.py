from flask import Blueprint,jsonify
from models.resume_model import Resume
from models.parsed_resume import ParsedResume
parsed_resume_bp=Blueprint(
    "parsed_resume",
    __name__
)
@parsed_resume_bp.route("/test", methods=["GET"])
def test_parser():
    return jsonify({
        "message": "It has run succesfully"
    }),200
