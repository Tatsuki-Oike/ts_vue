from flask import request
from flask_restful import Resource
from app import db
from models import Task
import json

class TaskApi(Resource):
    def get(self, id):
        try:
            item = db.session.query(Task).get(id)
            response = {
                "status": "SUCCESS",
                "item": {
                    "id": str(item.id),
                    "task": str(item.task),
                    "status": str(item.status),
                }
                }
        except Exception as e:
            response = {
                "status": "FAIL",
                "Error": str(e)
                }

        return json.dumps(response)
    
    def put(self, id):
        try:
            item = db.session.query(Task).get(id)
            put_data = json.loads(request.data)
            item.status = put_data["status"]
            db.session.add(item)
            db.session.commit()

            response = {
                'status': "SUCCESS",
                }

        except Exception as e:
            response = {
                "status": "FAIL",
                "Error": str(e)
                }

        return json.dumps(response)
    
    def delete(self, id):
        try:
            task = db.session.query(Task).filter_by(id=id)
            task.delete()
            db.session.commit()

            response = {
                'status': "SUCCESS",
                }

        except Exception as e:
            response = {
                "status": "FAIL",
                "Error": str(e)
                }

        return json.dumps(response)
