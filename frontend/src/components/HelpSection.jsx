import PropTypes from "prop-types";
import Card from "./Card";
import { MainLoader, SearchLoader } from "./Loaders";

const HelpSection = ({ cards, searchText, isLoading }) => {
	return (
		<section
			id="help-section"
			className="min-h-[60dvh] w-full py-8 md:py-20 lg:py-28"
		>
			{/* Conditionally show loading spinners or cards */}
			{isLoading && !searchText ? (
				MainLoader
			) : searchText && isLoading ? (
				SearchLoader
			) : !cards?.length ? (
				<p className="flex items-center justify-center text-3xl font-semibold text-red-800">Nothing Found!</p>
			) : (
				<div className="w-full px-12 md:px-28 lg:px-40 xl:px-48 py-4 mx-auto grid sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
					{cards?.map((card) => (
						<Card key={card.id} card={card} />
					))}
				</div>
			)}
		</section>
	);
};

HelpSection.propTypes = {
	cards: PropTypes.array.isRequired,
	searchText: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default HelpSection;
