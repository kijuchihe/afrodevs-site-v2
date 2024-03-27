import Hero from "./components/Hero";
import Navbar from "./containers/Navbar";
import Services from "./containers/Services";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
		</>
	);
};

export default App;
