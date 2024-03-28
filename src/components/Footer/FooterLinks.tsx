import FooterLinkBlock from "./FooterLinkBlock";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";

const FooterLinks = () => {
	return (
		<div className="flex flex-col gap-8">
			<FooterLinkBlock title="Company">
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Case studies</a>
				</li>
				<li>
					<a href="#">Community</a>
				</li>
			</FooterLinkBlock>
			<FooterLinkBlock title="Services">
				<li>
					<a href="#">UI/UX Design</a>
				</li>
				<li>
					<a href="#">App Development</a>
				</li>
				<li>
					<a href="#">Frontend Development</a>
				</li>
			</FooterLinkBlock>
			<FooterLinkBlock title="Contact us">
				<li className="flex items-center gap-2">
					<LuMail />
					<a href="#">work@afro.dev</a>
				</li>
				<li className="flex items-center gap-2">
					<MdOutlineLocalPhone />
					<a href="#">+234(080)5788xxx</a>
				</li>
				<li className="flex items-center gap-2">
					<FaXTwitter />
					<a href="#">afrodev.community</a>
				</li>
			</FooterLinkBlock>
		</div>
	);
};

export default FooterLinks;
