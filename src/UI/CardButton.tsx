import { HiArrowRight } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { CardButtonProps } from "../types";

const CardButton = ({
	children,
	className,
	arrowType,
	link,
}: CardButtonProps) => {
	return (
		<a
			href={link}
			className={`flex items-center gap-2 btn rounded-[4px] group transition-smooth ${className}`}
			target="_blank"
		>
			<span>{children}</span>
			<span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
				{arrowType === "long" && <HiArrowLongRight size={20} />}
				{arrowType === "short" && <HiArrowRight size={20} />}
			</span>
		</a>
	);
};

export default CardButton;
