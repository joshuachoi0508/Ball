const counter = document.getElementById("counter");
const ball = document.getElementById("ball");

if (!document.cookie) {
  const colors = ["red", "blue"]
  const color = colors[Math.floor(Math.random() * 2)];

  ball.style.background = `linear-gradient(${color}, dark${color})`;
  debugger;

  document.cookie = `${color},1`;
  counter.innerText = "Count: 1";
} else {
  const colorAndCount = document.cookie.split(",");

  ball.style.background = `linear-gradient(${colorAndCount[0]}, dark${colorAndCount[0]})`;
  document.cookie = colorAndCount[0] + "," + String(Number(colorAndCount[1]) + 1);
  counter.innerText = "Count: " + String(Number(colorAndCount[1]) + 1);
}