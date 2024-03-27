import { ReactNode } from "react";

export interface HamburgerMenuProps {
	showMenu: boolean;
	onToggleMenu: () => void;
}

export interface CTAButtonProps {
	children?: ReactNode;
	className: string;
}
