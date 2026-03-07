/** Everything i need for creating a calculator app
 * html - structure to get user input and have a button associated with either + , - , * , / and =
 * in script.js writing a function for  + , - , * , / and =, getting user input from html by dom.
 */


//querySelector is for one element
//querySelectorAll is for multiple elements



let display = document.querySelector("#display");   // for referring to ids use #
let numbers = document.querySelectorAll(".num");    // for referring to classes use .
let operators = document.querySelectorAll(".operator");
let equalsBtn = document.querySelector("#equals");
let clearBtn = document.querySelector("#clear");
let backSpaceBtn = document.querySelector("#backspace");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;   //basically displaying the numbers on the screen
    })
});

operators.forEach((operator) => {
    operator.addEventListener("click" , () => {
        display.textContent += operator.textContent
    })
});

equalsBtn.addEventListener("click", () => {
    let result = eval(display.textContent);
    display.textContent = result;
    
});

clearBtn.addEventListener("click", () => {
    display.textContent = "";
});

backSpaceBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});



// function addition (a, b) {
//     document.getElementById("add-btn").addEventListener("click", addition);
//     console.log(a + b);
// }

// function subtract (a, b) {
//     document.getElementById("subtract-btn").addEventListener("click", subtract);
//     console.log(a - b);
// }

// function multiply (a, b) {
//     document.getElementById("multiply-btn").addEventListener("click", multiply);
//     console.log(a * b) 
// }

// function divide (a, b) {
//     document.getElementById("divide-btn").addEventListener("click", divide);
//     console.log(a / b);
// }

// function assignment (a, b) {
//     if(document.getElementById("add-btn").addEventListener("click" , addition)){
//         console.log(a + b);
//     } else if(document.getElementById("subtract-btn").addEventListener("click", subtract)){
//         console.log(a - b);
//     } else if(document.getElementById("multiply-btn").addEventListener("click", multiply)){
//         console.log(a * b);
//     } else if (document.getElementById("divide-btn").addEventListener("click", divide)){
//         console.log(a / b);
//     }

// }

// function getNum () {
//     document.getElementById("numbers").addEventListener("click", getNum);
// }

