// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle HTTP GET requests to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, Supasun!');
});

// Set the server to listen on port 80
const port = 80;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
