function failPromise(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Something went wrong"), 1000);
    });
  }
async function runWithError() {
    try {
      await failPromise();
    } catch (err) {
      console.error("Caught:", err);
    }
  }
  runWithError();
  