const mongoose = require('mongoose');
require('dotenv').config();


// Load MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB..'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit with failure
  });

const db = mongoose.connection;
module.exports = db;
