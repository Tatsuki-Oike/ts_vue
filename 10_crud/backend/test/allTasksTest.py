import requests
import json
import uuid
import random

URL = "http://127.0.0.1:5000/api/allTask"
STATUS = ["todo", "active", "done"]
TASKS = []
for i in range(15):
    TASKS.append({
        "id": str(uuid.uuid4()),
        "task": f"task{i}",
        "status": random.choice(STATUS)
    })

def main():
    print("\nMake Sample Tasks")

    # RESET TASKS DATA 
    # --------------------------------------------------------
    # DELETE TASKS
    response = requests.delete(URL)
    print(f"\nDELETE url: {response.url}")
    print(f"DELETE content: {json.loads(response.json())}")

    # GET TASKS
    response = requests.get(URL)
    print(f"\nstatus code: {response.status_code}")
    print(f"content: {json.loads(response.json())}\n")
    # --------------------------------------------------------

    # CREATE TASKS
    # --------------------------------------------------------
    # POST SAMPLE TASKS
    for item in TASKS:
        response = requests.post(URL, data=json.dumps(item))

    # GET TASKS
    response = requests.get(URL)
    print(f"\nGET url: {response.url}")
    print(f"GET content: {json.loads(response.json())}")
    # --------------------------------------------------------

    print()

if __name__ == '__main__':
    main()