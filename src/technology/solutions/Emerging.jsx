
import React, { useState } from "react";
import {
  FiCpu,
  FiZap,
  FiBarChart2,
  FiRadio,
  FiDatabase,
  FiSettings,
  FiLayers,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";

const Emerging = () => {
  const [activeTechnology, setActiveTechnology] = useState(0);

  const technologies = [
    {
      icon: <FiCpu />,
      number: "01",
      title: "AI & Machine Learning",
      text: "Intelligent technologies that support automation, analysis and better business decisions.",
    },
    {
      icon: <FiZap />,
      number: "02",
      title: "Automation & Robotics",
      text: "Automation technologies designed to improve operational efficiency and simplify repetitive processes.",
    },
    {
      icon: <FiBarChart2 />,
      number: "03",
      title: "Data & Analytics",
      text: "Technology solutions that help organizations transform data into useful business insights.",
    },
    {
      icon: <FiRadio />,
      number: "04",
      title: "IoT & Smart Solutions",
      text: "Connected technologies for smarter infrastructure, operations and business environments.",
    },
  ];

  const capabilities = [
    {
      icon: <FiCpu />,
      title: "Intelligent Systems",
      text: "Explore intelligent technologies that can support analysis, automation and digital operations.",
    },
    {
      icon: <FiSettings />,
      title: "Process Automation",
      text: "Improve operational workflows by introducing smarter and more efficient automation.",
    },
    {
      icon: <FiDatabase />,
      title: "Data Intelligence",
      text: "Turn organizational data into information that can support business activities.",
    },
    {
      icon: <FiRadio />,
      title: "Connected Technology",
      text: "Connect devices, systems and environments through modern IoT technologies.",
    },
  ];

  const benefits = [
    "Intelligent automation",
    "Data-driven operations",
    "Connected environments",
    "Modern technology adoption",
    "Operational efficiency",
    "Future-ready infrastructure",
  ];

  const active = technologies[activeTechnology];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F8FA] text-[#062B49]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F1F4F6] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#9B5B35]/10 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full border border-[#062B49]/10 sm:h-64 sm:w-64" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#9B5B35]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:tracking-[0.35em]">
                Emerging Technology
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Innovate today.
              <span className="block text-[#9B5B35]">
                Build what comes next.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#68746C] sm:mt-6 sm:text-base sm:leading-8">
              Discover emerging technologies that help organizations improve
              operations, unlock business insights and create smarter,
              connected digital environments.
            </p>

            <a
              href="#emerging-capabilities"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#9B5B35] pb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#062B49] transition-colors hover:text-[#9B5B35] sm:mt-8"
            >
              Explore technologies
              <FiArrowUpRight className="text-lg text-[#9B5B35]" />
            </a>
          </div>

          <div className="relative hidden min-h-[220px] items-center justify-center md:flex">
            <div className="absolute h-52 w-52 rounded-full border border-[#062B49]/10 lg:h-64 lg:w-64" />
            <div className="absolute h-40 w-40 rounded-full border border-[#9B5B35]/25 lg:h-48 lg:w-48" />
            <div className="absolute h-28 w-28 rounded-full border border-[#062B49]/10" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#062B49] text-4xl text-[#C9875D] shadow-xl shadow-[#062B49]/10 lg:h-28 lg:w-28">
              <FiCpu />
              <span className="absolute -right-1 top-2 h-3 w-3 rounded-full bg-[#9B5B35]" />
              <span className="absolute -bottom-1 left-5 h-2 w-2 rounded-full bg-[#9B5B35]" />
            </div>

            <span className="absolute left-5 top-8 text-[9px] font-bold uppercase tracking-[0.2em] text-[#68746C]">
              Intelligent
            </span>
            <span className="absolute bottom-6 right-0 text-[9px] font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
              Connected
            </span>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY AREAS */}
      <section
        id="emerging-capabilities"
        className="bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:tracking-[0.35em]">
                  Technology Areas
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Explore emerging
                <span className="block text-[#9B5B35]">technologies.</span>
              </h2>
            </div>

            <div className="max-w-sm border-l border-[#062B49]/10 pl-4 sm:pl-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Technology Ecosystem
              </span>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Explore intelligent, automated, connected and data-driven
                technologies.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-7 sm:mt-10 md:mt-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-10">
            {/* TECHNOLOGY SELECTOR */}
            <div className="lg:border-r lg:border-[#062B49]/10 lg:pr-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Explore technologies
              </p>

              <div>
                {technologies.map((item, index) => {
                  const isActive = activeTechnology === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActiveTechnology(index)}
                      aria-pressed={isActive}
                      className="group block w-full text-left"
                    >
                      <div
                        className={`relative flex items-center gap-4 border-b py-4 transition-all duration-300 sm:gap-5 sm:py-5 ${
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
                          className={`flex-1 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors sm:text-xs sm:tracking-[0.14em] ${
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
            </div>

            {/* ACTIVE TECHNOLOGY PANEL */}
            <div className="relative min-h-[330px] overflow-hidden bg-[#062B49] sm:min-h-[350px]">
              <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full border border-[#9B5B35]/20 sm:h-72 sm:w-72" />

              <div className="relative z-10 flex min-h-[330px] flex-col justify-between p-6 sm:min-h-[350px] sm:p-8 md:p-10">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40 sm:text-[10px] sm:tracking-[0.28em]">
                    Emerging Technology
                  </span>

                  <span className="text-5xl font-light leading-none tracking-tight text-white/10 sm:text-6xl md:text-7xl">
                    {active.number}
                  </span>
                </div>

                <div className="mt-8 max-w-2xl">
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
                    key={active.text}
                    className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:mt-5 sm:text-base sm:leading-8"
                  >
                    {active.text}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
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

      {/* INNOVATION CAPABILITIES */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Innovation Capabilities
              </span>

              <div className="mt-5 hidden h-28 w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block" />

              <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                Built for innovation
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Turning new technology
                <span className="text-[#9B5B35]">
                  {" "}into opportunity.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                Explore technology capabilities that can help organizations
                modernize operations and create smarter digital environments.
              </p>

              <div className="mt-7 border-t border-[#062B49]/10 sm:mt-9">
                {capabilities.map((item, index) => (
                  <div
                    key={item.title}
                    className="group grid grid-cols-[30px_1fr] gap-3 border-b border-[#062B49]/10 py-5 sm:grid-cols-[42px_1fr] sm:gap-4 sm:py-6"
                  >
                    <span className="pt-2 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#062B49]/10 text-[#062B49] transition-colors duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
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

      {/* WHY EMERGING TECHNOLOGY */}
      <section className="bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.65fr_1.35fr] md:gap-10 lg:gap-16">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Why Emerging Technology
              </span>

              <div className="mt-5 hidden h-28 w-px bg-gradient-to-b from-[#9B5B35] to-transparent sm:block" />

              <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                Prepare for what's next
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Prepare your business
                <span className="text-[#9B5B35]">
                  {" "}for what's next.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                Emerging technology can help organizations explore new ways of
                working, improve operational efficiency and build more
                connected digital environments.
              </p>

              <div className="mt-7 border-t border-[#062B49]/10 sm:mt-9">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-4 border-b border-[#062B49]/10 py-4 sm:items-center sm:gap-6 sm:py-5"
                  >
                    <span className="pt-1 text-[10px] font-bold tracking-widest text-[#9B5B35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

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

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:tracking-[0.35em]">
                  Technology Ecosystem
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-4xl md:text-5xl">
                Intelligent technology.
                <span className="block text-[#9B5B35]">
                  Connected possibilities.
                </span>
              </h2>
            </div>

            <div className="max-w-sm border-l border-[#062B49]/10 pl-4 sm:pl-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Connected Technology
              </span>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                AI, automation, analytics and connected devices working
                together across modern environments.
              </p>
            </div>
          </div>

          {/* ECOSYSTEM VISUALIZATION */}
          <div className="emerging-architecture relative mt-8 h-[430px] overflow-hidden bg-[#062B49] sm:mt-10 sm:h-[500px] md:h-[540px]">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B5B35]/15 blur-3xl sm:h-72 sm:w-72" />

            {/* Rotating rings */}
            <div className="emerging-ring-outer absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px]" />

            <div className="emerging-ring-middle absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9B5B35]/25 sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]" />

            <div className="emerging-ring-inner absolute left-1/2 top-1/2 h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09] sm:h-[180px] sm:w-[180px] md:h-[210px] md:w-[210px]" />

            {/* Connection lines */}
            <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#9B5B35]/40 to-transparent sm:left-[18%] sm:right-[18%]" />

            <div className="absolute bottom-[12%] left-1/2 top-[12%] w-px bg-gradient-to-b from-transparent via-[#9B5B35]/40 to-transparent" />

            {/* Top label */}
            <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center sm:top-7">
              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.2em] text-white/35 sm:text-[9px] sm:tracking-[0.3em]">
                EPSILORA TECHNOLOGY ECOSYSTEM
              </span>
            </div>

            {/* AI node */}
            <div className="emerging-node emerging-node-1 absolute left-3 top-16 flex items-center gap-2 sm:left-8 sm:top-20 sm:gap-3 md:left-12">
              <div className="emerging-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiCpu />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 01
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  AI
                </span>
              </div>
            </div>

            {/* Automation node */}
            <div className="emerging-node emerging-node-2 absolute right-3 top-16 flex items-center gap-2 text-right sm:right-8 sm:top-20 sm:gap-3 md:right-12">
              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 02
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  Automation
                </span>
              </div>

              <div className="emerging-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiZap />
              </div>
            </div>

            {/* Analytics node */}
            <div className="emerging-node emerging-node-3 absolute bottom-16 left-3 flex items-center gap-2 sm:bottom-20 sm:left-8 sm:gap-3 md:left-12">
              <div className="emerging-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiTrendingUp />
              </div>

              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 03
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  Analytics
                </span>
              </div>
            </div>

            {/* IoT node */}
            <div className="emerging-node emerging-node-4 absolute bottom-16 right-3 flex items-center gap-2 text-right sm:bottom-20 sm:right-8 sm:gap-3 md:right-12">
              <div>
                <span className="block text-[7px] font-bold uppercase tracking-widest text-white/35 sm:text-[9px]">
                  Layer 04
                </span>
                <span className="mt-1 block text-[10px] font-bold text-white sm:text-sm">
                  IoT
                </span>
              </div>

              <div className="emerging-node-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9B5B35]/50 text-base text-[#C9875D] sm:h-12 sm:w-12 sm:text-lg">
                <FiRadio />
              </div>
            </div>

            {/* Central core */}
            <div className="emerging-core absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9B5B35] shadow-xl shadow-black/20 sm:h-32 sm:w-32 md:h-36 md:w-36">
              <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full border border-white/20 text-center sm:h-24 sm:w-24 md:h-28 md:w-28">
                <FiLayers className="text-lg text-white sm:text-2xl" />

                <span className="mt-1 text-[6px] font-bold uppercase tracking-[0.2em] text-white/70 sm:mt-2 sm:text-[8px]">
                  Connected
                </span>

                <span className="mt-1 text-[9px] font-bold text-white sm:text-sm md:text-base">
                  INNOVATION
                </span>
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center sm:bottom-7">
              <span className="whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.12em] text-[#C9875D] sm:text-[9px] sm:tracking-[0.25em]">
                AI • Automation • Analytics • IoT
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Emerging;
