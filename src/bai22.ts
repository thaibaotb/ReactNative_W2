async function fetchMulti() {
    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2"
    ];
    for (const u of urls) {
      const res = await fetch(u);
      console.log(await res.json());
    }
  }
  fetchMulti();
  