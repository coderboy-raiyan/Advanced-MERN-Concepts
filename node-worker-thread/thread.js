const { Worker, isMainThread, workerData } = require("worker_threads");

if (isMainThread) {
  new Worker(__filename, {
    workerData: [2, 34, 5, 6],
  });
  new Worker(__filename, {
    workerData: [56, 100, 300, 6],
  });
} else {
  console.log(`Worker thread ${process.pid}`);
  console.log(
    `sorted ${
      process.pid
    } array on thread ${workerData} equal ${workerData.sort((a, b) => a - b)}`
  );
}
