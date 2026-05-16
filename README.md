# MyTawjeh

AI academic orientation platform for Moroccan students, built with a React/Vite frontend and an Express/MongoDB backend.

## Architecture

The project is now organized around an MVC-ready structure.

```text
My-Tawjihe/
  backend/
    src/
      app.js                  # Express app composition
      index.js                # Server startup
      config/                 # Environment and database setup
      controllers/            # Request handlers
      middleware/             # Error and 404 middleware
      models/                 # Mongoose models
      routes/                 # API route definitions
      utils/                  # Shared backend helpers
  frontend/
    src/
      components/             # Reusable UI components
      controllers/            # React hooks that coordinate view state
      models/                 # Frontend types and view models
      routes/                 # Client-side routing
      services/               # API clients
      utils/                  # Shared frontend utilities
      views/                  # Route-level screens
```

In this setup:

- Models hold data schemas and typed data shapes.
- Views are route-level UI screens.
- Controllers coordinate request handling on the backend and state flow on the frontend.
- Services isolate browser-to-API calls from UI components.

## Backend Setup

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Backend environment variables:

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `5000` | API port |
| `MONGO_URI` | `mongodb://localhost:27017/mytawjeh` | MongoDB connection string |
| `CLIENT_URL` | `*` | Allowed CORS origin |

API endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Submit a contact message |
| `GET` | `/api/contact` | List contact messages |

## Frontend Setup

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend environment variables:

| Variable | Default | Description |
| --- | --- | --- |
| `VITE_API_URL` | `http://localhost:5000` | Backend API base URL |

Production build:

```bash
npm run build
```
