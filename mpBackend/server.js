const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const expressListEndpoints = require('express-list-endpoints');

// Load env
dotenv.config();

// DB
const mySqlPool = require('./config/db');

// Routes
const studentRoutes = require('./routes/studentRoutes');
const hostelRoutes = require('./routes/hostelRoutes');
const mealRoutes = require('./routes/mealRoutes');
const durationRoutes = require('./routes/durationRoutes');
const suggestionRoutes = require('./routes/suggestionRoutes'); // ✅ Plural used in mounting now

// Create app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:8000', // React dev server
  credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));

// Test Route
app.get('/hello', (req, res) => {
  res.send("👋 Hello World! Server is alive!");
});

// All API routes
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/hostel', hostelRoutes);
app.use('/api/v1/meal', mealRoutes);
app.use('/api/v1/duration', durationRoutes);
app.use('/api/v1/suggestions', suggestionRoutes); // ✅ ROUTE MOUNT FIXED

// Health Check
app.get('/test', (req, res) => {
  res.json({ message: "✅ Test route is working!" });
});

// Endpoints in table
console.log("📡 API Endpoints:");
console.table(expressListEndpoints(app));

// PORT
const PORT = process.env.PORT || 8000;

// Start Server
mySqlPool.query('SELECT 1')
  .then(() => {
    console.log('✅ MySQL DB Connected'.bgWhite.black);
    app.listen(PORT, () => {
      console.log(`🚀 Server running at PORT ${PORT}`.bgBlue.black);
    });
  })
  .catch(err => {
    console.error('❌ MySQL Connection Failed:', err);
  });
