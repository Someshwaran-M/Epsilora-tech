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

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#062B49]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[270px] md:h-[310px] lg:h-[340px]">
        <div
          className="
            consulting-hero-image
            absolute
            inset-0
            bg-[url('/consulting.png')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        />
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}

          <div className="ml-0 flex flex-col gap-8 border-b border-gray-200 pb-8 sm:pb-10 lg:ml-8 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#9B5B35] sm:w-8" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.28em]">
                  Professional Expertise
                </span>
              </div>

              <h2 className="mt-5 max-w-4xl text-[38px] font-bold leading-[1] tracking-[-0.04em] text-[#062B49] sm:text-[46px] md:text-[54px] lg:mt-6 lg:text-5xl lg:leading-[1.05]">
                Technology expertise
                <span className="block text-[#9B5B35]">
                  that moves business forward.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[13px] leading-7 text-gray-500 sm:text-sm sm:leading-7 lg:pb-1">
              Our consulting and professional services help organizations
              assess, plan, migrate and improve their technology environments
              with practical and reliable solutions.
            </p>
          </div>

          {/* SERVICE LIST */}

          <div className="mt-5 sm:mt-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="
                  group
                  relative
                  ml-0
                  flex
                  flex-col
                  gap-5
                  border-b
                  border-gray-200
                  py-7
                  transition-all
                  duration-500
                  sm:py-8
                  md:grid
                  md:grid-cols-[70px_64px_1fr_44px]
                  md:items-center
                  md:gap-5
                  md:py-9
                  lg:ml-8
                  lg:grid-cols-[80px_56px_32%_1fr_44px]
                  lg:gap-0
                  lg:py-10
                  lg:hover:px-6
                "
              >

                {/* HOVER LINE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#9B5B35]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

                {/* MOBILE / TABLET TOP ROW */}

                <div className="flex items-center justify-between md:contents">

                  {/* NUMBER */}

                  <div className="md:w-auto">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.25em]
                        text-gray-300
                        transition
                        duration-500
                        group-hover:text-[#9B5B35]
                        sm:text-xs
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-gray-200
                      bg-gray-50
                      text-lg
                      text-[#062B49]
                      transition-all
                      duration-500
                      group-hover:border-[#9B5B35]
                      group-hover:bg-[#9B5B35]
                      group-hover:text-white
                      sm:h-14
                      sm:w-14
                      sm:text-xl
                      md:mr-0
                      lg:mr-10
                    "
                  >
                    {service.icon}
                  </div>
                </div>

                {/* TITLE */}

                <div className="w-full md:col-span-2 lg:col-span-1">
                  <h3
                    className="
                      text-[21px]
                      font-bold
                      leading-tight
                      tracking-tight
                      text-[#062B49]
                      transition
                      duration-500
                      group-hover:text-[#9B5B35]
                      sm:text-2xl
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}

                <div className="w-full md:col-span-3 md:pr-10 lg:col-span-1 lg:pr-10">
                  <p
                    className="
                      max-w-xl
                      text-[12px]
                      leading-6
                      text-gray-500
                      transition
                      duration-500
                      group-hover:text-gray-700
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {service.text}
                  </p>
                </div>

                {/* ACTION */}

                <div
                  className="
                    hidden
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-gray-200
                    text-[#062B49]
                    transition-all
                    duration-500
                    group-hover:border-[#9B5B35]
                    group-hover:bg-[#9B5B35]
                    group-hover:text-white
                    md:flex
                    lg:h-11
                    lg:w-11
                  "
                >
                  <FiArrowRight
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
          DESKTOP = ARCHITECTURAL STAIRCASE
          MOBILE/TABLET = VERTICAL PROCESS
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:ml-8 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-7xl">

          {/* PROCESS HEADER */}

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#9B5B35] sm:w-8" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.3em]">
                Our Approach
              </span>
            </div>

            <h2 className="mt-5 text-[38px] font-bold leading-[1] tracking-[-0.04em] text-[#062B49] sm:text-[46px] md:text-[52px] lg:text-5xl">
              A structured path from
              <span className="block text-[#9B5B35]">
                assessment to improvement.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-gray-500 sm:text-sm sm:leading-7">
              Our approach brings structure to technology planning,
              transformation and continuous improvement.
            </p>
          </div>

          {/* =================================================
              MOBILE / TABLET PROCESS
          ================================================= */}

          <div className="relative mt-12 md:mt-16 lg:hidden">

            {/* Vertical line */}

            <div className="absolute bottom-6 left-[21px] top-6 w-px bg-[#062B49]/15 sm:left-[27px]" />

            <div className="space-y-0">
              {process.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative grid grid-cols-[44px_1fr] gap-5 border-t border-[#062B49]/10 py-7 sm:grid-cols-[56px_1fr] sm:gap-7 sm:py-9"
                >

                  {/* NUMBER / ICON */}

                  <div className="relative z-10 flex items-start justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#062B49]/15 bg-white text-[#062B49] transition-all duration-500 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white sm:h-14 sm:w-14">
                      {step.icon}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold tracking-[0.3em] text-[#9B5B35] sm:text-[10px]">
                        {step.number}
                      </span>

                      <span className="h-px w-6 bg-[#9B5B35]/40" />
                    </div>

                    <h3 className="mt-3 text-[25px] font-bold tracking-tight text-[#062B49] transition-colors duration-500 group-hover:text-[#9B5B35] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
                      {step.text}
                    </p>

                    {index < process.length - 1 && (
                      <div className="mt-5 h-[2px] w-8 bg-[#9B5B35] transition-all duration-500 group-hover:w-14" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              DESKTOP PROCESS STAIRCASE
          ================================================= */}

          <div className="relative mt-20 hidden h-[560px] lg:block">

            {/* BASE LINE */}

            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#062B49]/15" />

            {/* STEP 01 */}

            <div
              className="
                group
                absolute
                bottom-0
                left-0
                h-[300px]
                w-[25%]
                border-l
                border-t
                border-[#062B49]/20
                px-8
                pt-8
                transition-all
                duration-500
                hover:bg-white
              "
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#9B5B35]">
                  {process[0].number}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#062B49]/15
                    text-[#062B49]
                    transition-all
                    duration-500
                    group-hover:border-[#9B5B35]
                    group-hover:bg-[#9B5B35]
                    group-hover:text-white
                  "
                >
                  {process[0].icon}
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-bold tracking-tight text-[#062B49] transition-colors duration-500 group-hover:text-[#9B5B35]">
                  {process[0].title}
                </h3>

                <p className="mt-5 max-w-[240px] text-sm leading-7 text-gray-500">
                  {process[0].text}
                </p>
              </div>
            </div>

            {/* STEP 02 */}

            <div
              className="
                group
                absolute
                bottom-0
                left-[25%]
                h-[370px]
                w-[25%]
                border-l
                border-t
                border-[#062B49]/20
                px-8
                pt-8
                transition-all
                duration-500
                hover:bg-white
              "
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#9B5B35]">
                  {process[1].number}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#062B49]/15
                    text-[#062B49]
                    transition-all
                    duration-500
                    group-hover:border-[#9B5B35]
                    group-hover:bg-[#9B5B35]
                    group-hover:text-white
                  "
                >
                  {process[1].icon}
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-bold tracking-tight text-[#062B49] transition-colors duration-500 group-hover:text-[#9B5B35]">
                  {process[1].title}
                </h3>

                <p className="mt-5 max-w-[240px] text-sm leading-7 text-gray-500">
                  {process[1].text}
                </p>
              </div>
            </div>

            {/* STEP 03 */}

            <div
              className="
                group
                absolute
                bottom-0
                left-[50%]
                h-[440px]
                w-[25%]
                border-l
                border-t
                border-[#062B49]/20
                px-8
                pt-8
                transition-all
                duration-500
                hover:bg-white
              "
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#9B5B35]">
                  {process[2].number}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#062B49]/15
                    text-[#062B49]
                    transition-all
                    duration-500
                    group-hover:border-[#9B5B35]
                    group-hover:bg-[#9B5B35]
                    group-hover:text-white
                  "
                >
                  {process[2].icon}
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-bold tracking-tight text-[#062B49] transition-colors duration-500 group-hover:text-[#9B5B35]">
                  {process[2].title}
                </h3>

                <p className="mt-5 max-w-[240px] text-sm leading-7 text-gray-500">
                  {process[2].text}
                </p>
              </div>
            </div>

            {/* STEP 04 */}

            <div
              className="
                group
                absolute
                bottom-0
                left-[75%]
                h-[510px]
                w-[25%]
                border-l
                border-r
                border-t
                border-[#062B49]/20
                px-8
                pt-8
                transition-all
                duration-500
                hover:bg-white
              "
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#9B5B35]">
                  {process[3].number}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#062B49]/15
                    text-[#062B49]
                    transition-all
                    duration-500
                    group-hover:border-[#9B5B35]
                    group-hover:bg-[#9B5B35]
                    group-hover:text-white
                  "
                >
                  {process[3].icon}
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-3xl font-bold tracking-tight text-[#062B49] transition-colors duration-500 group-hover:text-[#9B5B35]">
                  {process[3].title}
                </h3>

                <p className="mt-5 max-w-[240px] text-sm leading-7 text-gray-500">
                  {process[3].text}
                </p>
              </div>
            </div>

            {/* DIRECTION ARROWS */}

            <div className="absolute bottom-6 left-[23.5%] text-[#9B5B35]">
              →
            </div>

            <div className="absolute bottom-6 left-[48.5%] text-[#9B5B35]">
              →
            </div>

            <div className="absolute bottom-6 left-[73.5%] text-[#9B5B35]">
              →
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE AREAS
      ===================================================== */}

      <section className="bg-[#f6f4f1] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="ml-0 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 lg:ml-8 lg:gap-20">

            {/* LEFT */}

            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-[10px]">
                Service Capabilities
              </span>

              <h2 className="mt-4 text-[36px] font-bold leading-[1.05] tracking-[-0.035em] text-[#062B49] sm:text-[44px] md:text-[48px]">
                Expertise across
                <span className="block text-[#9B5B35]">
                  your IT environment.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[13px] leading-7 text-gray-500 sm:text-sm sm:leading-8 md:text-base">
                From infrastructure assessment to migration and
                virtualization, our professional service areas are
                designed around practical technology requirements.
              </p>
            </div>

            {/* AREAS */}

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {serviceAreas.map((item, index) => (
                <div
                  key={item}
                  className="
                    group
                    flex
                    min-h-[58px]
                    items-center
                    gap-3
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    transition
                    duration-300
                    hover:border-[#9B5B35]
                    hover:shadow-sm
                    sm:px-5
                  "
                >
                  <span className="shrink-0 text-[9px] font-bold text-[#9B5B35]/50 sm:text-[10px]">
                    0{index + 1}
                  </span>

                  <FiArrowRight
                    className="
                      shrink-0
                      text-[#9B5B35]
                      transition
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span className="text-[12px] font-semibold leading-5 text-[#062B49] sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO IMAGE ANIMATION
      ===================================================== */}

      <style>{`
        .consulting-hero-image {
          animation: consultingHeroZoom 16s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes consultingHeroZoom {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.035);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .consulting-hero-image {
            animation: none;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

    </main>
  );
};

export default ConsultingProfessional;