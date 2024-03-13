import Section from "./Section";

import { curve } from "../assets";

import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="-mt-[5.25] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="md?mb-20 relative z-1 mx-auto mb-[4rem] max-w-[62rem] text-center lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with BrainwaveCurve
            <span className="relative inline-block">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
