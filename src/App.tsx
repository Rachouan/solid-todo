import type { Component } from "solid-js";
import Container from "./ui/container";
import Todos from "./structs/todos";
import { useTodos } from "./stores/todos";

const App: Component = () => {
  const { todos } = useTodos();

  return (
    <section class="py-12">
      <Container class="space-y-4">
        <h1 class="text-2xl font-semi-bold inline-flex items-center gap-2 font-solid">
          Your todo's
          <span class="py-1 p-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-full leading-none tabular-nums font-sans mt-1">
            {todos.length}
          </span>
        </h1>
        <Todos />
      </Container>
    </section>
  );
};

export default App;
