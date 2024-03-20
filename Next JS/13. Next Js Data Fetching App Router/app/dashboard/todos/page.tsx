async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });
  return await response.json();
}

//! this fuction will fetch data before req
export const preloadTodos = () => {
  void getAllTodos();
};

const TodosPage = async () => {
  const todos = await getAllTodos();

  return (
    <div>
      <h2 className="text-4xl font-bold">Todos</h2>
      <div className="grid grid-cols-2 gap-4">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo: any) => (
            <div className="border p-5 shadow-lg rounded-lg" key={todo.id}>
              {" "}
              <h4> {todo.title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodosPage;

// ! this is a server side rended page
//! this is caching data => it increase the series
/*async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });
  return await response.json();
}
this is rendering statical rendering

*/
