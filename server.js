const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Main API endpoint: /api/:date?
app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;
  
  // If no date parameter provided, return current time
  if (!dateParam) {
    const now = new Date();
    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString()
    });
  }
  
  let date;
  
  // Check if the input is a Unix timestamp (all digits)
  if (/^\d+$/.test(dateParam)) {
    // Convert string to number and create date
    const timestamp = parseInt(dateParam);
    date = new Date(timestamp);
  } else {
    // Try to parse as date string
    date = new Date(dateParam);
  }
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }
  
  // Return the formatted result
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Handle the /api/ endpoint (empty date parameter)
app.get('/api/', (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Timestamp Microservice running on port ${PORT}`);
  console.log(`📡 API available at: http://localhost:${PORT}/api/`);
});
