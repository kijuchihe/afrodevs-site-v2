import { HiArrowLongRight } from "react-icons/hi2";
import { ButtonProps } from "../types";

const CTAButton = ({ children, className }: ButtonProps) => {
	return (
		<a
			href="#"
			className={`flex items-center gap-2 btn rounded-[4px] group transition-smooth ${className}`}
		>
			<span>{children}</span>
			<span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
				<HiArrowLongRight size={20} />
			</span>
		</a>
	);
};

export default CTAButton;
