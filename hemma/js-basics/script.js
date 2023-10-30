//Console.log works as print from python. It prints your code into the console on the website.



//let is a function that tells the code that ''let this letter mean this number'' as in ''let x mean 1''

//if is a function you have worked with before in python, it tells you ''if the function is this.... do this.''


// function myFunction() {
//   let x = 1;              //let x mean 1   
//   if (true) {             //if it's true
//     let x = 2;            //then let x equals 2
//     console.log(x);       //Then print output 2
//   }
//   console.log(x);         //Then print output 1
// }

// myFunction();

// The let keyword also does not allow hoisting, so trying to access the variable y before it is declared will throw an error.
//console.log(y); // Output: Uncaught ReferenceError: y is not defined
//let y = 5;


// let name = "Alva";
// console.log(name);

//Rules about naming variables

//   let             name        =     "Alva";
// (function)    (variable)

// console.log(name);

/*
The variable cannot be a reserved keyword
''let, if, var'' are a few of them

variable names should be meaningful and discriptive names

variables cannot start with a number

cannot contain a space or hypen (-)

variables are case-sensitive
*/

//this is called camel notation
//camel notation is when you have several words in your variable, first word should always start with small letter, and every word after that should start with a capital letter.
//let firstName
//these two are counted as two different variables.
//let FirstName

// let firstName = "Alva"
// let lastName = "Ahlberg"

// console.log(firstName)
// console.log(lastName)

//--------------------------------------------------------------------------------
// Types

// let name = "Alva";  //String
// let age = 30;     //Number
// let isApproved = false;     //Boolean
// let firstName = undefined;  
// let selectedColor = null;   //We use null in situations where we want to clear the value of a variable.

//-------------------------------------------------------------

// Object
// Array
// Function

//If you have several variables that are related to eachoter. you can assign them to an ''object'' which then lets you print out all the information related to that object

// let name = "Alva";
// let age = 30;

// let person = {
//     name: "Alva",
//     age: 30
// };

// //Dot notation
// person.name = "John";


// //bracket notation
// person["name"] = "Mary";

// console.log(person.name);

let selectedColors = ["red", "blue"];
console.log(selectedColors); //prints both red and blue
console.log(selectedColors[0]) //print only red
console.log(selectedColors[1]) //prints only blue

selectedColors [2] = "green";
console.log(selectedColors) //adds green to the printout of selected colors

console.log(selectedColors.length); //prints how many elements are in the array