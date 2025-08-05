# 📘 Intern Portal – Full Stack Mini Project

A basic full-stack Intern Dashboard built using **Node.js + Express (Backend)** and **HTML/CSS/JS (Frontend)**.

---

## 🚀 Features

### 🔐 Frontend (HTML/CSS/JS)
- ✅ Dummy **Login/Signup page** (no actual authentication)
- ✅ **Dashboard** with:
  - Intern name
  - Referral code (dummy format: `yourname2025`)
  - Total donations raised (fetched from backend)
  - Rewards/unlockables (static display)
- ✅ **Leaderboard page** (static or dummy-fetched from backend)

### 🖥 Backend (Node.js + Express)
- `/api/user` – Returns dummy intern data (name, referral code, donation amount)
- `/api/leaderboard` – Returns a static list of top interns

---

## 🧪 Folder Structure

```
intern-portal/
├── backend/
│   └── server.js          # Node.js backend with dummy APIs
├── frontend/
│   ├── index.html         # Dashboard page
│   ├── login.html         # Dummy login form
│   ├── leaderboard.html   # Static leaderboard
│   └── style.css          # Shared styling
```

---

## 📦 Setup Instructions

### ✅ Prerequisites
- Node.js installed
- Browser (Chrome, Firefox, etc.)

---

### 🛠 Backend Setup

```bash
cd backend
npm init -y
npm install express cors
node server.js
```

Server will run at:  
📡 `http://localhost:5000`

---

### 🌐 Frontend Usage

Just open these files in your browser:
- `frontend/login.html`
- `frontend/index.html`
- `frontend/leaderboard.html`

Ensure backend is running locally on port 5000 so it can fetch data.

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                           |
|--------|----------------------|---------------------------------------|
| GET    | `/api/user`          | Returns intern details and donations  |
| GET    | `/api/leaderboard`   | Returns static leaderboard data       |

---

## 🎁 Rewards Section

Static display on the dashboard:

- 🎁 Bronze Badge – ₹5000  
- 🎉 Silver Badge – ₹10000  
- 🚀 Gold Badge – ₹15000  

---

## 📌 Future Improvements
- Add real authentication (JWT or Firebase)
- Store data in MongoDB/Firebase
- Admin panel for task assignments
- Real-time leaderboard updates

---

## 👨‍💻 Author

- Ayush Raj  
- [GitHub](https://github.com/Ayushraj15)
