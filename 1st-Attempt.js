const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the International Space Station (ISS)? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = []; 


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please provide your name ");
};

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
    console.log(`${i+1}) `);
    candidateAnswers.push(input.question(questions[i]));
    console.log(`Your answer: ${candidateAnswers[i]}  \nCorrect Answer: ${correctAnswers[i]}\n`);
    
  } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  candidateAnswers = candidateAnswers.join(',').toLowerCase().split(',');
  correctAnswers = correctAnswers.join(',').toLowerCase().split(',');
  for (let j=0; j<candidateAnswers.length; j++){
    if (candidateAnswers[j] === correctAnswers[j]){
      grade+=1;
    } else {
      grade +=0;
    }
  } 
  grade = grade / 5 * 100; 
  console.log(`>>> Overall Grade: ${grade}% (${grade/100*5} of 5 responses correct) <<<`);
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`); 
  } else {
    console.log(`>>> Status: FAILED <<<`);
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Candidate Name: ' + candidateName + '\n');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}
