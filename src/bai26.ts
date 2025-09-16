async function wait5s() {
    await new Promise(r => setTimeout(r, 5000));
    console.log("Waited 5 seconds");
  }
  wait5s();
  