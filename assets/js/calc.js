/* =========================================
QUESTIONS:
==========================================*/

// HOW TO CAPTURE BUTTONS THAT ARE NOT SPECIFIC BUT GENERAL.

/* =========================================
CALCULATIONS:
==========================================*/
function add(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

/* =========================================
FUNCTIONS BELOW: SKILLED SORCERER
==========================================*/
function subtract(num1, num2) {
  let difference = num1 - num2;
  console.log(difference);
}

function multiply(num1, num2) {
  let product = num1 * num2;
  console.log(product);
}

function divide(num1, num2) {
  let quotient;
  if ( num2 === 0) {
    console.log("error");
    return;
  } else {
  quotient = num1 / num2;
  console.log(quotient);
  }
}

function modulo(num1) {
  let result = num1 / 100    console.log(result);
}


// put in array = call back
// num1, num2
//
// functions (array of numbers, callback())
