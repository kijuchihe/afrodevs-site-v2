import FadeUpInView from "../../animation/FadeUpInView";
import { ProjectCardProps } from "../../../types";
import CardButton from "../../ui/CardButton";

const ProjectCard = ({
	image,
	title,
	description,
	link,
	delay,
}: ProjectCardProps) => {
	return (
		<FadeUpInView
			delay={delay}
			className="border rounded-lg border-light-grey sm:max-w-lg"
		>
			<div>
				<img
					src={image}
					alt="project 1"
					className="object-contain w-full rounded-t-lg aspect-auto"
				/>
			</div>
			<figcaption className="p-6 rounded-b-lg bg-light-green">
				<h4 className="text-brand-green">{title}</h4>
				<p className="mt-2 mb-6 text-grey">{description}</p>
				<CardButton
					arrowType="long"
					className="p-0 bg-transparent text-green"
					link={link}
				>
					Read full case study
				</CardButton>
			</figcaption>
		</FadeUpInView>
	);
};

export default ProjectCard;
