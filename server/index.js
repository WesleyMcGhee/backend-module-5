const express = require("express");
const cors = require("cors");


const app = express();
let fortuneId = 5;

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const fortune = [
  'A beautiful, smart, and loving person will be coming into your life.',
  'A dubious friend may be an enemy in camouflage.',
  'A faithful friend is a strong defense.',
  'A feather in the hand is better than a bird in the air.',
  'A fresh start will put you on your way.'
]

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get('/api/fortune', (req, res) => {
  

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomCompliment = fortune[randomIndex];

  res.status(200).send(randomCompliment);
})
app.post('/api/fortune', (req, res) => {
  let { fortunes } = req.body;
  console.log(fortunes); 
  fortune.push(fortunes);
  console.log(fortune);
  res.status(200).send(fortune);
})

app.listen(4000, () => console.log("Server running on 4000"));
