/* =========================================
BUTTONS: APPREHENSIVE APPRENTICE
==========================================*/
function onLoad () {
  let input = [];
  const buttons = document.querySelectorAll("input[type='button']");
  for (let item of buttons) {
    item.addEventListener("click", function () {
    document.getElementById('output').innerHTML = item.value;
    input.push(item.value);
    console.log(input);
    document.getElementById('output').innerHTML = input.join("");
    });
  }
}
window.onload = onLoad;
console.log('script loaded');
  // let opInput = "";
  // const operation = document.querySelectorAll("input[class='operator button']");
  //   // inputArrayNums = input
  //   for (let item of operation) {
  //     item.addEventListener("click", function () {
  //     document.getElementById('output').innerHTML = item.value;
  //     input.push(item.value);
  //     console.log(input);
  //     document.getElementById('output').innerHTML = input.join("");

// function operator {
//   arr1 = input;
//   opInput =
//   input = [];
// }
//
//=======================================
// function addPrep () {
//   arr1 = input
//   addArr = [1, "add()"];
//   input = [];
//   console.log(addArr);
// }
//=======================================
// function equals {
//
// }
//
// 1. what value to put for operators
// input = [1, add(), 2]
// equals(input.split(""))
//     arr1 = input.join("")
//
//   const operation = document.querySelectorAll("input[class='operator']")
//     console.log(operation)
//
// if ( input !== operation ) {
//   input.push(item.value);
// }

/*===================================
EXPERIMENTS
===================================*/




// input = [1, add(), 2]
//
// function guessLetter() {
//   var letterInput = prompt("Guess a letter").toLowerCase();
//   guessedArr(letterInput);
//   compare(letterInput);
// }
//
// function guessedArr(letter) {
//   lettersGuessed.push(letter);
//   document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
// }

/*===================================
END
===================================*/


//
//
// let btn1 = document.getElementById('btn-one');
// btn1.addEventListener("click", function () {
// });
//
// let btn1 = document.getElementById('btn-one');
// btn1.addEventListener("click", function () {
// });
//
// btn1
//
//
//
//
//
// let btn1 = document.getElementById('btn-one');
// btn1.addEventListener("click", function () {
//   console.log(1);
//   document.getElementById("output").innerHTML = 1;
// });
//
// let btn2 = document.getElementById('btn-two');
// btn2.addEventListener("click", function () {
//   console.log(2);
//   document.getElementById("output").innerHTML = 2;
// });
//
// let btn3 = document.getElementById('btn-three');
// btn3.addEventListener("click", function () {
//   console.log(3);
//   document.getElementById("output").innerHTML = 3;
// });
//
// let btn4 = document.getElementById('btn-four');
// btn4.addEventListener("click", function () {
//   console.log(4);
//   document.getElementById("output").innerHTML = 4;
// });
//
// let btn5 = document.getElementById('btn-five');
// btn5.addEventListener("click", function () {
//   console.log(5);
//   document.getElementById("output").innerHTML = 5;
// });
//
// let btn6 = document.getElementById('btn-six');
// btn6.addEventListener("click", function () {
//   console.log(6);
//   document.getElementById("output").innerHTML = 6;
// });
//
// let btn7 = document.getElementById('btn-seven');
// btn7.addEventListener("click", function () {
//   console.log(7);
//   document.getElementById("output").innerHTML = 7;
// });
//
// let btn8 = document.getElementById('btn-eight');
// btn8.addEventListener("click", function () {
//   console.log(8);
//   document.getElementById("output").innerHTML = 8;
// });
//
// let btn9 = document.getElementById('btn-nine');
// btn9.addEventListener("click", function () {
//   console.log(9);
//   document.getElementById("output").innerHTML = 9;
// });
//
// let btn0 = document.getElementById('btn-zero');
// btn0.addEventListener("click", function () {
//   console.log(0);
//   document.getElementById("output").innerHTML = 0;
// });
//
// let btnAdd = document.getElementById('btn-add');
// btnAdd.addEventListener("click", function () {
//   console.log("+");
//   document.getElementById("output").innerHTML = "+";
// });
//
// let btnEquals = document.getElementById('btn-equals');
// btnEquals.addEventListener("click", function () {
//   console.log("=");
//   document.getElementById("output").innerHTML = "=";
// });
// ======================================

/* =========================================
BUTTONS: SKILLED SORCERER
==========================================*/

// let btn3 = document.getElementById('btn-three');
// btn3.addEventListener("click", function () {
//   console.log(3);
//   document.getElementById("output").innerHTML = 3;
// });

/* =========================================
FUNCTIONS BELOW: SKILLED SORCERER
==========================================*/
/* =========================================
FUNCTIONS BELOW: SANDBOX CALC USE IDEAS
==========================================*/
// let btn1 = document.getElementById('btn-one');
// btn1.addEventListener("click", function () {
//   let numOne = 1;
//   console.log(numOne);
//   document
//   .getElementById("output").innerHTML = numOne;
//   numbers(numOne);
// });

// function numbers(num) {
//   let input = [];
//   input.push(num);
//   num.toString("");
//   document.getElementById("output").innerHTML = num;
// };
// // function outputBoxAccum(n) {
// //   let input;
// //   input.push(n);
// //   document.getElementById("output").innerHTML = lettersGuessed.join("");
// // }
//
//
//
// // let digit = document.getElementById(".digits");
// // digit.addEventListener("click", function () {
// //
// // })
//
//
//
// function guessedArr(letter) {
//   lettersGuessed.push(letter);
//   document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
// }
// let btnAdd = document.getElementById('btn-add');
// btn-add.addEventListener("click", function () {
//
//
// });
//
//
// btn1 btnAdd btn2
//
//
// string = ""
