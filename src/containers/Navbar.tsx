import { useState } from "react";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";
import MobileNav from "../components/Navbar/MobileNav";
import DesktopNav from "../components/Navbar/DesktopNav";
import Logo from "../components/Logo";
import useNavbarScroll from "../hooks/use-navbarScroll";
import { easeIn, motion } from "framer-motion";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const scroll = useNavbarScroll();
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<motion.header
			initial={{ translateY: -110 }}
			animate={{
				translateY: 0,
			}}
			transition={{
				duration: 1,
				ease: easeIn,
			}}
			className={`top-0 left-0 right-0 z-50 bg-white fixed ${
				scroll ? "shadow-[0_10px_30px_-10px] shadow-black/10" : ""
			}`}
		>
			<div
				className={`px-4 flex items-center c-container ease-in-out duration-300 transition-all ${
					scroll ? "h-[97.25px]" : "h-[110px]"
				}`}
			>
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
			<MobileNav showMenu={showMenu} onToggleMenu={toggleMenu} />
		</motion.header>
	);
};

export default Navbar;
