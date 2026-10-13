
import React from "react";
import { FiChevronDown, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

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
    <div className="relative w-full font-['Roboto',sans-serif] lg:w-auto">
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
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-3 md:grid-cols-4">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                to="/technology/partners"
                onClick={closeMenu}
                title={`${partner.name} — ${partner.category}`}
                className="group relative flex min-h-[92px] min-w-0 flex-col items-center justify-center overflow-hidden bg-white px-2 py-3 transition-colors duration-300 hover:bg-[#F7F9FB] sm:min-h-[100px] sm:px-3"
              >
                {/* HOVER ACCENT */}
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#9B5B35] transition-all duration-300 group-hover:w-full" />

                {/* LOGO IMAGE */}
                <div className="flex h-10 w-full items-center justify-center sm:h-11">
                  <img
                    src={`/assets/partners/${partner.logo}`}
                    alt={partner.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                    className="max-h-8 max-w-[115px] object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 sm:max-h-9 sm:max-w-[135px]"
                  />
                </div>

                {/* BRAND NAME */}
                <span className="mt-2 max-w-full text-center text-[10px] font-semibold leading-4 text-slate-600 transition-colors duration-300 group-hover:text-[#062B49] sm:text-[11px]">
                  {partner.name}
                </span>
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
