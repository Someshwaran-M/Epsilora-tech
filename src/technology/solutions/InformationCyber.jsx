
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
  FiArrowUpRight,
} from "react-icons/fi";

const InformationCyber = () => {
  const [activeFoundation, setActiveFoundation] = useState(0);

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

  const foundations = [
    {
      number: "01",
      title: "Network Security",
      description:
        "Protect network infrastructure and business systems through layered security controls designed to reduce unauthorized access and security threats.",
      icon: <FiWifi />,
      points: ["Network protection", "Firewall security", "Threat prevention"],
    },
    {
      number: "02",
      title: "Cloud & Data Security",
      description:
        "Protect important business data and cloud environments with security-focused architecture designed around modern digital infrastructure.",
      icon: <FiDatabase />,
      points: ["Cloud protection", "Data security", "Secure infrastructure"],
    },
    {
      number: "03",
      title: "Identity & Monitoring",
      description:
        "Support secure access, authentication, visibility and monitoring across business applications, systems and connected environments.",
      icon: <FiUserCheck />,
      points: ["Identity management", "Access control", "Security monitoring"],
    },
  ];

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

  const benefits = [
    "Network and infrastructure protection",
    "Cloud and business data security",
    "Identity and access control",
    "Security monitoring and response",
    "Risk-focused security practices",
    "Layered security architecture",
  ];

  const active = foundations[activeFoundation];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F8FA] text-[#062B49]">
      {/* HERO - CLOUD PAGE STYLE */}
      <section className="relative overflow-hidden bg-[#F1F4F6] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#062B49]/10 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#9B5B35]/20 sm:h-60 sm:w-60" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#9B5B35]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:tracking-[0.35em]">
                Information Cyber Security
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Security built
              <span className="block text-[#9B5B35]">
                for protection.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#68746C] sm:mt-6 sm:text-base sm:leading-8">
              Protect your digital environment with security solutions that
              support network protection, secure data, identity management
              and security monitoring.
            </p>

            <a
              href="#security-foundation"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#9B5B35] pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#062B49] transition-colors hover:text-[#9B5B35] sm:mt-8"
            >
              Explore security solutions
              <FiArrowUpRight className="text-lg text-[#9B5B35]" />
            </a>
          </div>

          <div className="relative hidden min-h-[230px] items-center justify-center md:flex">
            <div className="absolute h-56 w-56 rounded-full border border-[#062B49]/10 lg:h-64 lg:w-64" />
            <div className="absolute h-44 w-44 rounded-full border border-[#9B5B35]/25" />
            <div className="absolute h-32 w-32 rounded-full border border-[#062B49]/10" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#062B49] text-4xl text-[#C9875D] shadow-xl shadow-[#062B49]/10 lg:h-28 lg:w-28">
              <FiShield />
              <span className="absolute -right-1 top-3 h-3 w-3 rounded-full bg-[#9B5B35]" />
              <span className="absolute -bottom-1 left-5 h-2 w-2 rounded-full bg-[#9B5B35]" />
            </div>

            <span className="absolute left-1 top-9 text-[9px] font-bold uppercase tracking-[0.18em] text-[#68746C] lg:left-0">
              Protection
            </span>
            <span className="absolute bottom-7 right-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
              Security
            </span>
          </div>
        </div>
      </section>

      {/* SECURITY FOUNDATION */}
      <section
        id="security-foundation"
        className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:tracking-[0.35em]">
                  Security Foundation
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Security built
                <span className="block text-[#9B5B35]">
                  for protection.
                </span>
              </h2>
            </div>

            <div className="hidden text-right sm:block">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                EPS / CYBER SECURITY
              </span>
              <div className="ml-auto mt-3 h-px w-16 bg-[#9B5B35]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-10">
            {/* FOUNDATION NAVIGATION */}
            <div className="lg:border-r lg:border-[#062B49]/10 lg:pr-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
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
                      className={`relative flex items-center gap-4 border-b py-4 transition-all duration-300 sm:py-5 ${
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
                        className={`flex-1 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors sm:text-xs sm:tracking-[0.13em] ${
                          isActive
                            ? "text-[#062B49]"
                            : "text-gray-400 group-hover:text-[#062B49]"
                        }`}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`text-lg transition-all ${
                          isActive
                            ? "translate-x-1 text-[#9B5B35]"
                            : "text-gray-300"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE FOUNDATION PANEL */}
            <div className="relative min-h-[340px] overflow-hidden bg-[#062B49] sm:min-h-[360px]">
              <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full border border-[#9B5B35]/20 sm:h-72 sm:w-72" />

              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              <div className="relative z-10 flex min-h-[340px] flex-col justify-between p-6 sm:min-h-[360px] sm:p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-[10px] sm:tracking-[0.28em]">
                    Security Architecture
                  </span>

                  <span className="text-5xl font-light leading-none tracking-tight text-white/10 sm:text-6xl md:text-7xl">
                    {active.number}
                  </span>
                </div>

                <div className="mt-7 max-w-2xl">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-xl text-[#C9875D] sm:h-14 sm:w-14">
                      {active.icon}
                    </div>
                    <div className="h-[2px] w-10 bg-[#9B5B35] sm:w-14" />
                  </div>

                  <h3
                    key={active.title}
                    className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
                  >
                    {active.title}
                  </h3>

                  <p
                    key={active.description}
                    className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:mt-5 sm:text-base sm:leading-8"
                  >
                    {active.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.points.map((point) => (
                      <span
                        key={point}
                        className="border border-white/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/70 sm:text-[10px]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                    EPSILORA TECHNOLOGY
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9875D]">
                    {active.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY AREAS */}
      <section className="bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Security Solutions
              </span>

              <div className="mt-5 hidden h-28 w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block" />

              <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                Comprehensive protection
              </span>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Protect every
                <span className="text-[#9B5B35]"> digital layer.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                Explore security solutions that help protect your networks,
                data, digital identities and connected business environments.
              </p>

              <div className="mt-7 border-t border-[#062B49]/10 sm:mt-9">
                {securityAreas.map((item) => (
                  <div
                    key={item.number}
                    className="group grid grid-cols-[35px_1fr] gap-3 border-b border-[#062B49]/10 py-5 sm:grid-cols-[45px_1fr] sm:gap-4 sm:py-6"
                  >
                    <span className="pt-2 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#062B49]/10 text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                          {item.icon}
                        </div>

                        <h3 className="text-base font-bold text-[#062B49] transition-colors group-hover:text-[#9B5B35] sm:text-lg">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:leading-7">
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

      {/* SECURITY CAPABILITIES */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Security Capabilities
              </span>

              <div className="mt-5 hidden h-28 w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block" />

              <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                Built around secure environments
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Built around
                <span className="text-[#9B5B35]">
                  {" "}secure environments.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                Security protection should connect networks, data, identity,
                visibility and infrastructure through a structured approach
                to digital security.
              </p>

              <div className="mt-7 border-t border-[#062B49]/10 sm:mt-9">
                {capabilities.map((item, index) => (
                  <div
                    key={item.title}
                    className="group grid grid-cols-[32px_1fr] gap-3 border-b border-[#062B49]/10 py-5 sm:grid-cols-[42px_1fr] sm:gap-4 sm:py-6"
                  >
                    <span className="pt-2 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#062B49]/10 text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                          {item.icon}
                        </div>

                        <h3 className="text-base font-bold text-[#062B49] transition-colors group-hover:text-[#9B5B35] sm:text-lg">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:leading-7">
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

      {/* WHY CYBER SECURITY */}
      <section className="bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Why Cyber Security
              </span>

              <div className="mt-5 hidden h-28 w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block" />

              <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                Built for protection
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Protect your critical
                <span className="text-[#9B5B35]">
                  {" "}digital environment.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                Modern businesses depend on connected systems, cloud
                platforms, networks, applications and digital identities.
                A structured security environment helps support reliable
                operations while protecting critical business resources.
              </p>

              <div className="mt-7 border-t border-[#062B49]/10 sm:mt-9">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-3 border-b border-[#062B49]/10 py-4 sm:items-center sm:gap-5 sm:py-5"
                  >
                    <span className="pt-1 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#062B49]/10 text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                      <FiCheck />
                    </div>

                    <span className="text-sm font-semibold leading-6 text-[#062B49] transition-colors duration-300 group-hover:text-[#9B5B35] sm:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED SECURITY ARCHITECTURE */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:tracking-[0.35em]">
                  Connected Security
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                One connected
                <span className="block text-[#9B5B35]">
                  security ecosystem.
                </span>
              </h2>
            </div>

            <div className="max-w-sm border-l border-[#062B49]/10 pl-4 sm:pl-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Security Architecture
              </span>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Connect network, data, identity and monitoring through a
                unified security foundation.
              </p>
            </div>
          </div>

          {/* ARCHITECTURE VISUAL */}
          <div className="cyber-architecture relative mt-8 h-[430px] overflow-hidden bg-[#062B49] sm:mt-10 sm:h-[500px] md:h-[540px]">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B5B35]/15 blur-3xl sm:h-72 sm:w-72" />

            {/* Rings */}
            <div className="cyber-ring-outer absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px]" />

            <div className="cyber-ring-middle absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5B35]/25 sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]" />

            <div className="cyber-ring-inner absolute left-1/2 top-1/2 h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[180px] sm:w-[180px] md:h-[210px] md:w-[210px]" />

            {/* Connections */}
            <div className="cyber-connection-horizontal absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#9B5B35]/35 to-transparent sm:left-[18%] sm:right-[18%]" />

            <div className="cyber-connection-vertical absolute bottom-[15%] left-1/2 top-[15%] w-px bg-gradient-to-b from-transparent via-[#9B5B35]/35 to-transparent" />

            {/* Top label */}
            <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center sm:top-7">
              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.2em] text-white/30 sm:text-[9px] sm:tracking-[0.3em]">
                EPSILORA SECURITY ARCHITECTURE
              </span>
            </div>

            {/* Network */}
            <div className="cyber-node cyber-node-1 absolute left-3 top-16 flex items-center gap-2 sm:left-8 sm:top-20 sm:gap-3 md:left-12">
              <div className="cyber-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiWifi />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 01
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  Network
                </span>
              </div>
            </div>

            {/* Data */}
            <div className="cyber-node cyber-node-2 absolute right-3 top-16 flex items-center gap-2 text-right sm:right-8 sm:top-20 sm:gap-3 md:right-12">
              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 02
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  Data
                </span>
              </div>

              <div className="cyber-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiDatabase />
              </div>
            </div>

            {/* Identity */}
            <div className="cyber-node cyber-node-3 absolute bottom-16 left-3 flex items-center gap-2 sm:bottom-20 sm:left-8 sm:gap-3 md:left-12">
              <div className="cyber-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiUserCheck />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 03
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  Identity
                </span>
              </div>
            </div>

            {/* Monitoring */}
            <div className="cyber-node cyber-node-4 absolute bottom-16 right-3 flex items-center gap-2 text-right sm:bottom-20 sm:right-8 sm:gap-3 md:right-12">
              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 04
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  Monitoring
                </span>
              </div>

              <div className="cyber-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiActivity />
              </div>
            </div>

            {/* Central security core */}
            <div className="cyber-core absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9B5B35] shadow-xl shadow-black/20 sm:h-32 sm:w-32 md:h-36 md:w-36">
              <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full border border-white/20 text-center sm:h-24 sm:w-24 md:h-28 md:w-28">
                <FiShield className="text-lg text-white sm:text-2xl" />

                <span className="mt-1 text-[6px] font-bold uppercase tracking-[0.2em] text-white/70 sm:mt-2 sm:text-[8px]">
                  Connected
                </span>

                <span className="mt-1 text-[9px] font-bold text-white sm:text-sm md:text-base">
                  SECURITY
                </span>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center sm:bottom-7">
              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.12em] text-[#C9875D] sm:text-[9px] sm:tracking-[0.25em]">
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
