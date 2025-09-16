async function tripleAfter1Sec(n: number): Promise<number> {
    await new Promise(r => setTimeout(r, 1000));
    return n * 3;
  }
  async function* genPromises() {
    yield tripleAfter1Sec(2);
    yield tripleAfter1Sec(4);
  }
  
  (async () => {
    for await (const val of genPromises()) {
      console.log(val);
    }
  })();
  