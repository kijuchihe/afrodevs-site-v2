import { ButtonProps } from "../types";

const Button = ({ children, className }: ButtonProps) => {
	return (
		<a href="#" className={`btn rounded-[4px] ${className}`}>
			<span>{children}</span>
		</a>
	);
};

export default Button;
