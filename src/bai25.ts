function downloadFile() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("File downloaded!");
        resolve(true);
      }, 3000);
    });
  }
  downloadFile();
  