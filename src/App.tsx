import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
// import Projects from "./containers/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HireForm from "./components/Hero/HireForm";
import Footer from "./containers/Footer";
import Testimonials from "./containers/Reviews";
import Services from "./containers/Services";
import WorkTogetherSection from "./containers/WorkTogetherSection";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			{/* <Projects /> */}
			<Testimonials />
			<WorkTogetherSection />
			<Footer />
			<ToastContainer />
			<HireForm />
		</>
	);
};

export default App;
