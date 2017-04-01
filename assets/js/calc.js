/* =========================================
QUESTIONS:
==========================================*/

// HOW TO CAPTURE BUTTONS THAT ARE NOT SPECIFIC BUT GENERAL.



// const add = (x, y) => x + y;
//
// function equals() {
//
// }
//------------------------------
function operation () {
  let inputOp = [];
  const buttonsOp = document.querySelectorAll(".operator");
  //create a nodelist for all 'buttons'
  for (let item of buttonsOp) {
    item.addEventListener("click", function () {
    document.getElementById('output').innerHTML = item.value;
    inputCalc.push(item.value);
    console.log(inputCalc);
    });
    function operatorCatch () {
      if (document.querySelectorAll("input[class='operator']")) {
        ???????.value //which is add() as an example
      }
    }
    function equals() {
      inputCalc
    }
  }
}
//
//
//
// //
// input // will equal an array [1, 2, 3]
//-----------------------------
function add(input) {
  console.log
}

/* =========================================
CALCULATIONS:
==========================================*/
function add(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

const add = function add(num1, num2) {
  return num1 + num2;
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
  let result = num1 / 100;
  console.log(result);
}

// function equal(function(arr1, arr2)) {
//
//   console.log(result);
// }

// put in array = call back
// num1, num2
//
// functions (array of numbers, callback())

// function equals
function equals (arr1, arr2, cb) {
  let result = cb(arr1, arr2);
}


const equalButton = function() {
  document.querySelector("#equalButton");
  inputEQ = inputString.split(" ");
  console.log(input);
  let a = parseFloat(input[0]);
  let b = parseFloat(input[2]);
}
