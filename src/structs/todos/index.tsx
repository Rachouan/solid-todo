import { For, createSignal } from "solid-js";
import { Todo as TodoType, useTodos } from "../../stores/todos";
import Button from "../../ui/button";

export default function Todos() {
  const { todos, addTodo, toggleTodo } = useTodos();

  return (
    <div class="space-y-4">
      <NewTodo addTodo={addTodo} />
      <For each={todos}>
        {(todo) => <Todo todo={todo} toggleTodo={toggleTodo} />}
      </For>
    </div>
  );
}

function NewTodo({ addTodo }: { addTodo: (text: string) => void }) {
  const [value, setValue] = createSignal<string>("");
  const onHandleSubmit = (e: Event) => {
    e.preventDefault();
    addTodo(value());
    setValue("");
  };

  return (
    <form onSubmit={onHandleSubmit} class="flex gap-4">
      <input
        placeholder="What needs to be done?"
        value={value()}
        onChange={(e) => setValue(e.currentTarget.value)}
        class="w-full border border-stone-300 rounded px-3 py-2 focus:outline-4 focus:outline-blue-100 focus:border-blue-500"
      />
      <Button>Add</Button>
    </form>
  );
}

function Todo({
  todo,
  toggleTodo,
}: {
  todo: TodoType;
  toggleTodo: (id: number) => void;
}) {
  return (
    <div class="flex gap-2 items-center">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        class="w-6 h-6 mr-2 border-stone-300 rounded focus:border-blue-500 text-blue-300 focus:outline-2 focus:outline-blue-500"
      />
      <label>{todo.text}</label>
    </div>
  );
}
