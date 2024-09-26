import { HamburgerMenuProps } from "../../../types";

const HamburgerMenu = ({ showMenu, onToggleMenu }: HamburgerMenuProps) => {
	return (
		<div
			className="flex flex-col space-y-[6px] md:hidden"
			onClick={() => onToggleMenu()}
		>
			<span
				className={`w-4 h-[2px] bg-green rounded duration-200 ${showMenu && "rotate-45 translate-x-[2px] translate-y-[2px]"
					}`}
			></span>
			<span
				className={`w-8 h-[2px] bg-brand-green rounded duration-200 ${showMenu && "-rotate-45"
					}`}
			></span>
			<span
				className={`w-4 h-[2px] bg-green rounded self-end duration-200 ${showMenu &&
					"rotate-45 -translate-x-[2px] -translate-y-[2px]"
					}`}
			></span>
		</div>
	);
};

export default HamburgerMenu;
