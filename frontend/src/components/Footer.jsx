import { CgAbstract } from "react-icons/cg";

const footerOptions = [
	{
		title: "Abstract",
		links: ["Branches"],
	},
	{
		title: "Resources",
		links: ["Blog", "Help Center", "Release Notes", "Status"],
	},
	{
		title: "Community",
		links: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
	},
	{
		title: "Company",
		links: ["About us", "Careers", "Legal"],
	},
	{
		title: "Contact Us",
		links: ["info@abstract.com"],
	},
];
const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-black text-white flex flex-col items-center lg:items-start lg:flex-row justify-between px-8 md:px-16 mx-auto max-w-[1920px] w-full py-12 gap-6 sm:gap-12 xl:gap-20"
		>
			<div className="flex flex-col items-center sm:items-start sm:flex-row justify-between w-full gap-4 sm:gap-8 lg:gap-12">
				{/* loop through footerOptions */}
				{footerOptions.map((option, index) => (
					<div className="sm:text-left text-center" key={index}>
						{/* Footer Titles */}
						<h3 className="text-xl font-bold mb-2">
							{option.title}
						</h3>
						{/* links */}
						{option.links.map((link, idx) => (
							<div className="text-sm" key={idx}>
								{/* If it's the "Contact Us" section, make the email a mailto link */}
								{option.title === "Contact Us" ? (
									<a
										className="hover:text-blue-300 transition-all duration-500"
										rel="noopener noreferrer"
										href={`mailto:${link}`}
									>
										{link}
									</a>
								) : (
									<a
										className="hover:text-blue-300 transition-all duration-500"
										rel="noopener noreferrer"
										href="#"
									>
										{link}
									</a>
								)}
							</div>
						))}
					</div>
				))}
			</div>
			{/* copyright section */}
			<div className="flex flex-col items-center lg:items-start">
				<CgAbstract
					size={26}
					className="bg-white text-black rounded-lg mb-3"
				/>
				<h6>&copy; Copyright {new Date().getFullYear()}</h6>
				<h6>Abstract Studio Design, Inc.</h6>
				<h6>All Rights Reserved.</h6>
			</div>
		</footer>
	);
};

export default Footer;
