import React, { useState } from "react";
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
    highlights: ["High Availability", "Enterprise Performance", "Scalable Hardware"],
  },
  {
    id: "02",
    title: "Cloud Solutions",
    description:
      "Flexible and scalable cloud solutions to support modern business environments.",
    icon: <FiCloud className="w-8 h-8 text-[#9b5b35]" />,
    highlights: ["Hybrid & Multi-Cloud", "Cloud Migration", "Seamless Integration"],
  },
  {
    id: "03",
    title: "Cybersecurity",
    description:
      "Solutions focused on protecting systems, data, and digital operations.",
    icon: <FiShield className="w-8 h-8 text-[#9b5b35]" />,
    highlights: ["Threat Defense", "Data Encryption", "Compliance & Risk"],
  },
  {
    id: "04",
    title: "Data Center",
    description:
      "Technology solutions for efficient, secure, and dependable data center environments.",
    icon: <FiDatabase className="w-8 h-8 text-[#9b5b35]" />,
    highlights: ["Server Management", "Secure Storage", "Disaster Recovery"],
  },
  {
    id: "05",
    title: "Emerging Technologies",
    description:
      "Modern technology solutions that help businesses stay prepared for future requirements.",
    icon: <FiCpu className="w-8 h-8 text-[#9b5b35]" />,
    highlights: ["AI & Machine Learning", "Automation", "Smart Infrastructure"],
  },
  {
    id: "06",
    title: "Professional Services",
    description:
      "Expert technology services to help plan, implement, and maintain your IT environment.",
    icon: <FiBriefcase className="w-8 h-8 text-[#9b5b35]" />,
    highlights: ["Strategic Consulting", "Expert Deployment", "24/7 Support"],
  },
];

const Products = () => {
  const [activeId, setActiveId] = useState("01");
  const activeProduct = productsData.find((p) => p.id === activeId) || productsData[0];

  return (
    <section
      id="products-solutions"
      className="py-16 sm:py-20 lg:py-24 bg-[#f8f7f5] border-t border-gray-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-[#9b5b35] uppercase tracking-[0.2em] font-semibold text-xs sm:text-sm mb-3">
            Products & Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062b49] leading-tight">
            Technology Solutions Built Around Your Business
          </h2>

          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover reliable technology products and solutions designed to
            support modern business requirements. From essential IT
            infrastructure to advanced technology solutions, we help businesses
            choose solutions that deliver performance, reliability, and long-term
            value.
          </p>
        </div>

        {/* Interactive Split Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Product Selection Menu (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {productsData.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#062b49] text-white shadow-lg translate-x-1"
                      : "bg-white text-[#062b49] hover:bg-white/80 border border-gray-200/70"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isActive ? "text-[#c18a61]" : "text-gray-400"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="font-bold text-base sm:text-lg">
                      {item.title}
                    </span>
                  </div>

                  <FiArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? "text-[#c18a61] translate-x-1"
                        : "text-gray-400 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Product Detail Spotlight Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-2xl p-7 sm:p-10 border border-gray-200/80 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#062b49] via-[#9b5b35] to-[#c18a61]" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#f9f6f3] border border-[#e8ddd5] flex items-center justify-center shadow-sm">
                    {activeProduct.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold tracking-widest text-[#062b49] bg-[#062b49]/5 px-3 py-1.5 rounded-full border border-[#062b49]/10">
                    SOLUTION {activeProduct.id}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#062b49] mb-4">
                  {activeProduct.title}
                </h3>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {activeProduct.description}
                </p>

                {/* Key Capabilities Pills */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#9b5b35] mb-3">
                    Key Solution Capabilities
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {activeProduct.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 bg-[#f9f6f3] border border-[#e8ddd5] text-[#062b49] text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg"
                      >
                        <FiCheckCircle className="w-4 h-4 text-[#9b5b35]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action Link */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    Ready to learn more?
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#062b49] hover:bg-[#9b5b35] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>Get Started</span>
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
