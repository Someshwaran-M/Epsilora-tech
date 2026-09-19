import React from "react";
import {
  FiBriefcase,
  FiSettings,
  FiDatabase,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiServer,
  FiGlobe,
} from "react-icons/fi";

const ConsultingProfessional = () => {
  const services = [
    {
      icon: <FiBriefcase />,
      number: "01",
      title: "Technology Consulting",
      text: "Professional guidance to help organizations plan and improve their technology infrastructure.",
    },
    {
      icon: <FiSettings />,
      number: "02",
      title: "Infrastructure Services",
      text: "Expert support for modern IT infrastructure, systems and technology environments.",
    },
    {
      icon: <FiDatabase />,
      number: "03",
      title: "Migration Services",
      text: "Plan and execute technology migrations with a structured and reliable approach.",
    },
    {
      icon: <FiShield />,
      number: "04",
      title: "Security Services",
      text: "Professional technology services focused on improving infrastructure security and reliability.",
    },
  ];

  const serviceAreas = [
    "Active Directory Migration",
    "Data Center Relocation",
    "Network Assessment",
    "Server Virtualization",
    "Virtual Environment Security",
    "Desktop Infrastructure",
    "VMware Health Check",
    "Technology Migration",
  ];

  const process = [
    {
      icon: <FiTarget />,
      number: "01",
      title: "Assess",
      text: "Understand your current infrastructure, requirements and technology environment.",
    },
    {
      icon: <FiLayers />,
      number: "02",
      title: "Plan",
      text: "Develop a structured approach aligned with your operational and business requirements.",
    },
    {
      icon: <FiSettings />,
      number: "03",
      title: "Transform",
      text: "Implement technology improvements, migrations and infrastructure changes.",
    },
    {
      icon: <FiTrendingUp />,
      number: "04",
      title: "Improve",
      text: "Support continuous improvement and long-term infrastructure reliability.",
    },
  ];

  const capabilities = [
    "Infrastructure planning",
    "Technology assessment",
    "Migration strategy",
    "System optimization",
    "Security improvement",
    "Infrastructure support",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#062B49]">

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        {/* Glow */}

        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#9B5B35]/20 blur-[110px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-black/40 blur-[100px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-32">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#C98255] sm:w-12" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C98255] sm:text-xs">
                  Consulting & Professional
                </span>

              </div>

              <h1 className="mt-6 text-[3rem] font-bold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">

                Technology

                <span className="block text-[#C98255]">
                  Expertise.
                </span>

              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 lg:text-lg">
                Practical technology expertise for organizations
                looking to assess, transform and improve their
                infrastructure environments.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:flex">

                <a
                  href="/contact"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#9B5B35] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#C98255]"
                >
                  Talk to an Expert

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#services"
                  className="inline-flex min-h-[50px] items-center justify-center border border-white/15 px-6 text-sm font-semibold text-white/75 transition duration-300 hover:border-[#C98255] hover:text-white"
                >
                  Explore Services
                </a>

              </div>

              {/* Hero stats */}

              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">

                <div>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Strategic
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Guidance
                  </p>

                </div>

                <div className="border-l border-white/10 pl-3 sm:pl-6">

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Practical
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Solutions
                  </p>

                </div>

                <div className="border-l border-white/10 pl-3 sm:pl-6">

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Reliable
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Support
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                PREMIUM CONSULTING VISUAL
            ================================================= */}

            <div className="relative mx-auto w-full max-w-[410px]">

              {/* Rings */}

              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C98255]/20 sm:h-[360px] sm:w-[360px]" />

              <div className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[285px] sm:w-[285px]" />

              {/* Main consulting panel */}

              <div className="relative mx-auto h-[300px] w-[235px] sm:h-[370px] sm:w-[290px]">

                {/* Back layer */}

                <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-6 border border-[#C98255]/20 bg-white/[0.02]" />

                {/* Middle layer */}

                <div className="absolute inset-0 -translate-x-2 rotate-[-4deg] border border-white/10 bg-[#0A3554]/60 backdrop-blur-xl" />

                {/* Main */}

                <div className="absolute inset-0 border border-[#C98255]/30 bg-[#062B49]/95 p-6 shadow-2xl sm:p-7">

                  <div className="flex h-full flex-col">

                    {/* Top */}

                    <div className="flex items-center justify-between border-b border-white/10 pb-5">

                      <div>

                        <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                          EPSILORA
                        </p>

                        <p className="mt-1 text-sm font-bold text-white">
                          Technology Advisory
                        </p>

                      </div>

                      <div className="flex h-9 w-9 items-center justify-center bg-[#9B5B35] text-white">
                        <FiBriefcase />
                      </div>

                    </div>

                    {/* Architecture diagram */}

                    <div className="relative mt-7 flex flex-1 items-center justify-center">

                      <div className="absolute h-32 w-32 rounded-full border border-[#C98255]/20" />

                      <div className="absolute h-20 w-20 rounded-full border border-white/10" />

                      <div className="relative flex h-14 w-14 items-center justify-center bg-[#9B5B35] text-xl text-white shadow-lg">
                        <FiSettings />
                      </div>

                      {/* Nodes */}

                      <div className="absolute left-0 top-5 flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-[#C98255]">
                        <FiServer />
                      </div>

                      <div className="absolute right-0 top-5 flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-[#C98255]">
                        <FiDatabase />
                      </div>

                      <div className="absolute bottom-3 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center border border-white/10 bg-white/[0.04] text-[#C98255]">
                        <FiShield />
                      </div>

                    </div>

                    {/* Bottom */}

                    <div className="border-t border-white/10 pt-4">

                      <div className="flex items-center justify-between">

                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                          Technology Strategy
                        </span>

                        <span className="flex items-center gap-2 text-[9px] text-[#C98255]">

                          <span className="h-1.5 w-1.5 rounded-full bg-[#C98255]" />

                          ACTIVE

                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating card */}

              <div className="absolute left-0 top-8 border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl sm:left-[-15px] sm:p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-[#9B5B35] text-white">
                    <FiTarget />
                  </div>

                  <div>

                    <p className="text-[9px] text-white/40">
                      Approach
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      Strategy First
                    </p>

                  </div>

                </div>

              </div>

              {/* Bottom card */}

              <div className="absolute bottom-5 right-0 border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl sm:right-[-15px] sm:p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center bg-white/10 text-[#C98255]">
                    <FiActivity />
                  </div>

                  <div>

                    <p className="text-[9px] text-white/40">
                      Delivery
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      Continuous Support
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#9B5B35]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
                  Professional Expertise
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                Technology expertise

                <span className="block text-[#9B5B35]">
                  that moves business forward.
                </span>

              </h2>

            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8 lg:ml-auto">
              Our consulting and professional services help organizations
              assess, plan, migrate and improve their technology environments
              with practical and reliable solutions.
            </p>

          </div>

          {/* Service cards */}

          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2">

            {services.map((service) => (

              <div
                key={service.number}
                className="group relative overflow-hidden border border-gray-200 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#9B5B35] hover:shadow-xl sm:p-8"
              >

                {/* Number */}

                <span className="absolute right-6 top-5 text-4xl font-bold text-gray-100 transition duration-500 group-hover:text-[#9B5B35]/10 sm:right-8 sm:top-6 sm:text-5xl">
                  {service.number}
                </span>

                {/* Icon */}

                <div className="relative flex h-12 w-12 items-center justify-center bg-[#062B49] text-xl text-white transition duration-500 group-hover:bg-[#9B5B35]">
                  {service.icon}
                </div>

                <h3 className="relative mt-7 text-lg font-bold text-[#062B49] sm:text-xl">
                  {service.title}
                </h3>

                <p className="relative mt-3 max-w-lg text-sm leading-7 text-gray-500">
                  {service.text}
                </p>

                <div className="relative mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9B5B35]">

                  Learn More

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />

                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#9B5B35]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C98255] sm:text-xs">
              Our Approach
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">

              A structured path from

              <span className="block text-[#C98255]">
                challenge to solution.
              </span>

            </h2>

          </div>

          {/* Process */}

          <div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (

              <div
                key={item.number}
                className="group border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-[#C98255]/40 hover:bg-white/[0.06] sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center bg-[#9B5B35] text-lg text-white">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold text-white/15">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICE AREAS
      ===================================================== */}

      <section className="bg-[#f6f4f1] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">

            {/* Left */}

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
                Service Capabilities
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">

                Expertise across

                <span className="block text-[#9B5B35]">
                  your IT environment.
                </span>

              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                From infrastructure assessment to migration and
                virtualization, our professional service areas are
                designed around practical technology requirements.
              </p>

            </div>

            {/* Areas */}

            <div className="grid gap-2 sm:grid-cols-2">

              {serviceAreas.map((item, index) => (

                <div
                  key={item}
                  className="group flex min-h-[58px] items-center gap-3 border border-gray-200 bg-white px-4 transition duration-300 hover:border-[#9B5B35] hover:shadow-sm sm:px-5"
                >

                  <span className="text-[10px] font-bold text-[#9B5B35]/50">
                    0{index + 1}
                  </span>

                  <FiArrowRight className="shrink-0 text-[#9B5B35] transition duration-300 group-hover:translate-x-1" />

                  <span className="text-xs font-semibold leading-5 text-[#062B49] sm:text-sm">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Dark panel */}

            <div className="relative overflow-hidden bg-[#062B49] p-7 sm:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#9B5B35]/20 blur-3xl" />

              <div className="relative">

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C98255] sm:text-xs">
                  Technology Advisory
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">

                  Better technology

                  <span className="block text-[#C98255]">
                    starts with clarity.
                  </span>

                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  Understand your environment, identify opportunities
                  and create a practical technology direction aligned
                  with your organization.
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">

                  <div className="flex h-10 w-10 items-center justify-center bg-[#9B5B35] text-white">
                    <FiGlobe />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Infrastructure Perspective
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      Strategy • Technology • Operations
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Capabilities */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#9B5B35]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-xs">
                  Core Capabilities
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Practical expertise for
                <span className="block text-[#9B5B35]">
                  real technology challenges.
                </span>
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {capabilities.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-gray-100 pb-4"
                  >

                    <FiCheckCircle className="mt-0.5 shrink-0 text-[#9B5B35]" />

                    <span className="text-sm font-medium leading-6 text-[#062B49]">
                      {item}
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
                Start a Conversation
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">

                Turn technology challenges

                <span className="block text-[#C98255]">
                  into practical solutions.
                </span>

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                Tell us about your infrastructure, migration or
                technology requirements and let's explore the right
                approach for your organization.
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

export default ConsultingProfessional;