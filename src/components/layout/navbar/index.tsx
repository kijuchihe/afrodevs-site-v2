import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";
import Logo from "../../Logo";
import useNavbarScroll from "../../../hooks/useNavbarScroll";
import { easeIn, motion } from "framer-motion";
import DesktopNav from "./DesktopNav";
import { useForm } from "../../../contexts/FormContext";
import CTAButton from "../../ui/CTAButton";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const scroll = useNavbarScroll();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { setShowFormPopup } = useForm();

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
      className={`top-0 left-0 right-0 z-50 bg-transparent fixed ${scroll ? "shadow-[0_10px_30px_-10px] shadow-black/10 bg-white" : ""
        }`}
    >
      <div
        className={`px-4 flex items-center c-container ease-in-out duration-300 transition-all ${scroll ? "h-[97.25px]" : "h-[110px]"
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
          <div className="cta">
            <CTAButton
              onClick={() => setShowFormPopup(true)}
              className="justify-center text-white bg-green hover:bg-darkened-green"
            >
              Hire Us
            </CTAButton>
          </div>
        </nav>
      </div>
      <hr className="h-[1px] bg-black/5 border-none md:hidden" />
      <MobileNav showMenu={showMenu} onToggleMenu={toggleMenu} />
    </motion.header>
  );
};

export default Navbar;
