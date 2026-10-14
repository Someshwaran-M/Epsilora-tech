
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
  FiCloud,
  FiDatabase,
  FiCpu,
  FiShield,
} from "react-icons/fi";

const solutionItems = [
  {
    id: "cloud-solutions",
    number: "01",
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure, migration, security, and scalable cloud services for your business.",
    icon: FiCloud,
    componentName: "Cloud",
  },
  {
    id: "data-center-solutions",
    number: "02",
    title: "Data Center Solutions",
    description:
      "Data center infrastructure, servers, storage, networking, and operations management.",
    icon: FiDatabase,
    componentName: "DataCenter",
  },
  {
    id: "emerging-technology",
    number: "03",
    title: "Emerging Technology",
    description:
      "Artificial intelligence, automation, analytics, and innovative technology solutions.",
    icon: FiCpu,
    componentName: "Emerging",
  },
  {
    id: "information-cyber-security",
    number: "04",
    title: "Information & Cyber Security",
    description:
      "Security solutions that help protect business systems, data, and digital infrastructure.",
    icon: FiShield,
    componentName: "InformationCyber",
  },
];

// Automatically load the four existing solution components.
const solutionModules = import.meta.glob(
  "../technology/solutions/**/*.jsx",
  { eager: true }
);

const normalizeName = (value = "") =>
  value
    .split("/")
    .pop()
    .replace(/\.(jsx|tsx|js|ts)$/i, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

const solutionComponents = Object.fromEntries(
  solutionItems.map((solution) => {
    const matchingEntry = Object.entries(solutionModules).find(
      ([path, module]) =>
        normalizeName(path) ===
          normalizeName(solution.componentName) &&
        typeof module.default === "function"
    );

    return [
      solution.id,
      matchingEntry ? matchingEntry[1].default : null,
    ];
  })
);

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(
    "cloud-solutions"
  );

  const sectionRefs = useRef({});
  const clickNavigationRef = useRef(false);
  const navigationTimeoutRef = useRef(null);

  const solutions = useMemo(() => solutionItems, []);

  const scrollToSolution = useCallback(
    (solutionId, updateUrl = true) => {
      const target = sectionRefs.current[solutionId];

      if (!target) return;

      clickNavigationRef.current = true;
      setActiveSolution(solutionId);

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        24;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
      });

      if (updateUrl) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${solutionId}`
        );
      }

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = window.setTimeout(() => {
        clickNavigationRef.current = false;
      }, 900);
    },
    []
  );

  // Open the requested section when navigating from the Solutions menu.
  useEffect(() => {
    const openInitialSection = () => {
      const hash = decodeURIComponent(
        window.location.hash.slice(1)
      );

      const matchingSolution = solutions.find(
        (solution) => solution.id === hash
      );

      if (matchingSolution) {
        window.setTimeout(() => {
          scrollToSolution(matchingSolution.id, false);
        }, 150);
      }
    };

    openInitialSection();

    window.addEventListener(
      "hashchange",
      openInitialSection
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        openInitialSection
      );
    };
  }, [scrollToSolution, solutions]);

  // Update the active navigation item while scrolling.
  useEffect(() => {
    const updateActiveSolution = () => {
      if (clickNavigationRef.current) return;

      let currentSolution = solutions[0]?.id;
      const activationLine = 130;

      for (const solution of solutions) {
        const section = sectionRefs.current[solution.id];

        if (
          section &&
          section.getBoundingClientRect().top <= activationLine
        ) {
          currentSolution = solution.id;
        }
      }

      if (currentSolution) {
        setActiveSolution(currentSolution);
      }
    };

    window.addEventListener("scroll", updateActiveSolution, {
      passive: true,
    });

    updateActiveSolution();

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSolution
      );

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [solutions]);

  return (
    <div className="w-full bg-white text-[#062B49]">
      {/* HERO BANNER */}
      <section className="relative h-[220px] w-full overflow-hidden sm:h-[300px] md:h-[360px] lg:h-[425px]">
        <img
          src="/solutions.png"
          alt="Epsilora Technology Solutions"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </section>

      {/* SOLUTIONS LAYOUT */}
      <main className="mx-auto w-full max-w-[1280px] bg-white text-[#062B49]">
        <div className="grid w-full grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* SIDEBAR */}
          <aside className="relative z-10 bg-white md:sticky md:top-0 md:flex md:h-screen md:flex-col md:border-r md:border-[#E7EBEF]">
            <div className="px-5 pb-4 pt-5 sm:px-7 sm:pt-7 lg:px-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#9B5B35]">
                What We Do
              </p>

              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Our Solutions
              </h1>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#667586]">
                Explore our technology solutions and find the
                right approach for your business.
              </p>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Solutions navigation"
              className="hidden min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 pb-6 md:flex lg:px-5"
            >
              {solutions.map((solution) => {
                const Icon = solution.icon;
                const isActive =
                  activeSolution === solution.id;

                return (
                  <button
                    key={solution.id}
                    type="button"
                    onClick={() =>
                      scrollToSolution(solution.id)
                    }
                    aria-current={
                      isActive ? "location" : undefined
                    }
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
                        SOLUTION {solution.number}
                      </span>

                      <span className="block text-sm font-semibold leading-5">
                        {solution.title}
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
              aria-label="Mobile solutions navigation"
              className="flex gap-2 overflow-x-auto px-4 pb-4 md:hidden"
            >
              {solutions.map((solution) => {
                const isActive =
                  activeSolution === solution.id;

                return (
                  <button
                    key={solution.id}
                    type="button"
                    onClick={() =>
                      scrollToSolution(solution.id)
                    }
                    aria-current={
                      isActive ? "location" : undefined
                    }
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "border-[#062B49] bg-[#062B49] text-white"
                        : "border-[#E1E6EB] bg-white text-[#425466]"
                    }`}
                  >
                    {solution.title}
                  </button>
                );
              })}
            </nav>

            {/* SIDEBAR CONTACT */}
            <div className="hidden shrink-0 border-t border-[#E7EBEF] px-7 py-5 lg:block">
              <p className="text-xs leading-5 text-[#7B8794]">
                Need help choosing a solution?
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
                  Technology Solutions
                  <span className="block text-[#9B5B35]">
                    Built Around Your Business
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#667586] sm:text-base">
                  Discover our cloud, data center, emerging
                  technology, and information security
                  solutions. We help businesses strengthen
                  their infrastructure, improve operations,
                  and address evolving technology needs.
                </p>
              </motion.div>
            </section>

            {/* INDIVIDUAL SOLUTION SECTIONS */}
            <div className="px-5 sm:px-8 lg:px-12">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const SolutionComponent =
                  solutionComponents[solution.id];

                return (
                  <section
                    key={solution.id}
                    id={solution.id}
                    ref={(element) => {
                      sectionRefs.current[solution.id] =
                        element;
                    }}
                    className={`scroll-mt-6 border-b border-[#E9EDF1] py-10 sm:py-12 lg:py-16 ${
                      index === solutions.length - 1
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
                          Solution {solution.number}
                        </p>

                        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                          {solution.title}
                        </h2>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#667586] sm:text-base">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {SolutionComponent ? (
                      <div className="solution-component-content min-w-0 w-full">
                        <SolutionComponent />
                      </div>
                    ) : (
                      <div className="rounded-xl border border-dashed border-[#D9E0E7] bg-[#FAFBFC] p-5 sm:p-7">
                        <h3 className="text-base font-semibold">
                          {solution.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#667586]">
                          Component not found. Verify the file
                          exists in{" "}
                          <code className="break-all rounded bg-[#EEF1F4] px-1.5 py-0.5 text-xs">
                            src/technology/solutions/
                          </code>
                          and has a default export.
                        </p>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* BOTTOM CTA */}
            <section className="mx-5 mb-8 rounded-2xl bg-[#062B49] px-6 py-8 text-white sm:mx-8 sm:px-8 lg:mx-12 lg:px-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C18A61]">
                    Let's Work Together
                  </p>

                  <h2 className="text-xl font-bold sm:text-2xl">
                    Looking for the right technology solution?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                    Speak with our team about your business
                    requirements and technology goals.
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
        .solution-component-content {
          color: #062B49;
          min-width: 0;
        }

        .solution-component-content img {
          max-width: 100%;
          height: auto;
        }

        .solution-component-content > section:first-child {
          margin-top: 0;
        }

        .solution-component-content > section:last-child {
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
