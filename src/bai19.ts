async function fetchUser(id: number): Promise<{id:number,name:string}> {
    await new Promise(r => setTimeout(r, 1000));
    return { id, name: `User${id}` };
  }
async function fetchUsers(ids: number[]) {
    const results = [];
    for (const id of ids) {
      results.push(await fetchUser(id));
    }
    return results;
  }
  fetchUsers([1,2,3]).then(console.log);
  