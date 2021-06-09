//Importing dependencies
var readlineSync = require('readline-sync');
var chalk = require('chalk');

//Question List Level: 1
var queslist1 = [
  question1 = {
  question: 'What is the capital of Maharastra? ',
  answer: 'mumbai',
  option: ['mumbai', 'bengaluru', 'pune']
},
question2 = {
  question: 'What is the capital of Karnataka? ',
  answer: 'bengaluru',
  option: ['hyderabad', 'bengaluru', 'mysore']
},
question3 = {
  question: 'What is the capital of Uttar Pradesh? ',
  answer: 'lucknow',
  option: ['patna', 'varanasi', 'lucknow']
},
question4 = {
  question: 'What is the capital of Punjab? ',
  answer: 'chandigarh',
  option: ['amritsar', 'jabalpur', 'chandigarh']
},
question5 = {
  question: 'What is the capital of Assam? ',
  answer: 'dispur',
  option: ['dispur', 'guhawati', 'darjeeling']
}
];

//Question List Level: 2
var queslist2 = [
  question6 = {
  question: 'What is the capital of India? ',
  answer: 'new delhi',
  option: ['mumbai', 'new delhi', 'kolkata']
},
question7 = {
  question: 'What is the capital of USA? ',
  answer: 'washington dc',
  option: ['new york', 'san francisco', 'washington dc']
},
question3 = {
  question: 'What is the capital of russia? ',
  answer: 'moscow',
  option: ['moscow', 'saint petersburg', 'kyiv']
},
question4 = {
  question: 'What is the capital of australia? ',
  answer: 'canberra',
  option: ['melbourne', 'sydney', 'canberra']
},
question5 = {
  question: 'What is the capital of France? ',
  answer: 'paris',
  option: ['madrid', 'paris', 'rome']
}
];

//highScores List
var highScores = [{name: 'Siddhartha', score:10}, {name:'Shreya', score:9}];

var score=0;

//userName input and Welcome message
var userName = readlineSync.question("What is you name? ");
console.log('------------------');
console.log(chalk.yellow.bold('Hey, '+ userName+'!'));
console.log(chalk.bold('Welcome to ATLAS QUIZ!'));
console.log('------------------');
console.log(chalk.yellow.bold("This is Level 1"));
console.log('------------------');

//Asking question, validating answer, updating score
for(var i=0; i<queslist1.length; i++){
  var index = readlineSync.keyInSelect(queslist1[i].option, queslist1[i].question);
  if(queslist1[i].option[index] === queslist1[i].answer){
    console.log(chalk.green('right!'));
    score++;
  }
  else{
    console.log(chalk.red('wrong!'));
  }

  console.log('Your Score:',score);
  console.log('------------------');
}

//Validating user for level 2
if(score === 5){
  console.log(chalk.yellow.bold("Kudos "+userName+", You have qualified for Level 2!"));
  console.log('------------------');

//Asking question, validating answer, updating score(level 2)
for(var i=0; i<queslist2.length; i++){
  var index = readlineSync.keyInSelect(queslist2[i].option, queslist2[i].question);
  if(queslist2[i].option[index] === queslist2[i].answer){
    console.log(chalk.green('right!'));
    score++;
  }
  else{
    console.log(chalk.red('wrong!'));
  }

  console.log('Your Score:',score);
  console.log('------------------');
}
}

//Display user's final score
console.log(chalk.bold('Your Final Score', score));
console.log();

//Update highScores
for(var i=0; i<highScores.length; i++){
  if(score >= highScores[i].score){
    console.log(chalk.green('Your are in the one of the high scorers!'));
    console.log(chalk.green('PS: Send me a screenshot :P'));
    highScores[i].name = userName;
    highScores[i].score = score;
    break;
  }
  else{
    console.log(chalk.red("You did not make it to the high scorer's list"));
  }
  
}

//Display alltime highScores
console.log();
console.log('------------------');
console.log("High Scores");
for(var i=0; i<highScores.length; i++){
  console.log(i+1+'.'+highScores[i].name+': '+highScores[i].score);
}
console.log('------------------');


