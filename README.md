# task_management_system

## Installation and setup instructions

### 1.install project

เวอร์ชั่น nodejs คือ 20.11.1

    npm run install

### 2.set up database

วิธีที่ 1 มี database ในเครื่องของตัวเอง

สร้าง database ชื่อ "task_management_system"  database ที่ใช้คือ mysql

วิธีที่ 2 ใช้ databae ใน docker

1. create network ชื่อ dev

2.ใช้คำสั่งต่อไปนี้เพื่อสร้าง docker container

    docker-compose up -d

### 3. run project

    npm run dev


## API Documentation

1.create task ชื่อ => api  -POST /task

ตัวอย่าง url

    http://localhost:3000/api/v1/task

bodyที่ส่งไป

    {
        "title": "tst",
        "description": "dkjfkdjfkjdfkjdkf",
        "status": "pending"
    }

2.Retrieve all tasks ✅ ชื่อ => api -GET  /task

ตัวอย่าง url

    http://localhost:3000/api/v1/task

3.Update a task ✅ ชื่อ api -PUT /task/:id

ตัวอย่าง url

    http://localhost:3000/api/v1/task/1

bodyที่ส่งไป

    {
        "id": 1,
        "title": "tst",
        "description": "6666",
        "status": "pending"
    }


4.Delete a task ✅ ชื่อ api -DELET /task/:id

ตัวอย่าง

    http://localhost:3000/api/v1/task/1

5.Filter tasks by status ✅ชื่อ api -GET /task?status=ชื่อสถานะที่ค้นหา

ตัวอย่าง

    http://localhost:3000/api/v1/task?status=inProgress


