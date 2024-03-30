import FooterLinkBlock from "./FooterLinkBlock";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";

const FooterLinks = () => {
	return (
		<div className="footer-links">
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
				<li className="flex items-center gap-2 sm:gap-3">
					<span>
						<LuMail />
					</span>
					<a href="mailto:build@afrodevs.com">build@afrodevs.com</a>
				</li>
				<li className="flex items-center gap-2 sm:gap-3">
					<span>
						<MdOutlineLocalPhone />
					</span>
					<a href="tel:+16515600093">+1 (651) 560-0093</a>
				</li>
				<li className="flex items-center gap-2 sm:gap-3">
					<span>
						<FaXTwitter />
					</span>
					<a href="https://twitter.com/afrodevs" target="_blank">
						@afrodevs
					</a>
				</li>
			</FooterLinkBlock>
		</div>
	);
};

export default FooterLinks;
