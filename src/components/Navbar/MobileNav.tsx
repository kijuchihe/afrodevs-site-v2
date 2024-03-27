import CTAButton from "../../UI/CTAButton";

const MobileNav = ({ showMenu }: { showMenu: boolean }) => {
	return (
		<ul
			className={`overflow-hidden md:hidden mobile-nav font-lexend transition-all duration-300 ease-in-out min-[768px]:px-[50px] ${
				showMenu ? "h-[232px] pt-4" : "h-0"
			}`}
		>
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
			<li className="cta">
				<CTAButton className="max-sm:justify-center bg-green hover:bg-darkened-green sm:w-fit text-white">
					Hire Us
				</CTAButton>
			</li>
		</ul>
	);
};

export default MobileNav;
