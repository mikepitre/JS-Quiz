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

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i+= 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if (response === answer) {
    correct += 1;
  }
};

html = 'You got ' + correct + ' question(s) right.';
print(html);
