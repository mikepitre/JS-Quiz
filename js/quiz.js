
function print(message) {
  document.write(message);
}

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

for (i = 0; i < questions.length; i++) {
  var response = prompt(questions[i][0]);
  if (response === questions[i][1]) {
    correct += 1;
  }
};



print('You got ' + correct + ' question(s) right.');
