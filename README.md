# 🏗️ SiteTask Tracker

A full-stack web application to help civil engineers and site supervisors manage construction projects, assign tasks, and track progress effectively.

🚀 Project Overview
SiteTask Tracker is built for real-world use on construction sites where engineers and site supervisors need to:

Track multiple projects

Break down tasks under each project

Assign and monitor progress

Collaborate efficiently while maintaining user-level access

⚙️ Tech Stack
Layer Tech Used
Frontend React (Vite), React Router, Axios
Styling Plain CSS
State Mgmt React Context API
Backend Flask, Flask-JWT-Extended, SQLAlchemy
Database PostgreSQL
Auth JWT-based Authentication
Dev Tools Postman, VS Code, browser devtools

🧠 Thought Process
The goal was to build a minimal yet powerful admin-style dashboard tailored for civil engineers. Keeping user experience practical, I ensured all features followed a CRUD-first principle and intuitive design.

Modular Frontend

All major resources (Projects, Tasks, Assignees) have their own components/, pages/, and context/ for maintainability.

Auth flows are clearly separated for login/register.

Protected routes ensure only authenticated users can access project data.

Practical Styling

Used clean, responsive plain CSS — no Tailwind or libraries — to ensure compatibility on constrained environments.

Structured Backend

Built with Flask, following REST conventions.

JWT-based secure routes for all operations.

Tightly scoped user access: users can only view/manage their own resources.

Clear Context Usage

AuthContext: handles login/logout and localStorage sync.

ProjectContext: provides project CRUD operations to the entire app.

📁 Project Structure
Frontend (/src)
arduino
Copy
Edit
components/
│
├── auth/          → Login & Register Forms
├── projects/      → ProjectCard, ProjectForm, ProjectList
├── tasks/         → TaskForm, TaskCard, TaskList
├── shared/        → Navbar, ProtectedRoute, Spinner
├── dashboard/     → StatsCard, TaskStatusChart (optional)
├── assignees/     → (Optional future feature)

context/
├── AuthContext.jsx
├── ProjectContext.jsx

pages/
├── LoginPage.jsx
├── RegisterPage.jsx
├── DashboardPage.jsx
├── ProjectsPage.jsx
├── TasksPage.jsx
├── MyTasksPage.jsx

services/
├── api.js         → axios base config
├── auth.js        → login/register requests

styles/
├── AuthPage.css
├── Dashboard.css
├── Projects.css
├── Tasks.css

App.jsx
main.jsx
Backend (Flask)
app.py contains:

User registration & login routes (/api/auth)

CRUD for /api/projects and /api/projects/:id/tasks

JWT-protected routes, strict user resource access

Models:

User

Project

Task

🧪 API Endpoints
Auth
POST /api/auth/register

POST /api/auth/login

Projects
GET /api/projects

POST /api/projects

GET /api/projects/<project_id>

PUT /api/projects/<project_id>

DELETE /api/projects/<project_id>

Tasks
GET /api/projects/<project_id>/tasks

POST /api/projects/<project_id>/tasks

PUT /api/tasks/<task_id>

DELETE /api/tasks/<task_id>

🧭 How to Use

1. 🔧 Backend Setup
bash
Copy
Edit

## Create virtual environment and activate it

python3 -m venv venv
source venv/bin/activate

## Install dependencies

pip install -r requirements.txt

## Setup database

export FLASK_APP=app.py
flask run
Your backend runs at: <http://localhost:5000>

⚙️ Frontend Setup
bash
Copy
Edit
cd client/  # or wherever your frontend lives
npm install
npm run dev
Your frontend runs at: <http://localhost:5173>

✅ Features
User registration & login with JWT

Dashboard showing projects and tasks

Create/edit/delete projects

Add tasks to specific projects

View tasks per project

Basic error handling + protected routes

Plain CSS UI (mobile-friendly)

🧩 Future Improvements
Assign tasks to users/teams

Role-based dashboard (engineer vs supervisor)

Task timeline visualization (Gantt-style)

Comment/feedback threads on tasks

Dark mode toggle

Deployment to Render/Netlify
