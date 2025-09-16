function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve("Task done"), time);
    });
  }async function queueProcess() {
    const tasks = [1,2,3].map(i => () => simulateTask(i*500));
  
    for (const t of tasks) {
      console.log(await t());
    }
  }
  queueProcess();
  