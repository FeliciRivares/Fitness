import React from "react";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="md:pd-0 gap-16 bg-gray-20 py-10 md:h-full">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home) }
        >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADER */}
          <motion.div className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden:{opacity: 0, x: -50},
            visible:{opacity: 1, x: 0},
          }}>
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Unleash Your Inner Strength, Unleash Your Potential at our Fitness
              Hall. Discover a World of Fitness Excellence with State-of-the-Art
              Equipment, Expert Guidance, and a Community that Inspires. Elevate
              Your Fitness Journey and Embrace a Life of Health, Vitality, and
              Success.
            </p>
          </motion.div>
          {/* ACTION */}
          <motion.div className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 1}}
                        variants={{
                          hidden:{opacity: 0, y: 100},
                          visible:{opacity: 1, y: 0},
                        }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:bg-secondary-500"
              onClick={() => SelectedPage.ContactUs}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <motion.div className="mb:justify-items-end flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1}}
                    variants={{
                    hidden:{opacity: 0, x: 50},
                    visible:{opacity: 1, x: 0},
        }}>
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </motion.div>
      </motion.div>
      {/* SPONSOR */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 ">
          <motion.div className="flex justify-center gap-[10%]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.8}}
                    variants={{
                    hidden:{opacity: 0, y: 50},
                    visible:{opacity: 1, y: 0},
                    }}>
            <div>
              <img src={SponsorForbes} alt="SponsorForbes" />
            </div>
            <div>
              <img src={SponsorFortune} alt="SponsorFortune" />
            </div>
            <div>
              <img src={SponsorRedBull} alt="SponsorRedBull" />
            </div>
          </motion.div>
        </div>
      )}
      <div></div>
    </section>
  );
};

export default Home;

