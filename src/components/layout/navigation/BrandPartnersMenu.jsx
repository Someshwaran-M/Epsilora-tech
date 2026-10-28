
import React from "react";
import { FiChevronDown, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const partners = [
  { name: "Trellix", logo: "/partners/trellix.png", category: "Cyber Security" },
  { name: "Trend Micro", logo: "trend-micro.png", category: "Cyber Security" },
  { name: "Radware", logo: "radware.jpg", category: "Network Security" },
  { name: "Hitachi Vantara", logo: "hitachi-vantara.jpg", category: "Infrastructure" },
  { name: "Securonix", logo: "securonix.jpg", category: "Cyber Security" },
  { name: "Nutanix", logo: "nutanix.jpg", category: "Cloud & Infrastructure" },
  { name: "Netskope", logo: "netskope.png", category: "Cloud Security" },
  { name: "Forescout", logo: "forescout.jpg", category: "Network Security" },
  { name: "Keysight", logo: "keysight.jpg", category: "Network Testing" },
  { name: "OpenText", logo: "opentext.png", category: "Enterprise Software" },
  { name: "AlgoSec", logo: "algosec.jpg", category: "Network Security" },
  { name: "OPSWAT", logo: "opswat.png", category: "Cyber Security" },
  { name: "Varonis", logo: "varonis.jpg", category: "Data Security" },
  { name: "Utimaco", logo: "utimaco.jpg", category: "Data Security" },
  { name: "NETSCOUT", logo: "netscout.png", category: "Network Security" },
  { name: "InnSpark ", logo: "innspark.jpeg", category: "Cyber Security" },
  { name: "efficientIP", logo: "efficient-ip.png", category: "Network Infrastructure" },
  { name: "XM Cyber", logo: "xm-cyber.png", category: "Cyber Security" },
  { name: "Ivanti", logo: "ivanti.jpg", category: "IT Management" },
  { name: "HEAL", logo: "heal.png", category: "Technology" },

  { name: "Accops", logo: "accops.png", category: "Workspace Solutions" },
  { name: "IRONSCALES", logo: "ironscales.jpg", category: "Email Security" },
  { name: "Balbix", logo: "balbix.jpg", category: "Cyber Security" },
  { name: "Versa Networks", logo: "versa-networks.png", category: "Network Security" },
  { name: "Genie Networks", logo: "genie-networks.png", category: "Network Analytics" },
  { name: "Indusface", logo: "indusface.jpg", category: "Application Security" },
  { name: "SecuPi", logo: "secupi.png", category: "Data Security" },
  { name: "BMC", logo: "bmc.jpg", category: "IT Management" },
  { name: "QNU", logo: "qnu.png", category: "Technology" },
  { name: "Adopt", logo: "adopt.jpg", category: "Technology" },
  { name: "Sandvine", logo: "sandvine.jpg", category: "Network Solutions" },
  { name: "Supermicro", logo: "supermicro.jpg", category: "Infrastructure" },
  { name: "Commvault", logo: "commvault.png", category: "Data Protection" },
  { name: "Seraphic", logo: "seraphic.jpg", category: "Browser Security" },

  { name: "Saviynt", logo: "saviynt.png", category: "Identity Security" },
  { name: "Cambium Networks", logo: "cambium-networks.jpg", category: "Networking" },
  { name: "SOCRadar", logo: "socradar.jpg", category: "Threat Intelligence" },
  { name: "Perpetuuiti", logo: "perpetuuiti.png", category: "Technology" },
  { name: "Videonetics", logo: "videonetics.png", category: "Video Analytics" },
  { name: "VIVOTEK", logo: "vivotek.png", category: "Physical Security" },
  { name: "Checkmarx", logo: "checkmarx.jpg", category: "Application Security" },
  { name: "Semperis", logo: "semperis.png", category: "Identity Security" },
  { name: "RAD", logo: "rad.jpg", category: "Networking" },
  { name: "Allot", logo: "allot.jpg", category: "Network Security" },
  { name: "EverestIMS", logo: "everest-ims.png", category: "IT Management" },
  { name: "Lookout", logo: "lookout.jpg", category: "Mobile Security" },
  { name: "Acronis", logo: "acronis.png", category: "Data Protection" },
  { name: "Vantageo", logo: "vantageo.png", category: "Infrastructure" },
  { name: "Alcatel-Lucent Enterprise", logo: "alcatel-lucent-enterprise.png", category: "Networking" },
  { name: "Arcon", logo: "arcon.png", category: "Privileged Access" },
  { name: "Sectona", logo: "sectona.png", category: "Privileged Access" },
  { name: "Delinea", logo: "delinea.png", category: "Identity Security" },
  { name: "Rapid7", logo: "rapid7.png", category: "Cyber Security" },
  { name: "vehere", logo: "xevere.png", category: "Network Security" },
  { name: "AttackFence", logo: "attackfence.png", category: "Cyber Security" },
];

const BrandPartnersMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
  closeMobileNavigation,
}) => {
  const isOpen = openMenu === "partners";

  const closeMenu = () => {
    if (closeMobileNavigation) {
      closeMobileNavigation();
    } else if (setOpenMenu) {
      setOpenMenu(null);
    }
  };

  const openPartnersPage = () => {
    closeMenu();
    window.location.href = "/technology/partners";
  };

  const handlePartnersClick = () => {
    handleMenu("partners");
  };

  return (
    <div className="relative w-full lg:w-auto">
      {/* MENU TRIGGER */}
      <button
        type="button"
        onClick={handlePartnersClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#9B5B35] lg:w-auto lg:py-4 xl:px-6"
      >
        <span>Technology Alliance</span>
        <FiChevronDown
          size={15}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* PARTNERS DROPDOWN */}
      {isOpen && (
        <div
          className="
            fixed left-3 right-3 top-[72px] z-[9999]
            max-h-[calc(100dvh-88px)] overflow-y-auto
            border border-slate-200 border-t-4 border-t-[#9B5B35]
            bg-white p-4
            shadow-[0_24px_70px_rgba(6,43,73,0.18)]
            sm:left-5 sm:right-5 sm:top-[76px] sm:p-5
            md:left-8 md:right-8 md:top-[80px] md:p-6
            lg:absolute lg:left-auto lg:right-0 lg:top-full
            lg:mt-2 lg:max-h-[78vh] lg:w-[760px] lg:max-w-[calc(100vw-32px)]
            lg:p-6
          "
        >
          {/* HEADER */}
          <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#9B5B35]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
                  Our Technology Ecosystem
                </p>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#062B49] sm:text-2xl">
                Technology Alliance
              </h3>

              <p className="mt-2 max-w-md text-xs leading-5 text-slate-500 sm:text-sm">
                Explore the technology brands supporting our enterprise,
                infrastructure, security, and digital solutions.
              </p>
            </div>

            <button
              type="button"
              onClick={openPartnersPage}
              className="inline-flex w-fit shrink-0 items-center gap-2 text-xs font-semibold text-[#062B49] transition-colors hover:text-[#9B5B35] sm:text-sm"
            >
              View All Partners
              <FiArrowRight size={15} />
            </button>
          </div>

          {/* PARTNER COUNT */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
              Technology Partners
            </span>
            <span className="text-xs font-semibold text-[#9B5B35]">
              {partners.length} Brands
            </span>
          </div>

          
{/* LOGO GRID */}
<div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {partners.map((partner) => (
    <Link
      key={partner.name}
      to="/technology/partners"
      onClick={closeMenu}
      title={`${partner.name} — ${partner.category}`}
      className="group relative isolate flex min-h-[150px] min-w-0 items-center justify-center overflow-hidden bg-white p-4 transition-colors duration-300 hover:bg-[#F7F9FB] sm:min-h-[170px]"
    >
      {/* LOGO IMAGE */}
      <img
        src={`/partners/${partner.logo.replace(/^\/?partners\//, "")}`}
        alt={partner.name}
        loading="lazy"
        onError={(event) => {
          console.error(
            `Failed to load ${partner.name} logo:`,
            event.currentTarget.src
          );
        }}
        className="absolute inset-0 m-auto h-auto max-h-[75%] w-auto max-w-[80%] object-contain opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20"
      />

      {/* HOVER OVERLAY — CONFINED TO THE BOX */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#062B49]/0 px-2 text-center opacity-0 transition-all duration-300 group-hover:bg-[#062B49]/50 group-hover:opacity-100">
        <span className="max-w-full break-words text-sm font-bold text-white sm:text-base">
          {partner.name}
        </span>

        <span className="mt-2 h-[2px] w-8 bg-[#9B5B35] transition-all duration-300 group-hover:w-14" />

        <span className="mt-2 max-w-full break-words text-[10px] leading-4 text-white/80 sm:text-xs">
          {partner.category}
        </span>
      </div>

      {/* HOVER BORDER */}
      <span className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-[#9B5B35]" />
    </Link>
  ))}
</div>

          {/* FOOTER */}
          <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#062B49]">
                Connected Technology Ecosystem
              </p>
              <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                Cloud · Security · Infrastructure · Networking · Computing
              </p>
            </div>

            <button
              type="button"
              onClick={openPartnersPage}
              className="group inline-flex min-h-10 w-full shrink-0 items-center justify-center gap-2 bg-[#062B49] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#9B5B35] sm:w-auto sm:text-sm"
            >
              Explore All Partners
              <FiExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPartnersMenu;
