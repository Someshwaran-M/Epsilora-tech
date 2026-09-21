import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiShield,
  FiCpu,
  FiHeadphones,
} from "react-icons/fi";

const WhyEpsilora = () => {
  const [active, setActive] = useState(0);

  const features = [
    {
      icon: <FiShield />,
      title: "Reliable Technology",
      short: "RELIABILITY",
      description:
        "Secure and dependable technology solutions designed around your business needs.",
    },
    {
      icon: <FiCpu />,
      title: "Right Solutions",
      short: "PRECISION",
      description:
        "Practical technology solutions focused on creating real business value.",
    },
    {
      icon: <FiHeadphones />,
      title: "Long-Term Support",
      short: "CONTINUITY",
      description:
        "Continuous support and technology guidance beyond implementation.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#062B49] text-white">

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-16">

        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-7 bg-[#C18A61]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C18A61]">
                Why Epsilora
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Technology with{" "}
              <span className="text-[#C18A61]">purpose.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-6 text-white/50 sm:text-sm">
            Reliable technology, practical solutions and continuous support
            for your digital journey.
          </p>

        </div>

        {/* MAIN */}
        <div className="mt-10 grid overflow-hidden border border-white/10 lg:grid-cols-[260px_1fr]">

          {/* LEFT MENU */}
          <div className="border-b border-white/10 lg:border-b-0 lg:border-r">

            {features.map((feature, index) => {
              const isActive = active === index;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    border-b
                    border-white/10
                    px-4
                    py-4
                    text-left
                    transition-all
                    duration-300
                    last:border-b-0
                    ${
                      isActive
                        ? "bg-white/[0.06]"
                        : "hover:bg-white/[0.03]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      text-sm
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[#C18A61] bg-[#9B5B35] text-white"
                          : "border-white/15 text-white/40"
                      }
                    `}
                  >
                    {feature.icon}
                  </span>

                  <span
                    className={`
                      text-xs
                      font-semibold
                      sm:text-sm
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/40"
                      }
                    `}
                  >
                    {feature.title}
                  </span>

                  <FiArrowUpRight
                    className={`
                      ml-auto text-sm
                      ${
                        isActive
                          ? "text-[#C18A61]"
                          : "text-white/20"
                      }
                    `}
                  />

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      bg-[#C18A61]
                      transition-all
                      duration-300
                      ${
                        isActive ? "w-full" : "w-0"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative min-h-[290px] overflow-hidden">

            {/* Background word */}
            <div className="pointer-events-none absolute bottom-0 right-[-10px] select-none">
              <span className="text-[80px] font-black uppercase tracking-[-0.07em] text-white/[0.035] sm:text-[110px] lg:text-[150px]">
                {features[active].short}
              </span>
            </div>

            <div
              key={active}
              className="relative flex min-h-[290px] flex-col justify-between p-6 sm:p-8 lg:p-10"
              style={{
                animation: "epsiloraReveal 0.4s ease-out",
              }}
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  0{active + 1} / 03
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C18A61]">
                  {features[active].short}
                </span>
              </div>

              {/* CONTENT */}
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center border border-[#C18A61]/40 text-lg text-[#C18A61]">
                  {features[active].icon}
                </div>

                <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                  {features[active].title}
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-6 text-white/45 sm:text-sm">
                  {features[active].description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C18A61]" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Epsilora Technology
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/35 sm:text-sm">
            Technology designed around your business.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-xs font-semibold text-white transition-all hover:border-[#C18A61] hover:text-[#C18A61]"
          >
            Talk to Our Team

            <FiArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

        </div>
      </div>

      <style>{`
        @keyframes epsiloraReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyEpsilora;