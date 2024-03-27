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

export interface CardProps {
	id: number;
	title: string;
	description: string;
	link: string;
}
export interface ServiceCardProps extends CardProps {
	Icon: IconType;
}
export interface ProjectCardProps extends CardProps {
	image: string;
}
