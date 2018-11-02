//TRIVIA MADNESS

//Global Variables
var questions = [{
    question: "What is my name?",
    choices: ["Zack", "Josh", "Scooby-Dooby-Doo", "Sarah"],
    correctChoice: "Zack"
  }, {
    question: "Where are you",
    choices: ["Cincinnati", "Chicago", "Washington D.C.", "Evergreen"],
    correctChoice: "Chicago"
  }, {
    question: "What is....your favorite color?",
    choices: ["Purple", "Yellow", "Red...I mean Blue!", "Aqua"],
    correctChoice: "Red...I mean Blue!"
  }
];

var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;
var countDownTimer = 10;
// var gameOver = true;
var questionNumber = 0;  //counter for question turns
var userGuess = ""
var userCorrect = true;
var intervalId;

//Essential Functions

    //Function to set a Question timer

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };

function stopTimer() {
    clearInterval(intervalId);
  };

function decrement() {

    countDownTimer--;

    $("#timer").html("<h3>" + countDownTimer + "</h3>");
    if (countDownTimer === 0) {
      stopTimer();
      unansweredScore++;
      displayResult();
    }
  };

    //Function to display questions and buttons
function displayQuestion() {
    $("#question-div").empty();
    countDownTimer = 10;
    $("#timer").html("<h3>" + countDownTimer + "</h3>");
    runTimer();

    var newDiv = $("<div>")
    newDiv.append(`<p>${questions[questionNumber].question}</p>`);
    $("#question-div").append(newDiv);

    for (i=0; i < questions[questionNumber].choices.length; i++){
        var newButton = $("<button>");
        var newDiv = $("<div>")
        newButton.text(questions[questionNumber].choices[i]);
        newButton.attr("value", questions[questionNumber].choices[i]);
        newButton.attr("class", "choice-button");
        newDiv.append(newButton);
        $("#question-div").append(newDiv);
    }
};


    //Function that reacts to user button presses
function choicePress() {

    userGuess = $(this).val();
    console.log("userGuess: " + userGuess);
    stopTimer();

    if (userGuess === questions[questionNumber].correctChoice){
        console.log("That's Right!");
        userCorrect = true;
        correctScore++;
        displayResult();

    } else {
        console.log("That's Wrrrong!")
        userCorrect = false;
        incorrectScore++;
        displayResult();
    };


};

    //Function to display right/wrong answer page 
function displayResult(){

    $("#question-div").empty();

    if (countDownTimer === 0){
        $("#question-div").append(`<h2>You ran out of Time!!!</h2>`);
        $("#question-div").append(`<p>The correct answer was ${questions[questionNumber].correctChoice}</p>`);
        delayDisplay();
    } else if (userCorrect === true){
        $("#question-div").append(`<h2>You Got It!</h2>`);
        //display picture
        delayDisplay();
    } else {
        $("#question-div").append(`<h2>LOOOOSER!!!</h2>`);
        $("#question-div").append(`<p>The correct answer was ${questions[questionNumber].correctChoice}</p>`);
        delayDisplay();
    };
    
};

function delayDisplay(){
    questionNumber++;
    if (questionNumber === questions.length){
        ///delay
        ///final screen
        setTimeout(gameOver, 1000 * 5);
    } else {
        setTimeout(displayQuestion, 1000 * 5);
    };
};

function gameOver(){

    $("#question-div").empty();

    newDiv = $("<div>");
    newDiv.append("<h3>All Done! Here's your score</h3>");
    $("#question-div").append(newDiv);
    $("#question-div").append(`<p>Correct Answers: ${correctScore}</p>`);
    $("#question-div").append(`<p>Incorrect Answers: ${incorrectScore}</p>`);
    $("#question-div").append(`<p>Unanswered Answers: ${unansweredScore}</p>`);

    newButton = $("<button>");
    newButton.text("Try again?")
    newButton.attr("id", "start-button");
    $("#question-div").append(newButton);
    

};

function startGame(){
    $("#question-div").empty();
    correctScore = 0;
    incorrectScore = 0;
    unansweredScore = 0;
    questionNumber = 0;
    displayQuestion();
}

//Running the game

    //Function to initialize game
        //set gameOver to false

    

        //Clear Divs from last Screen
        //Create a Div and Display Question
        //Create a Div and 4 buttons


    //Function to show right/wrong answer result
        //Clear Divs from Last Screen
        //Display "You are Right" or "You are a Looooser"

    //Function to show End Game result

    // displayQuestion();
    $(document).on("click", ".choice-button", choicePress);
    $(document).on("click", "#start-button", startGame);






