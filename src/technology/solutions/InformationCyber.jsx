import React from "react";
import {
  FiShield,
  FiLock,
  FiActivity,
  FiUserCheck,
  FiArrowRight,
  FiCheck,
  FiEye,
  FiDatabase,
  FiWifi,
  FiAlertTriangle,
  FiLayers,
} from "react-icons/fi";

const InformationCyber = () => {
  const securityAreas = [
    {
      icon: <FiShield />,
      number: "01",
      title: "Network & Firewall Security",
      text: "Security solutions designed to protect network infrastructure and business systems from unauthorized access and security threats.",
    },
    {
      icon: <FiLock />,
      number: "02",
      title: "Cloud & Data Security",
      text: "Protect important business data and cloud environments with security-focused solutions built around modern infrastructure.",
    },
    {
      icon: <FiActivity />,
      number: "03",
      title: "Security Monitoring & Response",
      text: "Monitoring and response capabilities designed to help identify, investigate and address security events.",
    },
    {
      icon: <FiUserCheck />,
      number: "04",
      title: "Identity & Access Management",
      text: "Manage user access and support secure authentication across business applications, systems and environments.",
    },
  ];

  const capabilities = [
    {
      icon: <FiShield />,
      title: "Network Protection",
      text: "Protect critical network infrastructure with layered security controls.",
    },
    {
      icon: <FiDatabase />,
      title: "Data Protection",
      text: "Support secure handling and protection of important business information.",
    },
    {
      icon: <FiEye />,
      title: "Security Visibility",
      text: "Improve visibility across systems and identify security events.",
    },
    {
      icon: <FiLayers />,
      title: "Security Architecture",
      text: "Build security into infrastructure, applications and cloud environments.",
    },
  ];

  const benefits = [
    "Network and infrastructure protection",
    "Cloud and business data security",
    "Identity and access control",
    "Security monitoring and response",
    "Risk-focused security practices",
    "Layered security architecture",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        {/* Background effects */}

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
              absolute
              -top-32
              -right-32
              w-80
              h-80
              rounded-full
              bg-[#9B5B35]/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-32
              w-96
              h-96
              rounded-full
              bg-[#9B5B35]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
              bg-[size:45px_45px]
            "
          />

        </div>

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-16
            sm:py-20
            lg:py-28
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  border
                  border-white/10
                  bg-white/[0.05]
                  text-[#C9875D]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                <FiShield />
                Cyber Security
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-white
                "
              >
                Information
                <span className="block text-[#C9875D]">
                  & Cyber Security
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  sm:text-base
                  lg:text-lg
                  text-white/65
                  leading-7
                "
              >
                Security solutions designed to help protect your
                systems, networks, identities and business data
                across modern digital environments.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                "
              >

                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-6
                    py-3.5
                    bg-[#9B5B35]
                    hover:bg-[#844A2A]
                    text-white
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Talk to Security Experts
                  <FiArrowRight />
                </a>

                <a
                  href="#security-areas"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    py-3.5
                    border
                    border-white/15
                    hover:border-white/30
                    text-white
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  Explore Security
                </a>

              </div>

            </div>


            {/* RIGHT SECURITY VISUAL */}

            <div className="relative">

              <div
                className="
                  relative
                  mx-auto
                  max-w-md
                  aspect-square
                  flex
                  items-center
                  justify-center
                "
              >

                {/* Outer rings */}

                <div
                  className="
                    absolute
                    inset-4
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    absolute
                    inset-12
                    rounded-full
                    border
                    border-[#9B5B35]/30
                  "
                />

                <div
                  className="
                    absolute
                    inset-20
                    rounded-full
                    border
                    border-white/10
                  "
                />

                {/* Glow */}

                <div
                  className="
                    absolute
                    w-48
                    h-48
                    rounded-full
                    bg-[#9B5B35]/20
                    blur-3xl
                  "
                />

                {/* Main shield */}

                <div
                  className="
                    relative
                    w-32
                    h-36
                    sm:w-40
                    sm:h-44
                    flex
                    items-center
                    justify-center
                    bg-white/[0.06]
                    border
                    border-white/15
                    backdrop-blur-xl
                    shadow-2xl
                  "
                >

                  <div
                    className="
                      absolute
                      inset-3
                      border
                      border-[#9B5B35]/30
                    "
                  />

                  <FiShield
                    className="
                      relative
                      text-5xl
                      sm:text-6xl
                      text-[#C9875D]
                    "
                  />

                </div>


                {/* Floating security card */}

                <div
                  className="
                    absolute
                    top-3
                    right-0
                    sm:right-4
                    px-4
                    py-3
                    bg-white
                    shadow-xl
                    border
                    border-gray-100
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        bg-[#062B49]
                        text-white
                      "
                    >
                      <FiLock />
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-500">
                        SECURITY
                      </p>

                      <p className="text-xs font-bold text-[#062B49]">
                        Protected
                      </p>
                    </div>

                  </div>

                </div>


                {/* Floating monitoring card */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-0
                    sm:left-2
                    px-4
                    py-3
                    bg-white
                    shadow-xl
                    border
                    border-gray-100
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        bg-[#9B5B35]
                        text-white
                      "
                    >
                      <FiActivity />
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-500">
                        MONITORING
                      </p>

                      <p className="text-xs font-bold text-[#062B49]">
                        Active
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-b border-gray-100 bg-white">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-8
          "
        >

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                24/7
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Security Visibility
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                Multi
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Layer Protection
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                Secure
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Digital Environments
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                End-to-End
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Security Approach
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>

              <p
                className="
                  text-[#9B5B35]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Security Foundation
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  leading-tight
                  text-[#062B49]
                "
              >
                Protect what keeps
                <span className="block text-[#9B5B35]">
                  your business moving.
                </span>
              </h2>

            </div>

            <div>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-gray-600
                  leading-7
                "
              >
                Modern businesses depend on connected systems,
                cloud platforms, networks, applications and
                digital identities. A strong security foundation
                helps protect these environments while supporting
                reliable business operations.
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  text-gray-600
                  leading-7
                "
              >
                EPSILORA Technology focuses on security capabilities
                across infrastructure, data, identity and monitoring
                environments.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECURITY AREAS
      ===================================================== */}

      <section
        id="security-areas"
        className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-24"
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-[#9B5B35]
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
              "
            >
              Security Areas
            </p>

            <h2
              className="
                mt-3
                text-3xl
                sm:text-4xl
                font-bold
                text-[#062B49]
              "
            >
              Security built around
              <span className="text-[#9B5B35]">
                {" "}your environment.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7">
              Explore the key security areas supporting modern
              infrastructure and digital business environments.
            </p>

          </div>


          <div
            className="
              mt-10
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              lg:gap-6
            "
          >

            {securityAreas.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white
                  border
                  border-gray-200
                  p-6
                  sm:p-8
                  hover:border-[#9B5B35]/50
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                {/* Number */}

                <span
                  className="
                    absolute
                    top-5
                    right-6
                    text-5xl
                    font-bold
                    text-gray-100
                    group-hover:text-[#9B5B35]/10
                    transition-colors
                  "
                >
                  {item.number}
                </span>


                {/* Icon */}

                <div
                  className="
                    relative
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    bg-[#062B49]
                    text-white
                    group-hover:bg-[#9B5B35]
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>
                </div>


                <h3
                  className="
                    mt-6
                    text-lg
                    sm:text-xl
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
                    text-gray-600
                    leading-6
                    max-w-lg
                  "
                >
                  {item.text}
                </p>


                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#9B5B35]
                  "
                >
                  Security Capability
                  <FiArrowRight
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT */}

            <div>

              <p
                className="
                  text-[#9B5B35]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Security Capabilities
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  font-bold
                  leading-tight
                  text-[#062B49]
                "
              >
                A layered approach to
                <span className="block text-[#9B5B35]">
                  digital security.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  text-gray-600
                  leading-7
                  max-w-xl
                "
              >
                Security is most effective when protection,
                visibility, access control and infrastructure
                work together as part of a connected security
                architecture.
              </p>

            </div>


            {/* RIGHT */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
              "
            >

              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="
                    p-5
                    sm:p-6
                    border
                    border-gray-200
                    hover:border-[#9B5B35]/50
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      bg-[#062B49]
                      text-white
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                      mt-4
                      font-bold
                      text-[#062B49]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-600
                      leading-6
                    "
                  >
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DARK SECURITY ARCHITECTURE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        <div
          className="
            absolute
            -right-32
            top-0
            w-96
            h-96
            rounded-full
            bg-[#9B5B35]/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-16
            sm:py-20
            lg:py-24
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <p
                className="
                  text-[#C9875D]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Security Architecture
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  text-white
                  leading-tight
                "
              >
                Connect protection
                <span className="block text-[#C9875D]">
                  across every layer.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  text-white/60
                  leading-7
                  max-w-xl
                "
              >
                Build a security environment where network,
                data, identity and monitoring capabilities
                work together.
              </p>

            </div>


            {/* RIGHT ARCHITECTURE */}

            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              {[
                {
                  icon: <FiWifi />,
                  title: "Network",
                },
                {
                  icon: <FiDatabase />,
                  title: "Data",
                },
                {
                  icon: <FiUserCheck />,
                  title: "Identity",
                },
                {
                  icon: <FiActivity />,
                  title: "Monitoring",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    p-5
                    sm:p-6
                    min-h-[140px]
                    sm:min-h-[160px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    hover:bg-white/[0.08]
                    hover:border-[#9B5B35]/40
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      bg-[#9B5B35]
                      text-white
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                      mt-5
                      text-sm
                      sm:text-base
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/40">
                    Security Layer
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>

              <p
                className="
                  text-[#9B5B35]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Security Focus
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-[#062B49]
                "
              >
                Designed for modern
                <span className="block text-[#9B5B35]">
                  business environments.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  text-gray-600
                  leading-7
                  max-w-xl
                "
              >
                Establish security capabilities that support
                infrastructure protection, data security,
                identity management and continuous visibility.
              </p>

            </div>


            <div className="space-y-3">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    border
                    border-gray-200
                    hover:border-[#9B5B35]/40
                    transition-all
                  "
                >

                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center
                      w-8
                      h-8
                      bg-[#062B49]
                      text-white
                    "
                  >
                    <FiCheck />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
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

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24">

        <div
          className="
            relative
            overflow-hidden
            max-w-7xl
            mx-auto
            bg-[#062B49]
            px-6
            sm:px-10
            lg:px-14
            py-12
            sm:py-14
            lg:py-16
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              w-64
              h-64
              rounded-full
              bg-[#9B5B35]/20
              blur-3xl
            "
          />

          <div className="relative">

            <div className="max-w-2xl">

              <p
                className="
                  text-[#C9875D]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Secure Your Environment
              </p>

              <h2
                className="
                  mt-3
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  text-white
                "
              >
                Build a stronger
                <span className="text-[#C9875D]">
                  {" "}security foundation.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-white/60
                  leading-7
                "
              >
                Talk to our technology and security experts
                about your infrastructure and digital security
                requirements.
              </p>

            </div>


            <div className="mt-8">

              <a
                href="/contact"
                className="
                  inline-flex
                  w-full
                  sm:w-auto
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  bg-[#9B5B35]
                  hover:bg-[#844A2A]
                  text-white
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Contact Our Experts
                <FiArrowRight />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default InformationCyber;