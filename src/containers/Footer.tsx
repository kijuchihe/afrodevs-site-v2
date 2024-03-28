import FooterLinks from "../components/Footer/FooterLinks";
import Logo from "../components/Logo";
import Button from "../UI/Button";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<section className="bg-white py-[30px]">
			<div className="flex flex-col gap-32 px-5 py-8 c-container">
				<div className="space-y-6">
					<h2 className="text-brand-green">
						What will you build today?
					</h2>
					<p className="text-grey">
						Leverage Afrodev’s community of vetted engineers.
					</p>
					<Button className="block text-white bg-green w-fit">
						Let's talk
					</Button>
				</div>
				<FooterLinks />
			</div>
			<div className="px-5 py-8 c-container">
				<div className="flex flex-col gap-3 pt-6 border-t border-light-grey">
					<Logo width="w-36" />
					<div className="text-sm text-grey">
						©{year} Afrodevs. All rights reserved
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
