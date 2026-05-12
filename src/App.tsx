import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { HabitProvider } from "./components/context/habitProvider";

export default function App() {
	return (
		<div className="w-full mx-auto p-4 flex flex-col gap-4">
			<HabitProvider>
				<Header />
				<HabitForm />
				<HabitList />
			</HabitProvider>
		</div>
	);
}
