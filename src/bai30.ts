async function multiCalls() {
    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/1000" // lỗi
    ];
  
    const results = await Promise.allSettled(urls.map(u => fetch(u).then(r => r.json())));
    results.forEach(r => console.log(r.status, r));
  }
  multiCalls();
  