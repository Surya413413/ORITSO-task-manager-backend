
#  ORITSO Assignment – Task Manager Backend

This is the **backend API** for a Task Manager application, built using **Node.js**, **Express.js**, and **PostgreSQL** (can be adapted for MySQL/SQLite). It provides full CRUD functionality for managing tasks with proper MVC architecture, RESTful APIs, and validations.

##  Folder Structure
backend/
├── controllers/
│ └── taskController.js
├── models/
│ └── taskModel.js
├── routes/
│ └── taskRoutes.js
├── config/
│ └── db.js
├── .env
├── server.js
├── package.json
└── README.md


---

## Features

- Create, Read, Update, Delete (CRUD) for Tasks
- Task Fields: `title`, `description`, `dueDate`, `status`
- RESTful API design
- Middleware-based error handling
- PostgreSQL/MySql database
- CORS and JSON body parser support
- Easily extendable for authentication (JWT)

---

##  Tech Stack

- Node.js
- Express.js
- PostgreSQL or MysQL
- dotenv for environment variables
- nodemon for development
- CORS middleware

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Surya413413/ORITSO-task-manager-backend.git
cd ORITSO-task-manager-backend

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| GET    | `/api/tasks/:id` | Get task by ID    |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

### Simple data
{
  "title": "Complete Assignment",
  "description": "Finish the ORITSO backend task manager",
  "dueDate": "2025-05-14",
  "status": "pending"
}

### Testing
You can test the APIs using:
Postman
Thunder Client (VS Code extension)
Curl or HTTPie

 ### Deployment (Optional)
You can deploy the backend using:
Render (Recommended for free tier)

### Frontend
Frontend built using React is available in the same project or separate repo.

GitHub: @Surya413413
