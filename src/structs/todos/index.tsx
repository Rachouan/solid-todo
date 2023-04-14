import { For, createSignal, splitProps } from "solid-js";
import { Todo as TodoType, useTodos } from "../../stores/todos";
import { Icon } from "solid-heroicons";
import { plus, xMark } from "solid-heroicons/outline";
import ActionIcon from "../../ui/action-icon";

export default function Todos() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <div class="space-y-4">
      <NewTodo addTodo={addTodo} />
      <div>
        <For each={todos}>
          {(todo) => (
            <Todo todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          )}
        </For>
      </div>
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
    <form
      onSubmit={onHandleSubmit}
      class="flex gap-4 items-center border border-stone-300 rounded p-2 focus-within:ring-4 focus-within:ring-blue-100 focus-within:border-blue-500 transition-all"
    >
      <input
        placeholder="What needs to be done?"
        value={value()}
        onChange={(e) => setValue(e.currentTarget.value)}
        class="w-full pl-1 outline-none text-stone-950 placeholder:text-stone-400"
      />
      <ActionIcon size="md">
        <Icon path={plus} />
      </ActionIcon>
    </form>
  );
}

function Todo(props: {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) {
  const [{ todo, toggleTodo, removeTodo }] = splitProps(props, [
    "todo",
    "toggleTodo",
    "removeTodo",
  ]);

  const id = `todo-item-${todo.id}`;

  return (
    <div class="group flex gap-2 items-center relative py-2 px-3 rounded hover:bg-stone-100">
      <input
        id={id}
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        class="w-6 h-6 md:w-4 md:h-4 text-blue-500"
      />

      <label class="w-full text-lg md:text-base" for={id}>
        {todo.text}
      </label>
      <div class="opacity-100 md:opacity-0 group-hover:opacity-100">
        <ActionIcon
          variant="subtle"
          size="sm"
          onClick={() => removeTodo(todo.id)}
        >
          <Icon path={xMark} />
        </ActionIcon>
      </div>
    </div>
  );
}
