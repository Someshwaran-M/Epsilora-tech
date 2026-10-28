import React from "react";
import {
  FiServer,
  FiSettings,
  FiMonitor,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiCloud,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: FiServer,
    title: "IT Infrastructure Management",
    description:
      "Manage business technology infrastructure with structured administration, proactive maintenance, and reliable technical operations.",
  },
  {
    number: "02",
    icon: FiMonitor,
    title: "System Monitoring & Support",
    description:
      "Monitor systems, identify potential issues, and provide dependable technical support to help maintain operational continuity.",
  },
  {
    number: "03",
    icon: FiSettings,
    title: "IT Operations & Maintenance",
    description:
      "Improve day-to-day IT operations through system maintenance, configuration management, troubleshooting, and performance optimization.",
  },
  {
    number: "04",
    icon: FiCloud,
    title: "Cloud & Infrastructure Support",
    description:
      "Support cloud and hybrid environments with organized administration, infrastructure planning, and ongoing technical assistance.",
  },
];

const process = [
  {
    number: "01",
    icon: FiTarget,
    title: "Assess",
    text: "Review your current IT environment, infrastructure, operational needs, and business priorities.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Organize",
    text: "Establish appropriate infrastructure standards, support workflows, and maintenance priorities.",
  },
  {
    number: "03",
    icon: FiSettings,
    title: "Manage",
    text: "Coordinate system administration, technical support, maintenance, and infrastructure improvements.",
  },
  {
    number: "04",
    icon: FiTrendingUp,
    title: "Optimize",
    text: "Review performance and identify opportunities to improve reliability, efficiency, and scalability.",
  },
];

const serviceAreas = [
  "IT Infrastructure Administration",
  "Server Management",
  "System Monitoring",
  "Network Management",
  "Hardware & Software Support",
  "Cloud Infrastructure Support",
  "IT Maintenance Planning",
  "Performance Optimization",
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

function ITManagement() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#062B49]">
      {/* INTRODUCTION */}
      <section className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div>
              <SectionLabel>IT Management Expertise</SectionLabel>

              <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Reliable IT operations{" "}
                <span className="text-[#9B5B35]">
                  for a connected business.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Our IT management services help businesses maintain their
                technology environments through infrastructure administration,
                system monitoring, technical support, and continuous operational
                improvement.
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
                  Reliable. Efficient. Scalable.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT MANAGEMENT SERVICES */}
      <section
        id="it-management"
        className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 max-w-2xl">
            <SectionLabel>What We Do</SectionLabel>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Reliable technology management for your business.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Maintain efficient IT operations through proactive infrastructure
              management, system monitoring, and dependable technical support.
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

      {/* IT MANAGEMENT PROCESS */}
      <section className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <SectionLabel>Our Approach</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                A smarter way to{" "}
                <span className="text-[#9B5B35]">
                  manage your IT environment.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Our structured approach helps businesses understand their IT
                requirements, organize operations, manage infrastructure, and
                continuously improve system performance.
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

            {/* RESPONSIVE PROCESS TIMELINE */}
            <div className="relative">
              <div className="absolute bottom-4 left-[17px] top-4 hidden w-px bg-slate-200 sm:block" />

              <div className="space-y-3 sm:space-y-4">
                {process.map((step) => {
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
                          {step.text}
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

      {/* IT MANAGEMENT CAPABILITIES */}
      <section className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <SectionLabel>Service Capabilities</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Control your{" "}
                <span className="text-[#9B5B35]">
                  technology environment.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                From infrastructure administration to monitoring and
                maintenance, our IT management capabilities support more
                consistent operations and a dependable technology foundation.
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

export default ITManagement;
