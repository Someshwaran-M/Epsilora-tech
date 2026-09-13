import React from "react";
import {
  FiArrowRight,
  FiShield,
  FiCpu,
  FiHeadphones,
} from "react-icons/fi";

const WhyEpsilora = () => {
  const features = [
    {
      icon: <FiShield />,
      title: "Reliable Technology",
      description:
        "We deliver secure and dependable technology solutions designed for your business needs.",
    },
    {
      icon: <FiCpu />,
      title: "Right Solutions",
      description:
        "We understand your requirements and recommend practical solutions that create real business value.",
    },
    {
      icon: <FiHeadphones />,
      title: "Long-Term Support",
      description:
        "Our relationship continues beyond implementation with ongoing support and technology guidance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] py-16 sm:py-20 lg:py-28">
      
      {/* Decorative background */}
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#9B5B35]/5 blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#062B49]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#9B5B35] sm:text-sm">
            Why Epsilora
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-6xl">
            Technology That
            <br className="hidden sm:block" />
            <span className="text-[#062B49]">
              Moves Your Business Forward
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            We combine technology expertise, reliable solutions and
            continuous support to help organizations build a stronger
            digital future.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9B5B35]/40 hover:shadow-xl sm:p-8"
            >
              {/* Number */}
              <div className="absolute right-5 top-4 text-5xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-[#9B5B35]/10">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center bg-[#062B49] text-xl text-white transition-all duration-300 group-hover:bg-[#9B5B35]">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative mt-6 text-xl font-bold text-[#111827]">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

              {/* Bottom line */}
              <div className="mt-7 h-[2px] w-10 bg-[#9B5B35] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 border-t border-gray-200 pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Looking for the right technology partner for your organization?
          </p>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 bg-[#062B49] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9B5B35] sm:px-7"
          >
            Talk to Our Team
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default WhyEpsilora;