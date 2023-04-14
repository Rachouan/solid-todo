import { VariantProps, cva } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

const button = cva(
  "text-white font-medium rounded disabled:bg-stone-200 disabled:text-stone-600",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
      },
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  disabled?: boolean;
  as?: "button" | "a";
}

export default function Button(props: ButtonProps) {
  const [{ variant, size, disabled }, rest] = splitProps(props, [
    "variant",
    "size",
    "disabled",
    "class",
  ]);
  return (
    <Dynamic
      disabled={disabled}
      component={rest.as || "button"}
      class={button({ variant, size })}
      {...rest}
    />
  );
}
