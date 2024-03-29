import data from "../../data";
import CTAButton from "../../UI/CTAButton";
import Navlink from "./Navlink";

const DesktopNav = () => {
	const { menuLinks } = data;
	return (
		<ul className="items-center flex-1 hidden md:flex font-lexend desktop-nav">
			<li className="flex-1 gap-4 items-start-center md:flex md:justify-center">
				{menuLinks.map((link, index) => (
					<Navlink key={index} name={link} />
				))}
			</li>
			<li className="cta">
				<CTAButton className="justify-center text-white bg-green hover:bg-darkened-green">
					Hire Us
				</CTAButton>
			</li>
		</ul>
	);
};

export default DesktopNav;
