// server.js
const express = require('express');
const app = express();
const newRouter = require('./src/Router/Router')
const PORT = 3000;


// Routes
app.get('/', newRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
