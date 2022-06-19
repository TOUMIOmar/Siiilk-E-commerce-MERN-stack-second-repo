const express = require('express');

const app = express();
require("dotenv").config();
app.use(express.json());
const cors = require('cors');
app.use(cors('http://localhost:5000'))


//Routes
app.use('/api/person',require('./routes/personRoutes'))
app.use('/api/product',require('./routes/productRoutes'))




// connection to database
const connectDB = require("./config/connectDB");
connectDB();
// server creation
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server Listening On Port ${PORT}`)
);