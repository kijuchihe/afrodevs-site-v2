import data from "../../data";
import { MobileNavProps } from "../../types";
import Navlink from "./Navlink";

const MobileNav = ({ showMenu, onToggleMenu }: MobileNavProps) => {
	const { menuLinks } = data;
	return (
		<ul
			className={`overflow-hidden md:hidden mobile-nav font-lexend transition-smooth min-[768px]:px-[50px] ${
				showMenu ? "h-[128px] pt-4" : "h-0"
			}`}
		>
			{menuLinks.map((link, index) => (
				<Navlink key={index} name={link} onClick={onToggleMenu} />
			))}
			
		</ul>
	);
};

export default MobileNav;
