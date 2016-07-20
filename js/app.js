$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    //Must functionality

    //when the page load a new game must be available . 
    //Make sure to call the function that start game 



    //Generate Random Number from 1 to 100 -- inside a function

    function randomNumber() {
        var secretNumber = Math.floor((Math.random() * 100) + 1);
        console.log(secretNumber);
        return secretNumber;
    }

    randomNumber();

    // Fetch the value of input with Id = userGuess
    function guess() {

        // Returns the userGuess
        $('form').submit(function(e) {
            e.preventDefault();
            var userGuess = $('#userGuess').val();
            console.log(userGuess);

            //Resets the input value 
            $('#userGuess').val('');

            return userGuess;

        });


    }
    // this is the current guess value 
    guess();

    //Add validation for the input : make sure that is 

    
     
    // if input is === secret number 

    function checkInput() {
        // for inputs that are not between 1 - 100
        if (userGuess <= 1 && userGuess >= 100) {
            alert('Please enter a number between 1 and a 100');
            //this exits the checkInput function completly 
            return true;
        } 
        // for inputs that are not decimals  
        if (userGuess == NaN) {
        	alert('Please enter a number');
        	return true;
        }
        // for decimal inputs 
        if (userGuess % 1 !== 0) {
        	alert('Please enter an integer with no decimals'); 
        	return true;
        }

        // if input has already been guessed ?

        return false // if the input its valid, then checkInput is not important and we dont fire anything 

    }


    // The player gets feedback for each guess – "hot" 
    //if their guess was close, and "cold" if their guess was far 
    // Conditional statement with a range of number  --have inside a Name Function()
    // ranges : 30-50 cold, 20-30 warm, 1-10 very hot. Modify them accordingly
    //feedback should be displayed in h2#feedback


    // function that counts how many guess the user has tried for current game 
    // display that in span#count. Count be 0 by default;


    //render the past guesses in as an <li> to ul#guessList.
    // store guesses in : an array


    // After user guesses correctly secret Number they can START A NEW GAME
    //ACTION: add functionality to button New Game : Reset all variable  
    //function newGame(); 
    // this function inside an other function that runs the entire game 





    //Credit Functionality




});