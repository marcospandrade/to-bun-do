export async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const listTodo = await response.json();

  return listTodo;
}
