import data from "../../../data";
import Navlink from "./Navlink";

const DesktopNav = () => {
	const { menuLinks } = data;
	return (
		<ul className="items-center hidden md:flex font-lexend desktop-nav bg-white rounded-full py-3 px-2 text-sm text-black">
			{menuLinks.map((link, index) => (
				<li className="flex-1 gap-4 items-start-center md:flex md:justify-center">
					<Navlink key={index} name={link} />
				</li>
			))}
		</ul>
	);
};

export default DesktopNav;
