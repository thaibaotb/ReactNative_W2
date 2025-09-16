
async function postData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({title:"foo", body:"bar"})
    });
    console.log(await res.json());
  }
  postData();
  