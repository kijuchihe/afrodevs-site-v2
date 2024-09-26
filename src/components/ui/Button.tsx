import { ButtonProps } from "../../types";

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={`btn rounded-[4px] transition-smooth ${className}`}
			{...props}
		>
			<span>{children}</span>
		</button>
	);
};

export default Button;
