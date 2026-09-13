import React, { useState } from "react";
import {
  FiArrowRight,
  FiServer,
  FiShield,
  FiCloud,
  FiCpu,
  FiUsers,
  FiSettings,
  FiHeadphones,
} from "react-icons/fi";
import About from "./About";
import { motion } from "framer-motion";
import Service from "./Service";
import Products from "./Products";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

const Home = () => {
  const [showFaq, setShowFaq] = useState(false);

  const hardware = [
    {
      title: "Computers & Workstations",
      image: "/assets/hardware/computers.jpg",
    },
    {
      title: "Data Storage",
      image: "/assets/hardware/storage.jpg",
    },
    {
      title: "Servers",
      image: "/assets/hardware/servers.jpg",
    },
    {
      title: "Networking",
      image: "/assets/hardware/networking.jpg",
    },
  ];

  const services = [
    {
      icon: <FiUsers />,
      title: "IT Consulting",
      description: "Strategic technology guidance for business growth.",
    },
    {
      icon: <FiSettings />,
      title: "Implementation Services",
      description: "Seamless deployment and integration of technology.",
    },
    {
      icon: <FiHeadphones />,
      title: "Support & Maintenance",
      description: "Reliable technical support whenever you need it.",
    },
    {
      icon: <FiCpu />,
      title: "Professional Services",
      description: "Expert technology services for modern IT environments.",
    },
  ];

  return (
    <main className="bg-white text-[#111111]">

      {/* HERO */}
      <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] overflow-hidden">

        <img
          src="/bg3.png"
          alt="EPSILORA Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center">

          <div className="max-w-3xl text-black pt-10 sm:pt-0">

            <p className="text-[#9B5B35] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold text-xs sm:text-sm mb-4 sm:mb-5">
              Your Technology Partner
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-black">
              Think Beyond
              <br />
              <span className="text-[#062B49]">
                Build What’s Next
              </span>
            </h1>

            <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-black max-w-2xl leading-7 sm:leading-8">
              Trusted technology, secure infrastructure,
              and intelligent solutions
              <br className="hidden sm:block" />
              designed to move your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-9">

              <a
                href="/solutions"
                className="inline-flex items-center justify-center gap-3 bg-[#062B49] hover:bg-[#0A3A5C] text-white px-6 sm:px-7 py-3.5 sm:py-4 font-semibold transition-all duration-300"
              >
                Explore Solutions
                <FiArrowRight />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#9B5B35] text-black px-6 sm:px-7 py-3.5 sm:py-4 font-semibold hover:bg-[#9B5B35] hover:text-white transition-all duration-300"
              >
                Get in Touch
                <FiArrowRight />
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* TRUST SECTION */}
      <section className="border-b border-gray-200 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <FiShield size={21} />,
                title: "Secure by Design",
                subtitle: "Protection for your business",
              },
              {
                icon: <FiServer size={21} />,
                title: "Reliable Infrastructure",
                subtitle: "Built for performance & scale",
              },
              {
                icon: <FiCpu size={21} />,
                title: "Modern Technology",
                subtitle: "Solutions ready for tomorrow",
              },
              {
                icon: <FiUsers size={21} />,
                title: "Expert Support",
                subtitle: "People you can depend on",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group flex items-center gap-4 px-4 sm:px-6 py-6 sm:py-7
                border-gray-200
                ${
                  index !== 3
                    ? "border-b sm:border-r lg:border-b-0"
                    : ""
                }`}
              >

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="
                    flex-shrink-0
                    w-12 h-12
                    flex items-center justify-center
                    border border-[#e8ddd5]
                    bg-[#f9f6f3]
                    text-[#9b5b35]
                    transition-all duration-300
                    group-hover:bg-[#9b5b35]
                    group-hover:text-white
                    group-hover:border-[#9b5b35]
                  "
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.15,
                  }}
                  className="min-w-0"
                >
                  <p className="font-semibold text-[#111111] text-sm sm:text-base">
                    {item.title}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-5">
                    {item.subtitle}
                  </p>
                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <About />

      {/* SERVICE */}
      <Service />

      {/* PRODUCTS & SOLUTIONS */}
      <Products />

      {/* OUR PROCESS */}
      <Process />

      {/* TESTIMONIALS */}
      <Testimonials
        onFaqClick={() => setShowFaq(!showFaq)}
        faqOpen={showFaq}
      />

      {/* FAQ - HIDDEN INITIALLY */}
      {showFaq && (
        <Faq />
      )}

    </main>
  );
};

export default Home;