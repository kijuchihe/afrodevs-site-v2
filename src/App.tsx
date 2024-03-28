import Hero from "./components/Hero";
import Navbar from "./containers/Navbar";
import Projects from "./containers/Projects";
import Services from "./containers/Services";
import Testimonials from "./containers/Reviews";
import WorkTogetherSection from "./containers/WorkTogetherSection";
import Footer from "./containers/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Projects />
			<Testimonials />
			<WorkTogetherSection />
			<Footer />
		</>
	);
};

export default App;
