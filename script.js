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

