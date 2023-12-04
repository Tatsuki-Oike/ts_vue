from app import db

class Task(db.Model):
    id = db.Column(db.String, primary_key=True)
    task = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)