import CardButton from "../../UI/CardButton";
import { ServiceCardProps } from "../../types";

const Card = ({ Icon, title, description, link }: ServiceCardProps) => {
	return (
		<div className="flex flex-col bg-white rounded-[20px] p-6 gap-8">
			<div>
				<div className="text-brand-green bg-light-green rounded-[10px] w-fit p-4">
					<Icon size={30} />
				</div>
			</div>
			<div>
				<h4 className="text-brand-green">{title}</h4>
				<p className="mt-3 mb-5 text-grey">{description}</p>
				<CardButton
					arrowType="short"
					className="text-green bg-transparent p-0 font-medium"
					link={link}
				>
					Learn More
				</CardButton>
			</div>
		</div>
	);
};

export default Card;
