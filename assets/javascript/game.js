//TRIVIA MADNESS

//Global Variables
var questions = [{
    question: "What superhero was born with the Curse of Kordax?",
    choices: ["Captain Marvel", "Hawkman", "Ghost Rider", "Aquaman"],
    correctChoice: "Aquaman"
  }, {
    question: "What super villain was created when Emil Blonsky accidentally exposed himself to a concentrated burst of gamma rays?",
    choices: ["Abomination", "Doc Samson", "The Leader", "Bi-Beast"],
    correctChoice: "Abomination"
  }, {
    question: "What Chester Gould character made his first appearance in the Detroit Free Press on October 4, 1931?",
    choices: ["Buck Rogers", "Dick Tracy", "Superman", "Flash Gordon"],
    correctChoice: "Dick Tracy"
  }, {
    question: "What superhero grew up on the planet Tamaran?",
    choices: ["Hawkgirl", "Ultra Boy", "The Silver Surfer", "Starfire"],
    correctChoice: "Starfire"
  }, {
    question: "Edwin Jarvis serves as butler to what superteam?",
    choices: ["Fantastic Four", "Avengers", "Justice League", "Teen Titans"],
    correctChoice: "Avengers"
  }, {
    question: "Which of these superheroines was inhabited by the soul of an ancient Egyptian princess after attempting suicide?",
    choices: ["Black Canary", "Wonder Woman", "Huntress", "Hawkgirl"],
    correctChoice: "Hawkgirl"
  }, {
    question: "Who was the first costumed superhero?",
    choices: ["Superman", "Arrow", "Crimson Avenger", "The Phantom"],
    correctChoice: "The Phantom"
  }, {
    question: "Who is Luke Cage's best friend and longtime partner in crime-fighting?",
    choices: ["Human Torch", "Doctor Strange", "Daredevil", "Iron Fist"],
    correctChoice: "Iron Fist"
  }, {
    question: "What superhero gained his powers after being exposed to the Orb of Ra?",
    choices: ["Hawkman", "Doctor Strange", "Metamorpho", "Iron Fist"],
    correctChoice: "Metamorpho"
  }, {
    question: "Who is Skaar?",
    choices: ["Son of Tarzan", "Son of Wolverine", "Son of Hulk", "Son of Thor"],
    correctChoice: "Son of Hulk"
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

    $("#timer").html("<h3>Time Left: " + countDownTimer + "</h3>");
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
    $("#timer").html("<h3>Time Left: " + countDownTimer + "</h3>");
    runTimer();

    //Fills in new question into a div
    var newDiv = $("<div>")
    newDiv.append(`<p>${questions[questionNumber].question}</p>`);
    $("#question-div").append(newDiv);

    
    

    //Creates buttons based on current question
    for (i=0; i < questions[questionNumber].choices.length; i++){
        var newButton = $("<button>");
        var newDiv = $("<div>")
        newButton.text(questions[questionNumber].choices[i]);
        newButton.attr("value", questions[questionNumber].choices[i]);
        newButton.attr("class", "choice-button rounded");
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
        responsiveVoice.speak("You ran out of Time! The correct answer was "+questions[questionNumber].correctChoice);
        delayDisplay();
    } else if (userCorrect === true){
        $("#question-div").append(`<h2>You Got It!</h2>`);
        responsiveVoice.speak("You got it!");
        //display picture
        delayDisplay();
    } else {
        $("#question-div").append(`<h2>LOOOOSER!!!</h2>`);
        $("#question-div").append(`<p>The correct answer was <strong>${questions[questionNumber].correctChoice}</strong></p>`);
        responsiveVoice.speak("Lou ooh ooh ooh sir. The correct answer was "+questions[questionNumber].correctChoice);
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
        setTimeout(questionTimeout, 1000 * 5);
    };
};

function questionTimeout(){
    $("#question-div").empty();
    var newDiv = $("<div>")
    newDiv.append(`<h2>${questions[questionNumber].question}</h2>`);
    $("#question-div").append(newDiv);
    responsiveVoice.speak(questions[questionNumber].question);

    setTimeout(displayQuestion, 1000 * 5)
};

function gameOver(){

    $("#question-div").empty();

    newDiv = $("<div>");
    newDiv.append("<h3>All Done! Here's your score</h3>");
    responsiveVoice.speak("All Done! Here's your score.");
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
    questionTimeout();
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






