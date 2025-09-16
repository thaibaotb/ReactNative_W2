function failPromise(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Something went wrong"), 1000);
    });
  }
  failPromise().catch(console.error);
  