async function fetchCompletedTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    console.log(todos.filter((t: any) => t.completed));
  }
  fetchCompletedTodos();
  