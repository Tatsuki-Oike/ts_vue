import requests
import json
import os

URL = "http://127.0.0.1:5000/api/allTask"
TASK_URL = "http://127.0.0.1:5000/api/task"

TASK_ID = "sampleID"
TASK_URL = os.path.join(TASK_URL, TASK_ID)
POST_DATA = {
    'id': TASK_ID,
    'task': 'sampleTask',
    'status': "active"
}
PUT_DATA = {
    "status": "done"
    }

def main():
    print("\n\nMake Task")

    # CREATE A TASK
    # --------------------------------------------------------
    # POST
    response = requests.post(URL, data=json.dumps(POST_DATA))
    print(f"\nPOST url: {response.url}")
    print(f"POST DATA: {POST_DATA}")
    print(f"POST content: {json.loads(response.json())}")

    # GET A USER 
    response = requests.get(TASK_URL)
    print(f"\nGET url: {response.url}")
    print(f"content: {json.loads(response.json())}")

    # GET USERS
    response = requests.get(URL)
    print(f"\nstatus code: {response.status_code}")
    print(f"content: {json.loads(response.json())}\n")
    # --------------------------------------------------------

    # CHANGE A USER
    # --------------------------------------------------------
    # PUT ID
    response = requests.put(TASK_URL, data=json.dumps(PUT_DATA))
    print(f"\nPUT url: {response.url}")
    print(f"PUT DATA: {PUT_DATA}")
    print(f"content: {json.loads(response.json())}")

    # GET USERS
    response = requests.get(URL)
    print(f"\nstatus code: {response.status_code}")
    print(f"content: {json.loads(response.json())}\n")
    # --------------------------------------------------------

    # DELETE A USER DATA
    # --------------------------------------------------------
    # DELETE ID
    response = requests.delete(TASK_URL)
    print(f"\nDELETE url: {response.url}")
    print(f"content: {json.loads(response.json())}")

    # GET USERS
    response = requests.get(URL)
    print(f"\nstatus code: {response.status_code}")
    print(f"content: {json.loads(response.json())}\n")
    # CHANGE A USER DATA 
    # --------------------------------------------------------

if __name__ == '__main__':
    main()