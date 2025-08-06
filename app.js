const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('🚀 Server is working! Use /api/users');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
