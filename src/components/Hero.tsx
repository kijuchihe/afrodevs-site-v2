import Button from "../UI/Button";
import CTAButton from "../UI/CTAButton";
import HeroImg from "../assets/images/hero-img.png";

const Hero = () => {
	return (
		<section>
			<div className="c-container py-8 px-5 flex flex-col md:flex-row gap-12">
				<div>
					<h1 className="text-brand-green">
						Ship your ideas with a{" "}
						<span className="text-green">
							reliable engineering team.
						</span>
					</h1>
					<p className="text-grey mt-4 mb-8 md:mt-6">
						Afrodevs is a community of vetted engineers that work
						fast and provide experience & ideas that get your
						projects up and running.
					</p>
					<div className="flex items-center gap-2">
						<CTAButton className="bg-green w-fit hover:bg-darkened-green text-white">
							Hire Us
						</CTAButton>
						<Button className="text-brand-green bg-light-green">
							See our work
						</Button>
					</div>
				</div>
				<div className="flex justify-center">
					<img src={HeroImg} alt="hero image" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
