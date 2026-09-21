import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMonitor,
  FiShield,
  FiServer,
  FiCpu,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help your business make smarter decisions.",
    icon: <FiMonitor />,
  },
  {
    number: "02",
    title: "Cybersecurity",
    description:
      "Protect your business with reliable cybersecurity solutions and services.",
    icon: <FiShield />,
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Build secure, scalable, and reliable technology infrastructure.",
    icon: <FiServer />,
  },
  {
    number: "04",
    title: "Technology Solutions",
    description:
      "Modern technology solutions designed around your business requirements.",
    icon: <FiCpu />,
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
      delayChildren: 0.2,
    },
  },
};

/* =========================================================
   SERVICE ENTRY ANIMATION
========================================================= */

const serviceVariants = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.82,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   CONNECTOR ANIMATION
========================================================= */

const connectorVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },

  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   ICON ANIMATION
========================================================= */

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: -45,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      delay: 0.35,
      type: "spring",
      stiffness: 180,
      damping: 12,
    },
  },
};

const Services = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#062B49]
        py-20
        text-white
        sm:py-24
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Brown Glow */}

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#9B5B35]/10
            blur-3xl
          "
        />

        {/* White Glow */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-48
            -left-48
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.025]
            blur-3xl
          "
        />

        {/* Decorative Points */}

        <motion.div
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[12%]
            top-[18%]
            hidden
            h-2
            w-2
            rounded-full
            bg-[#9B5B35]
            lg:block
          "
        />

        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
            absolute
            bottom-[18%]
            right-[12%]
            hidden
            h-2
            w-2
            rounded-full
            bg-[#C18A61]
            lg:block
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            grid
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-end
            lg:gap-20
          "
        >

          <div>

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9B5B35]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#C18A61]
                  sm:text-xs
                "
              >
                Professional Services
              </span>

            </div>

            <h2
              className="
                mt-5
                max-w-xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-tight
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Consulting &

              <span className="block text-[#C18A61]">
                Professional Services
              </span>
            </h2>

          </div>

          <div>

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-white/55
                sm:text-base
                sm:leading-8
              "
            >
              Expertise. Experience. Real Results.
              We deliver professional technology services
              designed around your business goals.
            </p>

          </div>

        </motion.div>

        {/* =====================================================
            ANIMATED SERVICES
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-14
            sm:mt-16
            lg:mt-20
          "
        >

          <div
            className="
              grid
              grid-cols-1
              gap-12
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-4
              xl:gap-6
            "
          >

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={serviceVariants}
                className="
                  group
                  relative
                  flex
                  justify-center
                "
              >

                {/* =================================================
                    CONNECTOR
                ================================================== */}

                {index !== services.length - 1 && (
                  <motion.div
                    variants={connectorVariants}
                    style={{
                      transformOrigin: "left center",
                    }}
                    className="
                      absolute
                      left-[calc(50%+90px)]
                      top-1/2
                      hidden
                      h-px
                      w-[calc(100%-115px)]
                      bg-gradient-to-r
                      from-[#9B5B35]/70
                      via-[#C18A61]/30
                      to-white/5
                      lg:block
                    "
                  >
                    {/* Moving Light */}

                    <motion.span
                      animate={{
                        left: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                      className="
                        absolute
                        top-1/2
                        h-1
                        w-1
                        -translate-y-1/2
                        rounded-full
                        bg-[#C18A61]
                        shadow-[0_0_12px_#C18A61]
                      "
                    />
                  </motion.div>
                )}

                {/* =================================================
                    OUTER CIRCLE
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, -7, 0, 6, 0],
                  }}
                  transition={{
                    duration: 5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="
                    relative
                    flex
                    h-[270px]
                    w-[270px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    transition-all
                    duration-700
                    group-hover:scale-[1.05]
                    group-hover:border-[#9B5B35]/70
                    group-hover:bg-[#9B5B35]/10
                    group-hover:shadow-[0_0_70px_rgba(155,91,53,0.20)]
                    sm:h-[290px]
                    sm:w-[290px]
                    lg:h-[245px]
                    lg:w-[245px]
                    xl:h-[270px]
                    xl:w-[270px]
                  "
                >

                  {/* =================================================
                      OUTER ROTATING RING
                  ================================================== */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-[-8px]
                      rounded-full
                      border
                      border-transparent
                      border-t-[#9B5B35]/60
                      border-r-[#C18A61]/20
                    "
                  />

                  {/* =================================================
                      INNER CIRCLE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-5
                      rounded-full
                      border
                      border-white/[0.07]
                      transition-all
                      duration-700
                      group-hover:inset-7
                      group-hover:border-[#9B5B35]/30
                    "
                  />

                  {/* =================================================
                      NUMBER
                  ================================================== */}

                  <motion.span
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-8
                      -translate-x-1/2
                      text-[10px]
                      font-bold
                      tracking-[0.25em]
                      text-[#C18A61]
                    "
                  >
                    {service.number}
                  </motion.span>

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <motion.div
                    variants={iconVariants}
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#9B5B35]/40
                      bg-[#9B5B35]/10
                      text-xl
                      text-[#C18A61]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-[#9B5B35]
                      group-hover:bg-[#9B5B35]
                      group-hover:text-white
                    "
                  >
                    {service.icon}
                  </motion.div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      mt-4
                      w-[185px]
                      text-center
                    "
                  >

                    <h3
                      className="
                        text-lg
                        font-bold
                        leading-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#C18A61]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-[11px]
                        leading-5
                        text-white/40
                        transition-colors
                        duration-300
                        group-hover:text-white/70
                      "
                    >
                      {service.description}
                    </p>

                  </div>

                  {/* =================================================
                      ARROW
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-7
                      right-8
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/30
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-[#9B5B35]
                      group-hover:text-[#C18A61]
                    "
                  >
                    <FiArrowUpRight className="text-sm" />
                  </div>

                  {/* =================================================
                      PULSE RING
                  ================================================== */}

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-[-18px]
                      rounded-full
                      border
                      border-[#9B5B35]/20
                    "
                  />

                </motion.div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}

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
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-16
            flex
            flex-col
            items-start
            justify-between
            gap-6
            border-t
            border-white/10
            pt-7
            sm:flex-row
            sm:items-center
            lg:mt-20
          "
        >

          <div>

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-white/30
              "
            >
              Technology Expertise
            </p>

            <p
              className="
                mt-2
                text-sm
                font-medium
                text-white/70
              "
            >
              Practical technology. Meaningful outcomes.
            </p>

          </div>

          <a
            href="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#9B5B35]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#9B5B35]
              hover:shadow-[0_0_30px_rgba(155,91,53,0.25)]
            "
          >
            Explore All Services

            <FiArrowUpRight
              className="
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;