import React from "react";
import {
  FiServer,
  FiWifi,
  FiShield,
  FiHardDrive,
  FiArrowRight,
  FiActivity,
  FiDatabase,
  FiLock,
  FiLayers,
  FiCheck,
  FiCpu,
} from "react-icons/fi";

const DataCenter = () => {
  const features = [
    {
      icon: <FiServer />,
      number: "01",
      title: "Infrastructure",
      text: "Reliable data center infrastructure designed to support business-critical workloads, applications and services.",
    },
    {
      icon: <FiWifi />,
      number: "02",
      title: "Networking",
      text: "Connected and efficient networking solutions designed for high-performance data center environments.",
    },
    {
      icon: <FiShield />,
      number: "03",
      title: "Security",
      text: "Infrastructure security solutions designed to help protect systems, workloads and business data.",
    },
    {
      icon: <FiHardDrive />,
      number: "04",
      title: "Servers & Storage",
      text: "Scalable server and storage technologies for modern data center environments.",
    },
  ];

  const capabilities = [
    {
      icon: <FiServer />,
      title: "Server Infrastructure",
      text: "Build dependable compute environments for demanding enterprise workloads.",
    },
    {
      icon: <FiWifi />,
      title: "Network Architecture",
      text: "Connect systems and workloads through structured data center networking.",
    },
    {
      icon: <FiDatabase />,
      title: "Storage Infrastructure",
      text: "Support business data with scalable and reliable storage technologies.",
    },
    {
      icon: <FiShield />,
      title: "Infrastructure Security",
      text: "Create protected environments around critical infrastructure and workloads.",
    },
  ];

  const benefits = [
    "Business-critical infrastructure",
    "Reliable server environments",
    "Structured networking",
    "Scalable storage",
    "Infrastructure security",
    "Operational continuity",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F8FA] text-[#062B49]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#062B49] lg:min-h-[760px]">

        {/* Background Glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#9B5B35]/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-400/10
            blur-[120px]
          "
        />

        {/* Grid Background */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Hero Container */}

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            pb-20
            pt-24
            sm:px-8
            sm:pb-24
            sm:pt-28
            lg:px-12
            lg:pb-28
            lg:pt-32
          "
        >
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-2
              lg:gap-20
            "
          >

            {/* LEFT CONTENT */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.05]
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-[#C9875D]
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#D89A72]
                    sm:text-xs
                  "
                >
                  Enterprise Infrastructure
                </span>
              </div>

              <h1
                className="
                  mt-7
                  text-[3rem]
                  font-bold
                  leading-[1.02]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Data Center

                <span className="block text-[#C9875D]">
                  Solutions
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/65
                  sm:text-base
                  sm:leading-8
                  lg:text-lg
                "
              >
                Build secure, reliable and scalable data center
                environments for the systems, workloads and data
                that keep your business running.
              </p>

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <a
                  href="/contact"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#9B5B35]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-xl
                    shadow-[#9B5B35]/20
                    transition-all
                    duration-300
                    hover:bg-[#844A2A]
                    sm:w-auto
                  "
                >
                  Explore Solutions
                  <FiArrowRight />
                </a>

                <a
                  href="#data-center-capabilities"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-white/[0.08]
                    sm:w-auto
                  "
                >
                  View Capabilities
                </a>

              </div>
            </div>


            {/* RIGHT DATA CENTER VISUAL */}

            <div
              className="
                relative
                flex
                min-h-[420px]
                items-center
                justify-center
                sm:min-h-[480px]
              "
            >

              {/* Outer Circle */}

              <div
                className="
                  absolute
                  h-[290px]
                  w-[290px]
                  rounded-full
                  border
                  border-white/10
                  sm:h-[390px]
                  sm:w-[390px]
                  lg:h-[450px]
                  lg:w-[450px]
                "
              />

              <div
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  border
                  border-[#9B5B35]/30
                  sm:h-[300px]
                  sm:w-[300px]
                  lg:h-[350px]
                  lg:w-[350px]
                "
              />

              {/* Server Rack */}

              <div
                className="
                  relative
                  z-10
                  w-[220px]
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.07]
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                  sm:w-[270px]
                  sm:p-5
                  lg:w-[300px]
                "
              >

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div className="flex items-center gap-2">

                    <FiServer className="text-[#C9875D]" />

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-white/60
                        sm:text-xs
                      "
                    >
                      Server Rack
                    </span>

                  </div>

                  <span
                    className="
                      text-[9px]
                      uppercase
                      text-[#C9875D]
                    "
                  >
                    Active
                  </span>

                </div>


                {/* Rack Units */}

                <div className="space-y-2">

                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        h-12
                        items-center
                        gap-3
                        rounded-lg
                        border
                        border-white/10
                        bg-[#041F35]
                        px-3
                        sm:h-14
                      "
                    >

                      <div
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#C9875D]
                          shadow-[0_0_12px_#C9875D]
                        "
                      />

                      <div className="flex-1 space-y-1.5">

                        <div
                          className="
                            h-1
                            w-2/3
                            rounded-full
                            bg-white/20
                          "
                        />

                        <div
                          className="
                            h-1
                            w-1/2
                            rounded-full
                            bg-white/10
                          "
                        />

                      </div>

                      <FiActivity className="text-sm text-white/20" />

                    </div>
                  ))}

                </div>

              </div>


              {/* Security Card */}

              <div
                className="
                  absolute
                  right-0
                  top-5
                  z-20
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  sm:right-2
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#9B5B35]/20
                      text-[#D89A72]
                    "
                  >
                    <FiShield />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-white">
                      Infrastructure
                    </p>

                    <p className="mt-1 text-[10px] text-white/40">
                      Security enabled
                    </p>

                  </div>

                </div>

              </div>


              {/* Storage Card */}

              <div
                className="
                  absolute
                  bottom-5
                  left-0
                  z-20
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  sm:left-2
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-400/10
                      text-blue-300
                    "
                  >
                    <FiHardDrive />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-white">
                      Storage
                    </p>

                    <p className="mt-1 text-[10px] text-white/40">
                      Scalable capacity
                    </p>

                  </div>

                </div>

              </div>


              {/* Decorative Nodes */}

              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  h-3
                  w-3
                  rounded-full
                  bg-[#C9875D]
                  shadow-[0_0_20px_#C9875D]
                "
              />

              <div
                className="
                  absolute
                  left-1/3
                  top-16
                  h-2
                  w-2
                  rounded-full
                  bg-white/50
                "
              />

              <div
                className="
                  absolute
                  bottom-16
                  right-1/4
                  h-2
                  w-2
                  rounded-full
                  bg-[#C9875D]
                "
              />

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="border-b border-gray-100 bg-white">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-10
            sm:px-8
            sm:py-12
            lg:px-12
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-x-5
              gap-y-8
              lg:grid-cols-4
            "
          >

            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                24/7
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Infrastructure Operations
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                Secure
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Infrastructure Approach
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                Scalable
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Infrastructure Design
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                Reliable
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Business Continuity
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-28">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              grid
              items-start
              gap-10
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-20
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#9B5B35]
                "
              >
                Data Center Foundation
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#062B49]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Infrastructure built

                <span className="block text-[#9B5B35]">
                  for continuity.
                </span>
              </h2>

            </div>

            <div>

              <p
                className="
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-base
                  lg:text-lg
                  lg:leading-8
                "
              >
                Modern businesses depend on reliable infrastructure
                to run applications, store information and connect
                critical systems. A well-designed data center provides
                the foundation for these operations.
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                "
              >
                Our data center solutions bring together servers,
                storage, networking and security to create structured
                technology environments designed around business needs.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CORE SOLUTIONS
      ========================================================= */}

      <section
        id="data-center-capabilities"
        className="bg-white py-20 sm:py-24"
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#9B5B35]
              "
            >
              Core Solutions
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-[#062B49]
                sm:text-4xl
              "
            >
              Everything your data center needs
            </h2>

          </div>


          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >

            {features.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  transition-all
                  duration-500
                  hover:border-[#9B5B35]/40
                  hover:shadow-[0_20px_60px_rgba(6,43,73,0.10)]
                  sm:p-8
                "
              >

                <span
                  className="
                    absolute
                    right-7
                    top-5
                    text-5xl
                    font-black
                    text-gray-100
                    transition-colors
                    group-hover:text-[#9B5B35]/10
                  "
                >
                  {item.number}
                </span>


                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#062B49]
                    text-xl
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-[#9B5B35]
                  "
                >
                  {item.icon}
                </div>


                <h3
                  className="
                    mt-7
                    text-xl
                    font-bold
                    text-[#062B49]
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-gray-500
                  "
                >
                  {item.text}
                </p>


                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#9B5B35]
                  "
                >
                  Explore solution

                  <FiArrowRight
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className="bg-[#F7F8FA] py-20 sm:py-24">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#9B5B35]
                "
              >
                Infrastructure Capabilities
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-[#062B49]
                  sm:text-4xl
                "
              >
                Built around critical workloads
              </h2>

            </div>

            <p
              className="
                max-w-lg
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              Connect your core infrastructure through a structured
              approach to servers, storage, networking and security.
            </p>

          </div>


          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >

            {capabilities.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  flex
                  gap-5
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#9B5B35]/30
                  hover:shadow-lg
                  sm:p-6
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#062B49]
                    text-white
                    transition-all
                    group-hover:bg-[#9B5B35]
                  "
                >
                  {item.icon}
                </div>


                <div>

                  <h3
                    className="
                      text-base
                      font-bold
                      text-[#062B49]
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-gray-500
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY DATA CENTER
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#062B49]
          py-20
          sm:py-24
          lg:py-28
        "
      >

        <div
          className="
            absolute
            -right-40
            top-1/2
            h-[450px]
            w-[450px]
            -translate-y-1/2
            rounded-full
            bg-[#9B5B35]/15
            blur-[100px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-2
              lg:gap-20
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C9875D]
                "
              >
                Why Data Center Infrastructure
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Keep your critical

                <span className="block text-[#C9875D]">
                  systems connected.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-white/60
                  sm:text-base
                "
              >
                A structured data center environment helps
                organizations maintain dependable technology
                operations while supporting changing workloads
                and infrastructure requirements.
              </p>

            </div>


            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#9B5B35]
                      text-white
                    "
                  >
                    <FiCheck className="text-sm" />
                  </div>

                  <span className="text-sm text-white/75">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          DATA CENTER ARCHITECTURE
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-gray-100
              bg-[#F7F8FA]
              p-6
              sm:p-10
              lg:p-14
            "
          >

            <div
              className="
                grid
                items-center
                gap-12
                lg:grid-cols-[1fr_0.9fr]
              "
            >

              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#9B5B35]
                  "
                >
                  <FiLayers />
                  Connected Infrastructure
                </div>


                <h2
                  className="
                    mt-5
                    text-3xl
                    font-bold
                    text-[#062B49]
                    sm:text-4xl
                  "
                >
                  One environment.

                  <span className="block text-[#9B5B35]">
                    Multiple technology layers.
                  </span>
                </h2>


                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-gray-500
                    sm:text-base
                  "
                >
                  A modern data center brings together compute,
                  networking, storage and security into a structured
                  technology environment.
                </p>

              </div>


              {/* Architecture Visual */}

              <div className="relative">

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-[#062B49]
                    p-5
                    sm:p-7
                  "
                >

                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-[#9B5B35]/20
                      blur-3xl
                    "
                  />


                  <div
                    className="
                      relative
                      grid
                      grid-cols-2
                      gap-3
                    "
                  >

                    {/* COMPUTE */}

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-5
                        text-center
                      "
                    >

                      <FiCpu
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        Compute
                      </p>

                    </div>


                    {/* NETWORK */}

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-5
                        text-center
                      "
                    >

                      <FiWifi
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        Network
                      </p>

                    </div>


                    {/* STORAGE */}

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-5
                        text-center
                      "
                    >

                      <FiHardDrive
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        Storage
                      </p>

                    </div>


                    {/* SECURITY */}

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-5
                        text-center
                      "
                    >

                      <FiLock
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        Security
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        className="
          px-5
          pb-16
          sm:px-8
          sm:pb-20
          lg:px-12
          lg:pb-24
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-3xl
            bg-[#062B49]
            px-6
            py-12
            sm:px-10
            sm:py-14
            lg:px-14
            lg:py-16
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-[#9B5B35]/20
              blur-3xl
            "
          />


          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="max-w-2xl">

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C9875D]
                "
              >
                Build Your Infrastructure
              </p>


              <h2
                className="
                  mt-3
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Ready to build a stronger data center environment?
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-base
                "
              >
                Let's discuss your infrastructure, networking,
                server and storage requirements.
              </p>

            </div>


            <a
              href="/contact"
              className="
                inline-flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#9B5B35]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-xl
                shadow-black/20
                transition-all
                duration-300
                hover:bg-[#844A2A]
                lg:w-auto
              "
            >
              Talk to Our Team
              <FiArrowRight />
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default DataCenter;