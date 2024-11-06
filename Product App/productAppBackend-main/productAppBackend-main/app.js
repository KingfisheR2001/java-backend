const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const routes = require('./routes');
const cors = require('cors')


// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Parse JSON request bodies
app.use(express.json());

// Apply authMiddleware to all routes starting with /api
app.use(routes);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});