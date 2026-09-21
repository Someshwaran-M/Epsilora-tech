import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiMenu,
  FiX,
  FiArrowRight,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Navigation from "./navigation/Navigation.jsx";

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  /* =========================================================
     SEARCH STATE
  ========================================================= */

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  /* =========================================================
     SEARCH DATA
  ========================================================= */

  const searchItems = [
    /* HOME */

    {
      title: "Home",
      category: "Website",
      description: "EPSILORA Technology home page",
      path: "/",
      keywords: "home epsilora technology",
    },

    /* CONTACT */

    {
      title: "Contact Us",
      category: "Contact",
      description: "Connect with EPSILORA Technology",
      path: "/contact",
      keywords: "contact us enquiry phone email location",
    },

    /* =====================================================
       HARDWARE
    ===================================================== */

    {
      title: "Data Storage",
      category: "Hardware",
      description: "Storage devices and enterprise storage solutions",
      path: "/technology/hardware/datastorage",
      keywords:
        "data storage storage hard disk hdd ssd nas flash drive tape",
    },

    {
      title: "PC & Server",
      category: "Hardware",
      description: "Computer and server hardware components",
      path: "/technology/hardware/pc-server",
      keywords:
        "pc server processor cpu ram motherboard gpu sound card video card",
    },

    {
      title: "Server & Server Management",
      category: "Hardware",
      description: "Server infrastructure and management solutions",
      path: "/technology/hardware/server-server-management",
      keywords:
        "server server management rack cabinet kvm processors ram",
    },

    /* =====================================================
       SERVICES
    ===================================================== */

    {
      title: "Consulting & Professional Services",
      category: "Services",
      description: "Professional technology consulting and services",
      path: "/technology/services/consulting-professional",
      keywords:
        "consulting professional services technology infrastructure migration security",
    },

    /* =====================================================
       SOLUTIONS
    ===================================================== */

    {
      title: "Cloud Solutions",
      category: "Solutions",
      description: "Cloud infrastructure, migration and security solutions",
      path: "/technology/solutions/cloud",
      keywords:
        "cloud cloud computing cloud migration cloud infrastructure cloud security hybrid multi cloud",
    },

    {
      title: "Data Center Solutions",
      category: "Solutions",
      description: "Enterprise data center infrastructure solutions",
      path: "/technology/solutions/datacenter",
      keywords:
        "data center datacenter infrastructure networking servers storage security",
    },

    {
      title: "Emerging Technology",
      category: "Solutions",
      description: "AI, automation, analytics and IoT solutions",
      path: "/technology/solutions/emerging",
      keywords:
        "ai artificial intelligence machine learning automation robotics analytics iot smart technology",
    },

    {
      title: "Information & Cyber Security",
      category: "Solutions",
      description: "Cybersecurity and information protection solutions",
      path: "/technology/solutions/information-cyber",
      keywords:
        "cyber security cybersecurity information security firewall network security identity access cloud data security",
    },

    /* =====================================================
       PARTNERS
    ===================================================== */

    {
      title: "Technology Partners",
      category: "Partners",
      description: "Explore our technology partner ecosystem",
      path: "/technology/partners",
      keywords:
        "partners brand partners aws azure microsoft google cisco dell hpe vmware",
    },

    {
      title: "AWS",
      category: "Technology Partner",
      description: "AWS cloud technology ecosystem",
      path: "/technology/partners",
      keywords: "aws amazon cloud",
    },

    {
      title: "Microsoft Azure",
      category: "Technology Partner",
      description: "Microsoft Azure cloud platform",
      path: "/technology/partners",
      keywords: "microsoft azure cloud",
    },

    {
      title: "Google Cloud",
      category: "Technology Partner",
      description: "Google Cloud Platform",
      path: "/technology/partners",
      keywords: "google cloud gcp",
    },

    {
      title: "Cisco",
      category: "Technology Partner",
      description: "Enterprise networking technology",
      path: "/technology/partners",
      keywords: "cisco networking network",
    },

    {
      title: "Dell Technologies",
      category: "Technology Partner",
      description: "Enterprise hardware and infrastructure",
      path: "/technology/partners",
      keywords: "dell hardware server storage",
    },

    {
      title: "HPE",
      category: "Technology Partner",
      description: "Enterprise infrastructure technology",
      path: "/technology/partners",
      keywords: "hpe server storage infrastructure",
    },

    {
      title: "VMware",
      category: "Technology Partner",
      description: "Virtualization and cloud technology",
      path: "/technology/partners",
      keywords: "vmware virtualization cloud",
    },

    {
      title: "NVIDIA",
      category: "Technology Partner",
      description: "AI and accelerated computing technology",
      path: "/technology/partners",
      keywords: "nvidia ai gpu graphics computing",
    },
  ];

  /* =========================================================
     MENU CONTROL
  ========================================================= */

  const handleMenu = (menu) => {
    setOpenMenu((currentMenu) =>
      currentMenu === menu ? null : menu
    );
  };

  /* =========================================================
     CLOSE MOBILE NAVIGATION
  ========================================================= */

  const closeMobileNavigation = () => {
    setMobileMenu(false);
    setOpenMenu(null);
    setShowSearchResults(false);
  };

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenMenu(null);
    setShowSearchResults(false);
  };

  /* =========================================================
     CLOSE DESKTOP DROPDOWN
  ========================================================= */

  const closeDropdown = () => {
    setOpenMenu(null);
  };

  /* =========================================================
     SEARCH FILTER
  ========================================================= */

  const filteredResults =
    searchQuery.trim().length > 0
      ? searchItems
          .filter((item) => {
            const searchText = `
              ${item.title}
              ${item.category}
              ${item.description}
              ${item.keywords}
            `.toLowerCase();

            return searchText.includes(
              searchQuery.trim().toLowerCase()
            );
          })
          .slice(0, 8)
      : [];

  /* =========================================================
     SEARCH SUBMIT
  ========================================================= */

  const handleSearch = (e) => {
    e?.preventDefault();

    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setShowSearchResults(false);
      return;
    }

    const exactMatch = searchItems.find((item) => {
      return (
        item.title.toLowerCase() === query ||
        item.keywords
          .toLowerCase()
          .split(" ")
          .includes(query)
      );
    });

    const firstMatch = exactMatch || filteredResults[0];

    if (firstMatch) {
      navigate(firstMatch.path);

      setSearchQuery("");
      setShowSearchResults(false);
      closeMobileMenu();
    }
  };

  /* =========================================================
     SEARCH RESULT CLICK
  ========================================================= */

  const handleSearchResult = (path) => {
    navigate(path);

    setSearchQuery("");
    setShowSearchResults(false);

    closeMobileMenu();
  };

  /* =========================================================
     SEARCH BOX
  ========================================================= */

  const SearchBox = ({ mobile = false }) => {
    return (
      <div className="relative w-full">

        <form onSubmit={handleSearch}>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);

              setShowSearchResults(
                e.target.value.trim().length > 0
              );
            }}
            onFocus={() => {
              if (searchQuery.trim()) {
                setShowSearchResults(true);
              }
            }}
            placeholder="Search products, solutions, or services..."
            autoComplete="off"
            className={`
              w-full
              h-11
              border
              border-gray-300
              bg-white
              text-sm
              text-black
              placeholder:text-gray-400
              pl-4
              pr-12
              outline-none
              focus:border-[#9B5B35]
              transition
              ${
                mobile
                  ? "focus:shadow-[0_0_0_3px_rgba(155,91,53,0.08)]"
                  : ""
              }
            `}
          />

          <button
            type="submit"
            aria-label="Search"
            className="
              absolute
              right-0
              top-0
              h-11
              w-12
              flex
              items-center
              justify-center
              bg-[#062B49]
              text-white
              hover:bg-[#9B5B35]
              transition
            "
          >
            <FiSearch size={19} />
          </button>

        </form>

        {/* ===================================================
            SEARCH RESULTS
        =================================================== */}

        {showSearchResults && searchQuery.trim() && (
          <div
            className="
              absolute
              top-[calc(100%+8px)]
              left-0
              right-0
              z-[99999]
              bg-white
              border
              border-gray-200
              shadow-2xl
              overflow-hidden
            "
          >

            {filteredResults.length > 0 ? (

              <div className="max-h-[420px] overflow-y-auto">

                {filteredResults.map((item) => (

                  <button
                    key={`${item.category}-${item.title}`}
                    type="button"
                    onClick={() =>
                      handleSearchResult(item.path)
                    }
                    className="
                      group
                      w-full
                      text-left
                      px-4
                      py-3.5
                      border-b
                      border-gray-100
                      hover:bg-[#f8f6f4]
                      transition-all
                      duration-200
                    "
                  >

                    <div className="flex items-start gap-3">

                      <div
                        className="
                          shrink-0
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          bg-[#062B49]
                          text-white
                          group-hover:bg-[#9B5B35]
                          transition-colors
                        "
                      >
                        <FiSearch size={15} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          "
                        >

                          <h4
                            className="
                              text-sm
                              font-semibold
                              text-[#062B49]
                              group-hover:text-[#9B5B35]
                              transition-colors
                            "
                          >
                            {item.title}
                          </h4>

                          <FiArrowRight
                            size={14}
                            className="
                              shrink-0
                              text-gray-300
                              group-hover:text-[#9B5B35]
                              transition
                            "
                          />

                        </div>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            uppercase
                            tracking-wider
                            font-semibold
                            text-[#9B5B35]
                          "
                        >
                          {item.category}
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-gray-500
                            line-clamp-1
                          "
                        >
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </button>

                ))}

              </div>

            ) : (

              <div className="px-5 py-8 text-center">

                <div
                  className="
                    mx-auto
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    bg-gray-100
                    text-gray-400
                  "
                >
                  <FiSearch size={19} />
                </div>

                <h4
                  className="
                    mt-3
                    text-sm
                    font-semibold
                    text-[#062B49]
                  "
                >
                  No results found
                </h4>

                <p className="mt-1 text-xs text-gray-500">
                  Try searching for hardware, cloud,
                  security, services or partners.
                </p>

              </div>

            )}

          </div>
        )}

      </div>
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <header className="w-full bg-white relative z-50">

      {/* =====================================================
          MOBILE NAVIGATION STYLE
      ===================================================== */}

      <style>{`
        @media (max-width: 767px) {

          .epsilora-mobile-navigation nav {
            display: block !important;
            background: #ffffff !important;
            width: 100%;
          }

          .epsilora-mobile-navigation nav > div {
            width: 100%;
            padding: 0 !important;
          }

          .epsilora-mobile-navigation nav > div > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            width: 100%;
          }

          .epsilora-mobile-navigation nav > div > div > a,
          .epsilora-mobile-navigation nav > div > div > div > button {
            width: 100% !important;
            min-height: 48px;
            padding: 14px 16px !important;
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            background: #ffffff;
            color: #062B49 !important;
            border-bottom: 1px solid #eeeeee;
            text-align: left;
            font-size: 14px;
          }

          .epsilora-mobile-navigation nav > div > div > a {
            justify-content: center !important;
            text-align: center;
          }

          .epsilora-mobile-navigation nav > div > div > div {
            width: 100%;
          }

          .epsilora-mobile-navigation nav > div > div > div > div {
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
            padding: 8px !important;
            background: #f8f6f4 !important;
            box-shadow: none !important;
            border-top: 2px solid #9B5B35 !important;
          }

          .epsilora-mobile-navigation nav > div > div > div > div > div {
            margin-bottom: 6px !important;
          }

          .epsilora-mobile-navigation nav > div > div > div > div a {
            width: 100% !important;
            min-height: 44px;
            padding: 11px 12px !important;
            background: #ffffff !important;
            font-size: 13px !important;
          }

          .epsilora-mobile-navigation nav > div > div > div > div > div.grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .epsilora-mobile-navigation nav > div > div > div > div > div.grid a {
            height: 65px !important;
            padding: 8px !important;
          }

          .epsilora-mobile-navigation nav > div > div > div > div > div.grid img {
            max-height: 28px !important;
          }

          .epsilora-mobile-navigation nav > div > div > a:hover,
          .epsilora-mobile-navigation nav > div > div > div > button:hover {
            background: #f8f6f4 !important;
            color: #9B5B35 !important;
          }
        }
      `}</style>


      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="border-b border-gray-200 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className="
              min-h-[68px]
              sm:min-h-[78px]
              lg:min-h-[82px]
              flex
              items-center
              justify-between
              gap-3
              sm:gap-5
            "
          >

            {/* LOGO */}

            <a
              href="/"
              onClick={closeMobileMenu}
              className="
                flex
                items-center
                flex-shrink-0
              "
            >

              <img
                src="/logo.jpeg"
                alt="EPSILORA Technology Private Limited"
                className="
                  w-[120px]
                  sm:w-[155px]
                  lg:w-[175px]
                  h-auto
                  max-h-[50px]
                  sm:max-h-[55px]
                  object-contain
                "
              />

            </a>


            {/* DESKTOP SEARCH */}

            <div
              className="
                hidden
                xl:flex
                flex-1
                max-w-[430px]
                mx-4
                2xl:mx-8
              "
            >
              <SearchBox />
            </div>


            {/* TABLET CONTACT */}

            <div
              className="
                hidden
                md:flex
                xl:hidden
                flex-col
                items-end
                ml-auto
              "
            >

              <div className="flex items-center gap-4 text-[#062B49]">

                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaLinkedinIn size={15} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaTwitter size={14} />
                </a>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  mt-2
                  text-[10px]
                  text-gray-600
                "
              >

                <a
                  href="tel:+910000000000"
                  className="
                    hover:text-[#9B5B35]
                    transition
                    whitespace-nowrap
                  "
                >
                  +91 00000 00000
                </a>

                <span className="text-gray-300">
                  |
                </span>

                <a
                  href="mailto:info@epsilora.com"
                  className="
                    hover:text-[#9B5B35]
                    transition
                    whitespace-nowrap
                  "
                >
                  info@epsilora.com
                </a>

              </div>

            </div>


            {/* DESKTOP RIGHT SIDE */}

            <div
              className="
                hidden
                xl:flex
                items-center
                gap-5
                2xl:gap-7
              "
            >

              <div className="flex flex-col items-end">

                <div className="flex items-center gap-4 text-[#062B49]">

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="
                      hover:text-[#9B5B35]
                      transition-all
                      duration-300
                    "
                  >
                    <FaFacebookF size={14} />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="
                      hover:text-[#9B5B35]
                      transition-all
                      duration-300
                    "
                  >
                    <FaInstagram size={17} />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="
                      hover:text-[#9B5B35]
                      transition-all
                      duration-300
                    "
                  >
                    <FaLinkedinIn size={15} />
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="
                      hover:text-[#9B5B35]
                      transition-all
                      duration-300
                    "
                  >
                    <FaTwitter size={14} />
                  </a>

                </div>


                <div className="flex items-start gap-4 mt-2 text-xs">

                  <a
                    href="tel:+910000000000"
                    className="
                      group
                      flex
                      items-start
                      gap-1.5
                      font-semibold
                      text-[#062B49]
                      hover:text-[#9B5B35]
                      transition
                    "
                  >

                    <FiPhone
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                    />

                    <div className="flex flex-col">

                      <span>
                        +91 00000 00000
                      </span>

                      <p
                        className="
                          max-h-0
                          opacity-0
                          overflow-hidden
                          text-[10px]
                          font-normal
                          text-gray-500
                          transition-all
                          duration-300
                          group-hover:max-h-6
                          group-hover:opacity-100
                          group-hover:mt-1
                        "
                      >
                        Talk to our experts
                      </p>

                    </div>

                  </a>


                  <span className="text-gray-300">
                    |
                  </span>


                  <a
                    href="mailto:info@epsilora.com"
                    className="
                      group
                      flex
                      items-start
                      gap-1.5
                      text-gray-600
                      hover:text-[#9B5B35]
                      transition
                    "
                  >

                    <FiMail
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                    />

                    <div className="flex flex-col">

                      <span>
                        info@epsilora.com
                      </span>

                      <p
                        className="
                          max-h-0
                          opacity-0
                          overflow-hidden
                          text-[10px]
                          font-normal
                          text-gray-500
                          transition-all
                          duration-300
                          group-hover:max-h-6
                          group-hover:opacity-100
                          group-hover:mt-1
                        "
                      >
                        Drop us an Email
                      </p>

                    </div>

                  </a>

                </div>

              </div>

            </div>


            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              onClick={() => {
                setMobileMenu((current) => !current);
                setOpenMenu(null);
                setShowSearchResults(false);
              }}
              className="
                md:hidden
                flex
                items-center
                justify-center
                flex-shrink-0
                w-10
                h-10
                border
                border-gray-200
                bg-white
                text-[#062B49]
                hover:border-[#9B5B35]
                hover:text-[#9B5B35]
                transition
                duration-200
                focus:outline-none
              "
              aria-label="Toggle menu"
              aria-expanded={mobileMenu}
            >

              {mobileMenu ? (
                <FiX size={23} />
              ) : (
                <FiMenu size={23} />
              )}

            </button>

          </div>


          {/* =====================================================
              MOBILE MENU
          ===================================================== */}

          {mobileMenu && (

            <div className="md:hidden">

              {/* SEARCH */}

              <div className="border-t border-gray-200 px-1 pt-5">

                <SearchBox mobile />

              </div>


              {/* NAVIGATION */}

              <div className="epsilora-mobile-navigation mt-5">

                <Navigation
                  openMenu={openMenu}
                  handleMenu={handleMenu}
                  setOpenMenu={setOpenMenu}
                  closeMobileNavigation={closeMobileNavigation}
                />

              </div>


              {/* SOCIAL ICONS */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-7
                  mt-6
                  pt-5
                  border-t
                  border-gray-200
                  text-[#062B49]
                "
              >

                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaLinkedinIn size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-[#9B5B35] transition"
                >
                  <FaTwitter size={16} />
                </a>

              </div>


              {/* PHONE */}

              <a
                href="tel:+910000000000"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-5
                  text-sm
                  font-semibold
                  text-[#062B49]
                  hover:text-[#9B5B35]
                  transition
                "
              >

                <FiPhone size={16} />

                <span>
                  +91 00000 00000
                </span>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:info@epsilora.com"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-3
                  mb-5
                  text-sm
                  text-gray-600
                  hover:text-[#9B5B35]
                  transition
                "
              >

                <FiMail size={16} />

                <span>
                  info@epsilora.com
                </span>

              </a>

            </div>

          )}

        </div>

      </div>


      {/* =====================================================
          DESKTOP / TABLET NAVIGATION
      ===================================================== */}

      <div className="hidden md:block">

        <Navigation
          openMenu={openMenu}
          handleMenu={handleMenu}
          setOpenMenu={setOpenMenu}
          closeMobileNavigation={closeMobileNavigation}
        />

      </div>

    </header>
  );
};

export default Navbar;