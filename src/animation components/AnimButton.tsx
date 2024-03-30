import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	onClick: () => void;
};

const AnimButton = ({ children, onClick }: Props) => {
	return (
        <motion.button whileTap={{ scale: 0.75 }} onClick={onClick}>
			{children}
		</motion.button>
	);
};

export default AnimButton;
