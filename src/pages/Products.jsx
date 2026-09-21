import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiCloud,
  FiShield,
  FiDatabase,
  FiCpu,
  FiBriefcase,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const productsData = [
  {
    id: "01",
    title: "IT Infrastructure",
    description:
      "Reliable infrastructure solutions designed to support your business operations.",
    icon: <FiServer className="w-8 h-8 text-[#9b5b35]" />,
    highlights: [
      "High Availability",
      "Enterprise Performance",
      "Scalable Hardware",
    ],
  },
  {
    id: "02",
    title: "Cloud Solutions",
    description:
      "Flexible and scalable cloud solutions to support modern business environments.",
    icon: <FiCloud className="w-8 h-8 text-[#9b5b35]" />,
    highlights: [
      "Hybrid & Multi-Cloud",
      "Cloud Migration",
      "Seamless Integration",
    ],
  },
  {
    id: "03",
    title: "Cybersecurity",
    description:
      "Solutions focused on protecting systems, data, and digital operations.",
    icon: <FiShield className="w-8 h-8 text-[#9b5b35]" />,
    highlights: [
      "Threat Defense",
      "Data Encryption",
      "Compliance & Risk",
    ],
  },
  {
    id: "04",
    title: "Data Center",
    description:
      "Technology solutions for efficient, secure, and dependable data center environments.",
    icon: <FiDatabase className="w-8 h-8 text-[#9b5b35]" />,
    highlights: [
      "Server Management",
      "Secure Storage",
      "Disaster Recovery",
    ],
  },
  {
    id: "05",
    title: "Emerging Technologies",
    description:
      "Modern technology solutions that help businesses stay prepared for future requirements.",
    icon: <FiCpu className="w-8 h-8 text-[#9b5b35]" />,
    highlights: [
      "AI & Machine Learning",
      "Automation",
      "Smart Infrastructure",
    ],
  },
  {
    id: "06",
    title: "Professional Services",
    description:
      "Expert technology services to help plan, implement, and maintain your IT environment.",
    icon: <FiBriefcase className="w-8 h-8 text-[#9b5b35]" />,
    highlights: [
      "Strategic Consulting",
      "Expert Deployment",
      "24/7 Support",
    ],
  },
];

/* =========================================================
   ACTIVE PRODUCT ANIMATION
========================================================= */

const productVariants = {
  initial: {
    opacity: 0,
    x: 70,
    scale: 0.97,
  },

  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    x: -70,
    scale: 0.97,
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/* =========================================================
   MENU ITEM ANIMATION
========================================================= */

const menuVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Products = () => {
  const [activeId, setActiveId] = useState("01");
  const [isPaused, setIsPaused] = useState(false);

  const activeProduct =
    productsData.find((p) => p.id === activeId) || productsData[0];

  /* =========================================================
     AUTOMATIC PRODUCT CHANGE
     Every 4 seconds
  ========================================================= */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = productsData.findIndex(
          (product) => product.id === currentId
        );

        const nextIndex =
          currentIndex === productsData.length - 1
            ? 0
            : currentIndex + 1;

        return productsData[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* =========================================================
     MANUAL PRODUCT SELECTION
  ========================================================= */

  const handleProductSelect = (id) => {
    setActiveId(id);

    // Restart automatic animation after manual selection
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  return (
    <section
      id="products-solutions"
      className="
        relative
        overflow-hidden
        border-t
        border-gray-200/60
        bg-[#f8f7f5]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#9b5b35]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#062b49]/[0.025]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
        >
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#9b5b35]
              sm:text-sm
            "
          >
            Products & Solutions
          </p>

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-[#062b49]
              sm:text-4xl
              md:text-5xl
            "
          >
            Technology Solutions Built Around Your Business
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
              text-base
              leading-relaxed
              text-gray-600
              sm:text-lg
            "
          >
            Discover reliable technology products and solutions designed to
            support modern business requirements. From essential IT
            infrastructure to advanced technology solutions, we help businesses
            choose solutions that deliver performance, reliability, and
            long-term value.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN SHOWCASE
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            lg:grid-cols-12
          "
        >

          {/* ===================================================
              LEFT PRODUCT MENU
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              flex-col
              gap-2.5
              lg:col-span-5
            "
          >

            {productsData.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  custom={index}
                  variants={menuVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  onClick={() => handleProductSelect(item.id)}
                  onMouseEnter={() => handleProductSelect(item.id)}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-xl
                    p-4
                    text-left
                    transition-all
                    duration-500
                    sm:p-5
                    ${
                      isActive
                        ? "translate-x-1 bg-[#062b49] text-white shadow-lg"
                        : "border border-gray-200/70 bg-white text-[#062b49] hover:bg-white"
                    }
                  `}
                >

                  {/* Active Progress Animation */}

                  {isActive && (
                    <motion.div
                      key={`${activeId}-progress`}
                      initial={{
                        width: "0%",
                      }}
                      animate={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 4,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        bg-[#c18a61]
                      "
                    />
                  )}

                  {/* Product Information */}

                  <div className="flex items-center gap-4">

                    <span
                      className={`
                        text-sm
                        font-mono
                        font-bold
                        ${
                          isActive
                            ? "text-[#c18a61]"
                            : "text-gray-400"
                        }
                      `}
                    >
                      {item.id}
                    </span>

                    <span
                      className="
                        text-base
                        font-bold
                        sm:text-lg
                      "
                    >
                      {item.title}
                    </span>

                  </div>

                  {/* Arrow */}

                  <FiArrowRight
                    className={`
                      h-4
                      w-4
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "translate-x-1 text-[#c18a61]"
                          : "text-gray-400 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                      }
                    `}
                  />

                </motion.button>
              );
            })}

          </motion.div>

          {/* ===================================================
              RIGHT PRODUCT DETAIL
          =================================================== */}

          <div
            className="
              lg:col-span-7
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={activeProduct.id}
                variants={productVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200/80
                  bg-white
                  p-7
                  shadow-xl
                  sm:p-10
                "
              >

                {/* =================================================
                    TOP ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1.5
                    bg-gradient-to-r
                    from-[#062b49]
                    via-[#9b5b35]
                    to-[#c18a61]
                  "
                />

                {/* =================================================
                    ICON + NUMBER
                ================================================== */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    justify-between
                  "
                >

                  <motion.div
                    key={`${activeProduct.id}-icon`}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      rotate: -20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#e8ddd5]
                      bg-[#f9f6f3]
                      shadow-sm
                    "
                  >
                    {activeProduct.icon}
                  </motion.div>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#062b49]/10
                      bg-[#062b49]/5
                      px-3
                      py-1.5
                      text-xs
                      font-extrabold
                      tracking-widest
                      text-[#062b49]
                    "
                  >
                    SOLUTION {activeProduct.id}
                  </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <motion.h3
                  key={`${activeProduct.id}-title`}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                  className="
                    mb-4
                    text-2xl
                    font-bold
                    text-[#062b49]
                    sm:text-3xl
                  "
                >
                  {activeProduct.title}
                </motion.h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                  key={`${activeProduct.id}-description`}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.18,
                  }}
                  className="
                    mb-8
                    text-base
                    leading-relaxed
                    text-gray-600
                    sm:text-lg
                  "
                >
                  {activeProduct.description}
                </motion.p>

                {/* =================================================
                    CAPABILITIES
                ================================================== */}

                <div
                  className="
                    border-t
                    border-gray-100
                    pt-6
                  "
                >

                  <p
                    className="
                      mb-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#9b5b35]
                    "
                  >
                    Key Solution Capabilities
                  </p>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    {activeProduct.highlights.map((highlight, index) => (
                      <motion.div
                        key={`${activeProduct.id}-${highlight}`}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.25 + index * 0.1,
                        }}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-[#e8ddd5]
                          bg-[#f9f6f3]
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-[#062b49]
                          sm:text-sm
                        "
                      >
                        <FiCheckCircle
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-[#9b5b35]
                          "
                        />

                        <span>
                          {highlight}
                        </span>

                      </motion.div>
                    ))}

                  </div>
                </div>

                {/* =================================================
                    CTA
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    items-start
                    justify-between
                    gap-4
                    border-t
                    border-gray-100
                    pt-6
                    sm:flex-row
                    sm:items-center
                  "
                >

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    Ready to learn more?
                  </span>

                  <a
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#062b49]
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-md
                      transition-all
                      duration-300
                      hover:bg-[#9b5b35]
                      hover:shadow-lg
                    "
                  >
                    <span>
                      Get Started
                    </span>

                    <FiArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </a>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>
        </div>

        {/* =====================================================
            BOTTOM PROGRESS
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-2xl
            items-center
            justify-center
            gap-2
          "
        >
          {productsData.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => handleProductSelect(product.id)}
              aria-label={`Show ${product.title}`}
              className="
                h-1.5
                rounded-full
                transition-all
                duration-500
              "
              style={{
                width: activeId === product.id ? "42px" : "8px",
                backgroundColor:
                  activeId === product.id
                    ? "#9b5b35"
                    : "rgba(6,43,73,0.15)",
              }}
            />
          ))}
        </div>

        {/* =====================================================
            COUNTER
        ====================================================== */}

        <div className="mt-4 text-center">

          <span
            className="
              text-xs
              font-bold
              tracking-[0.2em]
              text-[#062b49]
            "
          >
            {activeProduct.id}
          </span>

          <span className="mx-2 text-xs text-gray-300">
            /
          </span>

          <span
            className="
              text-xs
              font-semibold
              tracking-[0.2em]
              text-gray-400
            "
          >
            06
          </span>

        </div>

      </div>
    </section>
  );
};

export default Products;