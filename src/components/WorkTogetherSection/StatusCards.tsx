import StatusCard from "./StatusCard";

import icon1 from "../../assets/svgs/smiley-face.svg";
import icon2 from "../../assets/svgs/users.svg";
import icon3 from "../../assets/svgs/award.svg";
import icon4 from "../../assets/svgs/package.svg";

const StatusCards = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<StatusCard
					icon={icon1}
					amount={200}
					title="Satisfied Clients"
					bgColor="bg-light-brown"
					textColor="text-brown"
				/>
				<StatusCard
					icon={icon2}
					amount={7}
					title="Years of experience"
					bgColor="bg-light-lime"
					textColor="text-lime"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<StatusCard
					icon={icon3}
					amount={17}
					title="Awards earned"
					bgColor="bg-light-blue"
					textColor="text-blue"
				/>
				<StatusCard
					icon={icon4}
					amount={152}
					title="Projects Completed"
					bgColor="bg-light-pink"
					textColor="text-pink"
				/>
			</div>
		</div>
	);
};

export default StatusCards;
