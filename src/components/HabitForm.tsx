import React from "react";
import Button from "./Button";

const HabitForm = () => {
	return (
		<form className="flex gap-2">
			<input
				className="flex-1 rounded-lg bg-zinc-800 py-2 px-4 outline-none focus-visible:ring-2 focus-visible:ring-red-500"
				type="text"
				placeholder="New Habit....."
			/>
			<Button>Add Habit</Button>
		</form>
	);
};

export default HabitForm;
