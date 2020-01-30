const colors = generateRandomColors(6);

const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; ++i) {
  // Add initial colors to the squares
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners to the squares
  squares[i].addEventListener("click", e => {
    // Grab the color from the square
    const clickedColor = e.currentTarget.style.backgroundColor;

    // Compare the color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      h1.style.background = clickedColor;
      changeColors(clickedColor);
    } else {
      messageDisplay.textContent = "Try Again";
      e.currentTarget.style.backgroundColor = "#232323";
    }
  });
}

function changeColors(color) {
  // Loop through all squares
  for (let i = 0; i < colors.length; ++i) {
    // Change each color of the sqaure to match the winning square
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Argument: Number
function generateRandomColors(numOfColors) {
  // Make an array
  const arr = [];
  // Add numOfColors random colors to the array

  for (let i = 0; i < numOfColors; ++i) {
    // Get random color and push into arr
    arr.push(randomColor());
  }

  // Return the array
  return arr;
}

// Return a random color in rbg(r, g, b) format as a string
function randomColor() {
  // Pick a red from 0 to 255
  let red = Math.floor(Math.random() * 256);
  // Pick a green from 0 to 255
  let green = Math.floor(Math.random() * 256);
  // Pick a blue from 0 to 255
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
