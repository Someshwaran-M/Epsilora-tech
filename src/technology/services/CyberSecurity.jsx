
import React from "react";
import {
  FiShield,
  FiLock,
  FiEye,
  FiAlertTriangle,
  FiArrowRight,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FiShield,
    number: "01",
    title: "Cyber Security Assessment",
    text: "Identify security gaps, evaluate potential risks, and understand your organization's security posture to establish a stronger protection strategy.",
  },
  {
    icon: FiLock,
    number: "02",
    title: "Data & Network Protection",
    text: "Protect sensitive business information, networks, and critical systems through structured security controls and access management.",
  },
  {
    icon: FiEye,
    number: "03",
    title: "Threat Monitoring & Detection",
    text: "Improve visibility across your IT environment with monitoring practices designed to identify suspicious activities and emerging threats.",
  },
  {
    icon: FiAlertTriangle,
    number: "04",
    title: "Incident Response & Recovery",
    text: "Strengthen incident response readiness with procedures for investigating security events, reducing disruption, and supporting recovery.",
  },
];

const process = [
  {
    icon: FiTarget,
    number: "01",
    title: "Assess",
    text: "Evaluate your current security posture, identify potential vulnerabilities, and understand your business priorities.",
  },
  {
    icon: FiLayers,
    number: "02",
    title: "Protect",
    text: "Establish practical safeguards for your systems, networks, digital assets, and sensitive business information.",
  },
  {
    icon: FiActivity,
    number: "03",
    title: "Monitor",
    text: "Improve security visibility and identify suspicious activities across your supported technology environment.",
  },
  {
    icon: FiTrendingUp,
    number: "04",
    title: "Strengthen",
    text: "Review security performance and continuously improve protection measures and incident readiness.",
  },
];

const serviceAreas = [
  "Security Risk Assessment",
  "Data Protection",
  "Network Security",
  "Threat Monitoring",
  "Infrastructure Security",
  "Access Management",
  "Incident Readiness",
  "Security Improvement",
];

const SectionLabel = ({ children }) => (
  <div className="mb-2 flex items-center gap-2">
    <span className="h-[2px] w-7 shrink-0 bg-[#9B5B35]" />
    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B5B35]">
      {children}
    </span>
  </div>
);

const CyberSecurity = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white text-[#062B49]">
      {/* INTRODUCTION */}
      <section className="px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionLabel>Cyber Security Expertise</SectionLabel>

              <h1 className="max-w-xl text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[42px]">
                Protect your digital world{" "}
                <span className="text-[#9B5B35]">
                  with stronger security.
                </span>
              </h1>
            </div>

            <div className="lg:pl-3">
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Our cyber security services help businesses identify risks,
                protect digital assets, improve threat awareness, and
                strengthen their security practices with practical,
                structured solutions.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-10 items-center justify-center gap-2 bg-[#062B49] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#9B5B35]"
                >
                  Discuss Your Requirements
                  <FiArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span className="text-xs font-medium text-slate-500 sm:text-sm">
                  Assess. Protect. Monitor.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
{/* SERVICES */}
<section
  id="cyber-security"
  className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-9"
>
  <div className="mx-auto max-w-7xl">
    {/* SECTION HEADER */}
    <div className="mb-5 grid grid-cols-1 gap-3 border-b border-slate-200 pb-5 lg:grid-cols-2 lg:items-end lg:gap-10">
      <div>
        <SectionLabel>What We Do</SectionLabel>

        <h2 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#062B49] sm:text-3xl">
          Security solutions for a safer digital environment.
        </h2>
      </div>

      <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:justify-self-end">
        Identify vulnerabilities, strengthen protection measures, and
        improve your organization's readiness to manage evolving
        cyber security risks.
      </p>
    </div>

    {/* ALIGNED SERVICE ROWS */}
    <div>
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article
            key={service.number}
            className="group relative grid grid-cols-[36px_44px_minmax(0,1fr)] items-center gap-x-3 gap-y-3 border-b border-slate-200 py-5 transition-colors duration-300 sm:grid-cols-[44px_48px_minmax(0,0.9fr)_minmax(0,1.1fr)_36px] sm:gap-x-4 sm:py-5 lg:grid-cols-[52px_52px_minmax(220px,0.9fr)_minmax(280px,1.1fr)_40px] lg:gap-x-5 lg:py-6"
          >
            {/* HOVER ACCENT */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

            {/* NUMBER */}
            <span className="row-start-1 text-xs font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-[#9B5B35] sm:col-start-1 sm:row-auto">
              {service.number}
            </span>

            {/* ICON */}
            <div className="row-start-1 flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white sm:col-start-2 sm:row-auto sm:h-11 sm:w-11">
              <Icon size={20} strokeWidth={1.7} />
            </div>

            {/* TITLE */}
            <h3 className="col-span-3 row-start-2 min-w-0 text-base font-bold leading-snug text-[#062B49] transition-colors duration-300 group-hover:text-[#9B5B35] sm:col-span-1 sm:col-start-3 sm:row-auto sm:text-base lg:text-lg">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="col-span-3 row-start-3 min-w-0 text-sm leading-6 text-slate-600 sm:col-span-1 sm:col-start-4 sm:row-auto sm:pr-1">
              {service.text}
            </p>

            {/* ACTION */}
            <div className="hidden h-9 w-9 items-center justify-center border border-slate-200 text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white sm:col-start-5 sm:row-auto sm:flex">
              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>


      {/* PROCESS */}
      <section className="px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <SectionLabel>Our Approach</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                A structured path to{" "}
                <span className="text-[#9B5B35]">
                  stronger cyber security.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Our approach helps businesses assess their security posture,
                establish protection measures, monitor potential threats,
                and continuously improve their security readiness.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#9B5B35]/30 text-[#9B5B35]">
                  <FiCheckCircle size={18} />
                </div>

                <p className="text-sm font-semibold text-[#062B49]">
                  A practical, proactive security approach
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-4 left-[17px] top-4 hidden w-px bg-slate-200 sm:block" />

              <div className="space-y-4">
                {process.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.number}
                      className="group relative flex gap-4"
                    >
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 bg-white text-[#9B5B35] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                        <Icon size={17} />
                      </div>

                      <div className="min-w-0 flex-1 border-b border-slate-100 pb-4">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-[10px] font-bold tracking-widest text-[#9B5B35]">
                            STEP {step.number}
                          </span>
                          <span className="h-px w-5 bg-slate-200" />
                        </div>

                        <h3 className="text-lg font-bold text-[#062B49] transition-colors duration-300 group-hover:text-[#9B5B35]">
                          {step.title}
                        </h3>

                        <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CAPABILITIES */}
      <section className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <SectionLabel>Service Capabilities</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Expertise across{" "}
                <span className="text-[#9B5B35]">
                  your security environment.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                From security risk assessment to data protection and threat
                monitoring, our cyber security service areas focus on
                practical protection measures for your technology
                environment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {serviceAreas.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-[54px] items-center gap-3 border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:border-[#9B5B35] hover:shadow-sm sm:px-4"
                >
                  <span className="shrink-0 text-[10px] font-bold text-[#9B5B35]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FiArrowRight
                    size={15}
                    className="shrink-0 text-[#9B5B35] transition-transform duration-300 group-hover:translate-x-1"
                  />

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
};

export default CyberSecurity;
