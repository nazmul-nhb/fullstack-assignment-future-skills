import { CgAbstract } from "react-icons/cg";
import toast from "react-hot-toast";

const Navbar = () => {
	return (
		<nav className="bg-black text-white flex justify-between px-4 sm:px-16 mx-auto max-w-[1920px] w-full py-4 text-sm sm:text-xl font-semibold">
			{/* site logo & title */}
			<div className="flex gap-2 items-center">
				<CgAbstract
					size={26}
					className="bg-white text-black rounded-lg"
				/>
				<a href="#footer" className="font-bold">
					Abstract
				</a>
				<span>|</span>
				<a className="text-gray-200" href="#help-section">
					Help Center
				</a>
			</div>
			<div>
				<button
					onClick={() => toast.success("Feature is Coming Soon!")}
					className="border-gray-500 text-gray-300 border-2 py-1 px-3 rounded-md bg-nazmulButton hover:bg-slate-800 transition-all duration-500"
				>
					Submit a request
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
