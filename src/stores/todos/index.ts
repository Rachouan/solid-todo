import { createLocalStore } from "../local";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const [todos, setTodos] = createLocalStore<Todo[]>("local-todos", []);

export const useTodos = () => {
  const addTodo = (text: string) => {
    setTodos((todos) => [...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) => {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
      return todos;
    });
  };

  return { todos, addTodo, toggleTodo };
};
