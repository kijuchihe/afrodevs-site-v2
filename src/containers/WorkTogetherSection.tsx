import CTAButton from "../UI/CTAButton";
import StatusCards from "../components/WorkTogetherSection/StatusCards";

const WorkTogetherSection = () => {
	return (
		<section className="bg-white pt-[30px]">
			<div className="c-container py-8 px-5 flex flex-col gap-12">
				<div className="space-y-6">
					<h2 className="text-brand-green">Let’s work together!</h2>
					<p className="text-grey">
						Pizza ipsum dolor amet thin crust large black olives &
						tomato fresh tomatoes Pizza ipsum dolor amet thin crust
						large black fresh tomatoes Pizza ipsum dolor amet thin
						crust large black.
					</p>
					<CTAButton className="bg-brand-green text-white w-fit">
						Get started
					</CTAButton>
				</div>
				<div>
					<StatusCards />
				</div>
			</div>
		</section>
	);
};

export default WorkTogetherSection;
