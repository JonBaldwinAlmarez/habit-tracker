import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost-destruction";

type ButtonProps = {
	variant?: Variant;
} & ComponentProps<"button">;

function getVarientStyles(variant: Variant) {
	switch (variant) {
		case "primary":
			return "bg-white hover:bg-gray-400 text-black";
		case "secondary":
			return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400";
		case "ghost-destruction":
			return "hover:bg-red-800 text-red-800 hover:text-red-200";
		default:
			throw new Error(`Invalid Varient ${variant satisfies never}`);
	}
}

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`${getVarientStyles(variant)} transition-colors rounded py-1 px-2 disabled:opacity-30 disabled:cursor-not-allowed`}
		></button>
	);
};

export default Button;
