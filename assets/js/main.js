let btn1 = document.getElementById('btn-one');
btn1.addEventListener("click", function () {
  console.log(1);
  document.getElementById("output").innerHTML = 1;
});

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
