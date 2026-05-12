import { format, isToday } from "date-fns";
import Button from "./Button";
import { useHabits } from "./context/habit";

type HeaderProps = {
	visibleDates: Date[];
};

export default function Header({ visibleDates }: HeaderProps) {
	const { habits } = useHabits();
	const doneToday = habits.filter((h) =>
		h.completions.some((c) => isToday(c)),
	).length;

	const endDate = `${format(visibleDates.at(-1)!, "MMM d")}`;
	const dateRange = `${format(visibleDates[0], "MMM d")} - ${endDate}`;

	return (
		<header className="flex items-center justify-between">
			<div className="flex flex-col gap-1">
				<h1 className="text-3xl font-bold">Habit Tracker</h1>
				<span className="text-zinc-400 text-sm">
					{doneToday} / {habits.length} done today
				</span>
			</div>
			<div className="flex flex-col gap-1 items-end">
				<span className="text-zinc-400 text-sm">{dateRange}</span>
				<div className="flex items-center gap-2">
					<Button>Prev</Button>
					<Button>Next</Button>
				</div>
			</div>
		</header>
	);
}
