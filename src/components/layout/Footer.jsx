import React from "react";
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

  // Back to top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Company Links
  const quickLinks = [
    ["Home", "/"],
    ["Services", "/technology/services/consulting-professional"],
    ["Contact Us", "/contact"],
    ["Brand Partners", "/technology/partners"],
  ];

  // Hardware Links
  const hardwareLinks = [
    ["Data Storage", "/technology/hardware/datastorage"],
    ["PC & Server", "/technology/hardware/pc-server"],
    [
      "Server & Server Management",
      "/technology/hardware/server-server-management",
    ],
  ];

  // Solutions Links
  const solutionLinks = [
    ["Cloud Solutions", "/technology/solutions/cloud"],
    ["Data Center Solutions", "/technology/solutions/datacenter"],
    ["Emerging Technology", "/technology/solutions/emerging"],
    [
      "Information & Cyber Security",
      "/technology/solutions/information-cyber",
    ],
  ];

  // Social Links
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      href: "#",
    },
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      href: "#",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      href: "#",
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      href: "#",
    },
  ];

  // Reusable Footer Link
  const FooterLink = ({ name, path }) => (
    <a
      href={path}
      className="
        group
        inline-flex
        items-center
        gap-2
        text-[13px]
        text-white/50
        hover:text-[#C18A61]
        transition-all
        duration-300
      "
    >
      <span
        className="
          w-0
          h-px
          bg-[#9B5B35]
          group-hover:w-3
          transition-all
          duration-300
        "
      />

      {name}
    </a>
  );

  return (
    <footer className="relative overflow-hidden bg-[#062B49] text-white">

      {/* ================= BACKGROUND GLOW ================= */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-80
          h-80
          rounded-full
          bg-[#9B5B35]/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* ================= CTA ================= */}
      <section className="relative border-b border-white/10">
        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-9
            sm:py-10
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-5
            "
          >
            {/* CTA CONTENT */}
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  text-[#C18A61]
                "
              >
                <span className="w-6 h-px bg-[#9B5B35]" />

                Let's Build Together
              </div>

              <h2
                className="
                  mt-2
                  text-2xl
                  sm:text-3xl
                  font-bold
                  leading-tight
                "
              >
                Build a smarter
                <span className="text-[#C18A61]">
                  {" "}
                  technology future.
                </span>
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-white/45">
                Reliable technology solutions for modern businesses.
              </p>
            </div>

            {/* CTA BUTTON */}
            <a
              href="/contact"
              className="
                group
                shrink-0
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                bg-[#9B5B35]
                hover:bg-[#C18A61]
                text-white
                text-xs
                font-semibold
                transition-all
                duration-300
              "
            >
              Contact Us

              <FiArrowRight
                size={15}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <section className="relative">
        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-9
            sm:py-11
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              gap-9
              lg:gap-14
            "
          >

            {/* ================= COMPANY INFO ================= */}
            <div className="lg:w-[32%] shrink-0">

              {/* LOGO */}
              <a href="/" className="inline-block">
                <img
                  src="/logo.jpeg"
                  alt="EPSILORA Technology Private Limited"
                  className="
                    w-[155px]
                    sm:w-[170px]
                    h-auto
                    max-h-[55px]
                    object-contain
                    object-left
                  "
                />
              </a>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4
                  max-w-md
                  text-xs
                  sm:text-sm
                  leading-6
                  text-white/45
                "
              >
                EPSILORA Technology Private Limited provides hardware,
                infrastructure, cloud, cybersecurity and professional
                technology solutions.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-2 mt-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      border
                      border-white/10
                      text-white/45
                      hover:bg-[#9B5B35]
                      hover:border-[#9B5B35]
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ================= FOOTER LINKS ================= */}
            <div
              className="
                flex-1
                flex
                flex-wrap
                gap-x-10
                sm:gap-x-14
                gap-y-7
              "
            >

              {/* ================= COMPANY ================= */}
              <div className="min-w-[120px]">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    font-bold
                    text-[#C18A61]
                  "
                >
                  Company
                </p>

                <ul className="mt-3 space-y-2.5">
                  {quickLinks.map(([name, path]) => (
                    <li key={name}>
                      <FooterLink
                        name={name}
                        path={path}
                      />
                    </li>
                  ))}
                </ul>

              </div>

              {/* ================= HARDWARE ================= */}
              <div className="min-w-[145px]">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    font-bold
                    text-[#C18A61]
                  "
                >
                  Hardware
                </p>

                <ul className="mt-3 space-y-2.5">
                  {hardwareLinks.map(([name, path]) => (
                    <li key={name}>
                      <FooterLink
                        name={name}
                        path={path}
                      />
                    </li>
                  ))}
                </ul>

              </div>

              {/* ================= SOLUTIONS ================= */}
              <div className="min-w-[175px]">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    font-bold
                    text-[#C18A61]
                  "
                >
                  Solutions
                </p>

                <ul className="mt-3 space-y-2.5">
                  {solutionLinks.map(([name, path]) => (
                    <li key={name}>
                      <FooterLink
                        name={name}
                        path={path}
                      />
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div
            className="
              mt-8
              pt-7
              border-t
              border-white/10
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
            "
          >

            {/* ================= LOCATION ================= */}
            <div className="flex items-start gap-3">

              <FiMapPin
                size={17}
                className="shrink-0 mt-0.5 text-[#C18A61]"
              />

              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-[#C18A61]
                    font-bold
                  "
                >
                  Chennai Office
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-white/45
                  "
                >
                  No. 378, Sudhiksha Apartment,
                  Second Floor, S1,
                  Sivaprakasam Nagar 2nd Main Road,
                  Surapet,
                  Chennai - 600066
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=No.+378,+Sudhiksha+Apartment,+Second+Floor,+S1,+Sivaprakasam+Nagar+2nd+Main+Road,+Surapet,+Chennai+-+600066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-1
                    inline-flex
                    items-center
                    gap-1.5
                    text-[11px]
                    font-semibold
                    text-[#C18A61]
                    hover:text-white
                    transition
                  "
                >
                  View Location

                  <FiExternalLink size={11} />
                </a>

              </div>
            </div>

            {/* ================= PHONE + EMAIL ================= */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                sm:gap-7
              "
            >

              {/* PHONE */}
              <a
                href="tel:+910000000000"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-white/55
                  hover:text-[#C18A61]
                  transition
                "
              >
                <FiPhone
                  size={15}
                  className="text-[#C18A61]"
                />

                +91 00000 00000
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@epsilora.in"
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-white/55
                  hover:text-[#C18A61]
                  transition
                "
              >
                <FiMail
                  size={15}
                  className="text-[#C18A61]"
                />

                info@epsilora.in
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM BAR ================= */}
      <section className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-4
          "
        >

          {/* COPYRIGHT + LEGAL */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-3
            "
          >

            {/* COPYRIGHT */}
            <p
              className="
                text-[11px]
                sm:text-xs
                text-white/40
                leading-relaxed
              "
            >
              © {currentYear} EPSILORA Technology Private Limited.
              All Rights Reserved.
            </p>

            {/* CIN + LEGAL LINKS */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1.5
                text-[10px]
                sm:text-[12px]
                text-white/35
              "
            >

              <span>
                CIN: U62099TN2026PTC191846
              </span>

              <span className="text-white/15">
                |
              </span>

              <a
                href="/privacy-policy"
                className="
                  hover:text-[#C18A61]
                  transition-colors
                  duration-300
                "
              >
                Privacy
              </a>

              <span className="text-white/15">
                |
              </span>

              <a
                href="/terms"
                className="
                  hover:text-[#C18A61]
                  transition-colors
                  duration-300
                "
              >
                Terms
              </a>

            </div>
          </div>

          {/* POWERED BY */}
          <div
            className="
              mt-3
              pt-3
              border-t
              border-white/5
              text-center
            "
          >
            <p
              className="
                text-xs
                sm:text-sm
                text-white/40
                tracking-wide
              "
            >
              Powered By{" "}
              <span
                className="
                  font-semibold
                  text-[#C18A61]
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                MK Dynamic Technology
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ================= BACK TO TOP ================= */}
      <button
        type="button"
        onClick={goToTop}
        aria-label="Back to top"
        className="
          fixed
          right-4
          bottom-4
          z-40
          w-9
          h-9
          flex
          items-center
          justify-center
          bg-[#9B5B35]
          hover:bg-[#C18A61]
          text-white
          shadow-lg
          transition-all
          duration-300
        "
      >
        <FiArrowUp size={15} />
      </button>

    </footer>
  );
};

export default Footer;