const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const userData = {
  name: 'Ayush Raj',
  referralCode: 'ayush2025',
  totalDonations: 12500
};

const leaderboard = [
  { name: 'Ayush Raj', donations: 12500 },
  { name: 'Sara Singh', donations: 10500 },
  { name: 'Rahul Mehta', donations: 9800 }
];

app.get('/api/user', (req, res) => {
  res.json(userData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
