import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCompass, FiLayers, FiHeadphones } from "react-icons/fi";

const steps = [
  {
    number: "01",
    stepName: "Understand",
    description:
      "We begin by understanding your business requirements, challenges, and technology goals.",
    icon: <FiSearch className="w-6 h-6 text-[#c18a61]" />,
  },
  {
    number: "02",
    stepName: "Plan",
    description:
      "Our team evaluates the requirements and develops a suitable solution based on your needs.",
    icon: <FiCompass className="w-6 h-6 text-[#c18a61]" />,
  },
  {
    number: "03",
    stepName: "Implement",
    description:
      "We implement the selected solution with a focus on quality, reliability, and smooth execution.",
    icon: <FiLayers className="w-6 h-6 text-[#c18a61]" />,
  },
  {
    number: "04",
    stepName: "Support",
    description:
      "We continue to provide assistance and support to help maintain a reliable technology environment.",
    icon: <FiHeadphones className="w-6 h-6 text-[#c18a61]" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const Process = () => {
  return (
    <section
      id="our-process"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#062b49] text-white overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9b5b35]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c18a61]/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[#c18a61] uppercase tracking-[0.2em] font-semibold text-xs sm:text-sm mb-3"
          >
            Our Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            A Simple Approach to Delivering the Right Solution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We follow a clear and structured approach to understand your
            requirements, identify the right solution, and deliver it
            efficiently. Our process keeps every stage simple, transparent, and
            focused on your business needs.
          </motion.p>
        </div>

        {/* UI Timeline / 4 Steps Container */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop Connecting Timeline Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#9b5b35]/30 via-[#c18a61] to-[#9b5b35]/30 -translate-y-12 z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10"
          >
            {steps.map((item) => (
              <motion.div
                key={item.number}
                variants={stepVariants}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md hover:bg-white/[0.08] hover:border-[#c18a61]/60 transition-all duration-300 shadow-xl"
              >
                {/* Header of Card with Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#9b5b35] group-hover:border-[#9b5b35] transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#c18a61] font-mono tracking-tighter opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {item.number}
                    </span>
                  </div>

                  {/* Step Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#c18a61] transition-colors duration-300 mb-3">
                    {item.number} &mdash; {item.stepName}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                  <span className="uppercase tracking-wider text-[11px] text-[#c18a61]">
                    Stage {item.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#c18a61] group-hover:animate-ping" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
