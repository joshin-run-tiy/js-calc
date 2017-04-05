;(function () {
  function calc() {
    let input = [];
    const buttons = document.querySelectorAll("input[type='button']");
    for (let item of buttons) {
      item.addEventListener("click", function () {
      document.getElementById('output').innerHTML = item.value;
      input.push(item.value);
      console.log(input);
      document.getElementById('output').innerHTML = input.join("");
        if (input[input.length-1] === '=') {
          console.log('equals passed')
          equals(input);
        }
      });
    }
  }
  window.onload = calc;
  console.log('script loaded');

/* =========================================
OPERATIONS BELOW: SKILLED SORCERER
==========================================*/
  function equals(input) {
    let a = input[0];
    let b = input[2];
    let answer = "";
    if (input[1] === '+') {
      answer = add(a, b);
    } else if (input[1] === '-') {
      answer = subtract(a, b);
    } else if (input[1] === '*') {
      answer = multiply(a, b);
    } else if (input[1] === '/') {
      answer = divide(a, b);
    } else if (input[1] === '%') {
      answer = modulo(a);
    }
    document.getElementById('output').innerHTML = answer;
  }

  function add(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = num1 + num2;
    return sum;
  }

  function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;
  }

  function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
  }

  function divide(num1, num2) {
    let quotient;
    if ( num2 === 0) {
      console.log("error");
      return;
    } else {
    quotient = num1 / num2;
    return quotient;
    }
  }

  function modulo(num1) {
    let result = num1 / 100;
    return result;
  }
})();
/* =========================================
EQUALS
==========================================*/
// function equals (arr1, arr2, cb) {
//   let result = cb(arr1, arr2);
// }
//
// const equalButton = function() {
//   document.querySelector("#equalButton");
//   inputEQ = inputString.split(" ");
//   console.log(input);
//   let a = parseFloat(input[0]);
//   let b = parseFloat(input[2]);
// }

/* =========================================
==========================================*/





//
// const calculate = function(a, b, cb) {
//   if ()
//   return cb(a, b);
// };





//
//
//
// //
// input // will equal an array [1, 2, 3]
//-----------------------------
// function add(input) {
//   console.log
// }

/* =========================================
CALCULATIONS:
==========================================*/


// function equal(function(arr1, arr2)) {
//
//   console.log(result);
// }

// put in array = call back
// num1, num2
//
// functions (array of numbers, callback())
