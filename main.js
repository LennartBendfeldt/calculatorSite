  
//define variables for HTML elements
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let clearResults = document.getElementById("clearresults");

//input
let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");

// Display result
function myDisplayer(some) {

    document.getElementById("result").innerHTML = some;
};

// Add function
function add(num1, num2) {

    let sum = num1 + num2;
    return sum;
}

// Subtract function
function subtract(num1, num2) {

    let sum = num1 - num2;
    return sum;
}

// Multiply Function
function multiply(num1, num2) {

    let sum = num1 * num2;
    return sum;
}

// Divide Function
function divide(num1, num2) {

    let sum = num1 / num2;
    return sum;
}

//Clear the input fields
function clearFields(){
    firstNumber.value = "";
    secondNumber.value = "";
}

// Calculator callback function
function calculator (callback, num1, num2){
    return callback(num1, num2);
}


//Calculate add on click
addButton.onclick = () => {
    let result = calculator(add, Number(firstNumber.value), Number(secondNumber.value))
    myDisplayer(result);
    clearFields();
}

//Calculate subtract on click
subtractButton.onclick = () => {

    let result = calculator(subtract, Number(firstNumber.value), Number(secondNumber.value))
    myDisplayer(result);
    clearFields();
}
  
  //Calculate multiply on click
multiplyButton.onclick = () => {

    let result = calculator(multiply, Number(firstNumber.value), Number(secondNumber.value))
    myDisplayer(result);
    clearFields();
}

  //Calculate divide on click
divideButton.onclick = () => {

    let result = calculator(divide, Number(firstNumber.value), Number(secondNumber.value))
    myDisplayer(result);
    clearFields();
}

//Clear Results
clearResults.onclick = () => {
    myDisplayer("");
}