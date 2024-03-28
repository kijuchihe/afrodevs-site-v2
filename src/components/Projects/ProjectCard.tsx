import { ProjectCardProps } from "../../types";
import CardButton from "../../UI/CardButton";

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
	return (
		<figure className="border border-light-grey rounded-lg">
			<div>
				<img src={image} alt="project 1" className="rounded-t-lg" />
			</div>
			<figcaption className="bg-light-green rounded-b-lg p-6">
				<h4 className="text-brand-green">{title}</h4>
				<p className="text-grey mt-2 mb-6">{description}</p>
				<CardButton
					arrowType="long"
					className="text-green bg-transparent p-0"
					link={link}
				>
					Read full case study
				</CardButton>
			</figcaption>
		</figure>
	);
};

export default ProjectCard;
