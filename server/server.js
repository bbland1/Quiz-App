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

// schema for the admin to check the suggestions added and then add or remove questions to the quiz
const userSchema = mongoose.Schema({
  email: String,
  password: String,
})

// the suggestions breakdown
const suggestionsSchema = mongoose.Schema({
  title: String,
  imageUrl: String,
  demographic: String,
})

const Question = mongoose.model("Question", questionSchema);
const User = mongoose.model("User", userSchema);
const Suggestion = mongoose.model("Suggestion", suggestionSchema);

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