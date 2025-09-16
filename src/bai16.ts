async function tripleAfter1Sec(n: number): Promise<number> {
    await new Promise(r => setTimeout(r, 1000));
    return n * 3;
  }async function parallel() {
    const [a, b] = await Promise.all([tripleAfter1Sec(2), tripleAfter1Sec(3)]);
    console.log(a, b);
  }
  parallel();
  