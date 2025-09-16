
async function fetchWithTimeout(ms: number) {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Timeout after 2s")), ms);
    });
  }
  
  async function apiCall() {
    return new Promise(resolve => setTimeout(() => resolve("API result"), 3000));
  }
  
  Promise.race([apiCall(), fetchWithTimeout(2000)])
    .then(console.log)
    .catch(console.error);
  