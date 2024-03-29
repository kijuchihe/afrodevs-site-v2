import ServiceCard from "../components/Services/ServiceCard";
import data from "../data";

const Services = () => {
	const { services } = data;
	return (
		<section className="bg-light-green pt-[30px]">
			<div className="flex flex-col items-center section">
				<div className="space-y-6 text-brand-green sm:text-center">
					<h2>
						Diverse services <br className="hidden sm:block" /> to
						help your business
					</h2>
					<p className="sm:max-w-[500px]">
						Pizza ipsum dolor amet thin crust large black olives &
						tomato fresh tomatoes Pizza ipsum dolor amet thin crust
						large black.
					</p>
				</div>
				<div className="grid justify-center gap-4 md:grid-cols-2">
					{services.map((service) => (
						<ServiceCard {...service} key={service.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
