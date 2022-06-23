// setTimout global funciton

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100)
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting... ${p}% \n`)
};
console.log(`setting a ${waitTime / 1000} second delay`);

const timeFinished = () => {
  clearInterval(int);
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
  console.log("done");
};

const int = setInterval(incTime, waitInterval);
setTimeout(timeFinished, waitTime);
