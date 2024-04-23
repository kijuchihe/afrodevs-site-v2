import { useEffect, useRef, useState } from "react";
import FadeUpInView from "../../animation components/FadeUpInView";
import { StatusCardProps } from "../../types";
import { useInView } from "framer-motion";

const StatusCard = ({
	icon,
	amount,
	title,
	bgColor,
	textColor,
}: StatusCardProps) => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return console.log("in view", false);

		if (count < amount) {
			setCount((prevCount) => prevCount + 1);
		}
	}, [isInView, count, amount]);

	return (
		<FadeUpInView>
			<div
				ref={ref}
				className={`${bgColor} flex items-center p-4 rounded-xl gap-3 min-[624px]:p-6`}
			>
				<div className="w-12">
					<img src={icon} alt="icon" className="w-full" />
				</div>
				<div className={`${textColor} gap-[3px]`}>
					<h4>{count}+</h4>
					<div className="font-medium uppercase">{title}</div>
				</div>
			</div>
		</FadeUpInView>
	);
};

export default StatusCard;
