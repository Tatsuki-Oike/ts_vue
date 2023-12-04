# from app4.api import db
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# create the extension
db = SQLAlchemy()

def create_app():
    # create the app
    app = Flask(__name__)
    # configure the SQLite database, relative to the app instance folder
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
    # initialize the app with the extension
    db.init_app(app)

    CORS(app)
    return app

app = create_app()