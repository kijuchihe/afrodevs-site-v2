import { HiArrowLongRight } from "react-icons/hi2";
import { ButtonProps } from "../types";

const CTAButton = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={`flex gap-2 items-center btn rounded-[4px] group transition-smooth ${className}`}
			{...props}
		>
			<span>{children}</span>
			<span className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
				<HiArrowLongRight size={20} />
			</span>
		</button>
	);
};

export default CTAButton;
