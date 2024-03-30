import Carousel from "../components/Reviews/Carousel";
import CarouselBUttons from "../components/Reviews/CarouselBUttons";
import data from "../data";
import useReviewSlider from "../hooks/use-ReviewSlider";
const Reviews = () => {
	const { reviews } = data;
	const { current, prev, next } = useReviewSlider({
		reviews,
		autoSlide: true,
		autoSlideInterval: 3000,
	});

	return (
		<section className="bg-white pt-[30px]">
			<div className="flex flex-col gap-12 section md:flex-row md:justify-between md:gap-0 md:items-center">
				<div className="md:space-y-6">
					<h2 className="text-brand-green sm:text-center md:text-left">
						What our clients say
						<br className="hidden sm:block" />
						about our work
					</h2>
					<div className="hidden md:block">
						<CarouselBUttons onPrevious={prev} onNext={next} />
					</div>
				</div>
				<div className="flex justify-center md:justify-end">
					<Carousel
						reviews={reviews}
						current={current}
						prev={prev}
						next={next}
					/>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
