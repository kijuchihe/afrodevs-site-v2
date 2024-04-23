import ServiceCard from "../components/Services/ServiceCard";
import data from "../data";
import pattern from "../assets/svgs/pattern.svg";
import blob from "../assets/svgs/blob.svg";
import FadeUpInView from "../animation components/FadeUpInView";

const Services = () => {
	const { services } = data;
	return (
		<section className="bg-light-green pt-[30px] overflow-hidden">
			<div className="relative flex flex-col items-center gap-12 section">
				<div className="relative z-10 space-y-6 text-brand-green sm:text-center">
					<FadeUpInView>
						<h2>
							Diverse services <br className="hidden sm:block" />{" "}
							to help your business
						</h2>
					</FadeUpInView>
					<FadeUpInView>
						<p className="sm:max-w-[500px]">
							Pizza ipsum dolor amet thin crust large black olives
							& tomato fresh tomatoes Pizza ipsum dolor amet thin
							crust large black.
						</p>
					</FadeUpInView>
				</div>
				<div className="relative z-10 grid justify-center gap-4 md:grid-cols-2">
					{services.map((service, i) => (
						<ServiceCard
							{...service}
							key={service.id}
							delay={i * 0.2}
						/>
					))}
				</div>
				<div className="absolute hidden md:block -right-10 top-16">
					<img src={pattern} alt="background illustration" />
				</div>
				<div className="absolute hidden md:block -left-4 bottom-5">
					<img src={blob} alt="background illustration" />
				</div>
			</div>
		</section>
	);
};

export default Services;
