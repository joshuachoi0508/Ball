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

const pickRandomColor = () => {
  const color = colors[Math.floor(Math.random() * 2)];

  ball.style.background = `linear-gradient(${color}, dark${color})`;
  document.cookie = `${color},1`;
  counter.innerText = "Count: 1";
}

if (!document.cookie) {
  pickRandomColor();
} else {
  raiseColorCount();
};