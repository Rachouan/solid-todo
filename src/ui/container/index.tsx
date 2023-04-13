import clsx from "clsx";
import { JSX, splitProps } from "solid-js";

export default function Container(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      class={clsx("container px-4 max-w-xl mx-auto", local.class)}
      {...others}
    />
  );
}
