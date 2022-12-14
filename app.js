const express = require("express")
// import mongoose
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require('dotenv').config();

//import routes
const authRoutes = require('./routes/authentication')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/brand')
const productRoutes = require('./routes/product')
const dotenv = require('dotenv');
dotenv.config()
 
// app
const app = express()

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true
  }
   
  )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)

const port = process.env.PORT || 8000

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})