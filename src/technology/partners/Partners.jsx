
import React from "react";
import {
  FiArrowRight,
  FiCheck,
  FiLayers,
  FiShield,
  FiZap,
  FiServer,
  FiCloud,
} from "react-icons/fi";

const Partners = () => {
  const partners = [
    { name: "Trellix", logo: "trellix.png", category: "Cyber Security" },
    { name: "Trend Micro", logo: "trend-micro.png", category: "Cyber Security" },
    { name: "Radware", logo: "radware.png", category: "Network Security" },
    { name: "Hitachi Vantara", logo: "hitachi-vantara.png", category: "Infrastructure" },
    { name: "Securonix", logo: "securonix.png", category: "Cyber Security" },
    { name: "Nutanix", logo: "nutanix.png", category: "Cloud & Infrastructure" },
    { name: "Netskope", logo: "netskope.png", category: "Cloud Security" },
    { name: "Forescout", logo: "forescout.png", category: "Network Security" },
    { name: "Keysight", logo: "keysight.png", category: "Network Testing" },
    { name: "OpenText", logo: "opentext.png", category: "Enterprise Software" },
    { name: "AlgoSec", logo: "algosec.png", category: "Network Security" },
    { name: "OPSWAT", logo: "opswat.png", category: "Cyber Security" },
    { name: "Varonis", logo: "varonis.png", category: "Data Security" },
    { name: "Utimaco", logo: "utimaco.png", category: "Data Security" },
    { name: "NETSCOUT", logo: "netscout.png", category: "Network Security" },
    { name: "InnSp... ", logo: "innspark.png", category: "Cyber Security" },
    { name: "efficientIP", logo: "efficient-ip.png", category: "Network Infrastructure" },
    { name: "XM Cyber", logo: "xm-cyber.png", category: "Cyber Security" },
    { name: "Ivanti", logo: "ivanti.png", category: "IT Management" },
    { name: "HEAL", logo: "heal.png", category: "Technology" },
    { name: "Accops", logo: "accops.png", category: "Workspace Solutions" },
    { name: "IRONSCALES", logo: "ironscales.png", category: "Email Security" },
    { name: "Balbix", logo: "balbix.png", category: "Cyber Security" },
    { name: "Versa Networks", logo: "versa-networks.png", category: "Network Security" },
    { name: "Genie Networks", logo: "genie-networks.png", category: "Network Analytics" },
    { name: "Indusface", logo: "indusface.png", category: "Application Security" },
    { name: "SecuPi", logo: "secupi.png", category: "Data Security" },
    { name: "BMC", logo: "bmc.png", category: "IT Management" },
    { name: "QNU", logo: "qnu.png", category: "Technology" },
    { name: "Adopt", logo: "adopt.png", category: "Technology" },
    { name: "Sandvine", logo: "sandvine.png", category: "Network Solutions" },
    { name: "Supermicro", logo: "supermicro.png", category: "Infrastructure" },
    { name: "Commvault", logo: "commvault.png", category: "Data Protection" },
    { name: "Seraphic", logo: "seraphic.png", category: "Browser Security" },
    { name: "Saviynt", logo: "saviynt.png", category: "Identity Security" },
    { name: "Cambium Networks", logo: "cambium-networks.png", category: "Networking" },
    { name: "SOCRadar", logo: "socradar.png", category: "Threat Intelligence" },
    { name: "Perpetuum", logo: "perpetuum.png", category: "Technology" },
    { name: "Videonetics", logo: "videonetics.png", category: "Video Analytics" },
    { name: "VIVOTEK", logo: "vivotek.png", category: "Physical Security" },
    { name: "Checkmarx", logo: "checkmarx.png", category: "Application Security" },
    { name: "Semperis", logo: "semperis.png", category: "Identity Security" },
    { name: "RAD", logo: "rad.png", category: "Networking" },
    { name: "Allot", logo: "allot.png", category: "Network Security" },
    { name: "EverestIMS", logo: "everest-ims.png", category: "IT Management" },
    { name: "Lookout", logo: "lookout.png", category: "Mobile Security" },
    { name: "Acronis", logo: "acronis.png", category: "Data Protection" },
    { name: "Vantageo", logo: "vantageo.png", category: "Infrastructure" },
    { name: "Alcatel-Lucent Enterprise", logo: "alcatel-lucent-enterprise.png", category: "Networking" },
    { name: "Arcon", logo: "arcon.png", category: "Privileged Access" },
    { name: "Sectona", logo: "sectona.png", category: "Privileged Access" },
    { name: "Delinea", logo: "delinea.png", category: "Identity Security" },
    { name: "Rapid7", logo: "rapid7.png", category: "Cyber Security" },
    { name: "Xevere", logo: "xevere.png", category: "Network Security" },
    { name: "AttackFence", logo: "attackfence.png", category: "Cyber Security" },
  ];

  const capabilities = [
    {
      icon: FiCloud,
      title: "Cloud Technology",
      description:
        "Modern cloud platforms and infrastructure technologies for scalable business environments.",
    },
    {
      icon: FiShield,
      title: "Cyber Security",
      description:
        "Security technologies supporting protection across networks, systems and data.",
    },
    {
      icon: FiServer,
      title: "Enterprise Infrastructure",
      description:
        "Reliable computing, storage, networking and data center technologies.",
    },
    {
      icon: FiZap,
      title: "Emerging Technology",
      description:
        "Modern technologies supporting AI, automation, analytics and digital transformation.",
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

  const benefitDescriptions = [
    "Technology ecosystems designed to provide dependable enterprise infrastructure and long-term operational support.",
    "Flexible technology foundations that can scale alongside changing business and infrastructure requirements.",
    "Connected technology environments that help organizations maintain reliable access to critical systems and information.",
    "Centralized technology capabilities that simplify management across infrastructure, platforms and enterprise environments.",
    "Architecture designed to adapt as business requirements, workloads and technology environments evolve.",
    "Technology capabilities supporting data protection, continuity and dependable recovery strategies.",
  ];

  // LOGO CARD
  const Logo = ({ item }) => (
    <article className="partner-logo group relative flex h-[120px] w-[190px] shrink-0 flex-col items-center justify-center overflow-hidden border border-gray-200 bg-white px-4 shadow-[0_8px_25px_rgba(6,43,73,.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#9B5B35]/60 hover:shadow-[0_18px_40px_rgba(6,43,73,.12)] sm:h-[130px] sm:w-[210px] sm:px-5 lg:h-[140px] lg:w-[235px]">
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#9B5B35] transition-all duration-500 group-hover:w-full" />

      <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#9B5B35]/20 opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="flex h-14 w-full items-center justify-center sm:h-16">
        <img
          src={`/assets/partners/${item.logo}`}
          alt={`${item.name} logo`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="max-h-[42px] max-w-[135px] object-contain opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:max-h-[48px] sm:max-w-[150px] lg:max-h-[52px] lg:max-w-[165px]"
        />
      </div>

      <p className="mt-2 max-w-full truncate whitespace-nowrap text-center text-[9px] font-semibold uppercase tracking-[.07em] text-gray-500 transition-colors duration-300 group-hover:text-[#9B5B35] sm:mt-3 sm:text-[10px] sm:tracking-[.08em]">
        {item.name}
      </p>

      <p className="mt-1 max-w-full truncate text-center text-[9px] text-gray-400">
        {item.category}
      </p>
    </article>
  );

  // INFINITE ANIMATED ROW
  const Row = ({ items, reverse = false }) => (
    <div className="relative overflow-hidden py-1.5 sm:py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F6F7F8] to-transparent sm:w-20 md:w-28 lg:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F6F7F8] to-transparent sm:w-20 md:w-28 lg:w-32" />

      <div
        className={`flex w-max gap-3 sm:gap-4 lg:gap-6 ${
          reverse ? "partner-right" : "partner-left"
        }`}
      >
        {[...items, ...items].map((item, index) => (
          <Logo key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );

  // Dynamically include every partner in one of the three rows.
  const rowSize = Math.ceil(partners.length / 3);

  const partnerRows = [
    partners.slice(0, rowSize),
    partners.slice(rowSize, rowSize * 2),
    partners.slice(rowSize * 2),
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900 font-['Roboto',sans-serif]">
      <style>{`
        .partner-left {
          animation: partnerLeft 38s linear infinite;
        }

        .partner-right {
          animation: partnerRight 42s linear infinite;
        }

        .partner-left:hover,
        .partner-right:hover {
          animation-play-state: paused;
        }

        .animate-partner-banner {
          animation: partnerBanner 14s ease-in-out infinite alternate;
          will-change: transform;
        }

        .hero-in {
          animation: heroIn 1s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes partnerLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes partnerRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes partnerBanner {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.025);
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

        @media (prefers-reduced-motion: reduce) {
          .partner-left,
          .partner-right,
          .animate-partner-banner,
          .hero-in {
            animation: none !important;
          }
        }
      `}</style>

      {/* PARTNERS BANNER */}
      <section className="relative h-[220px] w-full overflow-hidden bg-[#062B49] sm:h-[270px] md:h-[310px] lg:h-[340px]">
        <div className="animate-partner-banner absolute inset-0 bg-[url('/partners.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062B49]/50 via-[#062B49]/10 to-transparent" />

        <div className="hero-in relative flex h-full items-end px-5 pb-7 sm:px-8 sm:pb-9 lg:px-12 lg:pb-11">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9B5B35]" />
              <span className="text-[10px] font-bold uppercase tracking-[.25em] text-white sm:text-xs">
                EPSILORA Technology
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Technology Partners
            </h1>
          </div>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM INTRODUCTION */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="absolute right-0 top-0 h-full w-px bg-[#062B49]/5" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[150px_1fr] md:gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
            <div className="relative">
              <div className="md:sticky md:top-24">
                <div className="flex items-center gap-3 md:block">
                  <span className="text-[10px] font-bold uppercase tracking-[.3em] text-[#9B5B35] sm:text-[11px]">
                    01
                  </span>
                  <div className="h-px w-8 bg-[#9B5B35] md:mt-5 md:h-24 md:w-px md:bg-gradient-to-b md:from-[#9B5B35] md:to-transparent" />
                </div>

                <p className="ml-3 text-[9px] font-bold uppercase tracking-[.2em] text-[#062B49]/50 sm:text-[10px] md:ml-0 md:mt-5 md:tracking-[.25em]">
                  Partner
                  <br className="hidden md:block" /> Ecosystem
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-8 bg-[#9B5B35] sm:w-12" />
                <span className="text-[9px] font-bold uppercase tracking-[.25em] text-[#9B5B35] sm:text-[10px] sm:tracking-[.3em]">
                  Technology Ecosystem
                </span>
              </div>

              <h2 className="mt-6 max-w-5xl text-[38px] font-bold leading-[.98] tracking-[-.045em] text-[#062B49] sm:mt-8 sm:text-[48px] md:text-[56px] lg:text-6xl lg:leading-[1.02]">
                Technology from
                <span className="block text-[#9B5B35]">
                  leading ecosystems.
                </span>
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-7 sm:mt-10 md:mt-12 md:grid-cols-[1fr_1px_1fr] md:gap-8 lg:mt-14 lg:gap-10">
                <p className="text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg">
                  EPSILORA Technology works with technology ecosystems
                  across cloud, cybersecurity, networking, computing,
                  storage, data center infrastructure and IT management.
                </p>

                <div className="hidden bg-gray-200 md:block" />

                <div>
                  <p className="text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8 lg:text-lg">
                    Our partner ecosystem helps bring together
                    complementary technologies to create solutions aligned
                    with different business and infrastructure requirements.
                  </p>

                  <div className="mt-6 flex items-center gap-3 sm:mt-8">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#9B5B35]/30 text-xs text-[#9B5B35]">
                      <FiArrowRight size={15} />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#062B49]/50 sm:text-[10px] sm:tracking-[.2em]">
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

      {/* ANIMATED PARTNER LOGOS */}
      <section
        id="partners"
        className="relative overflow-hidden bg-[#F6F7F8] py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="absolute -left-1/2 -top-40 h-[350px] w-[350px] rounded-full bg-[#9B5B35]/5 blur-3xl sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]" />

        <div className="relative mx-auto max-w-[1800px]">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 md:px-10 lg:px-12">
            <div className="inline-flex max-w-full items-center justify-center gap-2 border border-gray-200 bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#9B5B35] sm:text-[10px] sm:tracking-[.18em]">
              <FiLayers className="shrink-0" />
              <span>Our Technology Network</span>
            </div>

            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-[-.04em] text-[#062B49] sm:text-[44px] md:text-[50px] lg:text-5xl">
              Powered by a{" "}
              <span className="text-[#9B5B35]">strong ecosystem.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-gray-600 sm:text-sm sm:leading-7 md:text-base">
              Explore our technology partners moving continuously across
              the EPSILORA ecosystem.
            </p>
          </div>

          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4 md:mt-12">
            <Row items={partnerRows[0]} />
            <Row items={partnerRows[1]} reverse />
            <Row items={partnerRows[2]} />
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <div className="inline-flex max-w-[90%] items-center justify-center gap-2 border border-gray-200 bg-white px-3 py-2 text-[10px] text-gray-500 sm:px-4 sm:text-xs">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#9B5B35]" />
              <span className="text-center">
                Connected Technology Ecosystem · {partners.length} Partners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CAPABILITIES */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[.9fr_1.1fr] md:items-end md:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#9B5B35]" />
                <span className="text-[10px] font-bold uppercase tracking-[.25em] text-[#9B5B35]">
                  Our Capabilities
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#062B49] sm:text-4xl">
                Technology aligned with your business.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:justify-self-end">
              We combine technology capabilities to support infrastructure,
              cloud, security and digital transformation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9B5B35]/50 hover:shadow-[0_10px_28px_rgba(6,43,73,0.07)] sm:p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#062B49] text-white transition-colors duration-300 group-hover:bg-[#9B5B35]">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-bold text-[#062B49] sm:text-lg">
                    {capability.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {capability.description}
                  </p>

                  <div className="mt-4 h-[2px] w-8 bg-[#9B5B35] transition-all duration-300 group-hover:w-14" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY OUR ECOSYSTEM */}
      <section className="relative overflow-hidden bg-[#F7F8F9] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[.8fr_1.2fr] md:gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#9B5B35] sm:w-10" />
                <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#9B5B35] sm:text-[10px] sm:tracking-[.3em]">
                  Why Our Ecosystem
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-[-.035em] text-[#062B49] sm:text-[44px] md:text-[48px] lg:text-5xl">
                Technology aligned
                <span className="block text-[#9B5B35]">
                  with your business.
                </span>
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                We combine technology capabilities to support infrastructure,
                cloud, security and digital transformation requirements.
              </p>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-14 md:mt-16 lg:mt-20">
            <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gray-200 sm:block md:left-[31px]" />

            <div>
              {benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="group relative grid grid-cols-1 gap-3 border-t border-gray-200 py-5 transition-colors duration-300 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-6 md:grid-cols-[64px_200px_minmax(0,1fr)] md:items-center md:gap-6 lg:grid-cols-[64px_220px_minmax(0,1fr)] lg:gap-8 lg:hover:bg-white"
                >
                  <div className="relative z-10 flex items-center sm:h-16 sm:w-16 sm:justify-center sm:bg-[#F7F8F9]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[10px] font-bold text-[#062B49] transition-all duration-300 group-hover:border-[#9B5B35] group-hover:bg-[#9B5B35] group-hover:text-white sm:h-11 sm:w-11 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="sm:pl-1">
                    <span className="text-[8px] font-bold uppercase tracking-[.22em] text-[#9B5B35] sm:text-[9px] sm:tracking-[.25em]">
                      Capability
                    </span>

                    <h3 className="mt-1 text-sm font-bold leading-5 text-[#062B49] sm:text-[15px] md:text-base">
                      {benefit}
                    </h3>
                  </div>

                  <div className="flex items-start justify-between gap-5 sm:col-start-2 md:col-start-3 md:items-center md:gap-8">
                    <p className="max-w-xl text-xs leading-6 text-gray-500 sm:text-[13px] sm:leading-7 md:text-sm">
                      {benefitDescriptions[index]}
                    </p>

                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#9B5B35] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#9B5B35]/40 group-hover:opacity-100 md:flex">
                      <FiArrowRight size={16} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="h-px w-full bg-gray-200" />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-slate-200 pt-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9B5B35]">
              Let's Connect
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#062B49] sm:text-3xl">
              Find the right technology for your business.
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              Discuss your infrastructure, security and technology
              requirements with the EPSILORA team.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 bg-[#062B49] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#9B5B35]"
          >
            Contact Our Team
            <FiArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Partners;
