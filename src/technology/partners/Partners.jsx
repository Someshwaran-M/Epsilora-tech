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
    ["AWS", "Cloud & Infrastructure", "/assets/partners/aws.png"],
    ["Microsoft Azure", "Cloud Platform", "/assets/partners/azure.png"],
    ["Google Cloud Platform", "Cloud Platform", "/assets/partners/google-cloud.png"],
    ["Citrix", "Digital Workspace", "/assets/partners/citrix.png"],
    ["VMware", "Virtualization", "/assets/partners/vmware.png"],
    ["Cisco", "Networking", "/assets/partners/cisco.png"],
    ["Palo Alto Networks", "Cyber Security", "/assets/partners/paloalto.png"],
    ["Dell Technologies", "Enterprise Hardware", "/assets/partners/dell.png"],
    ["HPE", "Enterprise Infrastructure", "/assets/partners/hpe.png"],
    ["Nutanix", "Cloud Infrastructure", "/assets/partners/nutanix.png"],
    ["Apple Business Partner", "Business Technology", "/assets/partners/apple.png"],
    ["NetApp", "Data Storage", "/assets/partners/netapp.png"],
    ["Vertiv", "Data Center", "/assets/partners/vertiv.png"],
    ["Poly", "Communication", "/assets/partners/poly.png"],
    ["CommScope", "Network Infrastructure", "/assets/partners/commscope.png"],
    ["NVIDIA", "AI & Computing", "/assets/partners/nvidia.png"],
    ["Veeam", "Backup & Recovery", "/assets/partners/veeam.png"],
    ["ManageEngine", "IT Management", "/assets/partners/manageengine.png"],
  ];

  const capabilities = [
    [
      <FiCloud />,
      "Cloud Technology",
      "Modern cloud platforms and infrastructure technologies for scalable business environments.",
    ],
    [
      <FiShield />,
      "Cyber Security",
      "Security technologies supporting protection across networks, systems and data.",
    ],
    [
      <FiServer />,
      "Enterprise Infrastructure",
      "Reliable computing, storage, networking and data center technologies.",
    ],
    [
      <FiZap />,
      "Emerging Technology",
      "Modern technologies supporting AI, automation, analytics and digital transformation.",
    ],
  ];

  const benefits = [
    "Access to leading technology ecosystems",
    "Integrated enterprise solutions",
    "Cloud and infrastructure expertise",
    "Security-focused technology solutions",
    "Scalable technology architecture",
    "End-to-end implementation support",
  ];

  const benefitDescriptions = [
    "Technology ecosystems designed to provide dependable enterprise infrastructure and long-term operational support.",
    "Flexible technology foundations that can scale alongside changing business and infrastructure requirements.",
    "Connected technology environments that help organizations maintain reliable access to critical systems and information.",
    "Centralized technology capabilities that simplify management across infrastructure, platforms and enterprise environments.",
    "Architecture designed to adapt as business requirements, workloads and technology environments evolve.",
    "Technology capabilities supporting data protection, continuity and dependable recovery strategies.",
  ];

  const Logo = ({ item }) => (
    <div className="partner-logo group relative flex h-[120px] w-[190px] shrink-0 flex-col items-center justify-center overflow-hidden border border-gray-200 bg-white px-4 shadow-[0_8px_25px_rgba(6,43,73,.05)] transition-all duration-500 sm:h-[130px] sm:w-[210px] sm:px-5 lg:h-[140px] lg:w-[235px] lg:shadow-[0_10px_30px_rgba(6,43,73,.06)] lg:hover:border-[#9B5B35]/60 lg:hover:shadow-[0_18px_40px_rgba(6,43,73,.12)]">
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

      <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#9B5B35]/20 opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="flex h-14 w-full items-center justify-center sm:h-16">
        <img
          src={item[2]}
          alt={item[0]}
          loading="lazy"
          className="max-h-[42px] max-w-[135px] object-contain grayscale opacity-65 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 sm:max-h-[48px] sm:max-w-[150px] lg:max-h-[52px] lg:max-w-[165px]"
        />
      </div>

      <p className="mt-2 max-w-full truncate whitespace-nowrap text-center text-[9px] font-semibold uppercase tracking-[.07em] text-gray-400 transition-colors duration-300 group-hover:text-[#9B5B35] sm:mt-3 sm:text-[10px] sm:tracking-[.08em]">
        {item[0]}
      </p>
    </div>
  );

  const Row = ({ items, reverse = false }) => (
    <div className="relative overflow-hidden py-1.5 sm:py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F6F7F8] to-transparent sm:w-20 md:w-28 lg:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F6F7F8] to-transparent sm:w-20 md:w-28 lg:w-32" />

      <div
        className={`flex w-max gap-3 sm:gap-4 lg:gap-6 ${
          reverse ? "partner-right" : "partner-left"
        }`}
      >
        {[...items, ...items].map((item, i) => (
          <Logo key={`${item[0]}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      <style>{`
        .partner-left {
          animation: partnerLeft 34s linear infinite;
        }

        .partner-right {
          animation: partnerRight 34s linear infinite;
        }

        .partner-left:hover,
        .partner-right:hover {
          animation-play-state: paused;
        }

        .hero-bg {
          animation: heroZoom 18s ease-in-out infinite alternate;
          will-change: transform;
        }

        .hero-light {
          animation: heroLight 7s ease-in-out infinite;
        }

        .hero-light-r {
          animation: heroLightR 9s ease-in-out infinite;
        }

        .hero-in {
          animation: heroIn 1s cubic-bezier(.22,1,.36,1) both;
        }

        .d1 {
          animation-delay: .12s;
        }

        .d2 {
          animation-delay: .24s;
        }

        .d3 {
          animation-delay: .36s;
        }

        @keyframes partnerLeft {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @keyframes partnerRight {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes heroZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.06);
          }
        }

        @keyframes heroLight {
          0%,
          100% {
            opacity: .25;
            transform: translate3d(0, -50%, 0) scale(.95);
          }

          50% {
            opacity: .65;
            transform: translate3d(35px, -50%, 0) scale(1.08);
          }
        }

        @keyframes heroLightR {
          0%,
          100% {
            opacity: .2;
            transform: translate3d(0, 0, 0) scale(.95);
          }

          50% {
            opacity: .5;
            transform: translate3d(-30px, 25px, 0) scale(1.08);
          }
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes partnerBanner {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.025);
          }
        }

        .animate-partner-banner {
          animation: partnerBanner 14s ease-in-out infinite alternate;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-left,
          .partner-right,
          .hero-bg,
          .hero-light,
          .hero-light-r,
          .hero-in,
          .animate-partner-banner {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          PARTNERS BANNER
      ===================================================== */}

      <section className="relative h-[220px] w-full overflow-hidden sm:h-[270px] md:h-[310px] lg:h-[340px]">
        <div
          className="
            absolute
            inset-0
            bg-[url('/partners.png')]
            bg-cover
            bg-center
            bg-no-repeat
            animate-partner-banner
          "
        />
      </section>

      {/* =====================================================
          PARTNER ECOSYSTEM
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-24">
        <div className="absolute right-0 top-0 h-full w-px bg-[#062B49]/5" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[150px_1fr] md:gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">

            {/* LEFT INDEX */}

            <div className="relative">
              <div className="md:sticky md:top-24">
                <div className="flex items-center gap-3 md:block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9B5B35] sm:text-[11px]">
                    01
                  </span>

                  <div className="h-px w-8 bg-[#9B5B35] md:mt-5 md:h-24 md:w-px md:bg-gradient-to-b md:from-[#9B5B35] md:to-transparent" />
                </div>

                <p className="ml-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#062B49]/40 sm:text-[10px] md:ml-0 md:mt-5 md:tracking-[0.25em]">
                  Partner
                  <br className="hidden md:block" />
                  {" "}Ecosystem
                </p>
              </div>
            </div>

            {/* MAIN CONTENT */}

            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-8 bg-[#9B5B35] sm:w-12" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.3em]">
                  Technology Ecosystem
                </span>
              </div>

              <h2 className="mt-6 max-w-5xl text-[38px] font-bold leading-[0.98] tracking-[-0.045em] text-[#062B49] sm:mt-8 sm:text-[48px] md:text-[56px] lg:text-6xl lg:leading-[1.02]">
                Technology from
                <span className="block text-[#9B5B35]">
                  leading ecosystems.
                </span>
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 md:mt-12 md:grid-cols-[1fr_1px_1fr] md:gap-8 lg:mt-14 lg:gap-10">

                <div>
                  <p className="text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg">
                    EPSILORA Technology works with technology ecosystems across cloud,
                    cybersecurity, networking, computing, storage, data center
                    infrastructure and IT management.
                  </p>
                </div>

                <div className="hidden bg-gray-200 md:block" />

                <div>
                  <p className="text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg">
                    Our partner ecosystem helps bring together complementary
                    technologies to create solutions aligned with different business
                    and infrastructure requirements.
                  </p>

                  <div className="mt-6 flex items-center gap-3 sm:mt-8">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#9B5B35]/30 text-xs text-[#9B5B35]">
                      →
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#062B49]/50 sm:text-[10px] sm:tracking-[0.2em]">
                      Connected Technology
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3 sm:mt-12 sm:gap-5 md:mt-14 lg:mt-16">
                <div className="h-px flex-1 bg-gray-200" />
                <div className="h-2 w-2 shrink-0 bg-[#9B5B35]" />
                <div className="h-px w-14 bg-[#9B5B35]/40 sm:w-24" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERS
      ===================================================== */}

      <section
        id="partners"
        className="relative overflow-hidden bg-[#F6F7F8] py-16 sm:py-20 md:py-24"
      >
        <div className="absolute -left-1/2 -top-40 h-[350px] w-[350px] rounded-full bg-[#9B5B35]/5 blur-3xl sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]" />

        <div className="relative mx-auto max-w-[1600px]">

          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 md:px-10 lg:px-12">
            <div className="inline-flex max-w-full items-center justify-center gap-2 border border-gray-200 bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#9B5B35] sm:text-[10px] sm:tracking-[.18em]">
              <FiLayers className="shrink-0" />
              <span>Our Technology Network</span>
            </div>

            <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-[-0.04em] text-[#062B49] sm:text-[44px] md:text-[50px] lg:text-5xl">
              Powered by a
              <span className="text-[#9B5B35]">
                {" "}strong ecosystem.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-gray-600 sm:text-sm sm:leading-7 md:text-base">
              Explore our technology partners moving continuously across the EPSILORA ecosystem.
            </p>
          </div>

          {/* ROW 1 */}

          <div className="mt-8 sm:mt-10 md:mt-12">
            <Row items={partners.slice(0, 6)} />
          </div>

          {/* ROW 2 */}

          <div className="mt-3 sm:mt-4">
            <Row items={partners.slice(6, 12)} reverse />
          </div>

          {/* ROW 3 */}

          <div className="mt-3 sm:mt-4">
            <Row items={partners.slice(12, 18)} />
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <div className="inline-flex max-w-[90%] items-center justify-center gap-2 border border-gray-200 bg-white px-3 py-2 text-[10px] text-gray-500 sm:px-4 sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#9B5B35] animate-pulse" />
              <span className="text-center">
                Connected Technology Ecosystem
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY OUR ECOSYSTEM
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F7F8F9] py-16 sm:py-20 md:py-24 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">

          {/* HEADER */}

          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-20">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#9B5B35] sm:w-10" />

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9B5B35] sm:text-[10px] sm:tracking-[0.3em]">
                  Why Our Ecosystem
                </p>
              </div>

              <h2 className="mt-5 text-[36px] font-bold leading-[1.05] tracking-[-0.035em] text-[#062B49] sm:text-[44px] md:text-[48px] lg:text-5xl">
                Technology aligned
                <span className="block text-[#9B5B35]">
                  with your business.
                </span>
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8 md:text-base">
                We combine technology capabilities to support infrastructure,
                cloud, security and digital transformation requirements.
              </p>
            </div>
          </div>

          {/* BENEFITS */}

          <div className="relative mt-12 sm:mt-14 md:mt-16 lg:mt-20">

            {/* Vertical timeline - desktop/tablet */}
            <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gray-200 sm:block md:left-[31px]" />

            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="group relative grid grid-cols-1 gap-4 border-t border-gray-200 py-6 transition-all duration-500 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7 md:grid-cols-[64px_200px_1fr] md:items-center md:gap-6 lg:grid-cols-[64px_220px_1fr] lg:gap-8 lg:hover:bg-white"
                >

                  {/* NUMBER */}

                  <div className="relative z-10 flex items-center sm:h-16 sm:w-16 sm:justify-center sm:bg-[#F7F8F9]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[10px] font-bold text-[#062B49] transition-all duration-500 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white sm:h-11 sm:w-11 sm:text-xs">
                      0{index + 1}
                    </div>
                  </div>

                  {/* LABEL */}

                  <div className="sm:pl-1">
                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#9B5B35] sm:text-[9px] sm:tracking-[0.25em]">
                      Capability
                    </span>

                    <h3 className="mt-1 text-[14px] font-bold leading-5 text-[#062B49] sm:text-[15px] md:text-base">
                      {benefit}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="flex items-start justify-between gap-5 pl-0 sm:col-start-2 md:col-start-3 md:items-center md:gap-8">
                    <p className="max-w-xl text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7 md:text-sm">
                      {benefitDescriptions[index]}
                    </p>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#9B5B35] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#9B5B35]/40 group-hover:opacity-100 md:flex">
                      <span className="text-sm">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-gray-200" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;