import Card from "../components/Services/Card";
import data from "../data";

const Services = () => {
	const { services } = data;
	return (
		<section className="bg-light-green pt-[30px]">
			<div className="c-container py-8 px-5 flex flex-col items-center gap-12">
				<div className="text-brand-green space-y-6">
					<h2>Diverse services to help your business</h2>
					<p>
						Pizza ipsum dolor amet thin crust large black olives &
						tomato fresh tomatoes Pizza ipsum dolor amet thin crust
						large black.
					</p>
				</div>
				<div className="grid gap-4">
					{services.map((service) => (
						<Card {...service} key={service.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
