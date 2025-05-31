# 🧠 Template Cloner - Backend

This is the backend service for **Template Cloner**, a tool that allows users to clone and modify pre-defined project templates for rapid prototyping. This backend is built with **Express.js** and connects with a **MongoDB** database.

---

## 🚀 Features

* 🔐 **Authentication** (Stub auth)
* 📂 **Template Management** (Create, Read)
* 🔗 **Project Cloning Endpoint**
* 🧪 **Basic Testing Setup** (Jest/Supertest)
* 🌐 **RESTful API Design**
* 📦 **Modular Codebase Structure**

---

## 🛠️ Tech Stack & Rationale

* **Node.js** — Fast and scalable runtime for building server-side applications.
* **Express.js** — Minimal and flexible web framework for routing and middleware support.
* **PostgreSQL + Prisma ORM** — SQL database with a efficient ORM.
* **dotenv** — Loads environment variables to keep secrets out of source code.
* **CORS** — Enables controlled access across different domains.


## 📁 Project Structure

```
├──generated                 # prisma generated
├── middleware               # Auth middleware, error handling
    ├──auth.js
    ├──errorHandler.js
├── prisma                   # migrations and schema
├── routes                   # routing get and post req with prisma client
    ├──templates.js
├── .env                     # Environment variables                 
└── server.js                # Server entry point
```

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Creat1ve-shubh/TempalteCloner---Backend.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file:

```
PORT=5000
DATABASE_URL="you db url"
```

### 4. Run the Development Server

```bash
npm start
```
or
```bash
npm run dev
```

---

## 📡 API Endpoints


### Template Routes

* `GET /templates/user` – Get all templates
* `POST /templates/clone` – Create new template (admin)

---

## 🧪 Testing (Optional)

 (not included yet).

---
*Screenshots*
Testing(Postman):

POST req:

![WhatsApp Image 2025-05-30 at 23 51 22_90dcbe25](https://github.com/user-attachments/assets/085b4b1e-7508-4a5c-bb68-f8f2387578bc)

GET req:

![WhatsApp Image 2025-05-30 at 23 51 34_dae4f925](https://github.com/user-attachments/assets/e243cfbe-2b40-44b4-9b05-f5bcdb4cf81b)

Supabase Db:

![image](https://github.com/user-attachments/assets/62486978-09c5-4f9a-a498-48593a313f80)



