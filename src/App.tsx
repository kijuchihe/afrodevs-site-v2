import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
// import Projects from "./containers/Projects";
import Services from "./containers/Services";
import Testimonials from "./containers/Reviews";
import WorkTogetherSection from "./containers/WorkTogetherSection";
import Footer from "./containers/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    </>
  );
};

export default App;
