import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { CarouselButtonsProps } from "../../types";

const CarouselBUttons = ({ onPrevious, onNext }: CarouselButtonsProps) => {
	return (
		<div className="carousel-buttons flex gap-4">
			<button onClick={onPrevious}>
				<HiArrowLeft size={20} />
			</button>
			<button onClick={onNext}>
				<HiArrowRight size={20} />
			</button>
		</div>
	);
};

export default CarouselBUttons;
