import { type ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	disabled?: boolean;
}

const Button = ({ children, disabled = false }: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			className="bg-red-600 hover:bg-red-400 transition-colors rounded py-1 px-2 disabled:opacity-30 disabled:cursor-not-allowed"
		>
			{children}
		</button>
	);
};

export default Button;
