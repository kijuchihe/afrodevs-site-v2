import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface HamburgerMenuProps {
	showMenu: boolean;
	onToggleMenu: () => void;
}

export interface ButtonProps {
	children?: ReactNode;
	className: string;
}
export interface CardButtonProps extends ButtonProps {
	arrowType: "long" | "short";
	link: string;
}
export interface ServiceCardProps {
	id: number;
	Icon: IconType;
	title: string;
	description: string;
	link: string;
}
