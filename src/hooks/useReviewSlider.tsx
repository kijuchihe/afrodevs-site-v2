import { useState, useEffect } from "react";
import { ReviewSliderHookProps } from "../types";

const useReviewSlider = ({
	reviews,
	autoSlide,
	autoSlideInterval,
}: ReviewSliderHookProps) => {
	const [current, setCurrent] = useState(0);

	const prev = () => {
		setCurrent((current) =>
			current === 0 ? reviews.length - 1 : current - 1
		);
	};

	const next = () => {
		setCurrent((current) =>
			current === reviews.length - 1 ? 0 : current + 1
		);
	};

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { current, prev, next };
};

export default useReviewSlider;
