import React from "react";
import { FiHome, FiPhone } from "react-icons/fi";

import HardwareMenu from "./HardwareMenu";
import SolutionsMenu from "./SolutionsMenu";
import ServicesMenu from "./ServicesMenu";
import BrandPartnersMenu from "./BrandPartnersMenu";

const Navigation = ({
  openMenu,
  handleMenu,
  setOpenMenu,
}) => {
  return (
    <nav
      className="
        w-full
        bg-[#062B49]
        relative
        z-[100]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          px-0
          sm:px-4
          lg:px-8
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-center
            md:flex-nowrap
            w-full
          "
        >

          {/* =====================================================
              HOME
          ====================================================== */}

          <a
            href="/"
            onClick={() => setOpenMenu(null)}
            className="
              w-full
              md:w-auto
              px-5
              lg:px-6
              py-3.5
              md:py-4
              text-white
              text-sm
              font-semibold
              text-center
              flex
              items-center
              justify-center
              gap-2
              hover:bg-[#9B5B35]
              transition-all
              duration-300
            "
          >
            <FiHome
              size={15}
              className="md:hidden"
            />

            <span>
              Home
            </span>
          </a>


          {/* =====================================================
              HARDWARE
          ====================================================== */}

          <HardwareMenu
            openMenu={openMenu}
            handleMenu={handleMenu}
            setOpenMenu={setOpenMenu}
          />


          {/* =====================================================
              SOLUTIONS
          ====================================================== */}

          <SolutionsMenu
            openMenu={openMenu}
            handleMenu={handleMenu}
            setOpenMenu={setOpenMenu}
          />


          {/* =====================================================
              SERVICES
          ====================================================== */}

          <ServicesMenu
            openMenu={openMenu}
            handleMenu={handleMenu}
            setOpenMenu={setOpenMenu}
          />


          {/* =====================================================
              BRAND PARTNERS
          ====================================================== */}

          <BrandPartnersMenu
            openMenu={openMenu}
            handleMenu={handleMenu}
            setOpenMenu={setOpenMenu}
          />


          {/* =====================================================
              CONTACT US
          ====================================================== */}

          <a
            href="/contact"
            onClick={() => setOpenMenu(null)}
            className="
              w-full
              md:w-auto
              px-5
              lg:px-6
              py-3.5
              md:py-4
              text-white
              text-sm
              font-semibold
              text-center
              flex
              items-center
              justify-center
              gap-2
              hover:bg-[#9B5B35]
              transition-all
              duration-300
            "
          >
            <FiPhone
              size={15}
              className="md:hidden"
            />

            <span>
              Contact Us
            </span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;