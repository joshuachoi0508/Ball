const raiseColorCount = () => {
  //splits cookie into an array [color, count]
  const colorAndCount = document.cookie.split(",");
  const color = colorAndCount[0];
  const count = colorAndCount[1];
  const nextCount = Number(count) + 1;

  ball.style.background = `linear-gradient(${color}, dark${color})`;
  document.cookie = color + "," + String(nextCount);
  counter.innerText = "Count: " + String(nextCount);
}

if (!document.cookie) {
  pickRandomColor();
} else {
  raiseColorCount();
};