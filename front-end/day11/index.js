function Quiz(questionList) {
  this.questionNo = 0;
  this.questions = questionList;
  this.score = 0;
}

Quiz.prototype.nextQuestion = function () {
  return this.questions[this.questionNo];
};

Quiz.prototype.checkAnswer = function (ans) {
  if (this.nextQuestion().isCorrectAnswer(ans)) {
    this.score++;
  }
  this.questionNo++;
};

function Question(statement, options, answer) {
  this.quesStatement = statement;
  this.answerOptions = options;
  this.correctAns = answer;
}

Question.prototype.isCorrectAnswer = function (ans) {
  return ans === this.correctAns;
};

let questions = [
  new Question(
    "Who created javascript?",
    ["Mark Rufflo", "Brendan Eich", "David Jones", "Dennis Richie"],
    "Brendan Eich"
  ),
  new Question(
    "Inside which HTML element do we put the JavaScript?",
    ["<javascript>", "<link>", "<script>", "<js>"],
    "<script>"
  ),
  new Question(
    "How can you add a comment in a JavaScript?",
    ["//comment", "--comment", "<!--comment>", "none of these"],
    "//comment"
  ),
  new Question(
    "Which event occurs when the user clicks on an HTML element?",
    ["onmouseclick", "onchange", "onclick", "ontouch"],
    "onclick"
  ),
];

const displayScore = () => {
  let docBody = document.body;
  docBody.innerHTML = "";
  let resultEl = document.createElement("h1");
  resultEl.innerText = `You scored ${quiz.score} out of ${quiz.questions.length}`;
  docBody.appendChild(resultEl);
};

const matchAnswer = (ans) => {
  quiz.checkAnswer(ans);
  loadQuiz();
};
const loadQuiz = () => {
  if (quiz.questionNo === questions.length) {
    displayScore();
  } else {
    const questionEl = document.querySelector(".question");
    questionEl.innerText = quiz.nextQuestion().quesStatement;
    const options = quiz.nextQuestion().answerOptions;
    const optionElements = document.getElementsByClassName("option");
    for (let index in options) {
      optionElements[index].innerText = options[index];
      optionElements[index].onclick = () => {
        matchAnswer(options[index]);
      };
    }
    const footerEl = document.querySelector(".current-page");
    footerEl.innerText = `Question ${quiz.questionNo + 1} of ${
      quiz.questions.length
    }`;
  }
};
const quiz = new Quiz(questions);

loadQuiz();
