let circ1 = document.getElementById("circle1");
let circ2 = document.getElementById("circle2");
let firstBar = document.getElementById("bar1");

let firstButton = document.getElementById("button1");
let secondButton = document.getElementById("button2");

firstButton.addEventListener("click", backtrack);
secondButton.addEventListener("click", forwardTrack);

function backtrack() {
  firstBar.style.width = "0px";
  circ2.style.borderColor = "rgb(224,224,224)";
}

function forwardTrack() {
  firstBar.style.width = "83px";
  circ2.style.borderColor = "rgb(52,152,218)";
}
