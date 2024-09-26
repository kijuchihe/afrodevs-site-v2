import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { CarouselButtonsProps } from "../../../types";

const CarouselBUttons = ({ onPrevious, onNext }: CarouselButtonsProps) => {
	return (
		<div className="carousel-buttons flex gap-4 text-[20px] lg:text-[32px]">
			<button onClick={onPrevious}>
				<HiArrowLeft />
			</button>
			<button onClick={onNext}>
				<HiArrowRight />
			</button>
		</div>
	);
};

export default CarouselBUttons;
