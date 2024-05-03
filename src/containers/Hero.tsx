import { useState } from "react";
import Button from "../UI/Button";
import CTAButton from "../UI/CTAButton";
import FadeUp from "../animation components/FadeUp";
import heroImg from "../assets/images/hero-img.png";
import HireForm from "../components/Hero/HireForm";

const Hero = () => {
  const [showFormPopup, setShowFormPopup] = useState<boolean>(false);

  return (
    <section>
      <div className="flex flex-col gap-12 pb-8 px-5 c-container md:flex-row pt-[142px] md:pt-[174px] md:gap-0 md:pb-16 md:justify-between lg:pb-20 lg:pt-[190px]">
        <div className="lg:w-1/2">
          <FadeUp delay={1}>
            <h1 className="max-w-[556px] text-brand-green min-[768px]:max-w-2xl md:max-w-[390px] lg:max-w-lg">
              Ship your ideas with a{" "}
              <span className="text-green">reliable engineering team.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={1.2}>
            <p className="mt-4 mb-8 text-grey min-[768px]:mt-6 max-w-[450px] min-[768px]:max-w-xl md:max-w-[470px] lg:max-w-xl">
              Afrodevs is a community of vetted engineers that work fast and
              provide experience & ideas that get your projects up and running.
            </p>
          </FadeUp>
          <FadeUp delay={1.4}>
            <div className="flex items-center gap-2">
              <CTAButton
                className="text-white bg-green w-fit hover:bg-darkened-green"
                onClick={() => setShowFormPopup(true)}
              >
                Hire Us
              </CTAButton>
              <Button className="text-brand-green bg-light-green hover:bg-darkened-light-green">
                See our work
              </Button>
            </div>
          </FadeUp>
        </div>
        <FadeUp
          delay={1}
          className="flex justify-center w-full max-w-xl mx-auto md:-mt-6 lg:w-1/2 lg:justify-end md:mx-0 md:max-w-none md:w-auto"
        >
          <img
            src={heroImg}
            alt="hero image"
            className="object-contain w-full md:w-auto"
          />
        </FadeUp>
      </div>
      <HireForm
        showFormPopup={showFormPopup}
        setShowFormPopup={setShowFormPopup}
      />
    </section>
  );
};

export default Hero;
