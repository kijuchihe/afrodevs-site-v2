import CTAButton from "../../ui/CTAButton";
import FadeUpInView from "../../animation/FadeUpInView";
import StatusCards from "../../features/WorkTogetherSection/StatusCards";
import { useForm } from "../../../contexts/FormContext";

const WorkTogetherSection = () => {
  const { setShowFormPopup } = useForm();

  return (
    <section className="bg-white pt-[30px]">
      <div className="flex flex-col gap-12 section lg:flex-row lg:gap-10 lg:justify-between min-[646px]:gap-24">
        <div className="space-y-6 sm:text-center lg:text-left">
          <FadeUpInView>
            <h2 className="text-brand-green">Let’s work together!</h2>
          </FadeUpInView>
          <FadeUpInView>
            <p className="text-grey sm:max-w-[500px] mx-auto lg:mx-0 lg:max-w-md">
              Need a website that converts, a mobile app, or have an idea that
              wows, or something else entirely? Afrodevs offers a full range of
              tech expertise to bring your ideas to life.
            </p>
          </FadeUpInView>
          <FadeUpInView>
            <CTAButton
              onClick={() => setShowFormPopup(true)}
              className="text-white bg-brand-green w-fit sm:mx-auto lg:mx-0 hover:bg-darkened-brand-green"
            >
              Get started
            </CTAButton>
          </FadeUpInView>
        </div>
        <div className="lg:flex-1 lg:flex lg:justify-end">
          <StatusCards />
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
