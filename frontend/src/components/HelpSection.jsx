import PropTypes from "prop-types";
import Card from "./Card";

const HelpSection = ({ cards }) => {
	return (
		<section>
			<div>
				{cards?.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

HelpSection.propTypes = {
	cards: PropTypes.array.isRequired,
};

export default HelpSection;
