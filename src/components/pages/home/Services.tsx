import ServiceCard from "../../features/Services/ServiceCard";
import data from "../../../data";
import pattern from "/assets/svgs/pattern.svg";
import blob from "/assets/svgs/blob.svg";
import FadeUpInView from "../../animation/FadeUpInView";

const Services = () => {
  const { services } = data;
  return (
    <section className="bg-light-green pt-[30px] overflow-hidden">
      <div className="flex relative flex-col gap-12 items-center section">
        <div className="relative z-10 space-y-6 text-brand-green sm:text-center">
          <FadeUpInView>
            <h2>
              Diverse services <br className="hidden sm:block" /> to help your
              business
            </h2>
          </FadeUpInView>
          <FadeUpInView>
            <p className="sm:max-w-[500px]">
              Afrodevs brings your tech dreams to reality. Our expert team
              offers a full spectrum of services, including UI/UX design for
              intuitive user experiences, powerful mobile app development,
              cutting-edge web development, and data-driven SEO marketing to
              boost your online presence. Let's craft a solution that elevates
              your brand and drives results.
            </p>
          </FadeUpInView>
        </div>
        <div className="grid relative z-10 gap-4 justify-center md:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard {...service} key={service.id} delay={i * 0.2} />
          ))}
        </div>
        <div className="hidden absolute -right-10 top-16 md:block">
          <img src={pattern} alt="background illustration" />
        </div>
        <div className="hidden absolute -left-4 bottom-5 md:block">
          <img src={blob} alt="background illustration" />
        </div>
      </div>
    </section>
  );
};

export default Services;
