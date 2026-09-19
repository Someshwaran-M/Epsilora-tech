import React from "react";
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiLayers,
  FiShield,
  FiZap,
  FiServer,
  FiCloud,
} from "react-icons/fi";

const Partners = () => {
  const partners = [
    {
      name: "AWS",
      category: "Cloud & Infrastructure",
      logo: "/assets/partners/aws.png",
    },
    {
      name: "Microsoft Azure",
      category: "Cloud Platform",
      logo: "/assets/partners/azure.png",
    },
    {
      name: "Google Cloud Platform",
      category: "Cloud Platform",
      logo: "/assets/partners/google-cloud.png",
    },
    {
      name: "Citrix",
      category: "Digital Workspace",
      logo: "/assets/partners/citrix.png",
    },
    {
      name: "VMware",
      category: "Virtualization",
      logo: "/assets/partners/vmware.png",
    },
    {
      name: "Cisco",
      category: "Networking",
      logo: "/assets/partners/cisco.png",
    },
    {
      name: "Palo Alto Networks",
      category: "Cyber Security",
      logo: "/assets/partners/paloalto.png",
    },
    {
      name: "Dell Technologies",
      category: "Enterprise Hardware",
      logo: "/assets/partners/dell.png",
    },
    {
      name: "HPE",
      category: "Enterprise Infrastructure",
      logo: "/assets/partners/hpe.png",
    },
    {
      name: "Nutanix",
      category: "Cloud Infrastructure",
      logo: "/assets/partners/nutanix.png",
    },
    {
      name: "Apple Business Partner",
      category: "Business Technology",
      logo: "/assets/partners/apple.png",
    },
    {
      name: "NetApp",
      category: "Data Storage",
      logo: "/assets/partners/netapp.png",
    },
    {
      name: "Vertiv",
      category: "Data Center",
      logo: "/assets/partners/vertiv.png",
    },
    {
      name: "Poly",
      category: "Communication",
      logo: "/assets/partners/poly.png",
    },
    {
      name: "CommScope",
      category: "Network Infrastructure",
      logo: "/assets/partners/commscope.png",
    },
    {
      name: "NVIDIA",
      category: "AI & Computing",
      logo: "/assets/partners/nvidia.png",
    },
    {
      name: "Veeam",
      category: "Backup & Recovery",
      logo: "/assets/partners/veeam.png",
    },
    {
      name: "ManageEngine",
      category: "IT Management",
      logo: "/assets/partners/manageengine.png",
    },
  ];

  const row1 = partners.slice(0, 6);
  const row2 = partners.slice(6, 12);
  const row3 = partners.slice(12, 18);

  const capabilities = [
    {
      icon: <FiCloud />,
      title: "Cloud Technology",
      text: "Modern cloud platforms and infrastructure technologies for scalable business environments.",
    },
    {
      icon: <FiShield />,
      title: "Cyber Security",
      text: "Security technologies supporting protection across networks, systems and data.",
    },
    {
      icon: <FiServer />,
      title: "Enterprise Infrastructure",
      text: "Reliable computing, storage, networking and data center technologies.",
    },
    {
      icon: <FiZap />,
      title: "Emerging Technology",
      text: "Modern technologies supporting AI, automation, analytics and digital transformation.",
    },
  ];

  const benefits = [
    "Access to leading technology ecosystems",
    "Integrated enterprise solutions",
    "Cloud and infrastructure expertise",
    "Security-focused technology solutions",
    "Scalable technology architecture",
    "End-to-end implementation support",
  ];

  const LogoCard = ({ partner }) => {
    return (
      <div
        className="
          group
          relative
          shrink-0
          w-[180px]
          h-[118px]

          sm:w-[210px]
          sm:h-[130px]

          lg:w-[235px]
          lg:h-[140px]

          overflow-hidden

          border
          border-gray-200

          bg-white

          flex
          flex-col
          items-center
          justify-center

          px-5

          shadow-[0_10px_30px_rgba(6,43,73,0.06)]

          hover:border-[#9B5B35]/60
          hover:shadow-[0_18px_40px_rgba(6,43,73,0.12)]

          transition-all
          duration-500
        "
      >
        {/* Top Accent */}

        <div
          className="
            absolute
            top-0
            left-0
            h-[3px]
            w-0
            bg-[#9B5B35]
            group-hover:w-full
            transition-all
            duration-500
          "
        />

        {/* Corner Accent */}

        <div
          className="
            absolute
            top-0
            right-0
            w-8
            h-8
            border-t
            border-r
            border-[#9B5B35]/20
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

        {/* Logo */}

        <div
          className="
            h-12
            sm:h-14
            lg:h-16

            w-full

            flex
            items-center
            justify-center
          "
        >
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            className="
              max-w-[125px]
              sm:max-w-[145px]
              lg:max-w-[165px]

              max-h-[42px]
              sm:max-h-[48px]
              lg:max-h-[52px]

              object-contain

              grayscale
              opacity-65

              group-hover:grayscale-0
              group-hover:opacity-100
              group-hover:scale-105

              transition-all
              duration-500
            "
          />
        </div>

        {/* Name */}

        <p
          className="
            mt-3

            text-[9px]
            sm:text-[10px]

            font-semibold
            uppercase
            tracking-[0.08em]

            text-gray-400

            group-hover:text-[#9B5B35]

            transition-colors
            duration-300

            text-center
            whitespace-nowrap
          "
        >
          {partner.name}
        </p>
      </div>
    );
  };

  const AnimatedRow = ({ items, direction = "left" }) => {
    return (
      <div className="relative overflow-hidden py-2">

        {/* Left Fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            bottom-0
            w-12
            sm:w-20
            lg:w-32
            z-10
            bg-gradient-to-r
            from-[#F6F7F8]
            to-transparent
          "
        />

        {/* Right Fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            bottom-0
            w-12
            sm:w-20
            lg:w-32
            z-10
            bg-gradient-to-l
            from-[#F6F7F8]
            to-transparent
          "
        />

        <div
          className={`
            flex
            w-max
            gap-4
            sm:gap-5
            lg:gap-6

            ${
              direction === "right"
                ? "partner-marquee-right"
                : "partner-marquee-left"
            }
          `}
        >
          {/* First Set */}

          {items.map((partner) => (
            <LogoCard
              key={`first-${partner.name}`}
              partner={partner}
            />
          ))}

          {/* Duplicate Set */}

          {items.map((partner) => (
            <LogoCard
              key={`second-${partner.name}`}
              partner={partner}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          ANIMATION STYLES
      ===================================================== */}

      <style>{`
        .partner-marquee-left {
          animation: partnerLeftToRight 34s linear infinite;
        }

        .partner-marquee-right {
          animation: partnerRightToLeft 34s linear infinite;
        }

        .partner-marquee-left:hover,
        .partner-marquee-right:hover {
          animation-play-state: paused;
        }

        @keyframes partnerLeftToRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }

        @keyframes partnerRightToLeft {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .partner-marquee-left {
            animation-duration: 28s;
          }

          .partner-marquee-right {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee-left,
          .partner-marquee-right {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        {/* Background */}

        <div
          className="
            absolute
            -top-40
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#9B5B35]/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-[450px]
            h-[450px]
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

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >

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
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                <FiGlobe />
                Technology Ecosystem
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
                Technology
                <span className="block text-[#C9875D]">
                  Partners
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
                A connected ecosystem of technology platforms
                supporting cloud, infrastructure, cybersecurity,
                computing and digital transformation.
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
                  href="#partners"
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
                  Explore Partners
                  <FiArrowRight />
                </a>

                <a
                  href="/contact"
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
                  Contact Us
                </a>

              </div>

            </div>


            {/* RIGHT VISUAL */}

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

                {/* Rings */}

                <div
                  className="
                    absolute
                    inset-3
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
                    inset-24
                    rounded-full
                    border
                    border-white/10
                  "
                />

                {/* Center Glow */}

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

                {/* Center */}

                <div
                  className="
                    relative
                    w-32
                    h-32
                    sm:w-40
                    sm:h-40
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/[0.06]
                    border
                    border-white/15
                    backdrop-blur-xl
                  "
                >

                  <div
                    className="
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-[#9B5B35]/30
                    "
                  />

                  <FiGlobe
                    className="
                      relative
                      text-5xl
                      sm:text-6xl
                      text-[#C9875D]
                    "
                  />

                </div>


                {/* Floating Card */}

                <div
                  className="
                    absolute
                    top-3
                    right-0
                    bg-white
                    px-4
                    py-3
                    shadow-2xl
                  "
                >
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                    Ecosystem
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#062B49]">
                    Connected
                  </p>
                </div>


                {/* Floating Card */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-0
                    bg-white
                    px-4
                    py-3
                    shadow-2xl
                  "
                >
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                    Technology
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#062B49]">
                    Enterprise Ready
                  </p>
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
                18+
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Technology Partners
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                Cloud
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Technology Ecosystem
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                Secure
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Technology Foundation
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#062B49]">
                End-to-End
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Solutions
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
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

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >

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
                Partner Ecosystem
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
                Technology from
                <span className="block text-[#9B5B35]">
                  leading ecosystems.
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
                EPSILORA Technology works with technology
                ecosystems across cloud, cybersecurity,
                networking, computing, storage, data center
                infrastructure and IT management.
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
                Our partner ecosystem helps bring together
                complementary technologies to create solutions
                aligned with different business and infrastructure
                requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ANIMATED PARTNER ECOSYSTEM
      ===================================================== */}

      <section
        id="partners"
        className="
          relative
          overflow-hidden
          bg-[#F6F7F8]
          py-16
          sm:py-20
          lg:py-24
        "
      >

        {/* Background */}

        <div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#9B5B35]/5
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            relative
            max-w-[1600px]
            mx-auto
          "
        >

          {/* Heading */}

          <div
            className="
              px-5
              sm:px-8
              lg:px-12
              text-center
              max-w-3xl
              mx-auto
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-2
                bg-white
                border
                border-gray-200
                text-[#9B5B35]
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
              "
            >
              <FiLayers />
              Our Technology Network
            </div>

            <h2
              className="
                mt-5
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-[#062B49]
              "
            >
              Powered by a
              <span className="text-[#9B5B35]">
                {" "}strong ecosystem.
              </span>
            </h2>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                text-gray-600
                leading-7
              "
            >
              Explore our technology partners moving continuously
              across the EPSILORA ecosystem.
            </p>

          </div>


          {/* =================================================
              ROW 1
              LEFT → RIGHT
          ================================================= */}

          <div className="mt-12">

            <AnimatedRow
              items={row1}
              direction="right"
            />

          </div>


          {/* =================================================
              ROW 2
              RIGHT → LEFT
          ================================================= */}

          <div className="mt-4">

            <AnimatedRow
              items={row2}
              direction="left"
            />

          </div>


          {/* =================================================
              ROW 3
              LEFT → RIGHT
          ================================================= */}

          <div className="mt-4">

            <AnimatedRow
              items={row3}
              direction="right"
            />

          </div>


          {/* Bottom Label */}

          <div
            className="
              mt-10
              flex
              justify-center
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                bg-white
                border
                border-gray-200
                text-xs
                text-gray-500
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#9B5B35]
                  animate-pulse
                "
              />

              Connected Technology Ecosystem

            </div>

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

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-start
            "
          >

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
                Technology Capabilities
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
                More than partners.
                <span className="block text-[#9B5B35]">
                  Complete technology.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  sm:text-base
                  text-gray-600
                  leading-7
                "
              >
                Our ecosystem allows us to work across multiple
                technology layers and create connected solutions
                for modern business environments.
              </p>

            </div>


            {/* RIGHT */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-4
              "
            >

              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    p-5
                    sm:p-6
                    border
                    border-gray-200
                    bg-white
                    hover:border-[#9B5B35]/50
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      flex
                      items-center
                      justify-center
                      bg-[#062B49]
                      text-white
                      group-hover:bg-[#9B5B35]
                      transition-colors
                      duration-300
                    "
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="
                      mt-5
                      text-base
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
          DARK TECHNOLOGY ECOSYSTEM
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        <div
          className="
            absolute
            -right-40
            -top-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#9B5B35]/15
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-40
            -bottom-40
            w-[400px]
            h-[400px]
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

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >

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
                Technology Stack
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
                Connected technology.
                <span className="block text-[#C9875D]">
                  One ecosystem.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  sm:text-base
                  text-white/60
                  leading-7
                "
              >
                From cloud platforms to enterprise hardware
                and cybersecurity, our technology ecosystem
                covers multiple layers of modern infrastructure.
              </p>

            </div>


            {/* RIGHT */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:gap-4
              "
            >

              {[
                {
                  icon: <FiCloud />,
                  title: "Cloud",
                  text: "Platforms",
                },
                {
                  icon: <FiShield />,
                  title: "Security",
                  text: "Protection",
                },
                {
                  icon: <FiServer />,
                  title: "Infrastructure",
                  text: "Enterprise",
                },
                {
                  icon: <FiLayers />,
                  title: "Integration",
                  text: "Solutions",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    p-5
                    sm:p-6
                    min-h-[145px]
                    sm:min-h-[165px]
                    border
                    border-white/10
                    bg-white/[0.04]
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
                    {item.text}
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

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
            "
          >

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
                Why Our Ecosystem
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
                Technology aligned
                <span className="block text-[#9B5B35]">
                  with your business.
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
                We combine technology capabilities to support
                infrastructure, cloud, security and digital
                transformation requirements.
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
                    hover:shadow-sm
                    transition-all
                  "
                >

                  <div
                    className="
                      shrink-0
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
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

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          pb-16
          sm:pb-20
          lg:pb-24
        "
      >

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

          <div className="relative max-w-3xl">

            <p
              className="
                text-[#C9875D]
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
              "
            >
              Technology Partnership
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
              Looking for the right
              <span className="text-[#C9875D]">
                {" "}technology solution?
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
              Talk to our team about your cloud, infrastructure,
              cybersecurity or enterprise technology requirements.
            </p>

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
                Talk to Our Team
                <FiArrowRight />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Partners;