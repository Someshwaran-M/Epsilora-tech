
import React, { useState } from "react";
import {
  FiCloud,
  FiShield,
  FiRefreshCw,
  FiArrowRight,
  FiServer,
  FiDatabase,
  FiLock,
  FiActivity,
  FiCheck,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const Cloud = () => {
  const [activeFoundation, setActiveFoundation] = useState(0);

  const foundations = [
    {
      number: "01",
      title: "Infrastructure",
      description:
        "Build flexible and scalable cloud infrastructure designed to support modern applications, workloads, and business operations with reliable performance.",
    },
    {
      number: "02",
      title: "Migration",
      description:
        "Move applications, workloads, and business data to cloud environments through a structured migration approach designed to reduce disruption and support long-term scalability.",
    },
    {
      number: "03",
      title: "Security",
      description:
        "Protect cloud workloads, applications, and critical business information with security-focused architecture, access controls, and operational practices.",
    },
  ];

  const benefits = [
    "Flexible cloud infrastructure",
    "Improved scalability",
    "Workload modernization",
    "Cloud security",
    "Operational efficiency",
    "Business continuity",
  ];

  const capabilities = [
    {
      icon: <FiServer />,
      title: "Scalable Infrastructure",
      text: "Build cloud environments that adapt as business requirements grow.",
    },
    {
      icon: <FiDatabase />,
      title: "Data & Workloads",
      text: "Support applications, databases, and workloads across modern cloud environments.",
    },
    {
      icon: <FiLock />,
      title: "Security First",
      text: "Protect cloud workloads with security-focused infrastructure and controls.",
    },
    {
      icon: <FiActivity />,
      title: "High Availability",
      text: "Design reliable environments focused on continuity and operational availability.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#F7F8FA] text-[#062B49]">
      {/* LIGHT HERO — BACKGROUND IMAGE REMOVED */}
      <section className="flex min-h-[110px] items-center border-b border-[#E7EBEF] bg-[#F1F4F6] px-5 py-7 sm:min-h-[130px] sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
            EPSILORA TECHNOLOGY
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Cloud Solutions
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667586]">
            Flexible, secure, and scalable cloud foundations for
            modern business operations.
          </p>
        </div>
      </section>

      {/* CLOUD FOUNDATION */}
      <section className="bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
                  Cloud Foundation
                </span>
              </div>

              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                A smarter foundation
                <span className="block text-[#9B5B35]">
                  for digital growth.
                </span>
              </h2>
            </div>

            <div className="hidden text-right sm:block">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                EPS / CLOUD
              </span>
              <div className="mt-2 ml-auto h-px w-12 bg-[#9B5B35]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
            {/* FOUNDATION NAVIGATION */}
            <div className="border-b border-[#062B49]/10 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Explore the foundation
              </p>

              {foundations.map((item, index) => {
                const isActive = activeFoundation === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveFoundation(index)}
                    aria-pressed={isActive}
                    className="group block w-full text-left"
                  >
                    <div
                      className={`relative flex items-center gap-4 border-b py-4 transition-colors duration-300 sm:gap-5 sm:py-5 ${
                        isActive
                          ? "border-[#9B5B35]"
                          : "border-[#062B49]/10"
                      }`}
                    >
                      <span
                        className={`text-2xl font-light tracking-tight transition-colors sm:text-3xl ${
                          isActive
                            ? "text-[#9B5B35]"
                            : "text-gray-300 group-hover:text-[#062B49]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`min-w-0 flex-1 text-xs font-bold uppercase tracking-[0.12em] transition-colors sm:text-sm ${
                          isActive
                            ? "text-[#062B49]"
                            : "text-gray-400 group-hover:text-[#062B49]"
                        }`}
                      >
                        {item.title}
                      </span>

                      <FiArrowRight
                        className={`shrink-0 transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-[#9B5B35]"
                            : "-translate-x-1 text-gray-300 group-hover:translate-x-0 group-hover:text-[#9B5B35]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FOUNDATION CONTENT */}
            <div className="relative overflow-hidden rounded-xl bg-[#F1F4F6] p-5 sm:p-7 lg:p-9">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#9B5B35]/15" />
              <div className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full border border-[#062B49]/5" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                    Cloud Architecture
                  </span>

                  <span className="text-5xl font-light leading-none tracking-tight text-[#062B49]/10 sm:text-6xl">
                    {foundations[activeFoundation].number}
                  </span>
                </div>

                <div>
                  <div className="mb-4 h-[2px] w-10 bg-[#9B5B35]" />

                  <h3
                    key={foundations[activeFoundation].title}
                    className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                  >
                    {foundations[activeFoundation].title}
                  </h3>

                  <p
                    key={foundations[activeFoundation].description}
                    className="mt-4 max-w-xl text-sm leading-7 text-[#667586]"
                  >
                    {foundations[activeFoundation].description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-[#062B49]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    EPSILORA TECHNOLOGY
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9B5B35]">
                    {foundations[activeFoundation].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLOUD */}
      <section className="bg-[#F7F8FA] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.35fr_1.65fr] md:gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:gap-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Why Cloud
              </span>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[#9B5B35]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                  Built for change
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your technology should not
                <span className="text-[#9B5B35]">
                  {" "}limit your growth.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#667586] sm:mt-5 sm:text-base">
                Cloud environments create a foundation that can
                adapt as workloads, applications, teams, and
                business requirements change.
              </p>

              <div className="mt-6 grid grid-cols-1 border-t border-[#062B49]/10 sm:mt-8 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-4 border-b border-[#062B49]/10 py-4 sm:py-5"
                  >
                    <span className="shrink-0 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold leading-6 text-[#062B49] transition-colors group-hover:text-[#9B5B35]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD CAPABILITIES */}
      <section className="bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#9B5B35]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
                Cloud Capabilities
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One connected
              <span className="block text-[#9B5B35]">
                technology ecosystem.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#667586]">
              Connect infrastructure, applications, and data
              through a unified technology foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="group rounded-xl border border-[#E7EBEF] bg-[#F7F8FA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C18A61]/50 hover:bg-white hover:shadow-md sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0E7E1] text-lg text-[#9B5B35]">
                    {capability.icon}
                  </span>

                  <span className="text-xs font-bold tracking-widest text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold">
                  {capability.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667586]">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD ARCHITECTURE */}
      <section className="bg-[#F1F4F6] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
                  Connected Cloud
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Cloud architecture
                <span className="block text-[#9B5B35]">
                  that works together.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#667586]">
              Connect infrastructure, compute, data, and
              applications in one technology ecosystem.
            </p>
          </div>

          {/* LIGHT ARCHITECTURE VISUAL */}
          <div className="relative mt-7 overflow-hidden rounded-xl border border-[#E1E6EB] bg-white px-4 py-8 sm:mt-9 sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5B35]/10 sm:h-72 sm:w-72" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#062B49]/10 sm:h-52 sm:w-52" />

            <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                {
                  icon: <FiCloud />,
                  title: "Cloud",
                  subtitle: "Layer 01",
                },
                {
                  icon: <FiServer />,
                  title: "Compute",
                  subtitle: "Layer 02",
                },
                {
                  icon: <FiDatabase />,
                  title: "Data",
                  subtitle: "Layer 03",
                },
                {
                  icon: <FiLayers />,
                  title: "Applications",
                  subtitle: "Layer 04",
                },
              ].map((node) => (
                <div
                  key={node.title}
                  className="flex flex-col items-center rounded-xl border border-[#E7EBEF] bg-[#F7F8FA] px-3 py-5 text-center transition-colors hover:border-[#C18A61]/60 sm:py-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C18A61]/40 bg-white text-xl text-[#9B5B35]">
                    {node.icon}
                  </span>

                  <span className="mt-3 text-[9px] font-bold uppercase tracking-widest text-[#9B5B35]">
                    {node.subtitle}
                  </span>

                  <span className="mt-1 text-sm font-bold text-[#062B49]">
                    {node.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative z-10 mx-auto mt-6 flex max-w-4xl flex-col items-center gap-3 rounded-xl bg-[#F1F4F6] px-4 py-5 text-center sm:mt-8 sm:flex-row sm:justify-center sm:gap-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9B5B35] text-xl text-white">
                <FiGlobe />
              </span>

              <div>
                <h3 className="text-base font-bold">
                  Connected Cloud
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#667586]">
                  Infrastructure • Data • Applications • Compute
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Connected Technology Architecture
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9B5B35]">
              Cloud / Compute / Data / Applications
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      
    </div>
  );
};

export default Cloud;
