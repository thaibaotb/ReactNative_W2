
function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve("Task done"), time);
    });
  }const arr = [1, 2, 3, 4, 5, 6];
const p9 = new Promise<number[]>(resolve => {
  setTimeout(() => resolve(arr.filter(n => n % 2 === 0)), 1000);
});
p9.then(console.log);
