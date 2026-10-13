import React from "react";
import {
  FiBriefcase,
  FiSettings,
  FiDatabase,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiServer,
  FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: FiBriefcase,
    title: "Technology Consulting",
    description:
      "Professional guidance to help organizations plan and improve their technology infrastructure.",
  },
  {
    number: "02",
    icon: FiSettings,
    title: "Infrastructure Services",
    description:
      "Expert support for modern IT infrastructure, systems and technology environments.",
  },
  {
    number: "03",
    icon: FiDatabase,
    title: "Migration Services",
    description:
      "Plan and execute technology migrations with a structured and reliable approach.",
  },
  {
    number: "04",
    icon: FiShield,
    title: "Security Services",
    description:
      "Professional technology services focused on improving infrastructure security and reliability.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: FiTarget,
    title: "Assess",
    description:
      "Understand your current infrastructure, requirements and technology environment.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Plan",
    description:
      "Develop a structured approach aligned with your operational and business requirements.",
  },
  {
    number: "03",
    icon: FiSettings,
    title: "Transform",
    description:
      "Implement technology improvements, migrations and infrastructure changes.",
  },
  {
    number: "04",
    icon: FiTrendingUp,
    title: "Improve",
    description:
      "Support continuous improvement and long-term infrastructure reliability.",
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

function SectionLabel({ children }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <span className="h-[2px] w-7 bg-[#9B5B35]" />
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9B5B35]">
        {children}
      </span>
    </div>
  );
}

function ConsultingProfessional() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#062B49]">
      {/* INTRODUCTION */}
      <section className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div>
              <SectionLabel>Professional Expertise</SectionLabel>

              <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Technology expertise{" "}
                <span className="text-[#9B5B35]">
                  that moves business forward.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Our consulting and professional services help organizations
                assess, plan, migrate and improve their technology environments
                with practical and reliable solutions.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-10 items-center justify-center gap-2 bg-[#062B49] px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#9B5B35] sm:text-sm"
                >
                  Discuss Your Requirements
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <span className="text-xs font-medium text-slate-500 sm:text-sm">
                  Assess. Plan. Transform. Improve.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 max-w-2xl">
            <SectionLabel>What We Do</SectionLabel>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Professional technology services for your business.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              From technology consulting to infrastructure improvements, we
              help organizations build reliable and efficient technology
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9B5B35]/50 hover:shadow-[0_8px_24px_rgba(6,43,73,0.07)] sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#062B49] text-white transition-colors duration-300 group-hover:bg-[#9B5B35]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-[#9B5B35]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-[#062B49] sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-4 h-[2px] w-9 bg-[#9B5B35] transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <SectionLabel>Our Approach</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                A structured path from{" "}
                <span className="text-[#9B5B35]">
                  assessment to improvement.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Our approach brings structure to technology planning,
                transformation and continuous improvement.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#9B5B35]/30 text-[#9B5B35]">
                  <FiCheckCircle size={18} />
                </div>

                <p className="text-sm font-semibold text-[#062B49]">
                  A practical, step-by-step approach
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-4 left-[17px] top-4 hidden w-px bg-slate-200 sm:block" />

              <div className="space-y-3 sm:space-y-4">
                {processSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group relative flex gap-4"
                    >
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 bg-white text-[#9B5B35] transition-colors duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                        <Icon size={17} />
                      </div>

                      <div className="flex-1 border-b border-slate-100 pb-3">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-[10px] font-bold tracking-widest text-[#9B5B35]">
                            STEP {step.number}
                          </span>

                          <span className="h-px w-5 bg-slate-200" />
                        </div>

                        <h3 className="text-lg font-bold text-[#062B49]">
                          {step.title}
                        </h3>

                        <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CAPABILITIES */}
      <section className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <SectionLabel>Service Capabilities</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Expertise across{" "}
                <span className="text-[#9B5B35]">
                  your IT environment.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                From infrastructure assessment to migration and virtualization,
                our professional service areas are designed around practical
                technology requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {serviceAreas.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-[58px] items-center gap-3 border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:border-[#9B5B35] hover:shadow-sm sm:px-5"
                >
                  <span className="shrink-0 text-[10px] font-bold text-[#9B5B35]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiArrowRight className="shrink-0 text-[#9B5B35] transition-transform duration-300 group-hover:translate-x-1" />

                  <span className="text-xs font-semibold leading-5 text-[#062B49] sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ConsultingProfessional;
