function simulateTask(time: number): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve("Task done"), time);
    });
  }
  async function batchProcess() {
    const tasks = [1,2,3,4,5].map(i => simulateTask(i*500));
    const results = await Promise.all(tasks);
    console.log("Batch:", results);
  }
  batchProcess();
  