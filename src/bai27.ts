async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let i = 0; i < retries; i++) {
      try {
        const res = await fetch(url);
        return await res.json();
      } catch (err) {
        console.error("Retrying...", i + 1);
      }
    }
    throw new Error("Failed after retries");
  }
  fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3).then(console.log);
  