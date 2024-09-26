import Hero from "./components/pages/home/Hero";
// import Navbar from "./components/pages/home/Navbar";
// import Projects from "./Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HireForm from "./components/features/Hero/HireForm";
// import Footer from "./components/pages/home/Footer";
import Testimonials from "./components/pages/home/Reviews";
import Services from "./components/pages/home/Services";
import WorkTogetherSection from "./components/pages/home/WorkTogetherSection";
import Layout from "./components/layout";


const App = () => {
	return (
		<>

			<Layout>
				<Hero />
				<Services />
				{/* <Projects /> */}
				<Testimonials />
				<WorkTogetherSection />
			</Layout>

			<ToastContainer />
			<HireForm />
		</>
	);
};

export default App;
