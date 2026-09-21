import React from "react";
import {
  FiDatabase,
  FiHardDrive,
  FiShield,
  FiServer,
  FiCheckCircle,
  FiCloud,
  FiActivity,
  FiLayers,
  FiLock,
  FiZap,
} from "react-icons/fi";

const Datastorage = () => {
  const technologies = [
    {
      icon: <FiHardDrive />,
      title: "Hard Disk Drives",
      text: "High-capacity storage for business data and infrastructure.",
    },
    {
      icon: <FiDatabase />,
      title: "Solid State Drives",
      text: "High-speed storage for demanding applications and workloads.",
    },
    {
      icon: <FiServer />,
      title: "Network Attached Storage",
      text: "Centralized storage for connected teams and systems.",
    },
    {
      icon: <FiLayers />,
      title: "Storage Networking",
      text: "Efficient connectivity for enterprise storage environments.",
    },
    {
      icon: <FiCloud />,
      title: "Cloud Storage",
      text: "Flexible storage designed for modern digital workloads.",
    },
    {
      icon: <FiShield />,
      title: "Backup & Recovery",
      text: "Protection strategies supporting business continuity.",
    },
    {
      icon: <FiDatabase />,
      title: "Flash Drives",
      text: "Portable storage for convenient data movement.",
    },
    {
      icon: <FiActivity />,
      title: "Storage Infrastructure",
      text: "Reliable infrastructure for growing business requirements.",
    },
  ];

  const benefits = [
    "Enterprise-grade infrastructure",
    "Scalable storage capacity",
    "Reliable data accessibility",
    "Centralized management",
    "Flexible architecture",
    "Backup and recovery support",
  ];

  const flowItems = [
    {
      icon: <FiDatabase />,
      number: "01",
      title: "Data Management",
      text: "Organize business information through dependable storage infrastructure.",
    },
    {
      icon: <FiHardDrive />,
      number: "02",
      title: "Flexible Capacity",
      text: "Storage environments designed for changing business requirements.",
    },
    {
      icon: <FiShield />,
      number: "03",
      title: "Data Protection",
      text: "Support the availability and protection of critical information.",
    },
    {
      icon: <FiServer />,
      number: "04",
      title: "Enterprise Ready",
      text: "Infrastructure designed for applications and workloads.",
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
            cyber-hero-background
            absolute
            inset-0
            bg-[url('/datastorage.png')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        />
      </section>

      {/* =====================================================
          INTRODUCTION — DATA FLOW
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:px-10
          md:py-24
          lg:ml-10
          lg:px-12
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="relative">

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-[2px] w-8 bg-[#9B5B35] sm:w-12" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#9B5B35]
                  sm:text-[10px]
                  sm:tracking-[0.35em]
                "
              >
                The Foundation
              </span>
            </div>

            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-8
                md:mt-8
                md:grid-cols-[1.1fr_0.9fr]
                md:gap-12
                lg:grid-cols-[1.15fr_0.85fr]
                lg:gap-24
              "
            >
              <h2
                className="
                  max-w-4xl
                  text-[40px]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.05em]
                  text-[#062B49]
                  sm:text-[48px]
                  md:text-[56px]
                  lg:text-[64px]
                  lg:leading-[0.92]
                  lg:tracking-[-0.055em]
                "
              >
                Your data deserves

                <span className="block text-[#9B5B35]">
                  a stronger foundation.
                </span>
              </h2>

              <div className="flex items-end">
                <p
                  className="
                    max-w-lg
                    border-l
                    border-[#062B49]/10
                    pl-5
                    text-[13px]
                    leading-7
                    text-gray-500
                    sm:pl-6
                    sm:text-[14px]
                    md:pl-7
                    lg:pl-8
                    lg:text-[15px]
                    lg:leading-8
                  "
                >
                  From everyday business information to demanding enterprise
                  workloads, storage infrastructure plays an important role
                  in keeping systems accessible, organized and ready for growth.
                </p>
              </div>
            </div>
          </div>

          {/* DATA FLOW */}

          <div className="relative mt-16 sm:mt-20 md:mt-24">

            {/* CONNECTING LINE */}

            <div
              className="
                storage-flow-line
                absolute
                left-0
                right-0
                top-[31px]
                hidden
                h-px
                bg-[#062B49]/10
                lg:block
              "
            />

            <div
              className="
                storage-flow-line
                absolute
                left-0
                top-[31px]
                hidden
                h-px
                w-[22%]
                bg-[#9B5B35]
                lg:block
              "
            />

            {/* FLOW ITEMS */}

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {flowItems.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    border-t
                    border-[#062B49]/10
                    px-0
                    py-7
                    first:border-t-0
                    sm:px-5
                    sm:py-8
                    sm:nth-[3]:border-t
                    lg:border-l
                    lg:border-t-0
                    lg:px-8
                    lg:py-0
                    lg:first:border-l-0
                  "
                >

                  {/* NUMBER NODE */}

                  <div className="relative z-10 flex items-center">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#062B49]/15
                        bg-[#F7F8FA]
                        text-lg
                        text-[#062B49]
                        transition-all
                        duration-500
                        group-hover:border-[#9B5B35]
                        group-hover:bg-[#9B5B35]
                        group-hover:text-white
                        sm:h-[62px]
                        sm:w-[62px]
                        sm:text-xl
                      "
                    >
                      {item.icon}
                    </div>

                  </div>

                  {/* NUMBER */}

                  <div className="mt-5 flex items-center gap-3 sm:mt-7 sm:gap-4 lg:mt-8">

                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.22em]
                        text-[#9B5B35]
                        sm:text-[11px]
                        sm:tracking-[0.25em]
                      "
                    >
                      {item.number}
                    </span>

                    <span className="h-px w-6 bg-[#9B5B35]/40 sm:w-8" />

                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-4
                      text-[18px]
                      font-bold
                      tracking-[-0.02em]
                      text-[#062B49]
                      transition-colors
                      duration-300
                      group-hover:text-[#9B5B35]
                      sm:mt-5
                      sm:text-[20px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-3
                      max-w-[280px]
                      text-[12px]
                      leading-6
                      text-gray-500
                      sm:mt-4
                      sm:text-[13px]
                      sm:leading-7
                    "
                  >
                    {item.text}
                  </p>

                  {/* BOTTOM INDEX */}

                  <div
                    className="
                      mt-7
                      h-[2px]
                      w-8
                      bg-[#9B5B35]
                      transition-all
                      duration-500
                      group-hover:w-16
                      sm:mt-10
                    "
                  />

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* SUBTLE BACKGROUND ELEMENT */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
            hidden
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#9B5B35]/[0.04]
            sm:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            top-32
            hidden
            h-[260px]
            w-[260px]
            rounded-full
            border
            border-[#9B5B35]/[0.05]
            sm:block
          "
        />

      </section>

      {/* =====================================================
          TECHNOLOGY SECTION — COMPACT MANIFESTO
      ===================================================== */}

      <section
        id="technologies"
        className="
          relative
          ml-0
          overflow-hidden
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:px-10
          md:py-24
          lg:ml-16
          lg:px-12
          lg:py-20
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div
            className="
              grid
              grid-cols-1
              gap-8
              md:grid-cols-[1.2fr_0.8fr]
              md:gap-12
              lg:gap-20
            "
          >
            <div>

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#9B5B35]
                  sm:text-[9px]
                  sm:tracking-[0.35em]
                "
              >
                Technology Portfolio
              </span>

              <h2
                className="
                  mt-4
                  max-w-3xl
                  text-[38px]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.05em]
                  text-[#062B49]
                  sm:mt-5
                  sm:text-[44px]
                  md:text-[48px]
                  md:leading-[0.92]
                "
              >
                Storage is not

                <span className="text-[#9B5B35]">
                  {" "}just capacity.
                </span>
              </h2>

            </div>

            <div className="flex items-end">

              <p
                className="
                  max-w-sm
                  border-l
                  border-[#062B49]/15
                  pl-5
                  text-[12px]
                  leading-6
                  text-gray-500
                  sm:pl-6
                  sm:text-[13px]
                "
              >
                From everyday business information to demanding
                enterprise workloads, the right storage technology
                creates a dependable foundation for digital operations.
              </p>

            </div>

          </div>

          {/* TECHNOLOGY LIST */}

          <div className="mt-10 sm:mt-12 md:mt-16">

            {technologies.map((item, index) => (

              <div
                key={item.title}
                className="
                  technology-manifesto
                  group
                  relative
                  overflow-hidden
                  border-t
                  border-[#062B49]/15
                  py-4
                  sm:py-5
                "
              >

                {/* HOVER BACKGROUND */}

                <div
                  className="
                    technology-manifesto-fill
                    absolute
                    inset-y-0
                    left-0
                    w-0
                    bg-[#062B49]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <div className="relative">

                  <div
                    className="
                      grid
                      grid-cols-[38px_1fr_40px]
                      items-center
                      gap-3
                      sm:grid-cols-[45px_1fr_45px]
                      sm:gap-5
                      lg:grid-cols-[60px_1fr_250px_55px]
                      lg:gap-8
                    "
                  >

                    {/* NUMBER */}

                    <span
                      className="
                        text-[9px]
                        font-bold
                        tracking-[0.2em]
                        text-[#9B5B35]
                        sm:text-[10px]
                        sm:tracking-[0.25em]
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* TITLE */}

                    <h3
                      className="
                        min-w-0
                        text-[17px]
                        font-bold
                        leading-tight
                        tracking-[-0.025em]
                        text-[#062B49]
                        transition-all
                        duration-500
                        group-hover:translate-x-2
                        group-hover:text-white
                        sm:text-[20px]
                        md:text-[22px]
                        lg:text-[27px]
                        lg:leading-none
                        lg:tracking-[-0.035em]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        hidden
                        text-[11px]
                        leading-5
                        text-gray-500
                        transition-colors
                        duration-500
                        group-hover:text-white/50
                        lg:block
                      "
                    >
                      {item.text}
                    </p>

                    {/* ICON */}

                    <div className="flex justify-end">

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          border
                          border-[#062B49]/15
                          text-xs
                          text-[#062B49]
                          transition-all
                          duration-500
                          group-hover:border-[#9B5B35]
                          group-hover:bg-[#9B5B35]
                          group-hover:text-white
                          sm:h-9
                          sm:w-9
                          sm:text-sm
                        "
                      >
                        {item.icon}
                      </div>

                    </div>

                  </div>

                  {/* MOBILE / TABLET DESCRIPTION */}

                  <p
                    className="
                      relative
                      mt-2
                      pl-[38px]
                      text-[11px]
                      leading-5
                      text-gray-500
                      sm:pl-[45px]
                      sm:text-[12px]
                      lg:hidden
                    "
                  >
                    {item.text}
                  </p>

                  {/* HOVER LABEL */}

                  <div
                    className="
                      mt-1
                      ml-[38px]
                      h-0
                      overflow-hidden
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:h-4
                      group-hover:opacity-100
                      sm:ml-[45px]
                      lg:ml-[60px]
                    "
                  />

                </div>

              </div>

            ))}

            <div className="border-t border-[#062B49]/15" />

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY EPSILORA
      ===================================================== */}

      <section
        className="
          px-5
          py-16
          sm:px-8
          sm:py-24
          md:px-10
          lg:px-12
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-10
              md:grid-cols-1
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-center
              lg:gap-20
            "
          >

            {/* Dark panel */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#062B49]
                p-6
                sm:p-10
                md:p-12
                lg:p-10
              "
            >

              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  h-48
                  w-48
                  rounded-full
                  bg-[#9B5B35]/20
                  blur-3xl
                "
              />

              <div className="relative">

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C98255]
                    sm:text-[10px]
                    sm:tracking-[0.25em]
                  "
                >
                  Infrastructure Thinking
                </span>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-tight
                    text-white
                    sm:mt-5
                    sm:text-4xl
                  "
                >
                  Storage is not

                  <span className="block text-[#C98255]">
                    just capacity.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  It is an essential part of how your applications,
                  users and business information operate every day.
                </p>

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-2
                    gap-2
                    sm:mt-8
                  "
                >

                  <div className="border border-white/10 p-4 sm:p-5">

                    <FiLock className="text-xl text-[#C98255]" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Protection
                    </p>

                  </div>

                  <div className="border border-white/10 p-4 sm:p-5">

                    <FiZap className="text-xl text-[#C98255]" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Performance
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Content */}

            <div>

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-7 bg-[#9B5B35] sm:w-8" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#9B5B35]
                    sm:text-[10px]
                    sm:tracking-[0.25em]
                  "
                >
                  Why It Matters
                </span>

              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Infrastructure that

                <span className="block text-[#9B5B35]">
                  grows with you.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                  sm:leading-8
                "
              >
                A well-planned storage environment can help organizations
                maintain reliable access to information while preparing
                infrastructure for future requirements.
              </p>

              <div
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-2
                  sm:gap-4
                "
              >

                {benefits.map((benefit) => (

                  <div
                    key={benefit}
                    className="
                      flex
                      items-start
                      gap-3
                      border-b
                      border-gray-100
                      pb-3
                    "
                  >

                    <FiCheckCircle
                      className="
                        mt-0.5
                        shrink-0
                        text-[#9B5B35]
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        leading-6
                        text-[#062B49]
                      "
                    >
                      {benefit}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Datastorage;