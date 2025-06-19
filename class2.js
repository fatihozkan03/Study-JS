let student1Name = "Ada Bilgi";
let student1BirthYear = 2012;
let student1MathScore1 = 70;
let student1MathScore2 = 70;
let student1MathScore3 = 70;

let student2Name = "Yiğit Bilgi";
let student2BirthYear = 2010;
let student2MathScore1 = 40;
let student2MathScore2 = 40;
let student2MathScore3 = 50;

let student1ScoreAvarage = (student1MathScore1 + student1MathScore2 + student1MathScore3) / 3;
let student2ScoreAvarage = (student2MathScore1 + student2MathScore2 + student2MathScore3) / 3;

let isStudent1Successful = student1ScoreAvarage >= 50;
let isStudent2Successful = student2ScoreAvarage >= 50;

console.log("Student 1 Age: " + (new Date().getFullYear() - student1BirthYear));
console.log("Student 2 Age: " + (new Date().getFullYear() - student2BirthYear));

console.log("Student 1 Success: " + isStudent1Successful);
console.log("Student 2 Success: " + isStudent2Successful);
