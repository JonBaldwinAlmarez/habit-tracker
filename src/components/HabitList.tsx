import Button from "./Button";
import { format, isFuture, isSameDay, subDays } from "date-fns";
import { useHabits, type Habit } from "./context/habit";

type HabitItemProps = {
	habit: Habit;
	visibleDates: Date[];
};
type habitListProps = {
	visibleDates: Date[];
};

function HabitItem({ habit, visibleDates }: HabitItemProps) {
	const { deleteHabit, toggleHabit } = useHabits();

	const streak = getStreak(habit.completions);

	return (
		<div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
			<div className="flex items-center justify-between">
				<div className="flex gap-3 items-center">
					<span className="font-medium">{habit.name}</span>
					{streak !== 0 && (
						<span className="text-sm text-amber-400">{streak}</span>
					)}
				</div>
				<Button
					onClick={() => deleteHabit(habit.id)}
					variant="ghost-destruction"
					className="text-xs"
				>
					Delete
				</Button>
			</div>

			<div className="flex gap-2">
				{visibleDates.map((date) => (
					<Button
						key={date.toISOString()}
						disabled={isFuture(date)}
						onClick={() => toggleHabit(habit.id, date)}
						className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sm"
						variant={
							habit.completions.some((d) => isSameDay(date, d))
								? "primary"
								: "secondary"
						}
					>
						<span className="font-medium">{format(date, "EEE")}</span>
						<span>{format(date, "d")}</span>
					</Button>
				))}
			</div>
		</div>
	);
}

const HabitList = ({ visibleDates }: habitListProps) => {
	const { habits } = useHabits();
	if (habits.length === 0) {
		return (
			<div className="text-center text-zinc-400 py-12">
				No Listed habits, add a habit to start
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-3">
			{habits.map((habit) => (
				<HabitItem key={habit.id} habit={habit} visibleDates={visibleDates} />
			))}
		</div>
	);
};

function getStreak(completions: Date[]) {
	let countStreak = 0;
	let date = new Date();

	while (completions.some((c) => isSameDay(c, date))) {
		countStreak++;
		date = subDays(date, 1);
	}

	return countStreak;
}

export default HabitList;
