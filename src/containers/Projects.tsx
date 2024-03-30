import ProjectCard from "../components/Projects/ProjectCard";
import data from "../data";

const Projects = () => {
	const { projects } = data;
	return (
		<section className="bg-white pt-[30px]">
			<div className="flex flex-col items-center gap-12 section">
				<div className="space-y-6 sm:text-center">
					<h2 className="text-brand-green">Our featured projects</h2>
					<p className="text-grey sm:max-w-[500px]">
						Pizza ipsum dolor amet thin crust large black olives &
						tomato fresh tomatoes Pizza ipsum dolor amet thin crust
						large black.
					</p>
				</div>
				<div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard {...project} key={project.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
