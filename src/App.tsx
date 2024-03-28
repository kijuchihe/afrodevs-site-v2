import Hero from "./components/Hero";
import Navbar from "./containers/Navbar";
import Projects from "./containers/Projects";
import Services from "./containers/Services";
import Testimonials from "./containers/Reviews";
import WorkTogetherSection from "./containers/WorkTogetherSection";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Projects />
			<Testimonials />
			<WorkTogetherSection />
		</>
	);
};

export default App;
