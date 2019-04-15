const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  document.cookie = "";

  pickRandomColor();
})