const p4 = new Promise<number>((resolve) => {
    resolve(Math.random());
  });
  p4.then(num => console.log("Random:", num))
    .catch(err => console.error(err));
  