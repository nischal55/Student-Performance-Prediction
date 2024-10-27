const express = require('express');
const app= express();
const mongoose = require('mongoose');
const cors = require('cors')

app.use(cors())

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/studentDb')
  .then(() => console.log('Connected!'));
app.use(express.json())

//import routes
const userRoutes = require('./Routers/userRoutes');
const studentRoutes = require('./Routers/studentRoutes');
const examRoutes = require('./Routers/examRoutes');

app.use("/api/",userRoutes);
app.use("/api/",studentRoutes);
app.use("/api/",examRoutes);

  
app.listen(8000);