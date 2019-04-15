if (!document.cookie) {
  pickRandomColor();
} else {
  const colorAndCount = document.cookie.split(",");

  ball.style.background = `linear-gradient(${colorAndCount[0]}, dark${colorAndCount[0]})`;
  document.cookie = colorAndCount[0] + "," + String(Number(colorAndCount[1]) + 1);
  counter.innerText = "Count: " + String(Number(colorAndCount[1]) + 1);
}