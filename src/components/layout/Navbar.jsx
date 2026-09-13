import React, { useState } from "react";

import {
  FiSearch,
  FiChevronDown,
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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);


  const handleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenMenu(null);
  };


  return (
    <header className="w-full bg-white relative z-50">

      {/* =====================================================
          MOBILE NAVIGATION STYLE
          Navigation.jsx is reused - no navigation code here
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

            {/* =================================================
                LOGO
            ================================================= */}

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


            {/* =================================================
                DESKTOP SEARCH
            ================================================= */}

            <div className="hidden xl:flex flex-1 max-w-[430px] mx-4 2xl:mx-8">

              <div className="relative w-full">

                <input
                  type="text"
                  placeholder="Search products, solutions, or services..."
                  className="
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
                  "
                />

                <button
                  type="button"
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

              </div>

            </div>


            {/* =================================================
                TABLET CONTACT
            ================================================= */}

            <div className="hidden md:flex xl:hidden flex-col items-end ml-auto">

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


            {/* =================================================
                DESKTOP RIGHT SIDE
            ================================================= */}

            <div className="hidden xl:flex items-center gap-5 2xl:gap-7">

              <div className="flex flex-col items-end">

                {/* Social Icons */}

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


                {/* Phone + Email */}

                <div className="flex items-start gap-4 mt-2 text-xs">

                  {/* Phone */}

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


                  {/* Email */}

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


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                setMobileMenu(!mobileMenu);
                setOpenMenu(null);
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
              ONLY VISIBLE WHEN MENU BUTTON IS CLICKED
          ===================================================== */}

          {mobileMenu && (
            <div className="md:hidden">

              {/* =================================================
                  SEARCH - TOP
              ================================================= */}

              <div className="border-t border-gray-200 px-1 pt-5">

                <div className="relative w-full">

                  <input
                    type="text"
                    placeholder="Search products, solutions, or services..."
                    className="
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
                    "
                  />

                  <button
                    type="button"
                    aria-label="Search"
                    className="
                      absolute
                      right-0
                      top-0
                      h-11
                      w-11
                      flex
                      items-center
                      justify-center
                      bg-[#062B49]
                      text-white
                      hover:bg-[#9B5B35]
                      transition
                    "
                  >
                    <FiSearch size={18} />
                  </button>

                </div>

              </div>


              {/* =================================================
                  NAVIGATION - CENTER
                  USING YOUR Navigation.jsx
              ================================================= */}

              <div className="epsilora-mobile-navigation mt-5">

                <Navigation
                  openMenu={openMenu}
                  handleMenu={handleMenu}
                  setOpenMenu={setOpenMenu}
                />

              </div>


              {/* =================================================
                  SOCIAL ICONS - BOTTOM
              ================================================= */}

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


              {/* =================================================
                  PHONE - BOTTOM
              ================================================= */}

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


              {/* =================================================
                  EMAIL - BOTTOM
              ================================================= */}

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
          YOUR EXISTING Navigation.jsx
      ===================================================== */}

      <div className="hidden md:block">

        <Navigation
          openMenu={openMenu}
          handleMenu={handleMenu}
          setOpenMenu={setOpenMenu}
        />

      </div>

    </header>
  );
};


export default Navbar;