// require modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// middleware set up
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_DB)

const questionSchema = mongoose.Schema({
  question: String,
  summary: String,
  image: String,
})


app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});