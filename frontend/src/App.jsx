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
			<main>
				<SearchSection
					cards={cards}
					setSearchText={setSearchText}
					searchText={searchText}
				/>
				{isLoading ? (
					"Loading..."
				) : searchText && isLoading ? (
					"Searching..."
				) : (
					<HelpSection cards={cards} />
				)}
			</main>
			<Footer />
		</>
	);
};

export default App;
