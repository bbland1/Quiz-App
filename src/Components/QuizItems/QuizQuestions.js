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
    question_img: "images/horimiya.jpg",
    question_description: "Synopsis: A secret life is the one thing they have in common. At school, Hori is a prim and perfect social butterfly, but the truth is she's a brash homebody. Meanwhile, under a gloomy facade, Miyamura hides a gentle heart, along with piercings and tattoos. In a chance meeting, they both reveal a side they've never shown. Could this blossom into something new? (Source: Funimation)",
    questionText: "Is Horimiya a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false },
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: Taking place in a medieval fairy-tale setting, Princess Knight is the story of young Princess Sapphire who must pretend to be a male prince so she can inherit the throne (as women are not eligible to do so). This deception begins as soon as she is born, as her father the King announces his baby is a boy instead of a girl. The reason for this is that the next-in-line to the throne, Duke Duralumon, is an evil man who would repress the people if he were to become king, and because of this the King will go to any length to prevent him from taking over.(Source: Wikipedia)",
    questionText: "Is Princess Knight a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/queensquality.jpg",
    question_description: "Synopsis: Fumi Nishioka is an apprentice 'Sweeper', a person who cleanses negative emotions from human hearts, who works together with fellow Sweeper Kyuutarou Horikita and his family. Before meeting them, she was homeless, and everywhere she went, people treated her like she was cursed. But the Horikitas—especially Kyuutarou—changed that, and gave her a place where she truly belongs.However, as the Horikitas are shocked to realize, a great yet terrible power lies dormant within Fumi's body, which can be used either for good or evil. Can Fumi control it, or will it end up controlling her? (Source: Written by MAL Rewrite)",
    questionText: "Is Queen's Quality a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/t.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    question_img: "images/.jpg",
    question_description: "Synopsis: ",
    questionText: "Is  a Shoujo?",
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
]

export default questions;