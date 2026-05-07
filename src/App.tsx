import Header from "./components/Header";
import HabitForm from "./components/HabitForm";

export default function App() {
	return (
		<div className="w-full mx-auto p-4 flex flex-col gap-4">
			<Header />
			<HabitForm />
		</div>
	);
}
