
# Task Management App

This is a simple **Task Management Application** built using **React and Vite**.  
The main goal of this project is to understand how routing, state management, and basic authentication work in React.

---

## About the Project

In this application, a user can:
- Register with a username
- Login using the registered username
- Add tasks with a due date
- Edit and delete tasks
- Mark tasks as pending or done
- Filter tasks based on status
- Logout and return to login page

All data is stored in **LocalStorage**, so no backend is used.

---

## Features

- User Registration and Login
- Dashboard after successful login
- Add / Edit / Delete Tasks
- Task status (Pending / Done)
- Filter tasks (All, Pending, Done)
- Logout functionality
- Simple and clean UI

---

## Technologies Used

- React
- Vite
- React Router DOM
- Context API
- CSS
- LocalStorage

---

## Folder Structure
Task-Manager/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── Item.jsx
│ │ ├── List.jsx
│ │ ├── Filter.jsx
│ │ └── Input.jsx
│ │
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Dashboard.jsx
│ │ └── AddTask.jsx
│ │
│ ├── context/
│ │ └── UserContext.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── vite.config.js
└── README.md

