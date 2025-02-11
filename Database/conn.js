const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = process.env.mongoDbConnnectionString
console.log('mongoURI', mongoURI)
// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
