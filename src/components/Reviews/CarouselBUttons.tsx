import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { CarouselButtonsProps } from "../../types";
import AnimButton from "../../animation components/AnimButton";

const CarouselBUttons = ({ onPrevious, onNext }: CarouselButtonsProps) => {
	return (
		<div className="carousel-buttons flex gap-4 text-[20px] lg:text-[32px]">
			<AnimButton onClick={onPrevious}>
				<HiArrowLeft />
			</AnimButton>
			<AnimButton onClick={onNext}>
				<HiArrowRight />
			</AnimButton>
		</div>
	);
};

export default CarouselBUttons;
