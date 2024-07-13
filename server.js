const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const port = 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/depression', require('./routes/depression'));
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
