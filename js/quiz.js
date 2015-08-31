
function print(message) {
  document.write(message);
}

var questions = [
  ['What is the capital of Texas?', 'Austin'],
  ['What is the capital of NJ?', 'Trenton'],
  ['What is the capital of California?', 'Sacramento']
];

var correct = [];
var incorrect = [];

for (i = 0; i < questions.length; i++) {
  var response = prompt(questions[i][0]);
  if (response === questions[i][1]) {
    correct.push(questions[i][0]);
  } else {
    incorrect.push(questions[i][0]);
  }
};

print('You got ' + correct.length + ' question(s) right:' + correct);

print('You got ' + incorrect.length + ' question(s) wrong:' + incorrect);
