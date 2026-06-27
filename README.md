# Full-Stack Calculator Application

A secure and responsive full-stack calculator web application built with **React**, **Node.js**, **Express.js**, **MongoDB**, **JWT Authentication**, and **Tailwind CSS**. The application allows users to register, log in, perform mathematical calculations, and manage their calculation history securely.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- Password Hashing with bcrypt
- JWT Authentication
- Protected Routes

### Calculator
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Input Validation
- Division by Zero Handling

### Calculation History
- Save every calculation
- View personal calculation history
- Delete individual calculations
- Clear all calculation history

### Dashboard
- Welcome message
- Calculator interface
- Calculation history
- Responsive UI

### Bonus Features
- Dark Mode
- Search Calculation History
- Sort by Newest/Oldest

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt

### Database
- MongoDB
- Mongoose

### Version Control
- Git
- GitHub

---

## 📁 Project Structure

```text
calculator-app/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── src/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/calculator-app-fullstack.git
cd calculator-app-fullstack
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
npm run dev
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Calculations

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/calculations` | Create a calculation |
| GET | `/api/calculations` | Get user calculation history |
| DELETE | `/api/calculations/:id` | Delete one calculation |
| DELETE | `/api/calculations` | Clear all calculation history |

---

## 🔒 Security

- Passwords hashed using bcrypt
- JWT Authentication
- Protected API routes
- User-specific calculation history
- Input validation
- Error handling

---

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop
- Tablet
- Mobile

---

## 🚀 Deployment

### Frontend
- Vercel

### Backend
- Render or Railway

### Database
- MongoDB Atlas

---

## 📜 License

This project is developed for learning purposes as part of a Full-Stack Development assignment.
