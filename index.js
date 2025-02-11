const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
require("./Database/conn")
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get('/apitesting', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
