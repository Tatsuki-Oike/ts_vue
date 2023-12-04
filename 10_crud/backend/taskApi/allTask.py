from flask import request
from flask_restful import Resource
from app import db
from models import Task
import json

class AllTasksApi(Resource):
    def get(self):
        try:
            tasks = db.session.query(Task).all()
            tasks_list = []
            for item in tasks:
                tasks_list.append(
                    {
                        "id": str(item.id),
                        "task": str(item.task),
                        "status": str(item.status),
                    }
                )
            response = {
                'status': "SUCCESS",
                'tasks': tasks_list,
                }
        except Exception as e:
            response = {
                "status": "FAIL",
                "error": str(e)
                }

        return json.dumps(response)
    
    def post(self):
        try:
            data = json.loads(request.data)
            item = Task(
                id = data["id"],
                task = data["task"],
                status = data["status"],
            )
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

    def delete(self):
        try:
            db.session.query(Task).delete()
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