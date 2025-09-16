async function helloAsync() {
    await new Promise(r => setTimeout(r, 2000));
    return "Hello Async";
  }
  helloAsync().then(console.log);
  