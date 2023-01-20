var questions = [
  {
    questionText: "Where was Kanye born?",
    choices: ["Edinburg, TX", "Atlanta, GA", "Chicago, 	IL", "McAllen, TX"],
    answer: "Atlanta, GA",
  },
  {
    questionText: "What year was Kanye born?",
    choices: ["1974", "1973", "1999", "1977"],
    answer: "1977",
  },
  {
    questionText: "Who taught Kanye to produce music?",
    choices: ["No ID", "Jay-Z", "Rick Rubin", "Prince"],
    answer: "No ID",
  },
  {
    questionText: "What's Kanyes moms name?",
    choices: ["Oprah Winfrey", "Eva Longoria", "Kim Kardashian", "Donda West"],
    answer: "Donda West",
  },
  {
    questionText: "What was Knaye's first clothing brand called?",
    choices: ["Mascotte", "Puma", "Undercover", "Through the Wire"],
    answer: "Mascotte",
  },
];
var index = 0;
var questionsArea = document.querySelector("#questions");
var timerEl = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var score = 0;
var timeLeft = 60;

//begin quiz timer
function playgame() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.innerText = "Time: " + timeLeft;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

//Displays questions
startQuiz.addEventListener("click", function () {
  playgame();
  startQuiz.classList.add("hide");
  displayQuestion();
});

function displayQuestion() {
  questionsArea.innerHTML = "";
  var text = document.createElement("h2");
  text.innerText = questions[index].questionText;
  questionsArea.appendChild(text);
  for (var i = 0; i < questions[index].choices.length; i++) {
    var button = document.createElement("button");
    button.innerText = questions[index].choices[i];
    button.addEventListener("click", checkAnswer);
    questionsArea.appendChild(button);
  }
}

function checkAnswer(event) {
  var ansText = event.target.textContent;
  console.log(ansText);
  if (ansText === questions[index].answer) {
    score = score + 100;
    console.log(score);
    index++;
    if (questions[index]) {
      displayQuestion();
    } else {
      alert("You Win! Score: " + score);
      storeScore();
    }
  } else {
    timeLeft -= 10;
    console.log(score);
    index++;
    displayQuestion();
  }
}
