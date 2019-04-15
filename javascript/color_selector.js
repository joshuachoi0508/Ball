//picks a random color and colors the circle with the chosen color
const pickRandomColor = () => {
  const color = colors[Math.floor(Math.random() * 2)];

  ball.style.background = `linear-gradient(${color}, dark${color})`;
  document.cookie = `${color},1`;
  counter.innerText = "Count: 1";
}

//raises color count and uses it to set 
//the new cookie and add new innerText for counter
const raiseColorCount = () => {
  //splits cookie into an array [color, count]
  const colorAndCount = document.cookie.split(",");
  const color = colorAndCount[0];
  const previousCount = colorAndCount[1];
  const nextCount = Number(previousCount) + 1;

  ball.style.background = `linear-gradient(${color}, dark${color})`;
  document.cookie = color + "," + String(nextCount);
  counter.innerText = "Count: " + String(nextCount);
}


//decides whether to pick a random color or raise the color count depending on
//the existence of cookie
if (!document.cookie) {
  pickRandomColor();
} else {
  raiseColorCount();
};