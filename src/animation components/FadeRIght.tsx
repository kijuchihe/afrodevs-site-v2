import { motion } from "framer-motion";
import { FadeAnimProps } from "../types";

const FadeRight = ({ children, delay, className }: FadeAnimProps) => {
	return (
		<motion.div
			initial={{ opacity: 0.01, transform: "translateX(50px)" }}
			animate={{
				opacity: 1,
				transform: "translateX(0px)",
			}}
			transition={{
				duration: 1,
				ease: [0.645, 0.045, 0.355, 1],
				delay,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default FadeRight;
