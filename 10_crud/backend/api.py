from flask_restful import Api
from app import app, db

from taskApi.allTask import AllTasksApi
from taskApi.oneTask import TaskApi

if __name__ == '__main__':
    api = Api(app)

    api.add_resource(AllTasksApi, '/api/allTask')
    api.add_resource(TaskApi, '/api/task/<string:id>')

    with app.app_context():
        db.create_all()
    
    app.run(debug=True)