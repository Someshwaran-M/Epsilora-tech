import React from "react";
import {
  FiCpu,
  FiZap,
  FiBarChart2,
  FiRadio,
  FiArrowRight,
  FiActivity,
  FiDatabase,
  FiSettings,
  FiCloud,
  FiCheck,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

const Emerging = () => {
  const technologies = [
    {
      icon: <FiCpu />,
      number: "01",
      title: "AI & Machine Learning",
      text: "Intelligent technologies that support automation, analysis and better business decisions.",
    },
    {
      icon: <FiZap />,
      number: "02",
      title: "Automation & Robotics",
      text: "Automation technologies designed to improve operational efficiency and simplify repetitive processes.",
    },
    {
      icon: <FiBarChart2 />,
      number: "03",
      title: "Data & Analytics",
      text: "Technology solutions that help organizations transform data into useful business insights.",
    },
    {
      icon: <FiRadio />,
      number: "04",
      title: "IoT & Smart Solutions",
      text: "Connected technologies for smarter infrastructure, operations and business environments.",
    },
  ];

  const capabilities = [
    {
      icon: <FiCpu />,
      title: "Intelligent Systems",
      text: "Explore intelligent technologies that can support analysis, automation and digital operations.",
    },
    {
      icon: <FiSettings />,
      title: "Process Automation",
      text: "Improve operational workflows by introducing smarter and more efficient automation.",
    },
    {
      icon: <FiDatabase />,
      title: "Data Intelligence",
      text: "Turn organizational data into information that can support business activities.",
    },
    {
      icon: <FiRadio />,
      title: "Connected Technology",
      text: "Connect devices, systems and environments through modern IoT technologies.",
    },
  ];

  const benefits = [
    "Intelligent automation",
    "Data-driven operations",
    "Connected environments",
    "Modern technology adoption",
    "Operational efficiency",
    "Future-ready infrastructure",
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
            -right-40
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
            -left-40
            h-[450px]
            w-[450px]
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

            {/* LEFT */}

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
                  Future Technology
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
                Emerging

                <span className="block text-[#C9875D]">
                  Technology
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
                Explore modern technologies that help businesses
                innovate, automate and build smarter operations for
                an evolving digital world.
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
                  Explore Technologies
                  <FiArrowRight />
                </a>


                <a
                  href="#emerging-capabilities"
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


            {/* RIGHT TECHNOLOGY VISUAL */}

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

              {/* Outer Rings */}

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


              {/* Main Technology Core */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-56
                  w-56
                  items-center
                  justify-center
                  rounded-[35%]
                  border
                  border-white/15
                  bg-white/[0.07]
                  shadow-2xl
                  backdrop-blur-xl
                  sm:h-64
                  sm:w-64
                  lg:h-72
                  lg:w-72
                "
              >

                <div
                  className="
                    relative
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C9875D]/40
                    bg-[#9B5B35]/15
                    text-[#D89A72]
                    sm:h-36
                    sm:w-36
                    lg:h-40
                    lg:w-40
                  "
                >

                  <FiCpu
                    className="
                      h-14
                      w-14
                      sm:h-16
                      sm:w-16
                    "
                  />

                  {/* Inner Glow */}

                  <div
                    className="
                      absolute
                      inset-5
                      rounded-full
                      bg-[#9B5B35]/10
                      blur-xl
                    "
                  />

                </div>

              </div>


              {/* AI Card */}

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
                    <FiCpu />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-white">
                      AI & Intelligence
                    </p>

                    <p className="mt-1 text-[10px] text-white/40">
                      Smart systems
                    </p>

                  </div>

                </div>

              </div>


              {/* Analytics Card */}

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
                    <FiBarChart2 />
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-white">
                      Data Intelligence
                    </p>

                    <p className="mt-1 text-[10px] text-white/40">
                      Actionable insights
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
                AI
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Intelligent Technology
              </p>

            </div>


            <div className="text-center lg:text-left">

              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                Smart
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Connected Systems
              </p>

            </div>


            <div className="text-center lg:text-left">

              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                Data
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Business Intelligence
              </p>

            </div>


            <div className="text-center lg:text-left">

              <p className="text-2xl font-bold text-[#062B49] sm:text-3xl">
                Future
              </p>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Ready Technology
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
                Future Technology
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
                Technology built

                <span className="block text-[#9B5B35]">
                  for what comes next.
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
                Emerging technologies are changing how organizations
                operate, analyze information and connect their digital
                environments.
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
                From intelligent systems and automation to analytics
                and connected technologies, modern innovation can
                create new opportunities for digital transformation.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          TECHNOLOGY CARDS
      ========================================================= */}

      <section
        id="emerging-capabilities"
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
              Technology Areas
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
              Explore emerging technologies
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

            {technologies.map((item) => (
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

                {/* Number */}

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


                {/* Icon */}

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
                  Explore technology

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
                Innovation Capabilities
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
                Turning new technology into opportunity
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
              Explore technology capabilities that can help
              organizations modernize operations and create
              smarter digital environments.
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
          WHY EMERGING TECHNOLOGY
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
                Why Emerging Technology
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
                Prepare your business

                <span className="block text-[#C9875D]">
                  for what's next.
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
                Emerging technology can help organizations
                explore new ways of working, improve operational
                efficiency and build more connected digital
                environments.
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
          TECHNOLOGY ECOSYSTEM
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
                  Technology Ecosystem
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
                  Intelligent technology.

                  <span className="block text-[#9B5B35]">
                    Connected possibilities.
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
                  AI, automation, analytics and connected devices
                  can work together to create technology environments
                  that are more intelligent, responsive and adaptable.
                </p>

              </div>


              {/* Technology Visual */}

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

                    {/* AI */}

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
                        AI
                      </p>

                    </div>


                    {/* AUTOMATION */}

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

                      <FiZap
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        Automation
                      </p>

                    </div>


                    {/* ANALYTICS */}

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

                      <FiTrendingUp
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        Analytics
                      </p>

                    </div>


                    {/* IOT */}

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

                      <FiRadio
                        className="
                          mx-auto
                          text-2xl
                          text-[#C9875D]
                        "
                      />

                      <p className="mt-3 text-xs text-white/70">
                        IoT
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
                Explore What's Next
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
                Ready to explore emerging technology?
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
                Let's discuss how modern technologies can support
                your organization's digital transformation journey.
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

export default Emerging;