
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
  FiChevronRight,
  FiDatabase,
  FiServer,
  FiMonitor,
  FiShield,
} from "react-icons/fi";

const hardwareItems = [
  {
    id: "data-center",
    number: "01",
    title: "Data Center",
    description:
      "Build a reliable technology foundation with enterprise data center infrastructure, server systems, storage, networking, and infrastructure management.",
    icon: FiDatabase,
    eyebrow: "IT INFRASTRUCTURE",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Enterprise data center server infrastructure",
    features: [
      "Data center infrastructure",
      "Server and storage systems",
      "Network infrastructure",
      "Infrastructure management",
    ],
  },
  {
    id: "servers-devices",
    number: "02",
    title: "Servers, Desktops & Laptops",
    description:
      "Equip your organization with dependable computing hardware designed to support productivity, business applications, and everyday operations.",
    icon: FiMonitor,
    eyebrow: "BUSINESS COMPUTING",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop and professional computing equipment",
    features: [
      "Enterprise server systems",
      "Business desktops and laptops",
      "Professional workstations",
      "Hardware upgrades and support",
    ],
  },
  {
    id: "firewall",
    number: "03",
    title: "Firewall Solutions",
    description:
      "Strengthen your network perimeter with firewall solutions that help manage traffic, control access, and reduce exposure to network threats.",
    icon: FiShield,
    eyebrow: "NETWORK DEFENCE",
    image:
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Enterprise network infrastructure",
    features: [
      "Firewall deployment",
      "Network traffic filtering",
      "Access control policies",
      "Network security configuration",
    ],
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "Cybersecurity",
    description:
      "Help protect business systems, endpoints, networks, and sensitive information through security solutions designed around your organization's needs.",
    icon: FiShield,
    eyebrow: "DIGITAL PROTECTION",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Digital security technology",
    features: [
      "Endpoint protection",
      "Network security",
      "Threat detection and monitoring",
      "Data protection",
    ],
  },
];

export default function Hardware() {
  const [activeHardware, setActiveHardware] = useState("data-center");

  const sectionRefs = useRef({});
  const clickNavigationRef = useRef(false);
  const navigationTimeoutRef = useRef(null);

  const hardware = useMemo(() => hardwareItems, []);

  const scrollToHardware = useCallback((hardwareId, updateUrl = true) => {
    const target = sectionRefs.current[hardwareId];

    if (!target) return;

    clickNavigationRef.current = true;
    setActiveHardware(hardwareId);

    const top =
      target.getBoundingClientRect().top + window.scrollY - 24;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

    if (updateUrl) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#${hardwareId}`
      );
    }

    if (navigationTimeoutRef.current) {
      window.clearTimeout(navigationTimeoutRef.current);
    }

    navigationTimeoutRef.current = window.setTimeout(() => {
      clickNavigationRef.current = false;
    }, 900);
  }, []);

  // Navigate directly to a section when its URL hash is opened.
  useEffect(() => {
    const openInitialSection = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));

      const matchingItem = hardware.find((item) => item.id === hash);

      if (matchingItem) {
        window.setTimeout(() => {
          scrollToHardware(matchingItem.id, false);
        }, 200);
      }
    };

    openInitialSection();

    window.addEventListener("hashchange", openInitialSection);

    return () => {
      window.removeEventListener("hashchange", openInitialSection);

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [hardware, scrollToHardware]);

  // Update the active sidebar item while the user scrolls.
  useEffect(() => {
    const updateActiveHardware = () => {
      if (clickNavigationRef.current) return;

      let currentItem = hardware[0]?.id;
      const activationLine = 130;

      for (const item of hardware) {
        const section = sectionRefs.current[item.id];

        if (
          section &&
          section.getBoundingClientRect().top <= activationLine
        ) {
          currentItem = item.id;
        }
      }

      if (currentItem) {
        setActiveHardware(currentItem);
      }
    };

    window.addEventListener("scroll", updateActiveHardware, {
      passive: true,
    });

    updateActiveHardware();

    return () => {
      window.removeEventListener("scroll", updateActiveHardware);
    };
  }, [hardware]);

  return (
    <div className="w-full bg-white text-[#062B49]">
      {/* HERO BANNER */}
      <section className="relative h-[220px] w-full overflow-hidden bg-[#EAF4FC] sm:h-[300px] md:h-[360px] lg:h-[425px]">
        <img
          src="/hardware.png"
          alt="EPSILORA Technology Hardware Solutions"
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF4FC]/50 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#9B5B35]" />
      </section>

      {/* HARDWARE PAGE LAYOUT */}
      <main className="mx-auto w-full max-w-[1280px] bg-white text-[#062B49]">
        <div className="grid w-full grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* SIDEBAR */}
          <aside className="relative z-10 bg-white md:sticky md:top-0 md:flex md:h-screen md:flex-col md:border-r md:border-[#E7EBEF]">
            <div className="px-5 pb-4 pt-5 sm:px-7 sm:pt-7 lg:px-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                What We Do
              </p>

              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Hardware & Technology
              </h1>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#667586]">
                Explore our hardware and security solutions for your business.
              </p>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Hardware navigation"
              className="hidden min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 pb-6 md:flex lg:px-5"
            >
              {hardware.map((item) => {
                const Icon = item.icon;
                const isActive = activeHardware === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToHardware(item.id)}
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
                          isActive ? "text-[#C18A61]" : "text-[#9B5B35]"
                        }`}
                      >
                        HARDWARE {item.number}
                      </span>

                      <span className="block text-sm font-semibold leading-5">
                        {item.title}
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

            {/* MOBILE NAVIGATION */}
            <nav
              aria-label="Mobile hardware navigation"
              className="flex gap-2 overflow-x-auto px-4 pb-4 md:hidden"
            >
              {hardware.map((item) => {
                const isActive = activeHardware === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToHardware(item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "border-[#062B49] bg-[#062B49] text-white"
                        : "border-[#E1E6EB] bg-white text-[#425466]"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </nav>

            {/* SIDEBAR CONTACT */}
            <div className="hidden shrink-0 border-t border-[#E7EBEF] px-7 py-5 lg:block">
              <p className="text-xs leading-5 text-[#7B8794]">
                Need help choosing hardware?
              </p>

              <a
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#9B5B35] transition-colors hover:text-[#062B49]"
              >
                Talk to our team <FiArrowUpRight />
              </a>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 bg-white">
            {/* INTRODUCTION */}
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
                  Hardware & Technology
                  <span className="block text-[#9B5B35]">
                    Built Around Your Business
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#667586] sm:text-base">
                  Discover data center infrastructure, business computing
                  devices, firewall solutions, and cybersecurity. We help
                  businesses establish dependable IT environments and protect
                  their digital operations.
                </p>
              </motion.div>
            </section>

            {/* INDIVIDUAL HARDWARE SECTIONS */}
            <div className="px-5 sm:px-8 lg:px-12">
              {hardware.map((item, index) => {
                const Icon = item.icon;

                return (
                  <section
                    key={item.id}
                    id={item.id}
                    ref={(element) => {
                      sectionRefs.current[item.id] = element;
                    }}
                    className={`scroll-mt-6 border-b border-[#E9EDF1] py-10 sm:py-12 lg:py-16 ${
                      index === hardware.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="mb-7 flex items-start gap-4 sm:mb-9">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5EDE7] text-xl text-[#9B5B35] sm:h-14 sm:w-14 sm:text-2xl">
                          <Icon />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
                            Hardware {item.number}
                          </p>

                          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                            {item.title}
                          </h2>

                          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#667586] sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* IMAGE AND DETAILS */}
                      <div
                        className={`grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8 ${
                          index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                        }`}
                      >
                        <div className="group relative overflow-hidden rounded-xl bg-[#EAF4FC]">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            loading="lazy"
                            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72 lg:h-[300px]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#062B49]/40 via-transparent to-transparent" />

                          <span className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-[#9B5B35] sm:text-xs">
                            {item.eyebrow}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl font-bold leading-snug text-[#062B49] sm:text-2xl">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-[#667586] sm:text-base">
                            Explore solutions tailored to your organization's
                            requirements, operational priorities, and
                            technology environment.
                          </p>

                          <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {item.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#9B5B35]" />

                                <span className="text-sm leading-6 text-[#425466]">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              const top =
                                document.getElementById("hardware-contact")
                                  ?.getBoundingClientRect().top +
                                window.scrollY -
                                24;

                              if (Number.isFinite(top)) {
                                window.scrollTo({
                                  top: Math.max(0, top),
                                  behavior: "smooth",
                                });
                              }
                            }}
                            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#9B5B35] transition-colors hover:text-[#062B49]"
                          >
                            Discuss Your Requirements
                            <FiArrowUpRight size={17} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </section>
                );
              })}
            </div>

            {/* BOTTOM CTA */}
            <section
              id="hardware-contact"
              className="mx-5 mb-8 scroll-mt-6 rounded-2xl bg-[#062B49] px-6 py-8 text-white sm:mx-8 sm:px-8 lg:mx-12 lg:px-10"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C18A61]">
                    Let's Work Together
                  </p>

                  <h2 className="text-xl font-bold sm:text-2xl">
                    Looking for the right hardware solutions?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                    Speak with our team about your infrastructure, computing,
                    firewall, and cybersecurity requirements.
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
