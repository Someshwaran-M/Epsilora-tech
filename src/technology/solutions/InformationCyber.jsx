import React, { useState } from "react";
import {
  FiShield,
  FiLock,
  FiActivity,
  FiUserCheck,
  FiCheck,
  FiEye,
  FiDatabase,
  FiWifi,
  FiLayers,
} from "react-icons/fi";

const InformationCyber = () => {
  /* =====================================================
      SECURITY AREAS
  ===================================================== */

  const securityAreas = [
    {
      icon: <FiShield />,
      number: "01",
      title: "Network & Firewall Security",
      text: "Security solutions designed to protect network infrastructure and business systems from unauthorized access and security threats.",
    },
    {
      icon: <FiLock />,
      number: "02",
      title: "Cloud & Data Security",
      text: "Protect important business data and cloud environments with security-focused solutions built around modern infrastructure.",
    },
    {
      icon: <FiActivity />,
      number: "03",
      title: "Security Monitoring & Response",
      text: "Monitoring and response capabilities designed to help identify, investigate and address security events.",
    },
    {
      icon: <FiUserCheck />,
      number: "04",
      title: "Identity & Access Management",
      text: "Manage user access and support secure authentication across business applications, systems and environments.",
    },
  ];

  /* =====================================================
      SECURITY FOUNDATION
  ===================================================== */

  const [activeFoundation, setActiveFoundation] = useState(0);

  const foundations = [
    {
      number: "01",
      title: "Network Security",
      description:
        "Protect network infrastructure and business systems through layered security controls designed to reduce unauthorized access and security threats.",
    },
    {
      number: "02",
      title: "Cloud & Data Security",
      description:
        "Protect important business data and cloud environments with security-focused architecture designed around modern digital infrastructure.",
    },
    {
      number: "03",
      title: "Identity & Monitoring",
      description:
        "Support secure access, authentication, visibility and monitoring across business applications, systems and connected environments.",
    },
  ];

  /* =====================================================
      CAPABILITIES
  ===================================================== */

  const capabilities = [
    {
      icon: <FiShield />,
      title: "Network Protection",
      text: "Protect critical network infrastructure with layered security controls.",
    },
    {
      icon: <FiDatabase />,
      title: "Data Protection",
      text: "Support secure handling and protection of important business information.",
    },
    {
      icon: <FiEye />,
      title: "Security Visibility",
      text: "Improve visibility across systems and identify security events.",
    },
    {
      icon: <FiLayers />,
      title: "Security Architecture",
      text: "Build security into infrastructure, applications and cloud environments.",
    },
  ];

  /* =====================================================
      BENEFITS
  ===================================================== */

  const benefits = [
    "Network and infrastructure protection",
    "Cloud and business data security",
    "Identity and access control",
    "Security monitoring and response",
    "Risk-focused security practices",
    "Layered security architecture",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F8FA] text-[#062B49]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[270px] md:h-[310px] lg:h-[340px]">
        <div className="cyber-hero-background absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center bg-no-repeat" />
      </section>


      {/* =====================================================
          SECURITY FOUNDATION
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-12 flex flex-col gap-8 sm:mb-16 md:mb-20 md:flex-row md:items-end md:justify-between lg:ml-8">

            <div>

              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-[2px] w-7 bg-[#9B5B35] sm:w-10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.35em]">
                  Security Foundation
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl text-[40px] font-bold leading-[0.97] tracking-[-0.05em] text-[#062B49] sm:mt-7 sm:text-[48px] md:text-[55px] lg:text-[60px]">
                Security built
                <span className="block text-[#9B5B35]">
                  for protection.
                </span>
              </h2>

            </div>


            <div className="hidden pb-2 text-right sm:block">

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                EPS / CYBER SECURITY
              </span>

              <div className="mt-3 ml-auto h-px w-16 bg-[#9B5B35]" />

            </div>

          </div>


          {/* FOUNDATION CONTENT */}

          <div className="grid grid-cols-1 gap-10 lg:ml-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">

            {/* LEFT NAVIGATION */}

            <div className="border-b border-[#062B49]/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-14">

              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 sm:mb-8">
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
                          relative flex items-center gap-4 border-b py-5
                          transition-all duration-500
                          sm:gap-6 sm:py-6
                          lg:gap-7 lg:py-7
                          ${
                            isActive
                              ? "border-[#9B5B35]"
                              : "border-[#062B49]/10"
                          }
                        `}
                      >

                        <span
                          className={`
                            absolute left-[-12px] top-0 h-full w-[3px]
                            bg-[#9B5B35] transition-all duration-500
                            lg:left-[-57px]
                            ${isActive ? "opacity-100" : "opacity-0"}
                          `}
                        />

                        <span
                          className={`
                            text-[28px] font-light tracking-[-0.05em]
                            transition-all duration-500
                            sm:text-[31px]
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

                        <div className="flex-1">

                          <span
                            className={`
                              text-[10px] font-bold uppercase tracking-[0.15em]
                              transition-colors duration-300
                              sm:text-[11px] sm:tracking-[0.2em]
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

                        <span
                          className={`
                            text-base transition-all duration-500 sm:text-lg
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

            <div className="relative min-h-[430px] overflow-hidden bg-[#062B49] sm:min-h-[450px]">

              {/* DECORATIVE CIRCLES */}

              <div className="absolute right-0 top-0 h-48 w-48 translate-x-20 -translate-y-20 rounded-full border border-white/10 sm:h-64 sm:w-64" />

              <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-24 translate-y-24 rounded-full border border-[#9B5B35]/20 sm:h-80 sm:w-80 sm:translate-x-32 sm:translate-y-32" />

              {/* GRID */}

              <div className="cyber-foundation-grid absolute inset-0" />


              <div className="relative z-10 flex min-h-[430px] flex-col justify-between p-7 sm:min-h-[450px] sm:p-10 md:p-12 lg:p-14">

                {/* TOP */}

                <div className="flex items-start justify-between gap-5">

                  <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/40 sm:text-[10px] sm:tracking-[0.3em]">
                    Security Architecture
                  </span>

                  <span className="text-[54px] font-light leading-none tracking-[-0.06em] text-white/10 sm:text-[64px] md:text-[72px]">
                    {foundations[activeFoundation].number}
                  </span>

                </div>


                {/* MAIN */}

                <div className="max-w-2xl">

                  <div className="mb-6 h-[2px] w-12 bg-[#9B5B35] sm:mb-8 sm:w-14" />

                  <h3
                    key={foundations[activeFoundation].title}
                    className="cyber-foundation-title text-[32px] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[38px] md:text-[42px]"
                  >
                    {foundations[activeFoundation].title}
                  </h3>

                  <p
                    key={foundations[activeFoundation].description}
                    className="cyber-foundation-description mt-5 max-w-xl text-[13px] leading-7 text-white/60 sm:mt-7 sm:text-[15px] sm:leading-8"
                  >
                    {foundations[activeFoundation].description}
                  </p>

                </div>


                {/* BOTTOM */}

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pt-6">

                  <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/30 sm:text-[9px] sm:tracking-[0.28em]">
                    EPSILORA TECHNOLOGY
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#9B5B35] sm:text-[9px] sm:tracking-[0.28em]">
                    {foundations[activeFoundation].title}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECURITY CAPABILITIES
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-12 lg:ml-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* LEFT */}

            <div>

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Security Capabilities
              </span>

              <div className="mt-6 hidden h-[180px] w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block lg:mt-8" />

              <span className="mt-6 block text-[9px] font-bold uppercase tracking-[0.3em] text-[#9B5B35]">
                Built around secure environments
              </span>

            </div>


            {/* RIGHT */}

            <div>

              <h2 className="max-w-4xl text-[39px] font-bold leading-[0.98] tracking-[-0.05em] text-[#062B49] sm:text-[47px] md:text-[53px] lg:text-[58px]">
                Built around
                <span className="text-[#9B5B35]">
                  {" "}secure environments.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:mt-10 sm:text-lg sm:leading-8">
                Security protection should connect networks,
                data, identity, visibility and infrastructure
                through a structured approach to digital security.
              </p>


              <div className="mt-12 border-t border-[#062B49]/10 sm:mt-16">

                {capabilities.map((item, index) => (

                  <div
                    key={item.title}
                    className="group grid grid-cols-[38px_1fr] gap-4 border-b border-[#062B49]/10 py-6 sm:grid-cols-[55px_1fr] sm:gap-5 sm:py-7 md:grid-cols-[70px_1fr] md:gap-6 md:py-8"
                  >

                    <span className="pt-2 text-[9px] font-bold tracking-[0.2em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.25em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <div>

                      <div className="flex items-center gap-4 sm:gap-5">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#062B49]/10 text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white sm:h-11 sm:w-11">
                          {item.icon}
                        </div>

                        <h3 className="text-base font-bold text-[#062B49] transition-colors group-hover:text-[#9B5B35] sm:text-lg">
                          {item.title}
                        </h3>

                      </div>

                      <p className="mt-3 max-w-xl text-[13px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
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


      {/* =====================================================
          WHY CYBER SECURITY
      ===================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-12 lg:ml-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            {/* LEFT */}

            <div>

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Why Cyber Security
              </span>

              <div className="mt-6 hidden h-[180px] w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block lg:mt-8" />

              <span className="mt-6 block text-[9px] font-bold uppercase tracking-[0.3em] text-[#9B5B35]">
                Built for protection
              </span>

            </div>


            {/* RIGHT */}

            <div>

              <h2 className="max-w-4xl text-[39px] font-bold leading-[0.98] tracking-[-0.05em] text-[#062B49] sm:text-[47px] md:text-[53px] lg:text-[58px]">
                Protect your critical
                <span className="text-[#9B5B35]">
                  {" "}digital environment.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:mt-10 sm:text-lg sm:leading-8">
                Modern businesses depend on connected systems,
                cloud platforms, networks, applications and
                digital identities. A structured security
                environment helps support reliable operations
                while protecting critical business resources.
              </p>


              <div className="mt-12 border-t border-[#062B49]/10 sm:mt-16">

                {benefits.map((benefit, index) => (

                  <div
                    key={benefit}
                    className="group flex items-start gap-4 border-b border-[#062B49]/10 py-5 sm:items-center sm:gap-6 sm:py-6 md:gap-7 md:py-7"
                  >

                    <span className="pt-1 text-[9px] font-bold tracking-[0.2em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.25em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#062B49]/10 text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                      <FiCheck />
                    </div>


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


      {/* =====================================================
          SECURITY ARCHITECTURE
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="flex flex-col gap-10 lg:ml-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex items-center gap-3 sm:gap-4">

                <span className="h-[2px] w-7 bg-[#9B5B35] sm:w-10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.35em]">
                  Connected Security
                </span>

              </div>

              <h2 className="mt-6 max-w-3xl text-[39px] font-bold leading-[0.96] tracking-[-0.05em] text-[#062B49] sm:mt-7 sm:text-[47px] md:text-[53px] lg:text-[58px]">
                One connected
                <span className="block text-[#9B5B35]">
                  security ecosystem.
                </span>
              </h2>

            </div>


            <div className="max-w-sm border-l border-[#062B49]/10 pl-5 sm:pl-8">

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Security Architecture
              </span>

              <p className="mt-3 text-[13px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
                Connect network, data, identity and monitoring
                through a unified security foundation.
              </p>

            </div>

          </div>


          {/* ARCHITECTURE VISUAL */}

          <div className="cyber-architecture relative mt-14 h-[560px] overflow-hidden bg-[#062B49] sm:mt-20 md:h-[620px] lg:mt-24 lg:h-[560px]">

            {/* GLOW */}

            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B5B35]/10 blur-[70px] sm:h-[380px] sm:w-[380px]" />


            {/* RINGS */}

            <div className="cyber-ring-outer absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]" />

            <div className="cyber-ring-middle absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5B35]/20 sm:h-[310px] sm:w-[310px] lg:h-[370px] lg:w-[370px]" />

            <div className="cyber-ring-inner absolute left-1/2 top-1/2 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[205px] sm:w-[205px] lg:h-[240px] lg:w-[240px]" />


            {/* CONNECTIONS */}

            <div className="cyber-connection-horizontal absolute left-[10%] right-[10%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#9B5B35]/30 to-transparent sm:left-[16%] sm:right-[16%] lg:left-[20%] lg:right-[20%]" />

            <div className="cyber-connection-vertical absolute bottom-[15%] left-1/2 top-[15%] w-px bg-gradient-to-b from-transparent via-[#9B5B35]/30 to-transparent" />


            {/* TOP LABEL */}

            <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center sm:top-8">

              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.25em] text-white/25 sm:text-[8px] sm:tracking-[0.35em]">
                EPSILORA SECURITY ARCHITECTURE
              </span>

            </div>


            {/* NETWORK */}

            <div className="cyber-node cyber-node-1 absolute left-5 top-20 flex items-center gap-3 sm:left-8 sm:top-20 sm:gap-4 lg:left-16 lg:top-16 lg:gap-5">

              <div className="cyber-node-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-14 sm:w-14 sm:text-xl">
                <FiWifi />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 01
                </span>

                <span className="mt-1 block text-[11px] font-bold text-white sm:mt-2 sm:text-sm">
                  Network
                </span>
              </div>

            </div>


            {/* DATA */}

            <div className="cyber-node cyber-node-2 absolute right-5 top-20 flex items-center gap-3 text-right sm:right-8 sm:top-20 sm:gap-4 lg:right-16 lg:top-16 lg:gap-5">

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 02
                </span>

                <span className="mt-1 block text-[11px] font-bold text-white sm:mt-2 sm:text-sm">
                  Data
                </span>
              </div>

              <div className="cyber-node-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-14 sm:w-14 sm:text-xl">
                <FiDatabase />
              </div>

            </div>


            {/* IDENTITY */}

            <div className="cyber-node cyber-node-3 absolute bottom-20 left-5 flex items-center gap-3 sm:bottom-20 sm:left-8 sm:gap-4 lg:bottom-16 lg:left-16 lg:gap-5">

              <div className="cyber-node-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-14 sm:w-14 sm:text-xl">
                <FiUserCheck />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 03
                </span>

                <span className="mt-1 block text-[11px] font-bold text-white sm:mt-2 sm:text-sm">
                  Identity
                </span>
              </div>

            </div>


            {/* MONITORING */}

            <div className="cyber-node cyber-node-4 absolute bottom-20 right-5 flex items-center gap-3 text-right sm:bottom-20 sm:right-8 sm:gap-4 lg:bottom-16 lg:right-16 lg:gap-5">

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                  Layer 04
                </span>

                <span className="mt-1 block text-[11px] font-bold text-white sm:mt-2 sm:text-sm">
                  Monitoring
                </span>
              </div>

              <div className="cyber-node-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-14 sm:w-14 sm:text-xl">
                <FiActivity />
              </div>

            </div>


            {/* CENTRAL SECURITY CORE */}

            <div className="cyber-core absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9B5B35] sm:h-40 sm:w-40 lg:h-44 lg:w-44">

              <div className="flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full border border-white/20 text-center sm:h-28 sm:w-28 lg:h-32 lg:w-32">

                <FiShield className="text-xl text-white sm:text-2xl" />

                <span className="mt-2 text-[7px] font-bold uppercase tracking-[0.25em] text-white/60 sm:mt-3 sm:text-[9px] sm:tracking-[0.3em]">
                  Connected
                </span>

                <span className="mt-1 text-[12px] font-bold text-white sm:text-lg lg:text-xl">
                  SECURITY
                </span>

              </div>

            </div>


            {/* BOTTOM LABEL */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center sm:bottom-8">

              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.2em] text-[#C9875D] sm:text-[8px] sm:tracking-[0.3em]">
                Network • Data • Identity • Monitoring
              </span>

            </div>

          </div>

        </div>

      </section>



    </main>
  );
};

export default InformationCyber;