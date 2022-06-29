/* Below are the circle objects */

let circ1 = document.getElementById("circle1");
let circ2 = document.getElementById("circle2");
let circ3 = document.getElementById("circle3");
let circ4 = document.getElementById("circle4");

/* Below are the bar objects */

let firstBar = document.getElementById("bar1");
let secondBar = document.getElementById("bar2");
let thirdBar = document.getElementById("bar3");

/* Below are the button objects */

let firstButton = document.getElementById("button1");
let secondButton = document.getElementById("button2");

/* Objects are located above */

firstButton.addEventListener("click", backtrack);
secondButton.addEventListener("click", forwardTrack);

let white = "rgb(224, 224, 224)";
let blue = "rgb(52, 152, 218)";

let count = 0;

if (count == 0) {
  firstButton.style.cursor = "not-allowed";
}

function backtrack() {
  if (count == 0) {
  } else {
    count--;
  }

  if (count == 0) {
    firstButton.style.cursor = "not-allowed";
  }

  firstBar.style.width = "0px";
  circ2.style.borderColor = white;

  if (count == 0) {
    firstButton.style.backgroundColor = white;
  }

  if (count < 3) {
    secondButton.style.cursor = "default";
  }

  if ((circ2.style.borderColor == white) & (count == 1)) {
    firstBar.style.width = "83px";
    circ2.style.borderColor = blue;
    //firstButton.style.backgroundColor = white;
    circ3.style.borderColor = white;
    secondBar.style.width = "0px";
  }

  if (count == 2) {
    secondButton.style.backgroundColor = blue;
    thirdBar.style.width = "0px";
    firstBar.style.width = "83px";
    circ2.style.borderColor = blue;
    circ4.style.borderColor = white;
  }
}

function forwardTrack() {
  if (count > -1) {
    firstButton.style.cursor = "default";
  }

  if (count < 3) {
    count++;
  }

  if (count >= 3) {
    secondButton.style.background = white;
    secondButton.style.cursor = "not-allowed";
  }

  firstBar.style.width = "83px";
  circ2.style.borderColor = blue;
  firstButton.style.backgroundColor = blue;

  if (count == 2) {
    circ3.style.borderColor = blue;
    secondBar.style.width = "83px";
  } else if (count == 3) {
    circ4.style.borderColor = blue;
    thirdBar.style.width = "83px";
  }
}
