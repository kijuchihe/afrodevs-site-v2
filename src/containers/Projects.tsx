import Card from "../components/Projects/ProjectCard";
import data from "../data";

const Projects = () => {
	const { projects } = data;
	return (
		<section className="bg-white pt-[30px]">
			<div className="c-container py-8 px-5 flex flex-col items-center gap-12">
				<div className="space-y-6">
					<h2 className="text-brand-green">Our featured projects</h2>
					<p className="text-grey">
						Pizza ipsum dolor amet thin crust large black olives &
						tomato fresh tomatoes Pizza ipsum dolor amet thin crust
						large black.
					</p>
				</div>
				<div className="grid gap-6">
					{projects.map((project) => (
						<Card {...project} key={project.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
