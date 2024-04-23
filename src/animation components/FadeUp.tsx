import { motion } from "framer-motion";
import { FadeAnimProps } from "../types";

const FadeUp = ({ children, delay }: FadeAnimProps) => {
	return (
		<motion.div
			initial={{ opacity: 0.01, translateY: 50 }}
			animate={{
				opacity: 1,
				translateY: 0,
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
