import Button from "../UI/Button";
import CTAButton from "../UI/CTAButton";
import heroImg from "../assets/images/hero-img.png";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-col gap-12 px-5 pb-8 c-container md:flex-row pt-[142px]">
				<div>
					<h1 className="text-brand-green">
						Ship your ideas with a{" "}
						<span className="text-green">
							reliable engineering team.
						</span>
					</h1>
					<p className="mt-4 mb-8 text-grey md:mt-6">
						Afrodevs is a community of vetted engineers that work
						fast and provide experience & ideas that get your
						projects up and running.
					</p>
					<div className="flex items-center gap-2">
						<CTAButton className="text-white bg-green w-fit hover:bg-darkened-green">
							Hire Us
						</CTAButton>
						<Button className="text-brand-green bg-light-green">
							See our work
						</Button>
					</div>
				</div>
				<div className="flex justify-center">
					<img src={heroImg} alt="hero image" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
