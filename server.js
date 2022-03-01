const express = require("express");
const cluster = require("cluster");
// const os = require("os");
cluster.schedulingPolicy = cluster.SCHED_RR;

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  // JSON.stringify({});
  // JSON.parse("{}");
  // [23,38,99,2]
  res.send(`Performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(4000);
  res.send(`Beep Beep Beep ! ${process.pid}`);
});

console.log("Running server");
// if (cluster.isMaster) {
//   console.log("Master has been started...");
//   const NUM_WORKERS = os.cpus().length;
//   for (let i = 0; i < NUM_WORKERS; i++) {
//     cluster.fork();
//   }
// } else {
console.log("Worker process started.");
app.listen(3000);
// }
