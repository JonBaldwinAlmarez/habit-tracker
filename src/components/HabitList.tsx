import Button from "./Button";
import {
	eachDayOfInterval,
	endOfWeek,
	startOfWeek,
	format,
	isFuture,
} from "date-fns";

export type Habit = { id: string; name: string };

type HabitItemProps = {
	habit: Habit;
};
type HabitListProps = {
	habits: Habit[];
};

function HabitItem({ habit }: HabitItemProps) {
	const visibledates = eachDayOfInterval({
		start: startOfWeek(new Date(), { weekStartsOn: 1 }),
		end: endOfWeek(new Date(), { weekStartsOn: 1 }),
	});

	return (
		<div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
			<div className="flex items-center justify-between">
				<div className="flex gap-3 items-center">
					<span className="font-medium">{habit.name}</span>
					<span className="text-sm text-amber-400"> 3 </span>
				</div>
				<Button variant="ghost-destruction" className="text-xs">
					Delete
				</Button>
			</div>

			<div className="flex gap-2">
				{visibledates.map((date) => (
					<Button
						key={date.toISOString()}
						disabled={isFuture(date)}
						className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sm"
					>
						<span className="font-medium">{format(date, "EEE")}</span>
						<span>{format(date, "d")}</span>
					</Button>
				))}
			</div>
		</div>
	);
}

const HabitList = ({ habits }: HabitListProps) => {
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
				<HabitItem key={habit.id} habit={habit} />
			))}
		</div>
	);
};

export default HabitList;
