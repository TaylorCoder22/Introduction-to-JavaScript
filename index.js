/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
var votingAge = 19;
if(votingAge > 18){
  console.log(true);
}



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
var myVariable = 22
var myVariable2 = 30
if (myVariable >= 22){
  console.log(myVariable2(30));
}





/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
const year = '1999';

Number('1999');
console.log(1999);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/
const a = 10;
const b = 15;
function multiply(a = 10, b = 15){
    return a * b;
  }
console.log(multiply(10,15))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/
const humanYears = 10;
function dogYears(humanYears = 10,  dogYears = 7){
    return humanYears * dogYears;
}
console.log(dogYears(10,7));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){
    //calculation for adult dog
    if(weight <= 5 && age >= 1){
      return  weight * .005;
    } else if(weight <= 6 && weight >= 10 && age >=1){
              return weight * .004;
    } else if(weight <= 11 && weight >= 15 && age >=1){
              return weight * .003;
    } else if (weight <= 15 && age >= 1){
              return weight * .02;
    }
  }
console.log(hungryDogs(15,1))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function game(user, computer){
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  }
  
  var compare = function(choice1, choice2) {
      if(choice1 === choice2) {
      return "The result is a tie!";
  }
  if(choice1 === "rock") {
      if(choice2 === "scissors") {
          return "rock wins";
      } else {
          return "paper wins";
      }
  }
    if (choice1 === "paper") {
      if (choice2 === "rock") {
          return "paper wins";
      } else {
          if (choice2 === "scissors") {
              return "scissors wins";
          }
      }
      if (choice1 === "scissors") {
          if (choice2 === "rock") {
              return "rock wins";
          } else {
              if (choice2 === "paper") {
                  return "scissors wins";
              }
          }
      }
    }
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
    compare(userChoice, computerChoice);
}
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/
const kilometers = 16.25;
const factor = 0.621371;
function miles(kilometers = 16.25, factor = 0.621371){
    return kilometers * factor;
  }
console.log(miles(16.25, 0.621371));


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/
const cm = 305;
const foot = 0.0328084;
function feet(cm = 305, foot = 0.0328084){
    return cm * foot;
  }
 console.log(feet(305, 0.0328084))


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(repeat){
  var bottles;
  for (counter = 99; counter >= 1; counter = counter - 1) 
  {
      if (counter == 1) {
          bottles = 'bottle';
      } else {
          bottles = 'bottles';
      }
      console.log(counter+" "+bottles+" of beer on the wall.");
      if (counter < 99) {
          console.log("");
          console.log(counter+" "+bottles+" of beer on the wall.");
      }
      console.log(counter+" "+bottles+" of beer.");
      console.log("Take one down.");
      console.log("Pass it around.");
      if (counter == 1) {
          console.log("No bottles of beer on the wall.");
      }
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
var score = 100;
var letterDisplay = document.getElementById('letter'); 
function grade(score = 100){
  if(score >= 90){
    return letterDisplay.value = "A";
  }else if(score >= 80 && score <= 89){
    return letterDisplay.value = "B";
  }else if(score >= 70 && score <= 79){
    return letterDisplay.value = "C";
  }else if(score >= 60 && score <= 69){
   return letterDisplay.value = "D";
  }else if(score >= 0 && score <= 59){
    return letterDisplay.value = "F";
  }
console.log(score, letterDisplay);
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/

const string = 'JavaScript is my Kryptonite and what my nightmares are made of.'
function vowelCounter() {
  var vowel_list = 'aeiouAEIOU';
  var vowelCount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vowelCount += 1;
    }
    return vowelCount;
}
console.log(string('JavaScript is my Kryptonite and what my nightmares are made of.'));



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
