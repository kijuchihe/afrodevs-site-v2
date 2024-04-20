import { motion } from "framer-motion";
import { FadeAnimProps } from "../types";

const FadeUp = ({ children, delay }: FadeAnimProps) => {
	return (
		<motion.div
			initial={{ opacity: 0.01, transform: "translateY(50px)" }}
			animate={{
				opacity: 1,
				transform: "translateY(0px)",
			}}
			transition={{
				duration: 1,
				ease: [0.645, 0.045, 0.355, 1],
				delay,
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeUp;
