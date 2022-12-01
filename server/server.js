// require modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// middleware set up
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// setting up the mongodb connection through mongoose
mongoose
  .connect(process.env.MONGO_DB)
  // check if connecting to the db goes well
  .then(() => { console.log("Connected to database") })
  .catch(err => { console.log("Issue connecting to database", err) })

// the schema for the quiz question, for format in the database 
const questionSchema = mongoose.Schema({
  imageUrl: String,
  title: String,
  synopsis: String,
  questionValue: Number,
  answersOptions: [
    { id: String, answerText: String, isCorrect: Boolean },
    { id: String, answerText: String, isCorrect: Boolean },
    { id: String, answerText: String, isCorrect: Boolean },
    { id: String, answerText: String, isCorrect: Boolean }
  ],
  addedToQuiz: Boolean,
});

const Question = mongoose.model("Question", questionSchema);

app.get("/", async (req, res) => {
  Question.find({}, (err, foundQuestions) => {
    if (err) {
      console.log(err);
    } else {
      if (foundQuestions) {
        res.json(foundQuestions)
      }
    }
  })
});

// app.get("/login")


app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});