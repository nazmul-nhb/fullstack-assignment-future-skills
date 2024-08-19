import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import HelpSection from "./components/HelpSection";
import Footer from "./components/Footer";

const App = () => {
	const { data: cards = [], isLoading } = useQuery({
		queryKey: ["cards"],
		queryFn: async () => {
			const { data } = await axios.get(
				`https://future-skills-help-center-api.vercel.app/cards`
			);
			return data?.data;
		},
	});

	if (isLoading)
		return (
			<div className="flex items-center justify-center">Loading...</div>
		);

	return (
		<>
			<Navbar />
			<main>
				<SearchSection />
				<HelpSection cards={cards} />
			</main>
			<Footer />
		</>
	);
};

export default App;
