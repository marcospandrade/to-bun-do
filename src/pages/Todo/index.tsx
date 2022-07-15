import { useEffect, useState } from "react";
import { getAllTodos } from "../../services/todoService";
// import { api } from "../../services/api";
import "./styles.css";

export interface ITodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export function Todo() {
  const [todos, setTodos] = useState<ITodo[]>({} as ITodo[]);

  async function getTodos() {
    const response = await getAllTodos();

    setTodos(response);
  }

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <header className="mt-2">
        <h1>To-bun-do List</h1>
        <button className="btn btn-primary mt-2">Create To-do</button>
      </header>

      <main className="mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Task</th>
              <th scope="col">Creator Id</th>
              <th scope="col">Completed</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {todos.length > 0 &&
              todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.userId}</td>
                  <td>{todo.completed ? "Yes" : "No"}</td>
                  <td>
                    <button className="btn btn-info">Edit</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
