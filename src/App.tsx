import Hero from "./components/Hero";
import Navbar from "./containers/Navbar";
import Projects from "./containers/Projects";
import Services from "./containers/Services";
import Testimonials from "./containers/Reviews";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Projects />
			<Testimonials />
		</>
	);
};

export default App;
