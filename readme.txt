FULL STACK TASK & PROJECT MANAGEMENT APP
========================================

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing projects, tasks, and teams with authentication and role-based access control.

----------------------------------------
LIVE DEMO
----------------------------------------
Frontend:
https://task-manager-taskflow.vercel.app

Backend API:
https://task-manager-taskflow.onrender.com

----------------------------------------
FEATURES
----------------------------------------

✔ User Authentication (Signup / Login)
✔ JWT-based secure authentication
✔ Role-based access (Admin / Member)
✔ Create, update, delete Projects
✔ Create, assign, and track Tasks
✔ Task status tracking (Todo / In Progress / Done)
✔ Priority management (Low / Medium / High)
✔ Dashboard with project/task overview
✔ Protected routes (Frontend + Backend)
✔ REST API architecture

----------------------------------------
TECH STACK
----------------------------------------

Frontend:
- React (Vite)
- TypeScript
- Tailwind CSS
- Formik + Yup
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- CORS
- dotenv

Database:
- MongoDB Atlas

Deployment:
- Frontend: Vercel
- Backend: Render

----------------------------------------
PROJECT STRUCTURE
----------------------------------------

PROJECT-REACT/
│
├── Login-signup/        (Frontend - React)
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/             (Backend - Node/Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json

----------------------------------------
 AUTHENTICATION FLOW
----------------------------------------

1. User signs up or logs in
2. Backend validates credentials
3. JWT token is generated
4. Token stored in frontend (localStorage)
5. Token used for protected API requests
6. Role-based access controls dashboard features

----------------------------------------
API ENDPOINTS
----------------------------------------

Auth:
POST /api/auth/signup
POST /api/auth/login

Projects:
GET /api/projects
POST /api/projects

Tasks:
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

----------------------------------------
SETUP INSTRUCTIONS (LOCAL)
----------------------------------------

Frontend:
cd Login-signup
npm install
npm run dev

Backend:
cd backend
npm install
npm run dev

----------------------------------------
ENV VARIABLES
----------------------------------------

Backend (.env):
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=https://your-frontend-url

Frontend (.env):
VITE_API_URL=https://your-backend-url

----------------------------------------
DEPLOYMENT
----------------------------------------

Frontend (Vercel):
- Root Directory: Login-signup
- Build Command: npm run build
- Output Directory: dist

Backend (Render):
- Start Command: npm run dev or node server.js
- Environment variables set in Render dashboard

