import FadeUpInView from "../../animation/FadeUpInView";
import FooterLinks from "../../layout/footer/FooterLinks";
import Logo from "../../Logo";
import { useForm } from "../../../contexts/FormContext";
import Button from "../../ui/Button";

const Footer = () => {
  const { setShowFormPopup } = useForm();

  const year = new Date().getFullYear();
  return (
    <section className="bg-white pt-[30px]">
      <div className="flex flex-col gap-32 section lg:flex-row lg:justify-between lg:gap-0">
        <div className="sm:text-center lg:text-left lg:flex-1">
          <FadeUpInView>
            <h2 className="text-brand-green">
              What will you build today?
            </h2>
          </FadeUpInView>
          <FadeUpInView>
            <p className="text-grey sm:max-w-[500px] mx-auto lg:mx-0 lg:max-w-md mt-4 mb-6">
              Leverage Afrodev’s community of vetted engineers.
            </p>
          </FadeUpInView>
          <FadeUpInView>
            <Button
              onClick={() => setShowFormPopup(true)}
              className="block text-white transition-smooth bg-green w-fit sm:mx-auto lg:mx-0 hover:bg-darkened-green"
            >
              Let's talk
            </Button>
          </FadeUpInView>
        </div>
        <FadeUpInView>
          <FooterLinks />
        </FadeUpInView>
      </div>
      <FadeUpInView className="px-5 py-8 c-container">
        <div className="flex flex-col gap-3 pt-6 border-t border-light-grey sm:flex-row sm:items-center sm:justify-between">
          <Logo width="w-36 md:w-40" />
          <div className="text-sm text-grey md:text-base">
            ©{year} Afrodevs. All rights reserved
          </div>
        </div>
      </FadeUpInView>
    </section>
  );
};

export default Footer;
