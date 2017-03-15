let btn1 = document.getElementById('btn-one');
btn1.addEventListener("click", function () {
  let numOne = 1;
  console.log(numOne);
  document.getElementById("output").innerHTML = numOne;
  numbers(numOne);
});

function numbers(num) {
  let input = [];
  input.push(num);
  num.toString("");
  document.getElementById("output").innerHTML = num;
}
// function outputBoxAccum(n) {
//   let input;
//   input.push(n);
//   document.getElementById("output").innerHTML = lettersGuessed.join("");
// }



// let digit = document.getElementById(".digits");
// digit.addEventListener("click", function () {
//
// })



function guessedArr(letter) {
  lettersGuessed.push(letter);
  document.getElementById("letter-box").innerHTML = lettersGuessed.join("・");
}





let btn2 = document.getElementById('btn-two');
btn2.addEventListener("click", function () {
  console.log(2);
  document.getElementById("output").innerHTML = 2;
});

let btn3 = document.getElementById('btn-three');
btn3.addEventListener("click", function () {
  console.log(3);
  document.getElementById("output").innerHTML = 3;
});

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
