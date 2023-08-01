
// Puts a moving square at the given coordinates (x, y) with an optional delay
function addMovingSquare(x, y, delay = 0) {
    const squareContainer = document.getElementById("squareContainer");
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.style.left = `${x}px`;
    newSquare.style.top = `${y}px`;
    newSquare.style.animationDelay = `${delay}s`; // Set the animation delay for the square
    squareContainer.appendChild(newSquare);
  }
  
  const numSquares = 10;
  const squareSize = 100;
  const spacingX = 125;
  const spacingY = 125;
  const animationDelayIncrement = 0.2;
  
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      const xPosition = i * spacingX;
      const yPosition = j * spacingY;
      const delay = animationDelayIncrement * (i + j);
      addMovingSquare(xPosition, yPosition, delay);
    }
  }
  