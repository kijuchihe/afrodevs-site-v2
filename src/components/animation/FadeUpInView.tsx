import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeAnimProps } from "../../types";

const FadeUpInView = ({ children, className, delay = 0 }: FadeAnimProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={className}
			ref={ref}
			animate={{
				opacity: isInView ? 1 : 0.01,
				translateY: isInView ? 0 : 50,
			}}
			transition={{
				duration: 0.8,
				ease: [0.645, 0.045, 0.355, 1],
				delay,
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeUpInView;
