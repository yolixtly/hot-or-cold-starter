$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    /* Initializing Variables */

    var userGuess,
        secretNumber,
        gapNumber,
        count = 0,
        pastGuesses=[],
        guessHtml,
        guessedFeedback,
        guessList = $('#guessList'),
        renderCount = $('#count'),
        feedback = $('#feedback');

    // DONE : takes care of the form default behavior && runs the user guess 
    $('form').submit(function(e) {
        e.preventDefault();
        guess();

    });

    //when the page load a new game must be available . 
    //Make sure to call the function that start game 

    function newGame() {
        randomNumber();

    }

    newGame();

    // After user guesses correctly secret Number they can START A NEW GAME
    //ACTION: add functionality to button New Game : Reset all variable  
    //function newGame(); 
    // this function inside an other function that runs the entire game 


    // DONE : Generate Random Number from 1 to 100 -- inside a function

    function randomNumber() {
        secretNumber = Math.floor((Math.random() * 100) + 1);
        console.log(secretNumber);
        return secretNumber;
    }


    // DONE : Fetch the value of input with Id = userGuess
    function guess() {

        // Returns the userGuess
        userGuess = $('#userGuess').val();

        //Resets the input value 
        $('#userGuess').val('');

        //checks for valid inputs
        if (checkInput()) {
            return;
        }

        //gives feedback on hot & cold 
        getFeedback();

        //tracks how many user guesses
        trackGuesses();

        //Array of pastGuesses 
        groupGuesses();

        render();

        return userGuess;

    }

    // DONE : Add validation for the input : make sure that is 
    function checkInput() {
        // for inputs that are not between 1 - 100
        if (userGuess < 0 || userGuess > 100) {
            alert('Please enter a number between 1 and a 100');
            //this exits the checkInput function completly 
            return true;
        }

        // for decimal inputs 
        else if (userGuess % 1 !== 0) {
            alert('Please enter a Number!');
            return true;
        }

        // if input has already been guessed ?

        return false // if the input its valid, then checkInput is not important and we dont fire anything 

    }


// DONE: Gives user feedback if they are getting hot or cold.
    function getFeedback() {
        gapNumber = Math.abs(secretNumber - userGuess);
        if (secretNumber == userGuess) {
            guessedFeedback = "you win!";
        } else if (gapNumber <= 10 && gapNumber >= 1) {
            guessedFeedback = 'you are very hot';
        } else if (gapNumber <= 20 && gapNumber >= 11) {
            guessedFeedback = 'you are hot';
        } else if (gapNumber <= 30 && gapNumber >= 21) {
            guessedFeedback = 'you are warm';
        } else if (gapNumber <= 49 && gapNumber >= 39) {
            guessedFeedback = 'you are cold';
        } else {
            guessedFeedback = 'you are very cold';
        }
    }


    // function that counts how many guess the user has tried for current game 
    // display that in span#count. Count be 0 by default;

    function trackGuesses(){
        count++;
    }
 // store guesses in : an array
    function groupGuesses(){
        pastGuesses.push(userGuess);
        guessHtml = '';
        $.each(pastGuesses, function(index, value){
            guessHtml += '<li>' + value + '</li>';
        });


    }

    //render the past guesses in as an <li> to ul#guessList.
   function render(){
    guessList.html(guessHtml);
    renderCount.html(count);
    feedback.html(guessedFeedback);
   }





   // guessList = $('#guestList'),
   //      renderCount = $('#count'),
   //      feedback = $('#feedback');




    //Credit Functionality




});