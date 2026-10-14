
import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiArrowUp,
  FiExternalLink,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Hardware", path: "/technology/hardware" },
    { name: "Solutions", path: "/technology/solutions" },
    { name: "Services", path: "/technology/services" },
    { name: "Technology Alliance", path: "/technology/partners" },
    { name: "Contact Us", path: "/contact" },
  ];

  // All hardware links point to sections on one page.
  const hardwareLinks = [
    {
      name: "Data Center",
      path: "/technology/hardware#data-center",
    },
    {
      name: "Servers & Devices",
      path: "/technology/hardware#servers-devices",
    },
    {
      name: "Firewall Solutions",
      path: "/technology/hardware#firewall",
    },
    {
      name: "Cybersecurity",
      path: "/technology/hardware#cybersecurity",
    },
  ];

  const solutionLinks = [
    {
      name: "Cloud Solutions",
      path: "/technology/solutions/cloud",
    },
    {
      name: "Data Center Solutions",
      path: "/technology/solutions/datacenter",
    },
    {
      name: "Emerging Technology",
      path: "/technology/solutions/emerging",
    },
    {
      name: "Information & Cybersecurity",
      path: "/technology/solutions/information-cyber",
    },
  ];

  // Replace # with your actual social media profile URLs.
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "#",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "#",
    },
  ];

  const FooterLink = ({ name, path }) => (
    <li>
      <Link
        to={path}
        className="group inline-flex items-center gap-2 text-[13px] leading-6 text-white/60 transition-colors duration-300 hover:text-[#C18A61]"
      >
        <span className="h-px w-0 shrink-0 bg-[#C18A61] transition-all duration-300 group-hover:w-3" />
        <span>{name}</span>
      </Link>
    </li>
  );

  const FooterColumn = ({ title, links }) => (
    <div className="min-w-0">
      <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C18A61]">
        {title}
      </h3>

      <ul className="space-y-2">
        {links.map((link) => (
          <FooterLink
            key={link.name}
            name={link.name}
            path={link.path}
          />
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative overflow-hidden bg-[#062B49] text-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full bg-[#9B5B35]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#C18A61]/5 blur-3xl"
      />

      {/* Call to action */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-11 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C18A61] sm:text-xs">
                <span className="h-px w-6 bg-[#9B5B35]" />
                Let&apos;s Build Together
              </div>

              <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Build a smarter{" "}
                <span className="text-[#C18A61]">
                  technology future.
                </span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Reliable technology solutions for modern businesses.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 border border-[#9B5B35] bg-[#9B5B35] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#C18A61] hover:bg-[#C18A61] sm:w-auto"
            >
              Contact Us
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-10">
            {/* Company information */}
            <div>
              <Link
                to="/"
                aria-label="EPSILORA home"
                className="inline-flex rounded-sm"
              >
                <img
                  src="/logo.jpeg"
                  alt="EPSILORA Technology Private Limited"
                  className="h-auto max-h-[65px] w-[165px] object-contain object-left sm:w-[180px]"
                />
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                EPSILORA Technology Private Limited provides hardware,
                infrastructure, cloud, cybersecurity and professional
                technology solutions for modern businesses.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    title={social.name}
                    target={
                      social.href !== "#" ? "_blank" : undefined
                    }
                    rel={
                      social.href !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#9B5B35] hover:bg-[#9B5B35] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company navigation */}
            <FooterColumn
              title="Company"
              links={quickLinks}
            />

            {/* Hardware navigation */}
            <FooterColumn
              title="Hardware"
              links={hardwareLinks}
            />

            {/* Solutions navigation */}
            <FooterColumn
              title="Solutions"
              links={solutionLinks}
            />
          </div>

          {/* Contact information */}
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            {/* Office address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#9B5B35]/50 bg-[#9B5B35]/10 text-[#C18A61]">
                <FiMapPin size={19} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C18A61]">
                  Chennai Office
                </h3>

                <address className="mt-3 text-sm not-italic leading-6 text-white/60">
                  No. 378, Sudhiksha Apartment,
                  <br />
                  Second Floor, S1,
                  <br />
                  Sivaprakasam Nagar 2nd Main Road,
                  <br />
                  Surapet, Chennai - 600066
                </address>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=No.+378,+Sudhiksha+Apartment,+Second+Floor,+S1,+Sivaprakasam+Nagar+2nd+Main+Road,+Surapet,+Chennai+-+600066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#C18A61] transition-colors hover:text-white"
                >
                  View Location
                  <FiExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Phone and email */}
            <div className="flex flex-col gap-5">
              <a
                href="tel:+910000000000"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#9B5B35]/50 bg-[#9B5B35]/10 text-[#C18A61]">
                  <FiPhone size={18} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#C18A61]">
                    Phone
                  </span>
                  <span className="mt-2 block break-words text-sm text-white/60 transition-colors group-hover:text-white">
                    +91 00000 00000
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@epsilora.com"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#9B5B35]/50 bg-[#9B5B35]/10 text-[#C18A61]">
                  <FiMail size={18} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#C18A61]">
                    Email
                  </span>
                  <span className="mt-2 block break-words text-sm text-white/60 transition-colors group-hover:text-white">
                    info@epsilora.com
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright and legal links */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs leading-6 text-white/50">
              © {currentYear} EPSILORA Technology Private Limited.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50">
              <span className="break-words">
                CIN: U62099TN2026PTC191846
              </span>

              <span className="hidden text-white/20 sm:inline">
                |
              </span>

              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-[#C18A61]"
              >
                Privacy Policy
              </Link>

              <span className="hidden text-white/20 sm:inline">
                |
              </span>

              <Link
                to="/terms"
                className="transition-colors hover:text-[#C18A61]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Developer credit */}
          <div className="mt-5 border-t border-white/10 pt-4 text-center">
            <p className="text-xs tracking-wide text-white/50 sm:text-sm">
              Powered by{" "}
              <span className="font-semibold text-[#C18A61]">
                MK Dynamic Technology
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Back to top */}
      <button
        type="button"
        onClick={goToTop}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-5 right-4 z-40 flex h-11 w-11 items-center justify-center border border-[#C18A61] bg-[#9B5B35] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#C18A61] sm:bottom-6 sm:right-6"
      >
        <FiArrowUp size={19} />
      </button>
    </footer>
  );
};

export default Footer;
