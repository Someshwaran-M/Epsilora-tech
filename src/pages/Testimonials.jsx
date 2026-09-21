import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiStar,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Manager",
    review:
      "Epsilora provided a reliable and well-structured technology solution that aligned perfectly with our business requirements. Their team was professional, responsive, and committed throughout the project.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    review:
      "The Epsilora team helped us strengthen our cybersecurity approach with practical and effective solutions. Their expertise and attention to detail gave us greater confidence in our technology environment.",
  },
  {
    name: "Arun Prakash",
    role: "Managing Director",
    review:
      "Working with Epsilora was a great experience. They understood our challenges quickly and provided clear, practical technology recommendations that helped us make better business decisions.",
  },
  {
    name: "Suresh Menon",
    role: "Business Head",
    review:
      "Epsilora delivered exactly what we needed — professional service, dependable technology, and excellent support. Their team demonstrated strong technical knowledge from start to finish.",
  },
  {
    name: "Karthik R",
    role: "Technology Lead",
    review:
      "We were impressed by Epsilora's approach to solving complex technology requirements. Their solutions were reliable, scalable, and designed with our long-term business goals in mind.",
  },
  {
    name: "Anitha Krishnan",
    role: "Operations Manager",
    review:
      "Epsilora combines technical expertise with a strong understanding of business needs. Their professional approach and consistent support made the entire engagement smooth and efficient.",
  },
];

/* =========================================================
   TESTIMONIAL SLIDE ANIMATION
========================================================= */

const slideVariants = {
  enter: {
    opacity: 0,
    x: 120,
    scale: 0.96,
  },

  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    x: -120,
    scale: 0.96,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/* =========================================================
   STAR ANIMATION
========================================================= */

const starContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.35,
    },
  },
};

const starVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -90,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 12,
    },
  },
};

/* =========================================================
   TEXT ANIMATION
========================================================= */

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   CLIENT ANIMATION
========================================================= */

const clientVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   BOTTOM CIRCLE ANIMATION
========================================================= */

const bottomCircleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
      type: "spring",
      stiffness: 180,
      damping: 12,
    },
  },
};

const Testimonials = ({ onFaqClick, faqOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  /* =========================================================
     AUTOMATIC TESTIMONIAL CHANGE
     Every 5 seconds
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     NEXT
  ========================================================= */

  const nextTestimonial = () => {
    setDirection(1);

    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const previousTestimonial = () => {
    setDirection(-1);

    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  /* =========================================================
     SELECT
  ========================================================= */

  const selectTestimonial = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const testimonial = testimonials[activeIndex];

  /* =========================================================
     CLIENT INITIALS
  ========================================================= */

  const initials = testimonial.name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-140px]
          top-[18%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#9b5b35]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[-140px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#062b49]/[0.035]
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            SECTION HEADER
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#9b5b35]
              sm:text-sm
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-[#062b49]
              sm:text-4xl
              md:text-5xl
              lg:text-[54px]
            "
          >
            What Our Clients Say
          </h2>

          <div
            className="
              mx-auto
              mt-5
              h-px
              w-16
              bg-[#9b5b35]
            "
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            Trusted by businesses for reliable technology,
            infrastructure, cybersecurity, and professional services.
          </p>
        </motion.div>

        {/* =====================================================
            TESTIMONIAL AREA
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-5xl
            sm:mt-16
            lg:mt-20
          "
        >
          <div
            className="
              relative
              min-h-[535px]
              sm:min-h-[510px]
              md:min-h-[480px]
              lg:min-h-[450px]
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* =================================================
                    SPEECH BUBBLE
                ================================================== */}

                <div className="relative mx-auto w-full max-w-4xl">

                  {/* =================================================
                      MAIN BUBBLE
                  ================================================== */}

                  <div
                    className="
                      relative
                      min-h-[400px]
                      overflow-visible
                      rounded-[50px]
                      border-[5px]
                      border-white
                      bg-gradient-to-br
                      from-[#062b49]
                      via-[#07527a]
                      to-[#159db5]
                      px-6
                      pb-20
                      pt-20
                      shadow-[0_25px_70px_rgba(6,43,73,0.18)]
                      sm:min-h-[390px]
                      sm:px-10
                      sm:pt-20
                      md:px-16
                      lg:min-h-[370px]
                      lg:px-20
                    "
                  >
                    {/* =================================================
                        TOP QUOTE CIRCLE
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.4,
                        rotate: -25,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1,
                        type: "spring",
                        stiffness: 180,
                      }}
                      className="
                        absolute
                        right-5
                        top-[-48px]
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-white
                        bg-gradient-to-br
                        from-[#062b49]
                        to-[#0b6d91]
                        shadow-lg
                        sm:right-8
                        sm:top-[-55px]
                        sm:h-28
                        sm:w-28
                        md:right-12
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-6xl
                          font-bold
                          leading-none
                          text-white
                          sm:text-7xl
                        "
                      >
                        “
                      </span>
                    </motion.div>

                    {/* =================================================
                        STARS
                    ================================================== */}

                    <motion.div
                      variants={starContainerVariants}
                      initial="hidden"
                      animate="visible"
                      className="
                        mb-5
                        flex
                        justify-center
                        gap-1.5
                      "
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          variants={starVariants}
                        >
                          <FiStar
                            size={18}
                            className="
                              fill-[#ffd52e]
                              text-[#ffd52e]
                              sm:h-5
                              sm:w-5
                            "
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* =================================================
                        REVIEW
                    ================================================== */}

                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="
                        mx-auto
                        max-w-3xl
                        text-center
                      "
                    >
                      <p
                        className="
                          text-sm
                          leading-7
                          text-white/95
                          sm:text-[15px]
                          md:text-base
                          md:leading-8
                          lg:text-[17px]
                        "
                      >
                        {testimonial.review}
                      </p>
                    </motion.div>

                    {/* =================================================
                        CLIENT INFORMATION
                    ================================================== */}

                    <motion.div
                      variants={clientVariants}
                      initial="hidden"
                      animate="visible"
                      className="
                        absolute
                        bottom-[-1px]
                        left-1/2
                        flex
                        -translate-x-1/2
                        translate-y-1/2
                        items-center
                        gap-3
                      "
                    >
                      {/* CLIENT INITIAL CIRCLE */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border-4
                          border-white
                          bg-[#9b5b35]
                          text-xs
                          font-bold
                          text-white
                          shadow-lg
                          sm:h-14
                          sm:w-14
                          sm:text-sm
                        "
                      >
                        {initials}
                      </div>

                      {/* CLIENT NAME */}

                      <div
                        className="
                          rounded-full
                          border
                          border-white
                          bg-white
                          px-5
                          py-2.5
                          shadow-lg
                        "
                      >
                        <p
                          className="
                            whitespace-nowrap
                            text-xs
                            font-bold
                            text-[#062b49]
                            sm:text-sm
                          "
                        >
                          {testimonial.name}
                        </p>

                        <p
                          className="
                            mt-0.5
                            whitespace-nowrap
                            text-[10px]
                            text-gray-500
                            sm:text-xs
                          "
                        >
                          {testimonial.role}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* =================================================
                      BOTTOM CIRCLE
                      REPLACED OLD DIAMOND / SQUARE
                  ================================================== */}

                  <motion.div
                    variants={bottomCircleVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                      absolute
                      bottom-[-38px]
                      left-[8%]
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border-[5px]
                      border-white
                      bg-gradient-to-br
                      from-[#062b49]
                      to-[#0b6d91]
                      shadow-lg
                      sm:bottom-[-45px]
                      sm:left-[9%]
                      sm:h-24
                      sm:w-24
                      md:left-[10%]
                      lg:h-28
                      lg:w-28
                    "
                  >
                    <span
                      className="
                        text-2xl
                        font-bold
                        text-white
                        sm:text-3xl
                      "
                    >
                      {initials}
                    </span>
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =====================================================
              NAVIGATION CONTROLS
          ====================================================== */}

          <div
            className="
              relative
              z-20
              mt-12
              flex
              items-center
              justify-center
              gap-4
              sm:mt-14
            "
          >
            {/* PREVIOUS */}

            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#062b49]/15
                bg-white
                text-[#062b49]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#9b5b35]
                hover:bg-[#9b5b35]
                hover:text-white
                hover:shadow-lg
              "
            >
              <FiArrowLeft size={17} />
            </button>

            {/* PROGRESS DOTS */}

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      activeIndex === index
                        ? "w-8 bg-[#9b5b35]"
                        : "w-2 bg-[#062b49]/20 hover:bg-[#9b5b35]/50"
                    }
                  `}
                />
              ))}
            </div>

            {/* NEXT */}

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#062b49]/15
                bg-white
                text-[#062b49]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#9b5b35]
                hover:bg-[#9b5b35]
                hover:text-white
                hover:shadow-lg
              "
            >
              <FiArrowRight size={17} />
            </button>
          </div>

          {/* =====================================================
              COUNTER
          ====================================================== */}

          <div className="mt-4 text-center">
            <span
              className="
                text-xs
                font-semibold
                tracking-[0.15em]
                text-gray-400
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="mx-2 text-xs text-gray-300">
              /
            </span>

            <span
              className="
                text-xs
                font-semibold
                tracking-[0.15em]
                text-gray-400
              "
            >
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* =====================================================
            FAQ BUTTON
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            justify-center
            sm:mt-16
          "
        >
          <button
            type="button"
            onClick={onFaqClick}
            aria-expanded={faqOpen}
            className="
              group
              inline-flex
              w-full
              max-w-[300px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#062b49]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:bg-[#9b5b35]
              hover:shadow-xl
              sm:w-auto
              sm:max-w-none
            "
          >
            {faqOpen
              ? "Close Frequently Asked Questions"
              : "Frequently Asked Questions"}

            <FiArrowDown
              size={17}
              className={`
                transition-transform
                duration-300
                ${
                  faqOpen
                    ? "rotate-180"
                    : "group-hover:translate-y-1"
                }
              `}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;