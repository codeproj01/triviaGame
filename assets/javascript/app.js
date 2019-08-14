// Array of objects with the questions, possible answers, and the correct answer
const questionBank =
[
  {
    question: "Muhammad Ali was born Cassius Marcellus Clay, Jr. on January 17, 1942 in which U.S. city?",
    answers: ["Louisville, Kentucky", "Lexington, Kentucky", "Memphis, Tennessee"],
    correct: "Louisville, Kentucky"
  },
  {
    question: "When Muhammad Ali finally retired from boxing in 1981 what was his won-lost record?",
    answers: ["55-6", "62-7", "56-5"],
    correct: "56-5"
  },
  {
    question: "Who did Muhammad Ali fight in the 'Rumble in the Jungle'?",
    answers: ["George Foreman", "Joe Frazier", "Sony Liston"],
    correct: "George Foreman"
  },
  {
    question:"Muhammad Ali won a gold medal at the 1960 Olympics. In which city were the games held that year?",
    answers: ["Rome", "Melbourne", "Mexico City"],
    correct: "Rome"
  },
  {
    question: "Against which boxer did Muhammad Ali first use his 'Rope-a-Dope' strategy?",
    answers: ["George Foreman", "Floyd Patterson", "Ernie Terrell"],
    correct: "George Foreman"
  },
  {
    question: "Who did Muhammad Ali first face after his exile from boxing?",
    answers: ["Joe Bugner", "Jerry Quarry", "Joe Frazier"],
    correct: "Jerry Quarry"
  },
  {
    question: "For how long was Muhammad Ali out of boxing because his license was suspended?",
    answers: ["Two and a half years", "Three and a half years", "Two years"],
    correct: "Three and a half years"
  },
  {
    question: "How many times did Muhammad Ali win the Heavy weight boxing championship belt?",
    answers: ["Once", "Twice", "Three Times"],
    correct: "Three Times"
  },
  {
    question: "In what round did Muhammad Ali knock out George Foreman when they fought in 1974?",
    answers: ["3rd", "6th", "8th"],
    correct: "8th"
  },
  {
    question: "What was the subject of the 1997 documentary 'When We Were Kings'?",
    answers: ["Ali's triumph at the Olympics", "The Rumble in the Jungle", "The Thrilla in Manila"],
    correct: "The Rumble in the Jungle"
  },
  {
    question: "Which champion did Muhammad Ali defeat to win his first world title?",
    answers: ["Sony Liston", "Joe Frazier", "George Foreman"],
    correct: "Sony Liston"
  },
  {
    question: "Muhammad Ali refused to be inducted into the Army in what year?",
    answers: ["1960", "1964", "1967"],
    correct: "1967"
  },
  {
    question: "What is Muhammad Ali's original birth name?",
    answers: [ "Joe E. Clay", "Rudolph Derek Jackson", "Cassius Marcellus Clay"],
    correct: "Cassius Marcellus Clay"
  },
  {
    question: "Muhammad Ali sufferred from which of the following illnesses?",
    answers: ["Dementia Praecox", "Parkinson's Syndrome", "Alzheimer's Disease"],
    correct: "Parkinson's Syndrome"
  },
  {
    question: "Muhammad Ali was married 4 times. Which of the following was not one of his wives?",
    answers: ["Belinda Ali", "Sonji Ali", "Laila Ali"],
    correct: "Laila Ali"
  }
]

document.addEventListener("DOMContentLoaded", function(event) { 

// Start the game when user clicks on Start button
  document.getElementById("start-button").addEventListener("click", gameState.startTimer);

});

// Define the object with function namespaces, and information about the state of game play
let gameState = {

  	// set the timer at 120 seconds, and count down by 1 second
  	timeRemaining : 120,

  	// start the timer, hide the start page, show the questions
  	startTimer: function() {
    	document.getElementById("timer").innerText = ("Time remaining: " + gameState.timeRemaining);
    	setInterval(gameState.countdown, 1000);
    	document.getElementById("start-page").style.display = 'none';
    	trivia.displayQuestions();
  	},

  	// decrement the timer and update the UI; stop timer at 0
  	countdown: function() {
    	gameState.timeRemaining--;
	document.getElementById("timer").innerText = ("Time remaining: " + gameState.timeRemaining);
	if (gameState.timeRemaining === 0) {
      	gameState.stopTimer();
     	document.getElementById("timer").value = "";
    	}
},

// stop the timer and check the answers
stopTimer: function() {
    clearInterval();
    trivia.checkAnswers();
  },

// Function to hide the questions and display the End Page with final scores.
   showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
   document.getElementById("end-page").style.display = 'block';
   document.getElementById("questions-box").innerText = "";
   document.getElementById("timer").innerText = "";
   document.getElementById("timer").style.display = 'none';
   document.getElementById("correct-answers").innerText = ("Correct answers: " + numCorrect);
   document.getElementById("incorrect-answers").innerText = ("Incorrect answers: " + numIncorrect);
   document.getElementById("unanswered").innerText = ("Skipped questions: " + numUnanswered);
  }
}
// 
// functions to handle the building questions page and scoring
let trivia = {

  // pull questions from the array of questions, loop through them, and append to UI
  displayQuestions: function() {
  // Getting my Elemement as a jQuery element for simplicity.
    let divContainer = $("#questions-box");
	let answerGroup = document.getElementById("form-check");
    divContainer.append('<h2>Answer the following questions:</h2>');
//
// Display questions using a for loop to iterate through the array.
           
    for (let i = 0; i < questionBank.length; i++) {

      divContainer.append('<div id="question">' + questionBank[i].question + '</div>');

      let answer1 = questionBank[i].answers[0];
      let answer2 = questionBank[i].answers[1];
      let answer3 = questionBank[i].answers[2];

// Using Bootstrap to render multiple checkboxes inline.

      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
    }

    // Add a Done button to the end of the page and register its click handler
    // Using Bootstrap to render button inline. (primary default color is blue.)
    let doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
    divContainer.append(doneButton);
    document.getElementById("done-button").addEventListener("click", gameState.stopTimer);

  },

  // test if the user answers are correct, incorrect, or if they skipped questions
  checkAnswers: function() {
    let correctAnswer;
    let userAnswer;
    let numCorrect = 0;
    let numIncorrect = 0;
    let numUnanswered = 0;

    // loop through Array to compare the text of the label with the user answers,
    // increment score counts appropriately
    for (let i = 0; i < questionBank.length; i++) {
      correctAnswer = questionBank[i].correct;

      // Get text from user selected answers. Using jQuery for simplicity
      userAnswer = $('input[id=radio'+i+']:checked + label').text();
    
      // ===================================================================
      //userAnswer = document.getElementsByTagName('input');
      //var value;
      //for (var j = 0; j < userAnswer.length; j++) {
      //    if (userAnswer[j].type === 'radio' && userAnswer[j].checked) {
      //        // get value, set checked flag or do whatever you need to
       //       value = userAnswer[j].value;       
      //    }
      //}
      // ===================================================================
      if (userAnswer === correctAnswer) {
        numCorrect++;
      } else if (userAnswer === "") {
        numUnanswered++;
      } else if (userAnswer !== correctAnswer) {
        {
          numIncorrect++;
        }
      }
    }


    // show the end page with the score tally
    gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
  },
}

//Fuction to use button to refresh page.
function refreshPage(){
    window.location.reload(true);
}

