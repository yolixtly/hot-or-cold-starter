
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
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
  $('form').submit(function(e){
  e.preventDefault();
  var userGuess = $('#userGuess').val();
  console.log(userGuess);

  //Resets the input value 
  $('#userGuess').val('');
  
  return userGuess;

});


}

guess();

//Add validation for the input : make sure that is 
// between 1 - 100
// its a number 
// its not decimal 



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


