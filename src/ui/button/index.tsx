import { JSX } from "solid-js";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      {...props}
    />
  );
}
