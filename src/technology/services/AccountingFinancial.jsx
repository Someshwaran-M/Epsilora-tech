
import React from "react";
import {
  FiBriefcase,
  FiDollarSign,
  FiBarChart2,
  FiPieChart,
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiFileText,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: FiDollarSign,
    title: "Financial Management",
    description:
      "Improve financial visibility through structured financial management, reporting, and business performance analysis.",
  },
  {
    number: "02",
    icon: FiBriefcase,
    title: "Accounting Solutions",
    description:
      "Streamline accounting operations with reliable systems, organized financial records, and efficient reporting workflows.",
  },
  {
    number: "03",
    icon: FiBarChart2,
    title: "Financial Reporting & Analysis",
    description:
      "Turn financial information into meaningful insights that support planning, performance evaluation, and informed decisions.",
  },
  {
    number: "04",
    icon: FiTrendingUp,
    title: "Budgeting & Forecasting",
    description:
      "Support business planning with structured budgeting, financial projections, and ongoing performance monitoring.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: FiTarget,
    title: "Assess",
    description:
      "Understand current accounting processes, financial reporting needs, and business objectives.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Organize",
    description:
      "Establish structured workflows, reporting requirements, and appropriate financial systems.",
  },
  {
    number: "03",
    icon: FiActivity,
    title: "Optimize",
    description:
      "Improve financial visibility, reporting efficiency, and consistency across your operations.",
  },
  {
    number: "04",
    icon: FiTrendingUp,
    title: "Grow",
    description:
      "Use financial insights to support planning, operational improvements, and sustainable growth.",
  },
];

const serviceAreas = [
  { icon: FiLayers, title: "Accounting Process Management" },
  { icon: FiFileText, title: "Financial Reporting" },
  { icon: FiPieChart, title: "Budget Planning" },
  { icon: FiBarChart2, title: "Financial Performance Analysis" },
  { icon: FiBriefcase, title: "Accounting System Integration" },
  { icon: FiActivity, title: "Cash Flow Monitoring" },
  { icon: FiTrendingUp, title: "Management Reporting" },
  { icon: FiShield, title: "Financial Data Organization" },
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

function AccountingFinancial() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#062B49]">
      {/* INTRODUCTION */}
      <section className="bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div>
              <SectionLabel>Accounting & Financial Services</SectionLabel>

              <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                Financial clarity for{" "}
                <span className="text-[#9B5B35]">
                  smarter business decisions.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Build a clearer understanding of your financial position
                through organized accounting, reliable reporting, and
                structured financial planning. Our approach helps businesses
                improve visibility and make informed decisions with confidence.
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
                  Structured. Transparent. Reliable.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 max-w-2xl">
            <SectionLabel>What We Do</SectionLabel>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Accounting expertise built around your business.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Practical financial support designed to bring structure to your
              processes and clarity to your business performance.
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
                A clearer view of your{" "}
                <span className="text-[#9B5B35]">financial future.</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                A structured process helps bring consistency to your financial
                operations, improve reporting, and support better business
                decisions at every stage.
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

      {/* FINANCIAL CAPABILITIES */}
      <section className="border-y border-slate-200 bg-[#F7F9FB] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <SectionLabel>Financial Capabilities</SectionLabel>

              <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Insight for better{" "}
                <span className="text-[#9B5B35]">financial control.</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                Bring essential financial activities into a more organized
                structure, with an emphasis on clear information, consistent
                processes, and meaningful reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
              {serviceAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className={`group flex min-h-[64px] items-center gap-3 border-b border-slate-200 py-2.5 transition-colors duration-300 hover:border-[#9B5B35] ${
                      index % 2 === 0 ? "sm:pr-3" : "sm:pl-3"
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 bg-white text-[#9B5B35] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <h3 className="flex-1 text-sm font-semibold leading-5 text-[#062B49]">
                      {area.title}
                    </h3>

                    <FiArrowRight className="shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#9B5B35]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AccountingFinancial;