import React from "react";
import { motion } from "framer-motion";
import {
  FiSun,
  FiZap,
  FiTrendingDown,
  FiCheckCircle,
  FiHome,
  FiBriefcase,
  FiSettings,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: FiSun,
    title: "Solar Feasibility Assessment",
    description:
      "Evaluate your property, energy consumption, and solar potential to determine the feasibility of adopting solar energy.",
  },
  {
    icon: FiSettings,
    title: "Solar System Planning",
    description:
      "Get expert guidance on solar system capacity, panel placement, configuration, and planning based on your energy requirements.",
  },
  {
    icon: FiTrendingDown,
    title: "Energy Cost Analysis",
    description:
      "Analyze your current electricity usage and identify opportunities to reduce energy expenses through solar solutions.",
  },
  {
    icon: FiZap,
    title: "Solar Project Consulting",
    description:
      "Receive professional guidance throughout your solar project planning, technology selection, and implementation journey.",
  },
];

const benefits = [
  "Customized solar energy recommendations",
  "Energy consumption and cost analysis",
  "Guidance on system capacity and planning",
  "Sustainable and energy-efficient solutions",
  "Residential, commercial and industrial consulting",
  "Informed solar investment decisions",
];

const sectors = [
  {
    icon: FiHome,
    title: "Residential",
    description:
      "Solar energy guidance for homes, villas, apartments and residential properties.",
  },
  {
    icon: FiBriefcase,
    title: "Commercial",
    description:
      "Solar planning and energy consulting for offices, commercial buildings and businesses.",
  },
  {
    icon: FiSettings,
    title: "Industrial",
    description:
      "Solar energy planning for industries, manufacturing facilities and large-scale operations.",
  },
];

const SolarPanelConsulting = () => {
  return (
    <div className="w-full space-y-12">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-[#062B49] p-6 text-white sm:p-8 lg:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#C18A61]/20" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#C18A61]/30" />

        <div className="relative z-10 max-w-3xl">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C18A61]/20 text-3xl text-[#C18A61]">
            <FiSun />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C18A61]">
            Renewable Energy Consulting
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Solar Energy Consulting
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Make smarter energy decisions with expert solar energy consulting.
            We help homes, businesses and industries explore solar energy
            solutions, optimize energy consumption and move towards a more
            sustainable future.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#C18A61] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#062B49]"
          >
            Get Solar Consultation
            <FiArrowUpRight />
          </a>
        </div>
      </motion.div>

      {/* Services */}
      <div>
        <div className="mb-7">
          <p className="mb-2 mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
            What We Offer
          </p>

          <h3 className="text-2xl font-bold sm:text-3xl">
            Our Solar Consulting Services
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#667586] sm:text-base">
            We provide practical guidance and consulting services to help
            you plan, evaluate and adopt solar energy solutions according
            to your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-xl border border-[#E7EBEF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C18A61] hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EDE7] text-xl text-[#9B5B35] transition-colors duration-300 group-hover:bg-[#062B49] group-hover:text-[#C18A61]">
                  <Icon />
                </div>

                <h4 className="text-lg font-bold text-[#062B49]">
                  {service.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#667586]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="rounded-2xl mt-4 border border-[#E7EBEF] bg-[#F8FAFC] p-6 sm:p-8">
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
            Why Choose Solar Consulting
          </p>

          <h3 className="text-2xl font-bold sm:text-3xl">
            Smarter Energy Decisions
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#667586]">
            Our consulting approach helps you understand solar opportunities
            and make decisions based on your energy requirements and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <FiCheckCircle className="mt-1 shrink-0 text-[#9B5B35]" />

              <p className="text-sm leading-6 text-[#425466]">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="mt-4">
        <div className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
            Who We Serve
          </p>

          <h3 className="text-2xl font-bold sm:text-3xl">
            Solar Solutions for Every Sector
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-[#E7EBEF] bg-white p-6 transition-all duration-300 hover:border-[#C18A61] hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EDE7] text-xl text-[#9B5B35]">
                  <Icon />
                </div>

                <h4 className="text-lg font-bold text-[#062B49]">
                  {sector.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#667586]">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Process */}
      <div className="mt-4">
        <div className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
            Our Approach
          </p>

          <h3 className="text-2xl font-bold sm:text-3xl">
            How Our Solar Consulting Works
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Understand",
              description:
                "Understand your property, energy consumption and requirements.",
            },
            {
              number: "02",
              title: "Evaluate",
              description:
                "Evaluate solar potential, energy usage and available solutions.",
            },
            {
              number: "03",
              title: "Plan",
              description:
                "Develop recommendations for system capacity and planning.",
            },
            {
              number: "04",
              title: "Guide",
              description:
                "Provide consulting guidance to support your solar journey.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-xl border border-[#E7EBEF] bg-white p-6"
            >
              <p className="text-sm font-bold tracking-widest text-[#C18A61]">
                {step.number}
              </p>

              <h4 className="mt-3 text-lg font-bold text-[#062B49]">
                {step.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-[#667586]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      

    </div>
  );
};

export default SolarPanelConsulting;