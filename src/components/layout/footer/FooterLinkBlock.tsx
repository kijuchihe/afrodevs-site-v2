import { FooterLinkBlockProps } from "../../../types";

const FooterLinkBlock = ({ title, children }: FooterLinkBlockProps) => {
	return (
		<div className="space-y-4 text-sm text-grey sm:text-base">
			<div className="font-semibold">{title}</div>
			<ul className="space-y-2">{children}</ul>
		</div>
	);
};

export default FooterLinkBlock;
