import { useState, useEffect } from "react";

const useNavbarScroll = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const changeHeight = () => {
			if (window.scrollY > 100) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		const onScroll = setTimeout(() => {
			window.addEventListener("scroll", changeHeight);
		}, 500);

		return () => {
			clearTimeout(onScroll);
			window.removeEventListener("scroll", changeHeight);
		};
	}, []);

	return scroll;
};

export default useNavbarScroll;
