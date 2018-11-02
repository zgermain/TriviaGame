//TRIVIA MADNESS

//Global Variables
var questions = [{
    question: "What is my name?",
    choices: ["Zack", "Josh", "Scooby-Dooby-Doo", "Sarah"],
    correctChoice: "Zack"
  }, {
    question: "Where are you",
    choices: ["Cincinnati", "Chicago", "Washington D.C.", "Evergreen"],
    correctAnswer: "Chicago"
  }, {
    question: "What is....your favorite color?",
    choices: ["Purple", "Yellow", "Red...I mean Blue!", "Aqua"],
    correctChoice: "Red...I mean Blue!"
  }
];

var correctScore = 0;
var incorrectScore = 0;
var secondsLeft = 0;
var gameOver = true;
    //counter for question turns
var questionNumber = 0;
var userGuess = ""

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
        newButton.attr("value", questions[questionNumber].choices[i]);
        newButton.attr("class", "choice-button");
        newDiv.append(newButton);
        $(".container").append(newDiv);
    }
};

function choicePress() {

    userGuess = $(this).val();
    console.log("userGuess: " + userGuess);

    if (userGuess === questions[questionNumber].correctChoice){
        console.log("That's Right!")
    } else {
        console.log("That's Wrrrong!")
    };


};



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

    displayButtons();
    $(document).on("click", ".choice-button", choicePress);






