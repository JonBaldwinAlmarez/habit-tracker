import { createContext, useContext } from "react";

export const HabitContext = createContext<null | Context>(null);

export type Context = {
	habits: Habit[];
	addHabit: (name: string) => void;
	deleteHabit: (id: string) => void;
	toggleHabit: (id: string, date: Date) => void;
};
export type Habit = { id: string; name: string; completions: Date[] };

export function useHabits() {
	const habitContext = useContext(HabitContext);
	if (habitContext == null) throw new Error("Null Context");

	return habitContext;
}
