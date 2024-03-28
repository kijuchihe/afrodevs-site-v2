import { useState } from "react";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";
import MobileNav from "../components/Navbar/MobileNav";
import DesktopNav from "../components/Navbar/DesktopNav";
import Logo from "../components/Logo";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header className="shadow-[0_10px_30px_-10px] shadow-black/5 md:shadow-none">
			<div className="px-4 py-5 c-container">
				<nav className="flex items-center justify-between w-full">
					{/* logo and hamburger */}
					<Logo />
					<HamburgerMenu
						showMenu={showMenu}
						onToggleMenu={toggleMenu}
					/>
					<DesktopNav />
				</nav>
			</div>
			<hr className="h-[1px] bg-black/5 border-none md:hidden" />
			<MobileNav showMenu={showMenu} />
		</header>
	);
};

export default Navbar;
