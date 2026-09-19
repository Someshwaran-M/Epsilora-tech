import React from "react";
import {
  FiServer,
  FiGrid,
  FiSettings,
  FiShield,
  FiArrowRight,
  FiActivity,
  FiZap,
  FiLock,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiHardDrive,
  FiCheckCircle,
} from "react-icons/fi";

const ServerServer = () => {
  const solutions = [
    {
      icon: <FiServer />,
      number: "01",
      title: "Enterprise Servers",
      text: "Reliable server infrastructure designed for demanding business workloads and applications.",
    },
    {
      icon: <FiGrid />,
      number: "02",
      title: "Server Racks",
      text: "Structured rack and cabinet solutions for organized, scalable infrastructure environments.",
    },
    {
      icon: <FiSettings />,
      number: "03",
      title: "Server Management",
      text: "Technology solutions supporting efficient administration and infrastructure operations.",
    },
    {
      icon: <FiShield />,
      number: "04",
      title: "Infrastructure Security",
      text: "Infrastructure designed with reliability, protection and operational continuity in mind.",
    },
  ];

  const infrastructure = [
    {
      icon: <FiServer />,
      title: "Server Systems",
      text: "Enterprise server platforms for demanding workloads.",
    },
    {
      icon: <FiGrid />,
      title: "Cabinets & Racks",
      text: "Organized physical infrastructure for server environments.",
    },
    {
      icon: <FiSettings />,
      title: "KVM Switch Products",
      text: "Efficient management of connected server systems.",
    },
    {
      icon: <FiDatabase />,
      title: "Server Memory",
      text: "Reliable memory components for server performance.",
    },
    {
      icon: <FiCpu />,
      title: "Server Processors",
      text: "Processing power for enterprise workloads.",
    },
    {
      icon: <FiActivity />,
      title: "Server Management",
      text: "Infrastructure management for efficient operations.",
    },
  ];

  const benefits = [
    "Enterprise-grade server infrastructure",
    "Scalable rack and cabinet architecture",
    "Reliable server components",
    "Efficient infrastructure management",
    "Structured data-center environments",
    "Support for business continuity",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#062B49]">

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        {/* Background glow */}

        <div className="absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#9B5B35]/25 blur-[100px] sm:h-[520px] sm:w-[520px]" />

        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-black/40 blur-[100px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-32">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">

            {/* HERO CONTENT */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#C98255] sm:w-12" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C98255] sm:text-xs">
                  Enterprise Infrastructure
                </span>

              </div>

              <h1 className="mt-6 text-[3rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">

                Server &

                <span className="block text-[#C98255]">
                  Management.
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                Build dependable server environments with enterprise
                hardware, structured infrastructure and technologies
                designed for reliable business operations.
              </p>

              {/* Buttons */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:flex">

                <a
                  href="/contact"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#9B5B35] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#C98255]"
                >
                  Discuss Your Infrastructure

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#infrastructure"
                  className="inline-flex min-h-[50px] items-center justify-center border border-white/15 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:border-[#C98255] hover:text-white"
                >
                  Explore Infrastructure
                </a>

              </div>

              {/* Stats */}

              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">

                <div>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    24/7
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Operations
                  </p>

                </div>

                <div className="border-l border-white/10 pl-3 sm:pl-6">

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Scalable
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Infrastructure
                  </p>

                </div>

                <div className="border-l border-white/10 pl-3 sm:pl-6">

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Secure
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Environment
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                PREMIUM SERVER VISUAL
            ================================================= */}

            <div className="relative mx-auto mt-3 flex w-full max-w-[400px] justify-center lg:mt-0">

              {/* Rings */}

              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C98255]/20 sm:h-[360px] sm:w-[360px]" />

              <div className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[285px] sm:w-[285px]" />

              {/* Server rack */}

              <div className="relative h-[290px] w-[220px] sm:h-[360px] sm:w-[270px]">

                {/* Rear layer */}

                <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-6 border border-[#C98255]/20 bg-white/[0.02]" />

                {/* Middle layer */}

                <div className="absolute inset-0 -translate-x-2 rotate-[-4deg] border border-white/10 bg-[#0A3554]/60 backdrop-blur-xl" />

                {/* Main server */}

                <div className="absolute inset-0 border border-[#C98255]/30 bg-[#062B49]/95 p-5 shadow-2xl sm:p-7">

                  <div className="flex h-full flex-col">

                    {/* Header */}

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">

                      <div className="flex items-center gap-2">

                        <div className="flex h-9 w-9 items-center justify-center bg-[#9B5B35] text-sm text-white">
                          <FiServer />
                        </div>

                        <div>

                          <p className="text-[9px] uppercase tracking-widest text-white/40">
                            EPSILORA
                          </p>

                          <p className="text-xs font-bold text-white">
                            Server Core
                          </p>

                        </div>

                      </div>

                      <span className="h-2 w-2 rounded-full bg-[#C98255]" />

                    </div>

                    {/* Rack units */}

                    <div className="mt-5 space-y-3">

                      {[1, 2, 3, 4].map((item) => (

                        <div
                          key={item}
                          className="flex h-12 items-center gap-3 border border-white/10 bg-white/[0.03] px-3"
                        >

                          <span className="h-2 w-2 rounded-full bg-[#9B5B35]" />

                          <div className="flex-1">

                            <div className="h-1.5 w-3/4 bg-white/10" />

                            <div className="mt-2 h-1 w-1/2 bg-white/5" />

                          </div>

                          <FiActivity className="text-xs text-[#C98255]" />

                        </div>

                      ))}

                    </div>

                    {/* Footer */}

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">

                      <span className="text-[9px] uppercase tracking-widest text-white/30">
                        Infrastructure
                      </span>

                      <span className="text-[9px] text-[#C98255]">
                        ACTIVE
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Reliability card */}

              <div className="absolute left-0 top-5 border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl sm:left-[-15px] sm:top-10 sm:p-4">

                <div className="flex items-center gap-2.5 sm:gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-[#9B5B35] text-sm text-white sm:h-10 sm:w-10">
                    <FiShield />
                  </div>

                  <div>

                    <p className="text-[9px] text-white/40">
                      Reliability
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      Enterprise Ready
                    </p>

                  </div>

                </div>

              </div>

              {/* Management card */}

              <div className="absolute bottom-4 right-0 border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl sm:bottom-8 sm:right-[-15px] sm:p-4">

                <div className="flex items-center gap-2.5 sm:gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-white/10 text-sm text-[#C98255] sm:h-10 sm:w-10">
                    <FiSettings />
                  </div>

                  <div>

                    <p className="text-[9px] text-white/40">
                      Management
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      Infrastructure Active
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#9B5B35]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
                  Server Infrastructure
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                Built for reliable

                <span className="block text-[#9B5B35]">
                  digital operations.
                </span>

              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Modern businesses depend on reliable infrastructure.
              Our server and management solutions provide a strong
              foundation for applications, data and connected systems.
            </p>

          </div>

          {/* Solution cards */}

          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">

            {solutions.map((item) => (

              <div
                key={item.number}
                className="group border border-gray-200 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#9B5B35] hover:shadow-xl sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center bg-[#062B49] text-lg text-white transition duration-500 group-hover:bg-[#9B5B35]">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold text-gray-200">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 text-base font-bold text-[#062B49] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

                <div className="mt-6 h-[2px] w-8 bg-[#9B5B35] transition-all duration-500 group-hover:w-14" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          INFRASTRUCTURE PORTFOLIO
      ===================================================== */}

      <section
        id="infrastructure"
        className="relative overflow-hidden bg-[#f6f4f1] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#9B5B35]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
              Infrastructure Portfolio
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

              Everything your server

              <span className="block text-[#9B5B35]">
                environment needs.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              Explore the core infrastructure areas that support
              modern server and data-center environments.
            </p>

          </div>

          {/* Infrastructure cards */}

          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">

            {infrastructure.map((item, index) => (

              <div
                key={item.title}
                className="group relative overflow-hidden border border-gray-200 bg-white p-5 transition duration-500 hover:-translate-y-1 hover:border-[#9B5B35] hover:shadow-xl sm:p-6"
              >

                <span className="absolute right-5 top-5 text-[10px] font-bold text-gray-200 transition group-hover:text-[#9B5B35]/30">
                  0{index + 1}
                </span>

                <div className="flex h-11 w-11 items-center justify-center bg-[#062B49] text-lg text-white transition duration-500 group-hover:bg-[#9B5B35]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-base font-bold text-[#062B49]">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9B5B35]">

                  Explore

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY EPSILORA
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">

            {/* Dark visual */}

            <div className="relative overflow-hidden bg-[#062B49] p-7 sm:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#9B5B35]/20 blur-3xl" />

              <div className="relative">

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C98255] sm:text-xs">
                  Infrastructure Thinking
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">

                  Servers are not

                  <span className="block text-[#C98255]">
                    just hardware.
                  </span>

                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  They form the foundation of applications, data,
                  services and digital operations across an organization.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-2">

                  <div className="border border-white/10 p-4 sm:p-5">

                    <FiActivity className="text-xl text-[#C98255]" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Availability
                    </p>

                  </div>

                  <div className="border border-white/10 p-4 sm:p-5">

                    <FiLock className="text-xl text-[#C98255]" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Protection
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Benefits */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#9B5B35]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
                  Why It Matters
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">

                Infrastructure that

                <span className="block text-[#9B5B35]">
                  keeps business moving.
                </span>

              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                A properly designed server environment can provide
                the reliability, scalability and structure needed
                for modern digital operations.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">

                {benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="flex items-start gap-3 border-b border-gray-100 pb-3"
                  >

                    <FiCheckCircle className="mt-0.5 shrink-0 text-[#9B5B35]" />

                    <span className="text-sm font-medium leading-6 text-[#062B49]">
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
          PREMIUM CTA
      ===================================================== */}

      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">

        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#062B49]">

          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[#C98255]/20 sm:h-96 sm:w-96" />

          <div className="absolute -right-5 -top-20 h-52 w-52 rounded-full border border-[#C98255]/10 sm:h-72 sm:w-72" />

          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#9B5B35]/10 blur-3xl" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <div className="max-w-3xl">

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C98255] sm:text-xs">
                Build Your Infrastructure
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">

                Build a server environment

                <span className="block text-[#C98255]">
                  ready for what's next.
                </span>

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Tell us about your server, rack, management or
                infrastructure requirements and explore the right
                technology for your environment.
              </p>

              <a
                href="/contact"
                className="group mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-3 bg-[#9B5B35] px-7 text-sm font-semibold text-white transition duration-300 hover:bg-[#C98255] sm:w-auto"
              >
                Talk to Our Team

                <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ServerServer;