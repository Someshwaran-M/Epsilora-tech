
import React, { useState } from "react";
import {
  FiServer,
  FiWifi,
  FiShield,
  FiHardDrive,
  FiDatabase,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";

const DataCenter = () => {
  const [activeFoundation, setActiveFoundation] = useState(0);

  const foundations = [
    {
      number: "01",
      title: "Infrastructure",
      description:
        "Build dependable data center infrastructure designed to support modern applications, business workloads, and critical technology operations with reliable performance.",
    },
    {
      number: "02",
      title: "Networking",
      description:
        "Connect systems, applications, and workloads through structured data center networking designed for performance, availability, and efficient communication.",
    },
    {
      number: "03",
      title: "Security",
      description:
        "Protect critical infrastructure, workloads, and business information through security-focused architecture, controls, and operational practices.",
    },
  ];

  const capabilities = [
    {
      icon: <FiServer />,
      title: "Server Infrastructure",
      text: "Build dependable compute environments for demanding enterprise workloads.",
    },
    {
      icon: <FiWifi />,
      title: "Network Architecture",
      text: "Connect systems and workloads through structured data center networking.",
    },
    {
      icon: <FiDatabase />,
      title: "Storage Infrastructure",
      text: "Support business data with scalable and reliable storage technologies.",
    },
    {
      icon: <FiShield />,
      title: "Infrastructure Security",
      text: "Create protected environments around critical infrastructure and workloads.",
    },
  ];

  const benefits = [
    "Business-critical infrastructure",
    "Reliable server environments",
    "Structured networking",
    "Scalable storage",
    "Infrastructure security",
    "Operational continuity",
  ];

  const architectureNodes = [
    {
      icon: <FiCpu />,
      layer: "Layer 01",
      title: "Compute",
    },
    {
      icon: <FiWifi />,
      layer: "Layer 02",
      title: "Network",
    },
    {
      icon: <FiHardDrive />,
      layer: "Layer 03",
      title: "Storage",
    },
    {
      icon: <FiShield />,
      layer: "Layer 04",
      title: "Security",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-[#F7F8FA] text-[#062B49]">
      {/* LIGHT HERO - BACKGROUND IMAGE REMOVED */}
      <section className="border-b border-[#E5E9ED] bg-[#F1F4F6] px-5 py-7 sm:px-8 sm:py-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
            EPSILORA TECHNOLOGY
          </span>

          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Data Center Solutions
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667586]">
            Reliable infrastructure, connected systems, and
            secure data center environments for your business.
          </p>
        </div>
      </section>

      {/* DATA CENTER FOUNDATION */}
      <section className="bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col gap-4 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
                  Data Center Foundation
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Infrastructure built
                <span className="block text-[#9B5B35]">
                  for continuity.
                </span>
              </h2>
            </div>

            <div className="hidden text-right sm:block">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                EPS / DATA CENTER
              </span>
              <div className="mt-2 ml-auto h-px w-12 bg-[#9B5B35]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
            {/* INTERACTIVE FOUNDATION NAVIGATION */}
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
                      className={`relative flex items-center gap-4 border-b py-4 transition-colors duration-300 sm:py-5 ${
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
                        className={`min-w-0 flex-1 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm ${
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
                            ? "translate-x-1 text-[#9B5B35]"
                            : "text-gray-300 group-hover:translate-x-1 group-hover:text-[#9B5B35]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* FOUNDATION DETAILS */}
            <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[#F1F4F6] sm:min-h-[320px]">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#9B5B35]/20 sm:h-52 sm:w-52" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full border border-[#062B49]/10 sm:h-64 sm:w-64" />

              <div className="relative z-10 flex min-h-[300px] flex-col justify-between p-5 sm:min-h-[320px] sm:p-8 lg:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                    Data Center Architecture
                  </span>

                  <span className="text-5xl font-light leading-none tracking-tight text-[#062B49]/10 sm:text-6xl">
                    {foundations[activeFoundation].number}
                  </span>
                </div>

                <div className="my-7 max-w-2xl">
                  <div className="mb-4 h-[2px] w-10 bg-[#9B5B35]" />

                  <h3
                    key={foundations[activeFoundation].title}
                    className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                  >
                    {foundations[activeFoundation].title}
                  </h3>

                  <p
                    key={foundations[activeFoundation].description}
                    className="mt-4 text-sm leading-7 text-[#667586]"
                  >
                    {foundations[activeFoundation].description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-[#062B49]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                    EPSILORA TECHNOLOGY
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
                    {foundations[activeFoundation].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE CAPABILITIES */}
      <section className="bg-[#F7F8FA] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Infrastructure Capabilities
              </span>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[#9B5B35]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                  Built around critical workloads
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Built around
                <span className="text-[#9B5B35]">
                  {" "}critical workloads.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#667586] sm:text-base">
                Connect your core infrastructure through a
                structured approach to servers, storage,
                networking, and security.
              </p>

              <div className="mt-6 border-t border-[#062B49]/10 sm:mt-8">
                {capabilities.map((item, index) => (
                  <div
                    key={item.title}
                    className="group grid grid-cols-[34px_1fr] gap-3 border-b border-[#062B49]/10 py-4 sm:grid-cols-[42px_1fr] sm:gap-4 sm:py-5"
                  >
                    <span className="pt-2 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#062B49]/10 text-[#062B49] transition-colors group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                          {item.icon}
                        </span>

                        <h3 className="text-sm font-bold text-[#062B49] transition-colors group-hover:text-[#9B5B35] sm:text-base">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#667586]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DATA CENTER */}
      <section className="bg-white px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Why Data Center
              </span>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-6 bg-[#9B5B35]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                  Built for continuity
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Keep your critical
                <span className="text-[#9B5B35]">
                  {" "}systems connected.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#667586] sm:text-base">
                A structured data center environment helps
                organizations maintain dependable technology
                operations while supporting changing workloads
                and infrastructure requirements.
              </p>

              <div className="mt-6 border-t border-[#062B49]/10 sm:mt-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-4 border-b border-[#062B49]/10 py-4 sm:items-center sm:py-5"
                  >
                    <span className="text-[10px] font-bold tracking-widest text-[#9B5B35]">
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

      {/* DATA CENTER ARCHITECTURE — ORIGINAL DARK CORE STYLE */}
      <section className="bg-[#F7F8FA] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35]">
                  Connected Infrastructure
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                One connected
                <span className="block text-[#9B5B35]">
                  technology ecosystem.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#667586]">
              Connect compute, networking, storage, and security
              through a unified infrastructure foundation.
            </p>
          </div>

          <div className="datacenter-architecture relative mt-7 h-[440px] overflow-hidden rounded-xl bg-[#062B49] sm:mt-9 sm:h-[500px] lg:h-[520px]">
            {/* SUBTLE CENTER GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B5B35]/10 blur-3xl sm:h-80 sm:w-80" />

            {/* ARCHITECTURE RINGS */}
            <div className="datacenter-ring-outer absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]" />

            <div className="datacenter-ring-middle absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5B35]/30 sm:h-[280px] sm:w-[280px] lg:h-[330px] lg:w-[330px]" />

            <div className="datacenter-ring-inner absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1] sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]" />

            {/* CONNECTION LINES */}
            <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-[#9B5B35]/25 sm:left-[16%] sm:right-[16%]" />
            <div className="absolute bottom-[14%] left-1/2 top-[14%] w-px bg-[#9B5B35]/25" />

            {/* TOP LABEL */}
            <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center sm:top-7">
              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-[9px] sm:tracking-[0.3em]">
                EPSILORA DATA CENTER ARCHITECTURE
              </span>
            </div>

            {/* FOUR NODES */}
            {architectureNodes.map((node, index) => {
              const positions = [
                "left-3 top-16 sm:left-7 sm:top-20 lg:left-12 lg:top-16",
                "right-3 top-16 sm:right-7 sm:top-20 lg:right-12 lg:top-16",
                "bottom-16 left-3 sm:bottom-20 sm:left-7 lg:bottom-16 lg:left-12",
                "bottom-16 right-3 sm:bottom-20 sm:right-7 lg:bottom-16 lg:right-12",
              ];

              const reverse = index === 1 || index === 3;

              return (
                <div
                  key={node.title}
                  className={`absolute ${positions[index]} flex items-center gap-2 sm:gap-3 ${
                    reverse ? "text-right" : ""
                  }`}
                >
                  {reverse && (
                    <div>
                      <span className="block text-[7px] font-bold uppercase tracking-widest text-white/40 sm:text-[9px]">
                        {node.layer}
                      </span>
                      <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                        {node.title}
                      </span>
                    </div>
                  )}

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/60 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-xl">
                    {node.icon}
                  </span>

                  {!reverse && (
                    <div>
                      <span className="block text-[7px] font-bold uppercase tracking-widest text-white/40 sm:text-[9px]">
                        {node.layer}
                      </span>
                      <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                        {node.title}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CENTRAL DATA CENTER CORE */}
            <div className="datacenter-core absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9B5B35] sm:h-36 sm:w-36 lg:h-40 lg:w-40">
              <div className="flex h-[82px] w-[82px] flex-col items-center justify-center rounded-full border border-white/25 text-center sm:h-28 sm:w-28">
                <FiServer className="text-xl text-white sm:text-2xl" />

                <span className="mt-2 text-[7px] font-bold uppercase tracking-widest text-white/70 sm:text-[9px]">
                  Connected
                </span>

                <span className="mt-1 text-[10px] font-bold text-white sm:text-sm">
                  DATA CENTER
                </span>
              </div>
            </div>

            {/* BOTTOM LABEL */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center sm:bottom-6">
              <span className="whitespace-nowrap text-[6px] font-bold uppercase tracking-[0.12em] text-[#C9875D] sm:text-[8px] sm:tracking-[0.25em]">
                Compute • Network • Storage • Security
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataCenter;
