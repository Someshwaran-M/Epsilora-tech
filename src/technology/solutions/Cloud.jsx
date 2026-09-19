import React from "react";
import {
  FiCloud,
  FiShield,
  FiRefreshCw,
  FiArrowRight,
  FiServer,
  FiDatabase,
  FiLock,
  FiActivity,
  FiCheck,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const Cloud = () => {
  const features = [
    {
      icon: <FiCloud />,
      number: "01",
      title: "Cloud Infrastructure",
      text: "Flexible cloud infrastructure designed to support modern business workloads with scalability, availability and performance.",
    },
    {
      icon: <FiRefreshCw />,
      number: "02",
      title: "Cloud Migration",
      text: "Plan and move applications, workloads and data to cloud environments with a structured and reliable migration approach.",
    },
    {
      icon: <FiShield />,
      number: "03",
      title: "Cloud Security",
      text: "Security-focused cloud solutions designed to help protect workloads, applications and critical business data.",
    },
  ];

  const capabilities = [
    {
      icon: <FiServer />,
      title: "Scalable Infrastructure",
      text: "Build cloud environments that can adapt as business requirements grow.",
    },
    {
      icon: <FiDatabase />,
      title: "Data & Workloads",
      text: "Support applications, databases and workloads across modern cloud environments.",
    },
    {
      icon: <FiLock />,
      title: "Security First",
      text: "Protect cloud workloads with security-focused infrastructure and controls.",
    },
    {
      icon: <FiActivity />,
      title: "High Availability",
      text: "Design reliable environments focused on continuity and operational availability.",
    },
  ];

  const benefits = [
    "Flexible cloud infrastructure",
    "Improved scalability",
    "Workload modernization",
    "Cloud security",
    "Operational efficiency",
    "Business continuity",
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#062B49] overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[720px] lg:min-h-[760px] bg-[#062B49] overflow-hidden">

        {/* Background Glow */}

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#9B5B35]/20 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[120px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Hero Content */}

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-20">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md">

                <span className="w-2 h-2 rounded-full bg-[#C9875D] animate-pulse" />

                <span className="text-[#D89A72] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                  Technology Solutions
                </span>

              </div>

              <h1 className="
                mt-7
                text-[3rem]
                sm:text-5xl
                lg:text-7xl
                leading-[1.02]
                font-bold
                tracking-tight
                text-white
              ">
                Cloud
                <span className="block text-[#C9875D]">
                  Solutions
                </span>
              </h1>

              <p className="
                mt-7
                max-w-xl
                text-sm
                sm:text-base
                lg:text-lg
                leading-7
                sm:leading-8
                text-white/65
              ">
                Build a flexible digital foundation with scalable cloud
                infrastructure, secure workloads and modern migration
                solutions designed for evolving businesses.
              </p>

              <div className="
                mt-9
                flex
                flex-col
                sm:flex-row
                gap-3
              ">

                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    sm:w-auto
                    px-7
                    py-3.5
                    rounded-lg
                    bg-[#9B5B35]
                    hover:bg-[#844A2A]
                    text-white
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    shadow-xl
                    shadow-[#9B5B35]/20
                  "
                >
                  Explore Cloud Solutions
                  <FiArrowRight />
                </a>

                <a
                  href="#cloud-capabilities"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    sm:w-auto
                    px-7
                    py-3.5
                    rounded-lg
                    border
                    border-white/15
                    bg-white/[0.04]
                    hover:bg-white/[0.08]
                    text-white
                    text-sm
                    font-semibold
                    transition-all
                  "
                >
                  View Capabilities
                </a>

              </div>

            </div>


            {/* RIGHT — CLOUD VISUAL */}

            <div className="relative min-h-[400px] sm:min-h-[470px] flex items-center justify-center">

              {/* Outer Rings */}

              <div className="
                absolute
                w-[280px]
                h-[280px]
                sm:w-[380px]
                sm:h-[380px]
                lg:w-[440px]
                lg:h-[440px]
                rounded-full
                border
                border-white/10
              " />

              <div className="
                absolute
                w-[210px]
                h-[210px]
                sm:w-[290px]
                sm:h-[290px]
                lg:w-[340px]
                lg:h-[340px]
                rounded-full
                border
                border-[#9B5B35]/30
              " />

              {/* Main Cloud */}

              <div className="
                relative
                z-10
                w-44
                h-44
                sm:w-56
                sm:h-56
                lg:w-64
                lg:h-64
                rounded-[35%]
                bg-gradient-to-br
                from-white/[0.12]
                to-white/[0.03]
                border
                border-white/15
                backdrop-blur-xl
                flex
                items-center
                justify-center
                shadow-2xl
                shadow-black/20
              ">

                <div className="
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  lg:w-32
                  lg:h-32
                  rounded-full
                  bg-[#9B5B35]/20
                  border
                  border-[#C9875D]/40
                  flex
                  items-center
                  justify-center
                  text-[#D89A72]
                ">

                  <FiCloud
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                  />

                </div>

              </div>


              {/* Floating Card 1 */}

              <div className="
                absolute
                top-5
                right-0
                sm:right-2
                lg:right-4
                z-20
                px-4
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-xl
                shadow-xl
              ">

                <div className="flex items-center gap-3">

                  <div className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#9B5B35]/20
                    flex
                    items-center
                    justify-center
                    text-[#D89A72]
                  ">
                    <FiShield />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold">
                      Cloud Security
                    </p>

                    <p className="text-white/40 text-[10px] mt-1">
                      Protected
                    </p>
                  </div>

                </div>

              </div>


              {/* Floating Card 2 */}

              <div className="
                absolute
                bottom-6
                left-0
                sm:left-2
                lg:left-0
                z-20
                px-4
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-xl
                shadow-xl
              ">

                <div className="flex items-center gap-3">

                  <div className="
                    w-9
                    h-9
                    rounded-lg
                    bg-blue-400/10
                    flex
                    items-center
                    justify-center
                    text-blue-300
                  ">
                    <FiActivity />
                  </div>

                  <div>
                    <p className="text-white text-xs font-semibold">
                      Infrastructure
                    </p>

                    <p className="text-white/40 text-[10px] mt-1">
                      Always scalable
                    </p>
                  </div>

                </div>

              </div>


              {/* Floating Nodes */}

              <div className="
                absolute
                top-1/2
                left-1
                sm:left-4
                w-3
                h-3
                rounded-full
                bg-[#C9875D]
                shadow-[0_0_20px_#C9875D]
              " />

              <div className="
                absolute
                top-16
                left-1/3
                w-2
                h-2
                rounded-full
                bg-white/60
              " />

              <div className="
                absolute
                bottom-20
                right-1/4
                w-2
                h-2
                rounded-full
                bg-[#C9875D]
              " />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="relative bg-white border-b border-gray-100">

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-10
          sm:py-12
        ">

          <div className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-y-8
            gap-x-5
          ">

            <div className="text-center lg:text-left">

              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                24/7
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Cloud Availability
              </p>

            </div>

            <div className="text-center lg:text-left">

              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                99.9%
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Reliability Focus
              </p>

            </div>

            <div className="text-center lg:text-left">

              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                Multi
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Cloud Environments
              </p>

            </div>

            <div className="text-center lg:text-left">

              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                Secure
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Infrastructure Approach
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-28">

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        ">

          <div className="
            grid
            lg:grid-cols-[0.85fr_1.15fr]
            gap-10
            lg:gap-20
            items-start
          ">

            <div>

              <p className="
                text-[#9B5B35]
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
              ">
                Cloud Foundation
              </p>

              <h2 className="
                mt-4
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                text-[#062B49]
              ">
                A smarter foundation
                <span className="block text-[#9B5B35]">
                  for digital growth.
                </span>
              </h2>

            </div>

            <div>

              <p className="
                text-sm
                sm:text-base
                lg:text-lg
                leading-7
                lg:leading-8
                text-gray-600
              ">
                Cloud technology gives businesses the flexibility to
                modernize infrastructure, support changing workloads
                and create more adaptable technology environments.
              </p>

              <p className="
                mt-5
                text-sm
                sm:text-base
                leading-7
                text-gray-500
              ">
                Our approach combines infrastructure, migration,
                security and operational considerations to create
                cloud environments aligned with business requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURE CARDS
      ========================================================= */}

      <section
        id="cloud-capabilities"
        className="bg-white py-20 sm:py-24"
      >

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        ">

          <div className="max-w-2xl">

            <p className="
              text-[#9B5B35]
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
            ">
              Core Solutions
            </p>

            <h2 className="
              mt-3
              text-3xl
              sm:text-4xl
              font-bold
              text-[#062B49]
            ">
              Cloud capabilities built around your business
            </h2>

          </div>


          <div className="
            mt-12
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">

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
                  sm:p-8
                  hover:border-[#9B5B35]/40
                  hover:shadow-[0_20px_60px_rgba(6,43,73,0.10)]
                  transition-all
                  duration-500
                "
              >

                {/* Number */}

                <span className="
                  absolute
                  top-6
                  right-7
                  text-5xl
                  font-black
                  text-gray-100
                  group-hover:text-[#9B5B35]/10
                  transition-colors
                ">
                  {item.number}
                </span>


                {/* Icon */}

                <div className="
                  relative
                  w-14
                  h-14
                  rounded-xl
                  bg-[#062B49]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  group-hover:bg-[#9B5B35]
                  transition-all
                  duration-300
                ">
                  {item.icon}
                </div>


                <h3 className="
                  mt-7
                  text-xl
                  font-bold
                  text-[#062B49]
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-3
                  text-sm
                  leading-7
                  text-gray-500
                ">
                  {item.text}
                </p>


                <div className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#9B5B35]
                ">
                  Explore solution
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
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

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        ">

          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
          ">

            <div>

              <p className="
                text-[#9B5B35]
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
              ">
                Infrastructure Capabilities
              </p>

              <h2 className="
                mt-3
                text-3xl
                sm:text-4xl
                font-bold
                text-[#062B49]
              ">
                Designed for modern workloads
              </h2>

            </div>

            <p className="
              max-w-lg
              text-sm
              sm:text-base
              leading-7
              text-gray-500
            ">
              Create a cloud environment that supports performance,
              resilience, security and long-term technology growth.
            </p>

          </div>


          <div className="
            mt-12
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
          ">

            {capabilities.map((item) => (

              <div
                key={item.title}
                className="
                  group
                  flex
                  gap-5
                  p-5
                  sm:p-6
                  rounded-2xl
                  bg-white
                  border
                  border-gray-100
                  hover:border-[#9B5B35]/30
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <div className="
                  shrink-0
                  w-12
                  h-12
                  rounded-xl
                  bg-[#062B49]
                  text-white
                  flex
                  items-center
                  justify-center
                  group-hover:bg-[#9B5B35]
                  transition-all
                ">
                  {item.icon}
                </div>

                <div>

                  <h3 className="
                    text-base
                    sm:text-lg
                    font-bold
                    text-[#062B49]
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-500
                  ">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          DARK FEATURE SECTION
      ========================================================= */}

      <section className="
        relative
        overflow-hidden
        bg-[#062B49]
        py-20
        sm:py-24
        lg:py-28
      ">

        <div className="
          absolute
          -right-40
          top-1/2
          -translate-y-1/2
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#9B5B35]/15
          blur-[100px]
        " />

        <div className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        ">

          <div className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
          ">

            <div>

              <p className="
                text-[#C9875D]
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
              ">
                Why Cloud
              </p>

              <h2 className="
                mt-4
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                text-white
              ">
                Technology that
                <span className="block text-[#C9875D]">
                  adapts with you.
                </span>
              </h2>

              <p className="
                mt-6
                text-sm
                sm:text-base
                leading-7
                text-white/60
              ">
                Cloud environments can provide the flexibility required
                to respond to changing workloads, technology demands
                and business priorities.
              </p>

            </div>


            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
            ">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                  "
                >

                  <div className="
                    w-7
                    h-7
                    shrink-0
                    rounded-full
                    bg-[#9B5B35]
                    text-white
                    flex
                    items-center
                    justify-center
                  ">
                    <FiCheck className="text-sm" />
                  </div>

                  <span className="
                    text-sm
                    text-white/75
                  ">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CLOUD ARCHITECTURE
      ========================================================= */}

      <section className="bg-white py-20 sm:py-24">

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        ">

          <div className="
            rounded-3xl
            bg-[#F7F8FA]
            border
            border-gray-100
            p-6
            sm:p-10
            lg:p-14
          ">

            <div className="
              grid
              lg:grid-cols-[1fr_0.9fr]
              gap-12
              items-center
            ">

              <div>

                <div className="
                  inline-flex
                  items-center
                  gap-2
                  text-[#9B5B35]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                ">
                  <FiGlobe />
                  Connected Cloud
                </div>

                <h2 className="
                  mt-5
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-[#062B49]
                ">
                  Connect infrastructure,
                  <span className="block text-[#9B5B35]">
                    applications and data.
                  </span>
                </h2>

                <p className="
                  mt-5
                  text-sm
                  sm:text-base
                  leading-7
                  text-gray-500
                ">
                  A modern cloud environment connects the technology
                  components that support your organization. The result
                  is a more adaptable foundation for digital operations.
                </p>

              </div>


              {/* Architecture Visual */}

              <div className="relative">

                <div className="
                  relative
                  rounded-2xl
                  bg-[#062B49]
                  p-5
                  sm:p-7
                  overflow-hidden
                ">

                  <div className="
                    absolute
                    -right-20
                    -top-20
                    w-48
                    h-48
                    rounded-full
                    bg-[#9B5B35]/20
                    blur-3xl
                  " />

                  <div className="
                    relative
                    grid
                    grid-cols-2
                    gap-3
                  ">

                    <div className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-5
                      text-center
                    ">
                      <FiCloud className="mx-auto text-[#C9875D] text-2xl" />
                      <p className="mt-3 text-xs text-white/70">
                        Cloud
                      </p>
                    </div>

                    <div className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-5
                      text-center
                    ">
                      <FiServer className="mx-auto text-[#C9875D] text-2xl" />
                      <p className="mt-3 text-xs text-white/70">
                        Compute
                      </p>
                    </div>

                    <div className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-5
                      text-center
                    ">
                      <FiDatabase className="mx-auto text-[#C9875D] text-2xl" />
                      <p className="mt-3 text-xs text-white/70">
                        Data
                      </p>
                    </div>

                    <div className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-5
                      text-center
                    ">
                      <FiLayers className="mx-auto text-[#C9875D] text-2xl" />
                      <p className="mt-3 text-xs text-white/70">
                        Applications
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

      <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24">

        <div className="
          relative
          max-w-7xl
          mx-auto
          overflow-hidden
          rounded-3xl
          bg-[#062B49]
          px-6
          sm:px-10
          lg:px-14
          py-12
          sm:py-14
          lg:py-16
        ">

          <div className="
            absolute
            -right-20
            -top-20
            w-64
            h-64
            rounded-full
            bg-[#9B5B35]/20
            blur-3xl
          " />

          <div className="
            relative
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
          ">

            <div className="max-w-2xl">

              <p className="
                text-[#C9875D]
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
              ">
                Start Your Cloud Journey
              </p>

              <h2 className="
                mt-3
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-white
                leading-tight
              ">
                Ready to build a more flexible technology environment?
              </h2>

              <p className="
                mt-4
                text-sm
                sm:text-base
                leading-7
                text-white/55
              ">
                Let's discuss your cloud infrastructure, migration and
                security requirements.
              </p>

            </div>


            <a
              href="/contact"
              className="
                shrink-0
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                lg:w-auto
                px-7
                py-3.5
                rounded-lg
                bg-[#9B5B35]
                hover:bg-[#844A2A]
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                shadow-xl
                shadow-black/20
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

export default Cloud;