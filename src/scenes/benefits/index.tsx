import { BenefitType, SelectedPage } from "@/shared/types";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Discover a World of Fitness Excellence with State-of-the-Art Equipment, Expert Guidance, and a Community that Inspires. Elevate Your Fitness Journey and Embrace a Life of Health, Vitality, and Success."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100`s of Drivers Classes",
        description: "Discover a World of Fitness Excellence with State-of-the-Art Equipment, Expert Guidance, and a Community that Inspires. Elevate Your Fitness Journey and Embrace a Life of Health, Vitality, and Success."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Discover a World of Fitness Excellence with State-of-the-Art Equipment, Expert Guidance, and a Community that Inspires. Elevate Your Fitness Journey and Embrace a Life of Health, Vitality, and Success."
    },
]

const container ={
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    },

}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
};

const Benefits = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1}}
                    variants={{
                    hidden:{opacity: 0, x: 50},
                    visible:{opacity: 1, x: 0},
                    }} 
        >
            <Htext>
                MORE THEN JUST GYM.
            </Htext>
            <p className="my-5 text-sm">
            Unleash Your Inner Strength, Unleash Your Potential at our Fitness
              Hall. Discover a World of Fitness Excellence with State-of-the-Art
              Equipment, Expert Guidance, and a Community that Inspires. Elevate
              Your Fitness Journey and Embrace a Life of Health, Vitality, and
              Success.
            </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div 
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
        >
        {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
            
      </motion.div>
    </section>
  );
};

export default Benefits;
  