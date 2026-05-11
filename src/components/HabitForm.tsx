import Button from "./Button";
import { useState, type SubmitEvent } from "react";

type HabitFormProps = {
	addHabit: (name: string) => void;
};

const HabitForm = ({ addHabit }: HabitFormProps) => {
	const [name, setName] = useState("");

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (name.trim() === "") return;
		setName("");
		addHabit(name);
	}
	return (
		<form className="flex gap-2" onSubmit={handleSubmit}>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="flex-1 rounded-lg bg-zinc-800 py-2 px-4 outline-none focus-visible:ring-2 focus-visible:ring-red-500"
				type="text"
				placeholder="New Habit....."
			/>
			<Button
				disabled={name.trim() === ""}
				className="rounded-lg py-2 px-4 font-medium"
			>
				Add Habit
			</Button>
		</form>
	);
};

export default HabitForm;
