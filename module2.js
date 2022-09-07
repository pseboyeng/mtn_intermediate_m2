/** @format */
const fs = require("fs");
// a) Log your information (names, institution, and Github username) into the console log with a statement that introduces you, e.g. “My name is Tsakane, a student from Xawe University of Technology and my Github username is ”

function learnerInfo(names, institution, githubUsername) {
  console.log(names, institution, githubUsername);
  console.log(
    `My name is ${names}, a student from ${institution}, and my Github username is ${githubUsername}`
  );
}

// b) Roll a dice and help predict which category will win the MTN Business App of the Year in the year 2022.

function rollDice() {
  return Math.round(Math.random() * 10 + 1);
}

const categories = [
  { category: "Best Consumer Solution", no: 1 },
  { category: "Best Enterprise Solution", no: 2 },
  { category: "Best African Solution", no: 3 },
  { category: "Most Innovative Solution", no: 4 },
  { category: "Best Gaming Solution", no: 5 },
  { category: "Best Health Solution", no: 6 },
  { category: "Best Agricultural Solution", no: 7 },
  { category: "Best Educational Solution", no: 8 },
  { category: "Best Financial Solution", no: 9 },
  { category: "Best Hackathon Solution", no: 10 },
  { category: "Best South African Solution", no: 11 },
  { category: "Best Campus Cup Solution", no: 12 },
  { category: "Huawei AppGallery", no: 13 },
];

function predictWinningCategory() {
  let randomNumber = rollDice();
  console.log(
    `Prediction of Winning category is : "${categories[randomNumber].category}"`
  );
}

//Call LearnerInfo.
const learner = learnerInfo(
  ["Peter", "Seboyeng"],
  "ItVarsity",
  "https://github.com/pseboyeng"
);

console.log();

//Call winning category prediction.
predictWinningCategory();

// c) Create, open, and read from a text file: Text content of an app that won the Best Campus Cup in 2021, its developer, category, and institution represented.
let data = `Best Campus App winner 2021 : UniWise. Developer : Students, Category : Best Campus Cup, Institution :`;
fs.writeFileSync("winner.txt", data);
console.log("file written successfully");
console.log(fs.readFileSync("winner.txt", "utf8"));
// Submission of source code through Github with an open repository
