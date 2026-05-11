import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { useState } from "react";
import { type Habit } from "./components/HabitList";

export default function App() {
	const [habits, setHabits] = useState<Habit[]>([]);

	function addHabit(name: string) {
		setHabits([...habits, { id: crypto.randomUUID(), name }]);
	}

	return (
		<div className="w-full mx-auto p-4 flex flex-col gap-4">
			<Header />
			<HabitForm addHabit={addHabit} />
			<HabitList habits={habits} />
		</div>
	);
}
