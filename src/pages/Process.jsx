import React from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiCompass,
  FiLayers,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    stepName: "Understand",
    description:
      "We begin by understanding your business requirements, challenges, and technology goals.",
    icon: <FiSearch />,
  },
  {
    number: "02",
    stepName: "Plan",
    description:
      "Our team evaluates the requirements and develops a suitable solution based on your needs.",
    icon: <FiCompass />,
  },
  {
    number: "03",
    stepName: "Implement",
    description:
      "We implement the selected solution with a focus on quality, reliability, and smooth execution.",
    icon: <FiLayers />,
  },
  {
    number: "04",
    stepName: "Support",
    description:
      "We continue to provide assistance and support to help maintain a reliable technology environment.",
    icon: <FiHeadphones />,
  },
];

/* =========================================================
   CONTAINER ANIMATION
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.25,
    },
  },
};

/* =========================================================
   STEP ANIMATION
========================================================= */

const stepVariants = {
  hidden: {
    opacity: 0,
    x: -90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   PROCESS
========================================================= */

const Process = () => {
  return (
    <section
      id="our-process"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#062B49]
        sm:py-24
        lg:py-32
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Brown glow */}
        <div
          className="
            absolute
            -left-48
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#9B5B35]/[0.035]
            blur-[120px]
          "
        />

        {/* Gold glow */}
        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C18A61]/[0.04]
            blur-[120px]
          "
        />

        {/* Decorative dots */}
        <div className="absolute left-[8%] top-[18%] hidden h-2 w-2 rounded-full bg-[#9B5B35] lg:block" />

        <div className="absolute right-[10%] top-[25%] hidden h-1.5 w-1.5 rounded-full bg-[#C18A61] lg:block" />

        <div className="absolute bottom-[18%] left-[15%] hidden h-1.5 w-1.5 rounded-full bg-[#C18A61] lg:block" />

        {/* Vertical decorative line */}
        <div
          className="
            absolute
            bottom-0
            right-[7%]
            top-0
            hidden
            w-px
            bg-[#062B49]/[0.04]
            lg:block
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >

              <span className="h-[2px] w-10 bg-[#9B5B35]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#9B5B35]
                  sm:text-xs
                "
              >
                Our Process
              </span>

            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                mt-5
                max-w-2xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-[#062B49]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              A Clear Path From

              <span className="block text-[#9B5B35]">
                Idea To Impact
              </span>

            </motion.h2>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
                sm:leading-8
              "
            >
              We follow a simple and structured approach that
              keeps every stage transparent, practical and aligned
              with your business objectives.
            </p>

          </motion.div>

        </div>

        {/* ===================================================
            PROCESS JOURNEY
        =================================================== */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">

          {/* =================================================
              DESKTOP CONNECTING LINE
          ================================================= */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[49px]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#9B5B35]
              to-transparent
              lg:block
            "
          />

          {/* Line Glow */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 2.2,
              delay: 0.7,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[48px]
              hidden
              h-[3px]
              bg-gradient-to-r
              from-transparent
              via-[#C18A61]/30
              to-transparent
              blur-sm
              lg:block
            "
          />

          {/* =================================================
              STEPS
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-4
              lg:gap-5
            "
          >

            {steps.map((step, index) => (

              <motion.div
                key={step.number}
                variants={stepVariants}
                className="group relative"
              >

                {/* Mobile connecting line */}

                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      bottom-[-48px]
                      left-[27px]
                      top-[70px]
                      w-px
                      bg-gradient-to-b
                      from-[#9B5B35]
                      to-gray-200
                      lg:hidden
                    "
                  />
                )}

                {/* =================================================
                    STEP NUMBER / CIRCLE
                ================================================= */}

                <div className="relative z-10 flex items-center gap-5 lg:block">

                  {/* Circle */}

                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#9B5B35]/60
                      bg-white
                      shadow-[0_8px_30px_rgba(6,43,73,0.06)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-[#9B5B35]
                      group-hover:bg-[#9B5B35]
                      group-hover:shadow-[0_0_35px_rgba(155,91,53,0.22)]
                      sm:h-16
                      sm:w-16
                    "
                  >

                    {/* Inner ring */}

                    <div
                      className="
                        absolute
                        inset-1.5
                        rounded-full
                        border
                        border-[#062B49]/10
                        transition-all
                        duration-500
                        group-hover:border-white/30
                      "
                    />

                    <span
                      className="
                        relative
                        text-[11px]
                        font-bold
                        tracking-[0.15em]
                        text-[#9B5B35]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {step.number}
                    </span>

                  </div>

                  {/* Desktop icon */}

                  <div
                    className="
                      absolute
                      left-[78px]
                      top-1/2
                      hidden
                      h-9
                      w-9
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[#9B5B35]/10
                      text-[#9B5B35]
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      lg:flex
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Mobile title */}

                  <div className="lg:hidden">

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                      Stage {step.number}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#062B49]">
                      {step.stepName}
                    </h3>

                  </div>

                </div>

                {/* =================================================
                    DESKTOP CONTENT
                ================================================= */}

                <div className="mt-7 hidden lg:block">

                  <div className="flex items-center gap-3">

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                      Stage {step.number}
                    </span>

                    <span className="h-px w-8 bg-[#062B49]/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#9B5B35]" />

                  </div>

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#062B49]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#9B5B35]
                    "
                  >
                    {step.stepName}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[260px]
                      text-sm
                      leading-6
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-gray-700
                    "
                  >
                    {step.description}
                  </p>

                </div>

                {/* =================================================
                    MOBILE DESCRIPTION
                ================================================= */}

                <div className="ml-[78px] mt-4 lg:hidden">

                  <div className="flex items-center gap-3">

                    <span className="h-px w-8 bg-[#9B5B35]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Process Stage
                    </span>

                  </div>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      leading-6
                      text-gray-500
                    "
                  >
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-gray-200
            pt-7
            sm:mt-20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#9B5B35]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-gray-400
              "
            >
              Simple. Structured. Effective.
            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
              04 Stages
            </span>

            <FiArrowRight className="text-[#9B5B35]" />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Process;