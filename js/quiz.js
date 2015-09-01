var questions = [
  {
    question: 'What is the capital of Texas?',
    answer: 'Austin'
  },
  {
    question: 'What is the capital of NJ?',
    answer: 'Trenton'
  },
  {
    question: 'What is the capital of California?',
    answer: 'Sacramento'
  }
];

var correct = 0;
var question;
var answer;
var response;
var html;
var correctQuestions = [];
var wrongQuestions = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';
  };
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i+= 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  if (response === answer) {
    correct += 1;
    correctQuestions.push(question);
  } else {
    wrongQuestions.push(question);
  }
};

html = 'You got ' + correct + ' question(s) right.';
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctQuestions);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrongQuestions);
print(html);
