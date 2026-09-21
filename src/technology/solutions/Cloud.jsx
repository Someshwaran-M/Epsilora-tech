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
  const features = [
    {
      icon: <FiCloud />,
      number: "01",
      title: "Cloud Infrastructure",
      text: "Flexible cloud infrastructure designed to support modern business workloads with scalability, availability and performance.",
    },
    {
      icon: <FiRefreshCw />,
      number: "02",
      title: "Cloud Migration",
      text: "Plan and move applications, workloads and data to cloud environments with a structured and reliable migration approach.",
    },
    {
      icon: <FiShield />,
      number: "03",
      title: "Cloud Security",
      text: "Security-focused cloud solutions designed to help protect workloads, applications and critical business data.",
    },
  ];

  const [activeFoundation, setActiveFoundation] = useState(0);

  const foundations = [
    {
      number: "01",
      title: "Infrastructure",
      description:
        "Build a flexible and scalable cloud infrastructure designed to support modern applications, workloads and business operations with reliable performance.",
    },
    {
      number: "02",
      title: "Migration",
      description:
        "Move applications, workloads and business data to cloud environments through a structured migration approach designed to reduce disruption and support long-term scalability.",
    },
    {
      number: "03",
      title: "Security",
      description:
        "Protect cloud workloads, applications and critical business information with security-focused architecture, access controls and operational practices.",
    },
  ];

  const capabilities = [
    {
      icon: <FiServer />,
      title: "Scalable Infrastructure",
      text: "Build cloud environments that can adapt as business requirements grow.",
    },
    {
      icon: <FiDatabase />,
      title: "Data & Workloads",
      text: "Support applications, databases and workloads across modern cloud environments.",
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

  const benefits = [
    "Flexible cloud infrastructure",
    "Improved scalability",
    "Workload modernization",
    "Cloud security",
    "Operational efficiency",
    "Business continuity",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F8FA] text-[#062B49]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[270px] md:h-[310px] lg:h-[340px]">
        <div
          className="
            cloud-hero-background
            absolute
            inset-0
            bg-[url('/cloud.png')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        />
      </section>

      {/* =====================================================
          CLOUD FOUNDATION
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-10 ml-0 flex flex-col gap-6 sm:mb-14 md:mb-16 lg:mb-20 lg:ml-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-[2px] w-8 bg-[#9B5B35] sm:w-10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.35em]">
                  Cloud Foundation
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-[40px] font-bold leading-[0.96] tracking-[-0.05em] text-[#062B49] sm:text-[48px] md:text-[56px] lg:mt-7 lg:text-[60px] lg:leading-[0.95]">
                A smarter foundation
                <span className="block text-[#9B5B35]">
                  for digital growth.
                </span>
              </h2>
            </div>

            <div className="ml-0 text-left sm:text-right lg:ml-8 lg:pb-2">
              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-gray-400 sm:text-[9px] sm:tracking-[0.3em]">
                EPS / CLOUD
              </span>

              <div className="mt-3 h-px w-12 bg-[#9B5B35] sm:ml-auto sm:w-16" />
            </div>
          </div>

          {/* MAIN EXPERIENCE */}

          <div className="ml-0 grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:ml-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">

            {/* LEFT NAVIGATION */}

            <div className="border-b border-[#062B49]/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-14">

              <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.3em] text-gray-400 sm:mb-8 sm:text-[9px]">
                Explore the foundation
              </p>

              <div>
                {foundations.map((item, index) => {
                  const isActive = activeFoundation === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActiveFoundation(index)}
                      className="group block w-full text-left"
                    >
                      <div
                        className={`
                          relative
                          flex
                          items-center
                          gap-4
                          border-b
                          py-5
                          transition-all
                          duration-500
                          sm:gap-6
                          sm:py-6
                          lg:gap-7
                          lg:py-7
                          ${
                            isActive
                              ? "border-[#9B5B35]"
                              : "border-[#062B49]/10"
                          }
                        `}
                      >

                        {/* ACTIVE LINE */}

                        <span
                          className={`
                            absolute
                            bottom-0
                            left-0
                            h-[3px]
                            w-full
                            bg-[#9B5B35]
                            transition-all
                            duration-500
                            lg:bottom-0
                            lg:left-[-57px]
                            lg:top-0
                            lg:h-full
                            lg:w-[3px]
                            ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0"
                            }
                          `}
                        />

                        {/* NUMBER */}

                        <span
                          className={`
                            text-[28px]
                            font-light
                            tracking-[-0.05em]
                            transition-all
                            duration-500
                            sm:text-[32px]
                            lg:text-[34px]
                            ${
                              isActive
                                ? "text-[#9B5B35]"
                                : "text-gray-300 group-hover:text-[#062B49]"
                            }
                          `}
                        >
                          {item.number}
                        </span>

                        {/* TITLE */}

                        <div className="min-w-0 flex-1">
                          <span
                            className={`
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.16em]
                              transition-colors
                              duration-300
                              sm:text-[10px]
                              sm:tracking-[0.2em]
                              ${
                                isActive
                                  ? "text-[#062B49]"
                                  : "text-gray-400 group-hover:text-[#062B49]"
                              }
                            `}
                          >
                            {item.title}
                          </span>
                        </div>

                        {/* ARROW */}

                        <span
                          className={`
                            shrink-0
                            text-base
                            transition-all
                            duration-500
                            sm:text-lg
                            ${
                              isActive
                                ? "translate-x-1 text-[#9B5B35]"
                                : "text-gray-300"
                            }
                          `}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="relative min-h-[430px] overflow-hidden bg-[#062B49] sm:min-h-[460px] lg:min-h-[430px]">

              {/* DECORATIVE ELEMENTS */}

              <div className="absolute right-0 top-0 h-44 w-44 translate-x-20 -translate-y-20 rounded-full border border-white/10 sm:h-56 sm:w-56 lg:h-64 lg:w-64" />

              <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-24 translate-y-24 rounded-full border border-[#9B5B35]/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

              {/* CONTENT */}

              <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-between p-6 sm:min-h-[460px] sm:p-8 md:p-10 lg:min-h-[430px] lg:p-14">

                {/* TOP */}

                <div className="flex items-start justify-between gap-5">
                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                    Cloud Architecture
                  </span>

                  <span className="text-[52px] font-light leading-none tracking-[-0.06em] text-white/10 sm:text-[64px] lg:text-[72px]">
                    {foundations[activeFoundation].number}
                  </span>
                </div>

                {/* CENTER */}

                <div className="max-w-2xl">

                  <div className="mb-6 h-[2px] w-10 bg-[#9B5B35] sm:mb-8 sm:w-14" />

                  <h3
                    key={foundations[activeFoundation].title}
                    className="text-[32px] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[38px] md:text-[42px]"
                  >
                    {foundations[activeFoundation].title}
                  </h3>

                  <p
                    key={foundations[activeFoundation].description}
                    className="mt-5 max-w-xl text-[13px] leading-7 text-white/60 sm:mt-7 sm:text-[14px] sm:leading-8 md:text-[15px]"
                  >
                    {foundations[activeFoundation].description}
                  </p>
                </div>

                {/* BOTTOM */}

                <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6">

                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[9px] sm:tracking-[0.28em]">
                    EPSILORA TECHNOLOGY
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-[9px] sm:tracking-[0.28em]">
                    {foundations[activeFoundation].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CLOUD
      ========================================================= */}

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="ml-0 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-[0.35fr_1.65fr] md:gap-12 lg:ml-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* LEFT */}

            <div>
              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-gray-400 sm:text-[9px] sm:tracking-[0.3em]">
                Why Cloud
              </span>

              <div className="mt-6 hidden h-[140px] w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block lg:mt-8 lg:h-[180px]" />

              <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:block">
                <span className="h-px w-6 bg-[#9B5B35] sm:hidden" />

                <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#9B5B35] sm:text-[9px] sm:tracking-[0.3em]">
                  Built for change
                </span>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <h2 className="max-w-4xl text-[38px] font-bold leading-[0.98] tracking-[-0.05em] text-[#062B49] sm:text-[46px] md:text-[52px] lg:text-[58px] lg:leading-[0.95]">
                Your technology should not
                <span className="text-[#9B5B35]">
                  {" "}limit your growth.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-[14px] leading-7 text-gray-500 sm:mt-8 sm:text-[15px] sm:leading-8 lg:mt-10 lg:text-lg">
                Cloud environments create a foundation that can
                adapt as workloads, applications, teams and business
                requirements change.
              </p>

              {/* BENEFITS */}

              <div className="mt-10 grid grid-cols-1 border-t border-[#062B49]/10 sm:mt-12 sm:grid-cols-2 lg:mt-16">

                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                      border-b
                      border-[#062B49]/10
                      py-5
                      sm:gap-5
                      sm:py-6
                      lg:gap-6
                      lg:py-7
                    "
                  >
                    <span className="shrink-0 text-[9px] font-bold tracking-[0.25em] text-[#9B5B35] sm:text-[10px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[13px] font-semibold leading-6 text-[#062B49] transition-colors duration-300 group-hover:text-[#9B5B35] sm:text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOUD ARCHITECTURE
      ========================================================= */}

      <section className="bg-[#F7F8FA] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="ml-0 flex flex-col gap-8 sm:gap-10 lg:ml-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-[2px] w-8 bg-[#9B5B35] sm:w-10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.35em]">
                  Connected Cloud
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-[38px] font-bold leading-[0.96] tracking-[-0.05em] text-[#062B49] sm:text-[46px] md:text-[52px] lg:mt-7 lg:text-[58px] lg:leading-[0.94]">
                One connected
                <span className="block text-[#9B5B35]">
                  technology ecosystem.
                </span>
              </h2>
            </div>

            <div className="max-w-sm border-l border-[#062B49]/10 pl-5 sm:pl-6 lg:pl-8">
              <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-gray-400 sm:text-[9px] sm:tracking-[0.3em]">
                Cloud Architecture
              </span>

              <p className="mt-3 text-[12px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
                Connect infrastructure, applications and data
                through a unified technology foundation.
              </p>
            </div>
          </div>

          {/* =====================================================
              ARCHITECTURE VISUAL
          ===================================================== */}

          <div className="cloud-architecture relative mt-12 h-[620px] overflow-hidden bg-[#062B49] sm:mt-16 sm:h-[650px] md:h-[680px] lg:mt-24 lg:h-[560px]">

            {/* ROTATING RINGS */}

            <div className="cloud-ring-outer absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px]" />

            <div className="cloud-ring-middle absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5B35]/20 sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]" />

            <div className="cloud-ring-inner absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[210px] sm:w-[210px] lg:h-[240px] lg:w-[240px]" />

            {/* CONNECTION LINES */}

            <div className="cloud-connection-horizontal absolute left-[12%] right-[12%] top-1/2 h-px bg-white/10 sm:left-[15%] sm:right-[15%] lg:left-[20%] lg:right-[20%]" />

            <div className="cloud-connection-vertical absolute bottom-[20%] left-1/2 top-[20%] w-px bg-white/10" />

            {/* TOP LABEL */}

            <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center sm:top-8">
              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.3em] text-white/25 sm:text-[8px] sm:tracking-[0.35em]">
                EPSILORA CLOUD ARCHITECTURE
              </span>
            </div>

            {/* CLOUD NODE */}

            <div className="cloud-node cloud-node-1 absolute left-5 top-20 flex items-center gap-3 sm:left-8 sm:top-20 sm:gap-4 md:left-12 lg:left-16 lg:top-16 lg:gap-5">
              <div className="cloud-node-icon relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-lg text-[#C9875D] sm:h-12 sm:w-12 sm:text-xl lg:h-14 lg:w-14">
                <FiCloud />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 01
                </span>

                <span className="mt-1 block text-xs font-bold text-white sm:mt-2 sm:text-sm">
                  Cloud
                </span>
              </div>
            </div>

            {/* COMPUTE NODE */}

            <div className="cloud-node cloud-node-2 absolute right-5 top-20 flex items-center gap-3 text-right sm:right-8 sm:top-20 sm:gap-4 md:right-12 lg:right-16 lg:top-16 lg:gap-5">

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 02
                </span>

                <span className="mt-1 block text-xs font-bold text-white sm:mt-2 sm:text-sm">
                  Compute
                </span>
              </div>

              <div className="cloud-node-icon relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-lg text-[#C9875D] sm:h-12 sm:w-12 sm:text-xl lg:h-14 lg:w-14">
                <FiServer />
              </div>
            </div>

            {/* DATA NODE */}

            <div className="cloud-node cloud-node-3 absolute bottom-20 left-5 flex items-center gap-3 sm:bottom-20 sm:left-8 sm:gap-4 md:left-12 lg:bottom-16 lg:left-16 lg:gap-5">

              <div className="cloud-node-icon relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-lg text-[#C9875D] sm:h-12 sm:w-12 sm:text-xl lg:h-14 lg:w-14">
                <FiDatabase />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 03
                </span>

                <span className="mt-1 block text-xs font-bold text-white sm:mt-2 sm:text-sm">
                  Data
                </span>
              </div>
            </div>

            {/* APPLICATION NODE */}

            <div className="cloud-node cloud-node-4 absolute bottom-20 right-5 flex items-center gap-3 text-right sm:bottom-20 sm:right-8 sm:gap-4 md:right-12 lg:bottom-16 lg:right-16 lg:gap-5">

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 04
                </span>

                <span className="mt-1 block text-xs font-bold text-white sm:mt-2 sm:text-sm">
                  Applications
                </span>
              </div>

              <div className="cloud-node-icon relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-lg text-[#C9875D] sm:h-12 sm:w-12 sm:text-xl lg:h-14 lg:w-14">
                <FiLayers />
              </div>
            </div>

            {/* CENTRAL CLOUD CORE */}

            <div className="cloud-core absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9B5B35] sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44">

              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/20 text-center sm:h-28 sm:w-28 md:h-30 md:w-30 lg:h-32 lg:w-32">

                <FiGlobe className="text-xl text-white sm:text-2xl" />

                <span className="mt-2 text-[7px] font-bold uppercase tracking-[0.25em] text-white/60 sm:mt-3 sm:text-[9px] sm:tracking-[0.3em]">
                  Connected
                </span>

                <span className="mt-1 text-base font-bold text-white sm:text-lg md:text-xl">
                  CLOUD
                </span>
              </div>
            </div>

            {/* BOTTOM LABEL */}

            <div className="absolute bottom-5 left-1/2 max-w-[90%] -translate-x-1/2 text-center sm:bottom-8">
              <span className="text-[6px] font-bold uppercase tracking-[0.22em] text-[#C9875D] sm:text-[8px] sm:tracking-[0.3em]">
                Infrastructure • Data • Applications • Compute
              </span>
            </div>
          </div>

          {/* BOTTOM INFORMATION */}

          <div className="mt-7 flex flex-col gap-4 sm:mt-10 md:flex-row md:items-center md:justify-between">

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-400 sm:text-[9px] sm:tracking-[0.3em]">
              Connected Technology Architecture
            </span>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-[2px] w-8 bg-[#9B5B35] sm:w-12" />

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:text-[9px] sm:tracking-[0.25em]">
                Cloud / Compute / Data / Applications
              </span>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Cloud;