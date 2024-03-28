import { useEffect, useState } from "react";
import data from "../../data";
import ReviewCard from "./ReviewCard";
import CarouselBUttons from "./CarouselBUttons";

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
	const [current, setCurrent] = useState(0);
	const { reviews } = data;

	const prev = () => {
		setCurrent((current) =>
			current === 0 ? reviews.length - 1 : current - 1
		);
	};

	const next = () => {
		setCurrent((current) =>
			current === reviews.length - 1 ? 0 : current + 1
		);
	};

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);

	return (
		<div className="max-w-xs  max-[340px]:max-w-[270px]">
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
			<div className="mt-5 mb-10">
				<div className="flex items-center justify-center gap-2">
					{reviews.map((_, index) => (
						<div
							key={index}
							className={`transition-all w-2 h-2 rounded-xl ease-in-out duration-500 ${
								current === index
									? "w-[21px] bg-green"
									: "bg-light-green"
							}`}
						/>
					))}
				</div>
			</div>

			<CarouselBUttons onPrevious={prev} onNext={next} />
		</div>
	);
};

export default Carousel;
