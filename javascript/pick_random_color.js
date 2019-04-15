const pickRandomColor = () => {
  const color = colors[Math.floor(Math.random() * 2)];
  
  ball.style.background = `linear-gradient(${color}, dark${color})`;
  document.cookie = `${color},1`;
  counter.innerText = "Count: 1";
}