import CardButton from "../../UI/CardButton";
import FadeUpInView from "../../animation components/FadeUpInView";
import { ServiceCardProps } from "../../types";

const ServiceCard = ({ Icon, title, description, link, delay }: ServiceCardProps) => {
	return (
		<FadeUpInView delay={delay} className="flex flex-col bg-white rounded-[20px] p-6 gap-8 border-[#E6E8EC]/50 border sm:max-w-xl sm:flex-row md:gap-4 lg:gap-8 lg:p-10">
			<div>
				<div className="text-green bg-light-green rounded-[10px] w-fit p-4 lg:p-5">
					<Icon size={30} />
				</div>
			</div>
			<div className="flex flex-col">
				<h4 className="text-brand-green">{title}</h4>
				<p className="mt-3 mb-5 text-grey">{description}</p>
				<CardButton
					arrowType="short"
					className="p-0 mt-auto font-medium bg-transparent text-green"
					link={link}
				>
					Learn More
				</CardButton>
			</div>
		</FadeUpInView>
	);
};

export default ServiceCard;
