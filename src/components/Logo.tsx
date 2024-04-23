import { Link } from "react-router-dom";
import logo from "../assets/svgs/logo.svg";

const Logo = ({ width }: { width?: string }) => {
	return (
		<Link to="/" className={`block ${width || "w-40"}`}>
			<img src={logo} alt="Afrodevs" className="w-full" />
		</Link>
	);
};

export default Logo;
