import data from "../../data";
import { MobileNavProps } from "../../types";
import CTAButton from "../../UI/CTAButton";
import Navlink from "./Navlink";

const MobileNav = ({ showMenu, onToggleMenu }: MobileNavProps) => {
	const { menuLinks } = data;
	return (
		<ul
			className={`overflow-hidden md:hidden mobile-nav font-lexend transition-all duration-300 ease-in-out min-[768px]:px-[50px] ${
				showMenu ? "h-[232px] pt-4" : "h-0"
			}`}
		>
			{menuLinks.map((link, index) => (
				<Navlink key={index} name={link} onClick={onToggleMenu} />
			))}
			<li className="cta">
				<CTAButton className="text-white max-sm:justify-center bg-green hover:bg-darkened-green sm:w-fit">
					Hire Us
				</CTAButton>
			</li>
		</ul>
	);
};

export default MobileNav;
