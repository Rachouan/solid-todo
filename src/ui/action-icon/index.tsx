import { VariantProps, cva } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

const actionIcon = cva(
  "text-white font-medium rounded border disabled:bg-stone-200 disabled:text-stone-600 transition-all",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 border-blue-600 hover:border-blue-700 hover:bg-blue-600 text-white",
        subtle:
          "border-none bg-transparent hover:bg-stone-50 text-stone-600 hover:text-stone-800",
      },
      size: {
        sm: "w-6 h-6 p-1",
        md: "w-8 h-8 p-1",
        lg: "w-10 h-10 p-2",
      },
      radius: {
        xs: "rounded",
        sm: "rounded-lg",
        md: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [{ variant: "primary", size: "md", radius: "sm" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "sm",
    },
  }
);

export interface ActionIconProps
  extends JSX.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionIcon> {
  disabled?: boolean;
  as?: "button" | "a";
}

export default function ActionIcon(props: ActionIconProps) {
  const [{ variant, size, disabled }, rest] = splitProps(props, [
    "variant",
    "size",
    "disabled",
  ]);
  return (
    <Dynamic
      disabled={disabled}
      component={rest.as || "button"}
      class={actionIcon({ variant, size, className: rest.class })}
      {...rest}
    />
  );
}
