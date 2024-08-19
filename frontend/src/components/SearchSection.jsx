import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";
import { MdClear } from "react-icons/md";

const SearchSection = ({ searchText, setSearchText, cards }) => {
	const inputRef = useRef(null);

	// Function to handle searches
	const handleSearchCards = (e) => {
		e.preventDefault();
		if (e.target.search.value === "") {
			return toast.error("Cannot Perform Empty Search!");
		}
		setSearchText(e.target.search.value);
	};

	// Show Toast with Search Count
	useEffect(() => {
		if (searchText && cards?.length > 0) {
			toast.success(
				`${cards?.length} ${
					cards?.length > 1 ? "Matches" : "Match"
				} Found!`
			);
		}
	}, [cards, searchText]);

	// Clear Search Text after a search
	const clearSearchText = () => {
		setSearchText("");
		inputRef.current.value = "";
	};
	return (
		<section
			id="search-section"
			className="px-4 sm:px-16 mx-auto w-full bg-nazmulBG min-h-[40dvh]"
		>
			{/* Search Cards */}
			<form
				onSubmit={handleSearchCards}
				className="w-full px-4 md:w-3/4 lg:w-1/2 mx-auto flex items-center justify-center flex-col gap-6 h-[36dvh]"
			>
				<label
					className="font-medium text-2xl md:text-3xl lg:text-5xl"
					htmlFor="search"
				>
					How Can We Help?
				</label>
				<div className="flex gap-2 w-full items-center relative px-1 py-1.5 bg-white rounded-[4px] border border-slate-400 shadow-md shadow-slate-400">
					{/* Search Field */}
					<input
						ref={inputRef}
						defaultValue={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						className="pl-2 pr-14 py-2 bg-white w-full focus:outline-0 rounded-[4px] mx-1"
						placeholder="Search"
						type="text"
						name="search"
						id="search"
					/>
					<div className="absolute right-0 flex gap-2">
						{/* clear search text */}
						{searchText !== "" && (
							<button
								title="Clear Search Field"
								onClick={clearSearchText}
								className="text-2xl hover:text-gray-400 transition-all duration-500"
							>
								<MdClear />
							</button>
						)}
						{/* button to search manually */}
						<button
							className="pr-4 text-nazmulButton hover:text-gray-400 transition-all duration-700"
							type="submit"
						>
							<FaArrowRight />
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

SearchSection.propTypes = {
	searchText: PropTypes.string.isRequired,
	setSearchText: PropTypes.func.isRequired,
	cards: PropTypes.array.isRequired,
};

export default SearchSection;
