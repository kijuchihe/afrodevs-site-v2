import CTAButton from "../UI/CTAButton";
import StatusCards from "../components/WorkTogetherSection/StatusCards";

const WorkTogetherSection = () => {
	return (
		<section className="bg-white pt-[30px]">
			<div className="flex flex-col gap-12 section lg:flex-row lg:gap-10 lg:justify-between min-[646px]:gap-24">
				<div className="space-y-6 sm:text-center lg:text-left">
					<h2 className="text-brand-green">Let’s work together!</h2>
					<p className="text-grey sm:max-w-[500px] mx-auto lg:mx-0 lg:max-w-md">
						Pizza ipsum dolor amet thin crust large black olives &
						tomato fresh tomatoes Pizza ipsum dolor amet thin crust
						large black fresh tomatoes Pizza ipsum dolor amet thin
						crust large black.
					</p>
					<CTAButton className="text-white bg-brand-green w-fit sm:mx-auto lg:mx-0">
						Get started
					</CTAButton>
				</div>
				<div className="lg:flex-1 lg:flex lg:justify-end">
					<StatusCards />
				</div>
			</div>
		</section>
	);
};

export default WorkTogetherSection;
