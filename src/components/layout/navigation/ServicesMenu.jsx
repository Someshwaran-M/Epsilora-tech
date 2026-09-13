import React, { useState } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const ServicesMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: "Consulting & Professional Services",
      description:
        "Expert consulting, migration and professional services",
      key: "consulting-professional",
    },
  ];

  const services = {
    "consulting-professional": [
      {
        title: "Active Directory Migration And Consolidation",
        link:
          "/technology/services/consulting-professional/active-directory-migration",
      },
      {
        title: "Data Center Relocation",
        link:
          "/technology/services/consulting-professional/data-center-relocation",
      },
      {
        title: "Expert Exchange Migration",
        link:
          "/technology/services/consulting-professional/expert-exchange-migration",
      },
      {
        title: "Network Assessment Services",
        link:
          "/technology/services/consulting-professional/network-assessment-services",
      },
      {
        title: "Server Virtualization Assessment",
        link:
          "/technology/services/consulting-professional/server-virtualization-assessment",
      },
      {
        title: "Virtual Environment Security",
        link:
          "/technology/services/consulting-professional/virtual-environment-security",
      },
      {
        title: "Virtualized Desktop Infrastructure Assessment",
        link:
          "/technology/services/consulting-professional/virtualized-desktop-infrastructure-assessment",
      },
      {
        title: "VMWare Health Check",
        link:
          "/technology/services/consulting-professional/vmware-health-check",
      },
    ],
  };

  const handleServicesClick = () => {
    handleMenu("services");
    setActiveCategory(null);
  };

  const handleCategoryClick = (key) => {
    setActiveCategory(key);
  };

  const handleBack = () => {
    setActiveCategory(null);
  };

  const handleClose = () => {
    setActiveCategory(null);
    setOpenMenu(null);
  };

  const activeCategoryData = categories.find(
    (category) => category.key === activeCategory
  );

  return (
    <div className="relative w-full lg:w-auto">

      {/* =====================================================
          SERVICES BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={handleServicesClick}
        className="
          w-full
          lg:w-auto

          flex
          items-center
          justify-center
          gap-2

          px-5
          sm:px-6
          lg:px-6

          py-3.5
          lg:py-4

          text-white
          text-sm
          font-semibold

          hover:bg-[#9B5B35]
          active:bg-[#9B5B35]

          transition-all
          duration-300
        "
      >
        <span>Services</span>

        <FiChevronDown
          size={14}
          className={`
            transition-transform
            duration-300
            ${
              openMenu === "services"
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {/* =====================================================
          MOBILE + TABLET
          0px - 1023px
      ===================================================== */}

      {openMenu === "services" && (
        <div
          className="
            fixed

            left-3
            right-3

            top-[72px]

            z-[99999]

            w-auto

            max-h-[calc(100vh-88px)]

            overflow-hidden

            bg-white

            shadow-2xl

            border-t-4
            border-[#9B5B35]

            rounded-lg

            lg:hidden
          "
        >

          {/* =================================================
              CATEGORY VIEW
          ================================================= */}

          {!activeCategory && (
            <div className="p-3">

              {/* HEADER */}

              <div
                className="
                  px-2
                  py-3
                  sm:px-3
                  sm:py-4
                  mb-1
                "
              >
                <p
                  className="
                    text-[10px]
                    sm:text-[11px]

                    uppercase
                    tracking-[0.16em]
                    sm:tracking-[0.18em]

                    text-[#9B5B35]
                    font-bold
                  "
                >
                  Services
                </p>

                <h3
                  className="
                    text-lg
                    sm:text-xl

                    font-bold
                    text-[#062B49]

                    mt-1
                  "
                >
                  Our Services
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-500

                    mt-2

                    leading-5
                  "
                >
                  Select a service category
                  to explore our professional services.
                </p>
              </div>

              {/* CATEGORY LIST */}

              <div className="max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain">

                {categories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() =>
                      handleCategoryClick(category.key)
                    }
                    className="
                      group

                      w-full

                      flex
                      items-center
                      justify-between

                      gap-3
                      sm:gap-4

                      text-left

                      px-3
                      sm:px-4

                      py-4

                      rounded-md

                      hover:bg-[#f8f6f4]
                      active:bg-[#f8f6f4]

                      transition-all
                      duration-300
                    "
                  >

                    <div className="min-w-0">

                      <p
                        className="
                          text-sm
                          sm:text-[15px]

                          font-semibold

                          text-[#111111]

                          group-hover:text-[#9B5B35]

                          transition

                          leading-5
                        "
                      >
                        {category.title}
                      </p>

                      <p
                        className="
                          text-[11px]
                          sm:text-xs

                          text-gray-500

                          mt-1

                          leading-5
                        "
                      >
                        {category.description}
                      </p>

                    </div>

                    <FiArrowRight
                      size={17}
                      className="
                        flex-shrink-0

                        text-[#9B5B35]

                        group-hover:translate-x-1

                        transition-transform
                      "
                    />

                  </button>
                ))}

              </div>

            </div>
          )}

          {/* =================================================
              SERVICE LIST VIEW
          ================================================= */}

          {activeCategory && (
            <div
              className="
                flex
                flex-col

                max-h-[calc(100vh-88px)]
              "
            >

              {/* BACK BUTTON */}

              <div className="flex-shrink-0 bg-white">

                <button
                  type="button"
                  onClick={handleBack}
                  className="
                    flex
                    items-center
                    gap-2

                    px-4
                    py-3

                    text-sm
                    font-semibold

                    text-[#9B5B35]

                    hover:text-[#062B49]
                    active:text-[#062B49]

                    transition-colors
                  "
                >
                  <FiArrowLeft size={16} />

                  <span>
                    Back to Services
                  </span>
                </button>

              </div>

              {/* HEADER */}

              <div
                className="
                  flex-shrink-0

                  px-4
                  pb-3

                  border-b
                  border-gray-200
                "
              >
                <p
                  className="
                    text-[10px]

                    uppercase
                    tracking-[0.18em]

                    text-[#9B5B35]

                    font-bold
                  "
                >
                  Services
                </p>

                <h3
                  className="
                    text-lg
                    sm:text-xl

                    font-bold
                    text-[#062B49]

                    mt-1

                    leading-6
                  "
                >
                  {activeCategoryData?.title}
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-500

                    mt-1

                    leading-5
                  "
                >
                  {activeCategoryData?.description}
                </p>
              </div>

              {/* SERVICE LIST */}

              <div
                className="
                  flex-1

                  overflow-y-auto

                  overscroll-contain

                  p-2

                  max-h-[calc(100vh-210px)]
                "
              >
                {services[activeCategory]?.map(
                  ({ title, link }) => (
                    <Link
                      key={title}
                      to={link}
                      onClick={handleClose}
                      className="
                        group

                        w-full

                        flex
                        items-start
                        justify-between

                        gap-3

                        px-3
                        sm:px-4

                        py-3.5

                        rounded-md

                        text-sm
                        leading-5

                        font-medium

                        text-[#111111]

                        hover:bg-[#f8f6f4]
                        active:bg-[#f8f6f4]

                        hover:text-[#9B5B35]

                        transition-all
                        duration-300
                      "
                    >
                      <span className="min-w-0">
                        {title}
                      </span>

                      <FiArrowRight
                        size={15}
                        className="
                          flex-shrink-0

                          mt-0.5

                          text-[#9B5B35]

                          opacity-70

                          group-hover:translate-x-1

                          transition-all
                          duration-300
                        "
                      />
                    </Link>
                  )
                )}
              </div>

            </div>
          )}

        </div>
      )}

      {/* =====================================================
          DESKTOP
          1024px+
      ===================================================== */}

      {openMenu === "services" && (
        <div
          className="
            hidden
            lg:block

            absolute

            left-0
            top-full

            z-[99999]

            w-[410px]

            max-w-[calc(100vw-24px)]

            max-h-[70vh]

            overflow-hidden

            bg-white

            shadow-2xl

            border-t-4
            border-[#9B5B35]

            rounded-b-lg

            p-3
          "
        >

          {/* CATEGORY VIEW */}

          {!activeCategory && (
            <div>

              <div className="px-3 py-3 mb-2">

                <p
                  className="
                    text-[11px]

                    uppercase
                    tracking-[0.18em]

                    text-[#9B5B35]

                    font-bold
                  "
                >
                  Services
                </p>

                <h3
                  className="
                    text-xl

                    font-bold
                    text-[#062B49]

                    mt-1
                  "
                >
                  Our Services
                </h3>

                <p
                  className="
                    text-xs

                    text-gray-500

                    mt-2

                    leading-5
                  "
                >
                  Select a service category
                  to explore our professional services.
                </p>

              </div>

              <div className="space-y-1">

                {categories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() =>
                      handleCategoryClick(category.key)
                    }
                    className="
                      group

                      w-full

                      flex
                      items-center
                      justify-between

                      gap-4

                      text-left

                      px-4
                      py-4

                      rounded-md

                      hover:bg-[#f8f6f4]

                      transition-all
                      duration-300
                    "
                  >

                    <div>

                      <p
                        className="
                          text-sm

                          font-semibold

                          text-[#111111]

                          group-hover:text-[#9B5B35]

                          transition
                        "
                      >
                        {category.title}
                      </p>

                      <p
                        className="
                          text-xs

                          text-gray-500

                          mt-1

                          leading-5
                        "
                      >
                        {category.description}
                      </p>

                    </div>

                    <FiArrowRight
                      size={16}
                      className="
                        flex-shrink-0

                        text-[#9B5B35]

                        group-hover:translate-x-1

                        transition-transform
                      "
                    />

                  </button>
                ))}

              </div>

            </div>
          )}

          {/* SERVICE LIST */}

          {activeCategory && (
            <div>

              {/* BACK */}

              <button
                type="button"
                onClick={handleBack}
                className="
                  flex
                  items-center
                  gap-2

                  px-3
                  py-2

                  mb-2

                  text-sm
                  font-semibold

                  text-[#9B5B35]

                  hover:text-[#062B49]

                  transition-colors
                "
              >
                <FiArrowLeft size={15} />

                Back to Services
              </button>

              {/* HEADER */}

              <div
                className="
                  px-3
                  pb-3

                  mb-2

                  border-b
                  border-gray-200
                "
              >

                <p
                  className="
                    text-[11px]

                    uppercase
                    tracking-[0.18em]

                    text-[#9B5B35]

                    font-semibold
                  "
                >
                  Services
                </p>

                <h3
                  className="
                    text-lg

                    font-bold
                    text-[#062B49]

                    mt-1
                  "
                >
                  {activeCategoryData?.title}
                </h3>

                <p
                  className="
                    text-xs

                    text-gray-500

                    mt-1
                  "
                >
                  {activeCategoryData?.description}
                </p>

              </div>

              {/* SERVICE LIST */}

              <div
                className="
                  max-h-[55vh]

                  overflow-y-auto

                  pr-1
                "
              >

                {services[activeCategory]?.map(
                  ({ title, link }) => (
                    <Link
                      key={title}
                      to={link}
                      onClick={handleClose}
                      className="
                        group

                        flex
                        items-start
                        justify-between

                        gap-4

                        px-4
                        py-3.5

                        rounded-md

                        text-sm
                        leading-5

                        font-medium

                        text-[#111111]

                        hover:bg-[#f8f6f4]

                        hover:text-[#9B5B35]

                        transition-all
                        duration-300
                      "
                    >

                      <span>
                        {title}
                      </span>

                      <FiArrowRight
                        size={15}
                        className="
                          flex-shrink-0

                          mt-1

                          text-[#9B5B35]

                          opacity-0

                          -translate-x-1

                          group-hover:opacity-100

                          group-hover:translate-x-0

                          transition-all
                          duration-300
                        "
                      />

                    </Link>
                  )
                )}

              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default ServicesMenu;