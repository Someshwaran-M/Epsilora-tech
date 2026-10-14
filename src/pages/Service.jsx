import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiChevronRight,
  FiMonitor,
  FiServer,
  FiShield,
} from "react-icons/fi";

const serviceItems = [
  {
    id: "accounting-financial",
    number: "01",
    title: "Accounting & Financial",
    description:
      "Financial technology, accounting systems, reporting, and solutions that support smarter business decisions.",
    icon: FiMonitor,
    aliases: [
      "AccountingFinancial",
      "AccountingAndFinancial",
      "AccountingFinancialServices",
      "Accounting",
    ],
  },
  {
    id: "consulting-professional",
    number: "02",
    title: "Consulting & Professional",
    description:
      "Professional IT consulting, technology planning, implementation, and strategic business support.",
    icon: FiBriefcase,
    aliases: [
      "ConsultingProfessional",
      "ConsultingAndProfessional",
      "ConsultingProfessionalServices",
      "Consulting",
    ],
  },
  {
    id: "it-management",
    number: "03",
    title: "IT Management",
    description:
      "IT infrastructure management, system monitoring, maintenance, and reliable technical support.",
    icon: FiServer,
    aliases: [
      "ITManagement",
      "ItManagement",
      "ITManagementServices",
      "InformationTechnologyManagement",
    ],
  },
  {
    id: "cyber-security",
    number: "04",
    title: "Cyber Security",
    description:
      "Protect business systems and data through cybersecurity assessments, threat monitoring, and risk management.",
    icon: FiShield,
    aliases: [
      "CyberSecurity",
      "CyberSecurityServices",
      "CyberSecurityManagement",
      "CyberSecuritySolutions",
    ],
  },
];

const serviceModules = import.meta.glob(
  "../technology/services/**/*.jsx",
  { eager: true }
);

const normalizeName = (value = "") =>
  value
    .split("/")
    .pop()
    .replace(/\.(jsx|tsx|js|ts)$/i, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

const getServiceComponent = (service) => {
  const aliases = service.aliases.map(normalizeName);

  for (const [path, module] of Object.entries(serviceModules)) {
    const filename = normalizeName(path);

    if (
      aliases.some(
        (alias) => filename === alias || filename.endsWith(alias)
      ) &&
      typeof module.default === "function"
    ) {
      return module.default;
    }
  }

  return null;
};

const serviceComponents = Object.fromEntries(
  serviceItems.map((service) => [
    service.id,
    getServiceComponent(service),
  ])
);

export default function Service() {
  const [activeService, setActiveService] = useState(
    "accounting-financial"
  );

  const sectionRefs = useRef({});
  const clickNavigationRef = useRef(false);
  const services = useMemo(() => serviceItems, []);

  const scrollToService = useCallback(
    (serviceId, updateUrl = true) => {
      const target = sectionRefs.current[serviceId];

      if (!target) return;

      clickNavigationRef.current = true;
      setActiveService(serviceId);

      // Scroll the main browser page naturally.
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        24;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });

      if (updateUrl) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}#${serviceId}`
        );
      }

      window.setTimeout(() => {
        clickNavigationRef.current = false;
      }, 800);
    },
    []
  );

  useEffect(() => {
    const openInitialSection = () => {
      const hash = decodeURIComponent(
        window.location.hash.slice(1)
      );

      const matchingService = services.find(
        (service) => service.id === hash
      );

      if (matchingService) {
        window.setTimeout(() => {
          scrollToService(matchingService.id, false);
        }, 150);
      }
    };

    openInitialSection();
    window.addEventListener("hashchange", openInitialSection);

    return () => {
      window.removeEventListener(
        "hashchange",
        openInitialSection
      );
    };
  }, [scrollToService, services]);

  useEffect(() => {
    const updateActiveService = () => {
      if (clickNavigationRef.current) return;

      let currentService = services[0]?.id;
      const activationLine = 130;

      for (const service of services) {
        const section = sectionRefs.current[service.id];

        if (
          section &&
          section.getBoundingClientRect().top <= activationLine
        ) {
          currentService = service.id;
        }
      }

      if (currentService) {
        setActiveService(currentService);
      }
    };

    window.addEventListener("scroll", updateActiveService, {
      passive: true,
    });

    updateActiveService();

    return () => {
      window.removeEventListener("scroll", updateActiveService);
    };
  }, [services]);

  return (
    <div className="w-full bg-white text-[#062B49]">
      {/* Brand Partners Hero Banner */}
      <section className="relative h-[220px] w-full overflow-hidden sm:h-[300px] md:h-[360px] lg:h-[425px]">
        <img
          src="/consulting.png"
          alt="Brand Partners - Together for a Better Tomorrow"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </section>

      {/* Services Layout */}
      <main className="mx-auto w-full max-w-[1280px] bg-white text-[#062B49]">
        <div className="grid w-full grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="relative z-10 bg-white md:sticky md:top-0 md:flex md:h-screen md:flex-col md:border-r md:border-[#E7EBEF]">
            <div className="px-5 pb-4 pt-5 sm:px-7 sm:pt-7 lg:px-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                What We Do
              </p>

              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Our Services
              </h1>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#667586]">
                Explore our services and find the right technology
                support for your business.
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav
              aria-label="Service navigation"
              className="hidden min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 pb-6 md:flex lg:px-5"
            >
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToService(service.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#062B49] bg-[#062B49] text-white shadow-md shadow-[#062B49]/10"
                        : "border-transparent bg-white text-[#425466] hover:border-[#E5EAF0] hover:bg-[#F7F9FB] hover:text-[#062B49]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg ${
                        isActive
                          ? "bg-white/10 text-[#C18A61]"
                          : "bg-[#F3F5F7] text-[#9B5B35] group-hover:bg-[#F0E7E1]"
                      }`}
                    >
                      <Icon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`mb-1 block text-[10px] font-bold tracking-[0.16em] ${
                          isActive
                            ? "text-[#C18A61]"
                            : "text-[#9B5B35]"
                        }`}
                      >
                        SERVICE {service.number}
                      </span>

                      <span className="block text-sm font-semibold leading-5">
                        {service.title}
                      </span>
                    </span>

                    <FiChevronRight
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "text-[#C18A61]"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Mobile Navigation */}
            <nav
              aria-label="Mobile service navigation"
              className="flex gap-2 overflow-x-auto px-4 pb-4 md:hidden"
            >
              {services.map((service) => {
                const isActive = activeService === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToService(service.id)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "border-[#062B49] bg-[#062B49] text-white"
                        : "border-[#E1E6EB] bg-white text-[#425466]"
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </nav>

            <div className="hidden shrink-0 border-t border-[#E7EBEF] px-7 py-5 lg:block">
              <p className="text-xs leading-5 text-[#7B8794]">
                Need help choosing a service?
              </p>

              <a
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#9B5B35] transition-colors hover:text-[#062B49]"
              >
                Talk to our team <FiArrowUpRight />
              </a>
            </div>
          </aside>

          {/* Main Service Content */}
          <div className="min-w-0 bg-white">
            {/* Introduction */}
            <section className="relative overflow-hidden border-b border-[#E9EDF1] bg-white px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#C18A61]/15" />
              <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full border border-[#C18A61]/20" />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-3xl"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9B5B35]">
                  EPSILORA Technology
                </p>

                <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Technology Services
                  <span className="block text-[#9B5B35]">
                    Designed Around Your Business
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#667586] sm:text-base">
                  Discover our accounting and financial, consulting,
                  IT management, and cybersecurity services. We help
                  businesses strengthen their operations through
                  dependable technology and professional expertise.
                </p>
              </motion.div>
            </section>

            {/* Individual Service Components */}
            <div className="px-5 sm:px-8 lg:px-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const ServiceComponent =
                  serviceComponents[service.id];

                return (
                  <section
                    key={service.id}
                    id={service.id}
                    ref={(element) => {
                      sectionRefs.current[service.id] = element;
                    }}
                    className={`scroll-mt-6 border-b border-[#E9EDF1] py-10 sm:py-12 lg:py-16 ${
                      index === services.length - 1
                        ? "border-b-0"
                        : ""
                    }`}
                  >
                    <div className="mb-7 flex items-start gap-4 sm:mb-9">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5EDE7] text-xl text-[#9B5B35] sm:h-14 sm:w-14 sm:text-2xl">
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
                          Service {service.number}
                        </p>

                        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                          {service.title}
                        </h2>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#667586] sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {ServiceComponent ? (
                      <div className="service-component-content min-w-0 w-full">
                        <ServiceComponent />
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed border-[#D9E0E7] bg-[#FAFBFC] p-5 sm:p-7">
                        <h3 className="text-base font-semibold">
                          {service.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#667586]">
                          The separate component for this service
                          has not been found in{" "}
                          <code className="break-all rounded bg-[#EEF1F4] px-1.5 py-0.5 text-xs">
                            src/technology/services/
                          </code>
                          . Check the JSX filename and its default
                          export.
                        </p>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <section className="mx-5 mb-8 rounded-2xl bg-[#062B49] px-6 py-8 text-white sm:mx-8 sm:px-8 lg:mx-12 lg:px-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C18A61]">
                    Let's Work Together
                  </p>

                  <h2 className="text-xl font-bold sm:text-2xl">
                    Need a solution for your business?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                    Speak with our team about your requirements and
                    technology goals.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-lg bg-[#C18A61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#062B49]"
                >
                  Contact Us <FiArrowUpRight />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <style>{`
        .service-component-content {
          color: #062B49;
          min-width: 0;
        }

        .service-component-content img {
          max-width: 100%;
          height: auto;
        }

        .service-component-content > section:first-child {
          margin-top: 0;
        }

        .service-component-content > section:last-child {
          margin-bottom: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
