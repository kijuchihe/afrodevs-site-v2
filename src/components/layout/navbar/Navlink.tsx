import { NavLinkProps } from "../../../types";

const Navlink = ({ name, onClick }: NavLinkProps) => {
	const id = name.toLowerCase().split(" ").join("-");
	return (
		<div>
			<a href={`#${id}`} className="nav-link" onClick={onClick}>
				{name}
			</a>
		</div>
	);
};

export default Navlink;
