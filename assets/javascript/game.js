//TRIVIA MADNESS

//Global Variables
var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15],
    correctChoice: 2
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 18],
    correctAnswer: 3
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134],
    correctChoice: 0
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7],
    correctChoice: 3
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 64],
    correctChoice: 3
  }];

correctAnswers = 0;
incorrectAnswers = 0;
secondsLeft = 0;
gameOver = true;
    //counter for question turns
questionNumber = 0;

//Essential Functions

    //Function to set a Question timer
// setTimeout();

    //Function to set an invisible "wait a few seconds" timer

    //Function to clear the "last page" jQuery .empty()

    //Function to display questions and buttons
    function displayButtons() {

    for (i=0; i < questions[questionNumber].choices.length; i++){
        var newButton = $("<button>");
        var newDiv = $("<div>")
        newButton.text(questions[questionNumber].choices[i]);
        newButton.attr("value", i);
        newDiv.append(newButton);
        $(".container").append(newDiv);
    }
};
displayButtons();

    //Function to display right/wrong answer page 


//Running the game

    //Function to initialize game
        //set gameOver to false

    //Function to show question and create buttons for answers
        //Clear Divs from last Screen
        //Create a Div and Display Question
        //Create a Div and 4 buttons


    //Function to show right/wrong answer result
        //Clear Divs from Last Screen
        //Display "You are Right" or "You are a Looooser"

    //Function to show End Game result






