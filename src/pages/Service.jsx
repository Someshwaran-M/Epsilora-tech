
import React from "react";
import {
  FiArrowRight,
  FiMonitor,
  FiShield,
  FiServer,
  FiCpu,
} from "react-icons/fi";

const services = [
  {
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help your business make smarter decisions.",
    icon: <FiMonitor />,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with reliable cybersecurity solutions and services.",
    icon: <FiShield />,
  },
  {
    title: "Infrastructure",
    description:
      "Build secure, scalable, and reliable technology infrastructure.",
    icon: <FiServer />,
  },
  {
    title: "Technology Solutions",
    description:
      "Modern technology solutions designed around your business requirements.",
    icon: <FiCpu />,
  },
];

const Services = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#062b49] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.5fr] gap-10 lg:gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-[#c18a61] font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Professional Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Consulting &
              <br />
              Professional Services
            </h2>

            <p className="mt-5 sm:mt-6 text-gray-300 leading-7 sm:leading-8">
              Expertise. Experience. Real Results.
              We deliver professional technology services
              designed around your business goals.
            </p>

            <a
              href="/services"
              className="inline-flex items-center gap-2 mt-6 sm:mt-7 bg-[#9b5b35] hover:bg-[#7e4729] px-6 py-3 font-semibold transition-all"
            >
              Explore Services
              <FiArrowRight />
            </a>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-white/15 bg-white/5 p-6 sm:p-7 hover:bg-white/10 hover:border-[#9b5b35]/60 transition-all duration-300"
              >
                <div className="text-[#c18a61] text-2xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mt-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

