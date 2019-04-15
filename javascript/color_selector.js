const colors = ["red", "blue"]
const color = colors[Math.floor(Math.random() * 2)];

const ball = document.getElementById("ball");
ball.style.background = color;