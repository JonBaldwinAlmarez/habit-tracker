import { isSameDay } from "date-fns";
import { type ReactNode } from "react";
import { HabitContext, type Habit } from "./habit";
import { useLocalStorage } from "../hook/useLocalStorage";

type HabitProviderProps = {
	children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
	const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", []);

	function addHabit(name: string) {
		setHabits((curent) => [
			...curent,
			{ id: crypto.randomUUID(), name, completions: [] },
		]);
	}

	function deleteHabit(id: string) {
		setHabits((current) => current.filter((h) => h.id !== id));
	}

	function toggleHabit(id: string, date: Date) {
		setHabits((current) =>
			current.map((h) => {
				if (h.id !== id) return h;

				const alreadyDone = h.completions.some((c) => isSameDay(c, date));

				const completions = alreadyDone
					? h.completions.filter((c) => !isSameDay(c, date))
					: [...h.completions, date];

				return { ...h, completions };
			}),
		);
	}

	return (
		<HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>
			{children}
		</HabitContext>
	);
}
