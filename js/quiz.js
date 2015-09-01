var questions = [
  ['What is the capital of Texas?', 'Austin'],
  ['What is the capital of NJ?', 'Trenton'],
  ['What is the capital of California?', 'Sacramento']
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
  question = questions[i][0];
  answer = questions[i][1];
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
