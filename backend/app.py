from flask import Flask
from flask_cors import CORS
from database.db import db
from routes.auth_routes import auth
app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///intellihire.db"
CORS(app)
db.init_app(app)
app.register_blueprint(auth, url_prefix="/auth")
from models.user_model import User
with app.app_context():
    db.create_all()
@app.route('/')
def home():
    return {"message": "Intellihire running succesfully"}
if __name__=="__main__":
    app.run(debug=True)