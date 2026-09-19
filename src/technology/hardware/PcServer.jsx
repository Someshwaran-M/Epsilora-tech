import React from "react";
import {
  FiCpu,
  FiServer,
  FiMonitor,
  FiSettings,
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiZap,
  FiShield,
  FiDatabase,
  FiLayers,
  FiHardDrive,
} from "react-icons/fi";

const PcServer = () => {
  const components = [
    {
      icon: <FiCpu />,
      number: "01",
      title: "Processors",
      text: "High-performance processors for business computing and demanding enterprise workloads.",
    },
    {
      icon: <FiServer />,
      number: "02",
      title: "Server Components",
      text: "Reliable hardware components designed for scalable and dependable server infrastructure.",
    },
    {
      icon: <FiMonitor />,
      number: "03",
      title: "PC Components",
      text: "Professional-grade components for desktops, workstations and business systems.",
    },
    {
      icon: <FiSettings />,
      number: "04",
      title: "Infrastructure Support",
      text: "Technology components that help create reliable and efficient IT environments.",
    },
  ];

  const hardware = [
    {
      icon: <FiDatabase />,
      title: "Memory (RAM)",
      text: "High-performance memory for responsive systems.",
    },
    {
      icon: <FiLayers />,
      title: "Motherboards",
      text: "Reliable platforms for PC and server configurations.",
    },
    {
      icon: <FiCpu />,
      title: "Processors (CPU)",
      text: "Processing power for demanding workloads.",
    },
    {
      icon: <FiActivity />,
      title: "Sound Cards",
      text: "Audio hardware for professional computing environments.",
    },
    {
      icon: <FiMonitor />,
      title: "Video Cards (GPU)",
      text: "Graphics processing for demanding applications.",
    },
    {
      icon: <FiServer />,
      title: "Server Components",
      text: "Infrastructure hardware for enterprise systems.",
    },
  ];

  const benefits = [
    "Reliable computing infrastructure",
    "Scalable hardware configurations",
    "High-performance components",
    "Enterprise-ready server hardware",
    "Flexible system architecture",
    "Long-term infrastructure support",
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
                  Enterprise Hardware
                </span>

              </div>

              <h1 className="mt-6 text-[3.1rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">

                PC &

                <span className="block text-[#C98255]">
                  Server.
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                High-performance computing components and server
                hardware designed to support modern business systems,
                applications and enterprise workloads.
              </p>

              {/* Buttons */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:flex">

                <a
                  href="/contact"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#9B5B35] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#C98255]"
                >
                  Discuss Your Requirement

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#hardware"
                  className="inline-flex min-h-[50px] items-center justify-center border border-white/15 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:border-[#C98255] hover:text-white"
                >
                  Explore Hardware
                </a>

              </div>

              {/* Stats */}

              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">

                <div>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    High
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Performance
                  </p>

                </div>

                <div className="border-l border-white/10 pl-3 sm:pl-6">

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Scalable
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Architecture
                  </p>

                </div>

                <div className="border-l border-white/10 pl-3 sm:pl-6">

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Enterprise
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Ready
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                PREMIUM HARDWARE VISUAL
            ================================================= */}

            <div className="relative mx-auto mt-3 flex w-full max-w-[400px] justify-center lg:mt-0">

              {/* Rings */}

              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C98255]/20 sm:h-[360px] sm:w-[360px]" />

              <div className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[285px] sm:w-[285px]" />

              {/* Main hardware unit */}

              <div className="relative h-[280px] w-[235px] sm:h-[360px] sm:w-[300px]">

                {/* Rear layer */}

                <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-6 border border-[#C98255]/20 bg-white/[0.02]" />

                {/* Middle layer */}

                <div className="absolute inset-0 -translate-x-2 rotate-[-4deg] border border-white/10 bg-[#0A3554]/60 backdrop-blur-xl" />

                {/* Main card */}

                <div className="absolute inset-0 flex flex-col items-center justify-center border border-[#C98255]/30 bg-[#062B49]/95 shadow-2xl">

                  {/* CPU icon */}

                  <div className="relative flex h-20 w-20 items-center justify-center border border-[#C98255]/30 bg-[#9B5B35]/10 text-3xl text-[#C98255] sm:h-24 sm:w-24 sm:text-4xl">

                    <FiCpu />

                    <span className="absolute inset-[-8px] border border-[#C98255]/10" />

                  </div>

                  <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 sm:text-[10px]">
                    EPSILORA TECHNOLOGY
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    Compute Core
                  </h3>

                  <div className="mt-5 h-[2px] w-12 bg-[#9B5B35]" />

                  {/* Status */}

                  <div className="mt-6 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-[#C98255]" />

                    <span className="text-[9px] uppercase tracking-widest text-white/40 sm:text-[10px]">
                      System Ready
                    </span>

                  </div>

                </div>

              </div>

              {/* Performance card */}

              <div className="absolute left-0 top-5 border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl sm:left-[-15px] sm:top-10 sm:p-4">

                <div className="flex items-center gap-2.5 sm:gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-[#9B5B35] text-sm text-white sm:h-10 sm:w-10">
                    <FiZap />
                  </div>

                  <div>

                    <p className="text-[9px] text-white/40">
                      Performance
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      High Performance
                    </p>

                  </div>

                </div>

              </div>

              {/* Server card */}

              <div className="absolute bottom-4 right-0 border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl sm:bottom-8 sm:right-[-15px] sm:p-4">

                <div className="flex items-center gap-2.5 sm:gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-white/10 text-sm text-[#C98255] sm:h-10 sm:w-10">
                    <FiServer />
                  </div>

                  <div>

                    <p className="text-[9px] text-white/40">
                      Infrastructure
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      Server Ready
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
                  Computing Infrastructure
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                Power your systems with

                <span className="block text-[#9B5B35]">
                  dependable hardware.
                </span>

              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              From professional desktops to enterprise servers,
              the right hardware foundation helps organizations
              support applications, workloads and everyday operations.
            </p>

          </div>

          {/* Feature cards */}

          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">

            {components.map((item) => (

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
          HARDWARE PORTFOLIO
      ===================================================== */}

      <section
        id="hardware"
        className="relative overflow-hidden bg-[#f6f4f1] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#9B5B35]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
              Hardware Portfolio
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

              Components built for

              <span className="block text-[#9B5B35]">
                modern computing.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              Explore the essential components used across professional
              computing systems and server infrastructure.
            </p>

          </div>

          {/* Hardware grid */}

          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">

            {hardware.map((item, index) => (

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

                  Performance is not

                  <span className="block text-[#C98255]">
                    just speed.
                  </span>

                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  A dependable computing environment needs the right
                  combination of performance, reliability, scalability
                  and hardware architecture.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-2">

                  <div className="border border-white/10 p-4 sm:p-5">

                    <FiZap className="text-xl text-[#C98255]" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Performance
                    </p>

                  </div>

                  <div className="border border-white/10 p-4 sm:p-5">

                    <FiShield className="text-xl text-[#C98255]" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Reliability
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

                Hardware that

                <span className="block text-[#9B5B35]">
                  works for your business.
                </span>

              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                Choosing the right PC and server components creates a
                stronger foundation for applications, users and future
                infrastructure requirements.
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
          CTA
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

                Power your next

                <span className="block text-[#C98255]">
                  computing environment.
                </span>

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Tell us about your PC, workstation or server requirements
                and explore the right hardware components for your environment.
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

export default PcServer;