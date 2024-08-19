import PropTypes from "prop-types";
import toast from "react-hot-toast";

const Card = ({ card }) => {
	const { title, description } = card;

	return (
		<div
			onClick={() => toast.success("Feature is Coming Soon!")}
			className="space-y-2 bg-cardBG rounded-lg border border-slate-300 shadow-md shadow-slate-300 hover:scale-105 hover:bg-slate-200 transition-all duration-500 cursor-pointer"
		>
			<h2 className="px-5 pt-3 text-xl font-bold text-cardTitle">
				{title}
			</h2>
			<hr className="border-slate-300" />
			<p className="pb-3 px-5 text-gray-500">{description}</p>
		</div>
	);
};

Card.propTypes = {
	card: PropTypes.object.isRequired,
};

export default Card;
