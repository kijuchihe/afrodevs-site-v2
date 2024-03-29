import { NavLinkProps } from "../../types";

const Navlink = ({ name, onClick }: NavLinkProps) => {
	const id = name.toLowerCase().split(" ").join("-");
	return (
		<li>
			<a href={`#${id}`} className="nav-link" onClick={onClick}>
				{name}
			</a>
		</li>
	);
};

export default Navlink;
