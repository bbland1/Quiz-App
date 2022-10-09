const questions = [
  {
    
    questionText: "What is Shoujo?",
    answersOptions: [
      { id: "A", answerText: "Any romance series set in high school", isCorrect: false },
      { id: "B", answerText: "Stories with female main characters", isCorrect: false },
      { id: "C", answerText: "Series marketed to young girls and published in a Shoujo Magazine", isCorrect: true },
      { id: "D", answerText: "Any series a girl would like", isCorrect: false }
    ]
  },
  {
   
    questionText: "What are 3 things to look at to tell if you've picked up a shoujo?",
    answersOptions: [
      { id: "A", answerText: "The eyes, the panelling", isCorrect: false },
      { id: "B", answerText: "what's going on", isCorrect: false },
      { id: "C", answerText: "hell yeah", isCorrect: true },
      { id: "D", answerText: "idk", isCorrect: false }
    ]
  },
  {
    question_img: "images/horimiya.jpg",
    question_description: "Synopsis: A secret life is the one thing they have in common. At school, Hori is a prim and perfect social butterfly, but the truth is she's a brash homebody. Meanwhile, under a gloomy facade, Miyamura hides a gentle heart, along with piercings and tattoos. In a chance meeting, they both reveal a side they've never shown. Could this blossom into something new? (Source: Funimation)",
    questionText: "Is Horimiya a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a shoujo because it is about romance.", isCorrect: false },
      { id: "B", answerText: "It's a shounen, that is also about a romance.", isCorrect: true },
    ]
  }
]

export default questions;