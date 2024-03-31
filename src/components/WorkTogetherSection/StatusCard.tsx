import { StatusCardProps } from "../../types";

const StatusCard = ({
	icon,
	amount,
	title,
	bgColor,
	textColor,
}: StatusCardProps) => {
	return (
		<div
			className={`${bgColor} flex items-center p-4 rounded-xl gap-3 min-[624px]:p-6`}
		>
			<div className="w-12">
				<img src={icon} alt="icon" className="w-full" />
			</div>
			<div className={`${textColor} gap-[3px]`}>
				<h4>{amount}+</h4>
				<div className="font-medium uppercase">{title}</div>
			</div>
		</div>
	);
};

export default StatusCard;
