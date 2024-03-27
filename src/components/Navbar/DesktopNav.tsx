import CTAButton from "../../UI/CTAButton";

const DesktopNav = () => {
	return (
		<ul className="items-center flex-1 hidden md:flex font-lexend desktop-nav">
			<li className="flex-1 gap-4 items-start-center md:flex md:justify-center">
				<li>
					<a href="#" className="nav-link">
						About us
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						Projects
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						Community
					</a>
				</li>
			</li>
			<li className="cta">
				<CTAButton className="justify-center bg-green hover:bg-darkened-green">
					Hire Us
				</CTAButton>
			</li>
		</ul>
	);
};

export default DesktopNav;
