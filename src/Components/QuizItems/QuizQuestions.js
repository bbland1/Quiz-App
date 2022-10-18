const questions = [
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/lovesickellie.png",
    questionText: "What is a Shoujo?",
    question_description: "Starting off with simple with what should be a simple question.",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "Any romance series set in high school.", isCorrect: false },
      { id: "B", answerText: "Stories with female main characters.", isCorrect: false },
      { id: "C", answerText: "Series typically marketed to young girls.", isCorrect: true },
      { id: "D", answerText: "Any series a girl would like.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/horimiya.jpg",
    question_description: "Synopsis: A secret life is the one thing they have in common. At school, Hori is a prim and perfect social butterfly, but the truth is she's a brash homebody. Meanwhile, under a gloomy facade, Miyamura hides a gentle heart, along with piercings and tattoos. In a chance meeting, they both reveal a side they've never shown. Could this blossom into something new? (Source: Funimation)",
    questionText: "Is Horimiya a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false },
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/princessknight.jpg",
    question_description: "Synopsis: Taking place in a medieval fairy-tale setting, Princess Knight is the story of young Princess Sapphire who must pretend to be a male prince so she can inherit the throne (as women are not eligible to do so). This deception begins as soon as she is born, as her father the King announces his baby is a boy instead of a girl. The reason for this is that the next-in-line to the throne, Duke Duralumon, is an evil man who would repress the people if he were to become king, and because of this the King will go to any length to prevent him from taking over.(Source: Wikipedia)",
    questionText: "Is Princess Knight a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/queensquality.png",
    question_description: "Synopsis: Fumi Nishioka is an apprentice 'Sweeper', a person who cleanses negative emotions from human hearts, who works together with fellow Sweeper Kyuutarou Horikita and his family. Before meeting them, she was homeless, and everywhere she went, people treated her like she was cursed. But the Horikitas—especially Kyuutarou—changed that, and gave her a place where she truly belongs.However, as the Horikitas are shocked to realize, a great yet terrible power lies dormant within Fumi's body, which can be used either for good or evil. Can Fumi control it, or will it end up controlling her? (Source: Written by MAL Rewrite)",
    questionText: "Is Queen's Quality a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/yourlieinapril.png",
    question_description: "Synopsis: At a very young age, Kousei Arima was strictly taught how to play the piano and meticulously follow the score by his mother, to the point where he dominated every competition he entered with ease. He earned the title of 'Human Metronome' for performing almost perfectly. Every musician of his age looked up to him. However, after his mother suddenly dies, he became tone-deaf due to the shock and then disappeared, never to be seen onstage since.Two years later, Kousei lives a monotonous life with his childhood friends Tsubaki Sawabe and Ryouta Watari supporting him. He continues to cling to music, although performing is still an impossibility for him. This is until his unexpected encounter with Kaori Miyazono, a violinist who performs freely without the dictations of a score. A story of friendship, love, music, and a single lie, Kousei's life begins to change and gain color as Kaori helps him to take up music again. (Source: Written by MAL Rewrite)",
    questionText: "Is Your Lie in April  a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/weatherwithyou.jpg",
    question_description: "Synopsis: The summer of freshman year of high school. A boy named Hodaka runs away from his island home and goes to Tokyo, where he spends every day in loneliness. Then, in a corner of the bustling city, he meets a girl named Hina. But he soon finds out that she possesses a mysterious power.(Source: Vertical Inc.)",
    questionText: "Is Weather With You a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: true }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/asignofaffection.png",
    question_description: "Synopsis: Yuki is a typical college student, whose world revolves around her friends, social media, and the latest sales. But when a chance encounter on a train leads to her meeting friend-of-a-friend and fellow student Itsuomi-san, her world starts to widen. But even though Itsuomi-kun can speak three languages, sign language isn't one of them. Can the two learn to communicate the budding feelings between them? (Source: Kodansha USA)",
    questionText: "Is A Sign of Affection a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/requiemoftheroseking.jpg",
    question_description: "Synopsis: The crown of England has been hotly contested throughout history, and in the Middle Ages, a series of great civil wars becomes known as the War of the Roses. Claiming a right to the throne, the Duke of York seeks to unseat King Henry VI and his heir in order to become king himself.On a dark day filled with many ill omens, the Duke gains a son: Richard Plantagenet, third of his name. Neither male nor female, but instead possessing characteristics of both sexes, Richard III is immediately reviled by his mother. Her hatred defines his childhood, leading to a deep disgust toward his own body and an adverse reaction to being called a demon.Richard grows up troubled by visions of England's former foe, Joan of Arc, who taunts that he will bring ruin to all who know him. He believes that he can attain salvation by helping his father achieve his destiny of becoming the king. However, cursed by the expectations of both his mother and Joan, will Richard's actions instead drag his family down into darkness? (Source: Written by MAL Rewrite)",
    questionText: "Is Requiem of the Rose King a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/blackbutler.jpg",
    question_description: "Synopsis: Tucked away in the English countryside lies the ominous manor of the Phantomhives, a family which has established itself as the cold and ruthless 'Queen's Watchdog' as well as the head of London's criminal underground. After a tragedy leaves the Earl and his wife dead, many are shocked when their son, a young boy named Ciel, claims his place as the new Earl of the Phantomhive house. At first, many perceive him only as a child surrounded by a few eccentric servants. But they soon begin to realize that it is foolish to meddle with Ciel and his demonic butler Sebastian. Taking place at the end of the 19th century, Kuroshitsuji follows these two as they face countless mysteries and dangers that plague England and threaten the Queen, uncovering the truth about what really happened to Ciel's parents in the process. (Source: Written by MAL Rewrite)",
    questionText: "Is Black Butler a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/aconditioncalledlove.jpg",
    question_description: "Synopsis: Hotaru is a 16-year-old high school first-year who has always been ambivalent about love, preferring instead to have a lively life with her family and friends. So when she sees her schoolmate, Hananoi-kun, sitting in the snow after a messy, public breakup, she thinks nothing of offering to share her umbrella. But when he asks her out in the middle of her classroom the next day, she can't help but feel that her life is about to change in a big way... (Source: Kodansha USA)",
    questionText: "Is A Condition Called Love a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/monthlygirlsnozakikun.jpg",
    question_description: "Synopsis: The boy of her dreams...is a girl's manga artist?! To the eyes of high school student Chiyo Sakura, classmate Umetarou Nozaki--brawny of build and brusque of tongue--is a dreamboat! When Chiyo finally works up the courage to tell Nozaki how she feels about him, she knows rejection is on the table...but getting recruited as a manga-ka's assistant?! Never in a million years! But for someone who makes a living drawing sweet girly romances, Nozaki-kun is a little slow on the uptake when it comes to matters of the heart in reality. And so Chiyo's daily life of manga making and heartache begins! (Source: Yen Press)",
    questionText: "Is Monthly Girls' Nozaki-kun a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: true },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/donotsaymystery.jpg",
    question_description: "Synopsis: Totonou is a young man who stands out-partly for his bushy hair, partly for his finely honed abilities of observation and deduction. When Totonou is accused of murder, he puts his skills to work delving into the lives of the cops investigating him and uses his insights to find the real murderer. After clearing his name, all Totonou wants to do is return to his laidback, mundane life, but he can't help but be drawn into one mystery after another. In his own blunt but gentle way, Totonou is just trying to make sense of a chaotic world.(Source: Seven Seas Entertainment)",
    questionText: "Is Do Not Say Mystery a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: true },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/trinityblood.jpg",
    question_description: "Synopsis: In a dark and distant future, Armageddon has given rise to the fabled Second Moon - and a perpetual war between the vampires and the humans! Esther is a nun in the city of Istavan. When she crosses paths with Abel Nightroad, a priest sent from the Vatican to combat the local order of vampires, the two form a holy alliance to battle the most evil of threats. In this gorgeous, gothic-action series - part of the super-popular Trinity Blood franchise - the very survival of the human race is at stake! (Source: Viz Media)",
    questionText: "Is Trinity Blood a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/adekan.png",
    question_description: "Synopsis: Shiro, a laid-back and absentmindedly seductive umbrella craftsman, is (surprisingly) a close friend of Koujirou, a hot-blooded young police officer who stands against all things undisciplined. With their mutual knack for attracting trouble, the pair soon find themselves involved in a bloody and erotic thrill-ride in their off-kilter town full of equally off-kilter people. This action-packed, jack-of-all-trades manga will have you swooning at its sexiness and leave you more addicted than opium—guaranteed! (Source: Anilist)",
    questionText: "Is Adekan a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/laughingundertheclouds.png",
    question_description: "Synopsis: In the eleventh year of the Meiji era carrying swords was forbidden by the government and those known as samurai were slowly fading away. However there were plenty that didn't like those changes taking place in Japan and inevitably the crime rates increased. Japan's only resolve was an inescapable lake prison. While the prison had no other way to access it but only through water, the 3 boys of the Kumo family were assigned to transport the criminals to their new 'home'. Although... is that the only thing they were doing...(Source: Anilist)",
    questionText: "Is Laughing Under the Clouds a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/replica.jpg",
    question_description: "Synopsis: Manji has an unfortunate reputation as the fearsome bodyguard Red Dog who indiscriminately kills people, including his own employers. Although all his actions belie good intentions, he is unable to find work in most towns. One day, idle and bored, he meets Karu—a strange boy who falls from the sky and lands on top of him. Karu tells Manji to be wary of Toys, a type of doll that moves autonomously. When the two come under attack, Karu is surprised by both Manji's skill in cutting down Toys with a katana and his reckless disregard for his own life. Manji is seriously injured after the fight, but Karu exhibits an ability to transfer the wounds to himself—forming a pact between the two. As Karu's pact holder, Manji receives a tentative welcome into the organization called Cards. Its ultimate goal is to find Alice, the Toy-making factory from which the insane inventor AAA unleashes his murderous creations upon the world. What shocking secrets will Manji uncover as he joins Cards in the battle against AAA? (Source: Written by MAL Rewrite)",
    questionText: "Is Replica a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: true },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: false }
    ]
  },
  {
    img_alt: "A blushing girl holding her phone looking to the right at a blushing boy with a heart drawn between them.",
    question_img: "images/asidecharacterslovestory.jpg",
    question_description: "Synopsis: Growing up, Nobuko Tanaka was always a 'side character' standing off in the corner. Now in her 20s, she's fallen in love for the first time. While she isn't any good at being assertive, she will muster her courage bit by bit as she tries her best to close the distance between herself and her crush - because even side characters fall in love. If you're tired of the same old romantic protagonists, this modest, refreshing love story is for you. (Source: Book Walker Global)",
    questionText: "Is A Side Character's Love Story a Shoujo?",
    questionValue: 1,
    answersOptions: [
      { id: "A", answerText: "It's a Shoujo.", isCorrect: false },
      { id: "B", answerText: "It's a Shounen.", isCorrect: false },
      { id: "C", answerText: "It's a Josei.", isCorrect: false },
      { id: "D", answerText: "It's a Seinin.", isCorrect: true }
    ]
  },
]

export default questions;