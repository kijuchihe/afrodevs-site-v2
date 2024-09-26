import ReviewCard from "./ReviewCard";
import CarouselBUttons from "./CarouselBUttons";
import { CarouselProps } from "../../../types";

const Carousel = ({ reviews, current, prev, next }: CarouselProps) => {
	return (
		<div className="max-w-xs  max-[340px]:max-w-[270px] sm:max-w-md min-[768px]:max-w-lg md:max-w-md min-[1080px]:max-w-[515px]">
			<div className="overflow-hidden">
				<div
					className="flex transition-transform ease-out duration-500"
					style={{
						transform: `translateX(-${current * 100}%)`,
					}}
				>
					{reviews.map((review) => (
						<ReviewCard {...review} key={review.id} />
					))}
				</div>
			</div>
			{/* Pagination */}
			<div className="mt-5 mb-10 md:mt-12 md:mb-0">
				<div className="flex items-center justify-center gap-2 md:justify-start">
					{reviews.map((_, index) => (
						<div
							key={index}
							className={`transition-all w-2 h-2 rounded-xl ease-in-out duration-500 ${current === index
									? "w-[21px] bg-green"
									: "bg-light-green"
								}`}
						/>
					))}
				</div>
			</div>

			<div className="md:hidden">
				<CarouselBUttons onPrevious={prev} onNext={next} />
			</div>
		</div>
	);
};

export default Carousel;
