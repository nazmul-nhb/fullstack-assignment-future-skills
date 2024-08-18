import PropTypes from "prop-types";

const Card = ({ card }) => {
	const { title, description } = card;

	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

Card.propTypes = {
	card: PropTypes.object.isRequired,
};

export default Card;
