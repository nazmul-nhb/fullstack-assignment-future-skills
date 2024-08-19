import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import HelpSection from "./components/HelpSection";
import Footer from "./components/Footer";

const App = () => {
	const [searchText, setSearchText] = useState("");

	const { data: cards = [], isLoading } = useQuery({
		queryKey: ["cards", searchText],
		queryFn: async () => {
			const { data } = await axios.get(
				`https://future-skills-help-center-api.vercel.app/cards?search=${searchText}`
			);
			return data?.data;
		},
	});

	return (
		<>
			<Navbar />
			<main className="max-w-[1920px] w-full mx-auto">
				{/* Search Section */}
				<SearchSection
					cards={cards}
					setSearchText={setSearchText}
					searchText={searchText}
				/>
				{/* Section for Help Cards */}
				<HelpSection
					cards={cards}
					searchText={searchText}
					isLoading={isLoading}
				/>
			</main>
			<Footer />
		</>
	);
};

export default App;
