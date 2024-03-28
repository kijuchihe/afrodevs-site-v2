import quotes from "../../assets/svgs/quotes.svg";
import star from "../../assets/svgs/star.svg";
import { ReviewCardProps } from "../../types";

const ReviewCard = ({
	image,
	name,
	status,
	comment,
	rating,
}: ReviewCardProps) => {
	const starRating = [...Array(rating).fill("")];
	return (
		<div className="px-6 py-5 border-2 border-light-grey rounded-[10px] space-y-8 min-w-full">
			<p className="text-grey text-sm">{comment}</p>
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<div>
							<img src={image} alt="avatar" />
						</div>
						<div className="text-[12px]">
							<div className="font-semibold text-brand-green">
								{name}
							</div>
							<div className="text-grey">{status}</div>
						</div>
					</div>
					<div className="flex gap-1">
						{starRating.map((_, index) => (
							<div key={index} className="w-4">
								<img src={star} alt="star" className="w-full" />
							</div>
						))}
					</div>
				</div>
				<div className="w-10">
					<img src={quotes} alt="quotes icon" className="w-full" />
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
