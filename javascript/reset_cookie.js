const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  document.cookie = "";

  const colors = ["red", "blue"];
  const color = colors[Math.floor(Math.random() * 2)];

  ball.style.background = color;
  document.cookie = `${color},1`;
  counter.innerText = "Count: 1";
})