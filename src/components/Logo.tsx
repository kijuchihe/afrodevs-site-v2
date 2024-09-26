import logo from "/assets/svgs/logo.svg";

const Logo = ({ width }: { width?: string }) => {
	return (
		<a href="/" className={`block ${width || "w-40"}`}>
			<img src={logo} alt="Afrodevs" className="w-full" />
		</a>
	);
};

export default Logo;
