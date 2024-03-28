import Carousel from "../components/Reviews/Carousel";

const Reviews = () => {
	return (
		<section className="bg-white pt-[30px]">
			<div className="c-container py-8 px-5 flex flex-col gap-12">
				<div>
					<h2 className="text-brand-green">
						What our clients say about our work
					</h2>
				</div>
				<div className="flex justify-center">
					<Carousel autoSlide={true} />
				</div>
			</div>
		</section>
	);
};

export default Reviews;
