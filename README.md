# Blog Application

A complete full-stack blog application with an Express/TypeScript backend API, MongoDB database integration, and a React/TypeScript/Vite frontend.

---

## Project Structure

```text
blog_app/
├── frontend/   # React + Vite + TypeScript application
└── server/     # Express + TypeScript API + MongoDB models
```

---

## Getting Started

Follow the instructions below to run both the backend server and frontend application.

---

## 1. Backend Server Setup

The backend server is an Express API written in TypeScript, using MongoDB for storage.

### Prerequisites
- Node.js (LTS recommended)
- MongoDB instance (Atlas or local)

### Steps

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `server` directory (or use the existing one) with the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Seed the Database (Optional):**
   If you want to populate the database with sample blog posts:
   ```bash
   npm run seed
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   The backend API will run on `http://localhost:3000`.

---

## 2. Frontend React App Setup

The frontend is built using React, TypeScript, and Vite.

### Steps

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The React application will launch, typically on `http://localhost:5173`. Open this URL in your browser to view the blog.

---

## Available Scripts

### Backend (`server/`)
- `npm run dev` or `npm run start` - Starts the development server using `tsx watch`.
- `npm run seed` - Clears the database and seeds it with mock posts.

### Frontend (`frontend/`)
- `npm run dev` - Launches the Vite development server with Hot Module Replacement (HMR).
- `npm run build` - Compiles TypeScript and builds the production bundle.
- `npm run lint` - Runs ESLint to check for code quality and style errors.
- `npm run preview` - Previews the locally built production app.
