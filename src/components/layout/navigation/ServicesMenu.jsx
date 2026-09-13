import React from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServicesMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
}) => {
  const categories = [
    {
      title: "Consulting & Professional Services",
      description:
        "Expert consulting, migration and professional services",
      link: "/technology/services/consulting-professional",
    },
  ];

  const handleServicesClick = () => {
    handleMenu("services");
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

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
          MOBILE + TABLET DROPDOWN
      ===================================================== */}

      {openMenu === "services" && (
        <div
          className="
            fixed
            left-3
            right-3
            top-[72px]

            sm:left-5
            sm:right-5
            sm:top-[76px]

            md:left-8
            md:right-8
            md:top-[80px]

            z-[99999]

            w-auto
            max-h-[calc(100vh-95px)]
            overflow-y-auto

            bg-white
            shadow-2xl

            border-t-4
            border-[#9B5B35]

            rounded-lg

            lg:hidden
          "
        >

          {/* HEADER */}

          <div
            className="
              px-5
              py-5

              sm:px-6
              sm:py-6

              border-b
              border-gray-200
            "
          >
            <p
              className="
                text-[10px]
                sm:text-[11px]
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
                mt-1
                text-lg
                sm:text-xl
                font-bold
                text-[#062B49]
              "
            >
              Our Services
            </h3>

            <p
              className="
                mt-2
                text-xs
                sm:text-sm
                text-gray-500
                leading-5
              "
            >
              Explore our professional technology services.
            </p>
          </div>


          {/* ONLY SERVICE CATEGORY */}

          <div className="p-3 sm:p-4">

            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                onClick={handleClose}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4

                  px-4
                  py-5

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
                      sm:text-base
                      font-bold
                      text-[#062B49]
                      group-hover:text-[#9B5B35]
                      transition-colors
                      duration-300
                      leading-5
                    "
                  >
                    {category.title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      sm:text-xs
                      text-gray-500
                      leading-5
                    "
                  >
                    {category.description}
                  </p>

                </div>

                <FiArrowRight
                  size={18}
                  className="
                    shrink-0
                    text-[#9B5B35]
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                />

              </Link>
            ))}

          </div>

        </div>
      )}


      {/* =====================================================
          DESKTOP DROPDOWN
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

            bg-white
            shadow-2xl

            border-t-4
            border-[#9B5B35]

            rounded-b-lg

            overflow-hidden
          "
        >

          {/* HEADER */}

          <div
            className="
              px-5
              py-5
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
                font-bold
              "
            >
              Services
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-bold
                text-[#062B49]
              "
            >
              Our Services
            </h3>

            <p
              className="
                mt-2
                text-xs
                text-gray-500
                leading-5
              "
            >
              Explore our professional technology services.
            </p>
          </div>


          {/* ONLY SERVICE CATEGORY */}

          <div className="p-3">

            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                onClick={handleClose}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-between
                  gap-4

                  px-4
                  py-5

                  rounded-md

                  hover:bg-[#f8f6f4]

                  transition-all
                  duration-300
                "
              >

                <div className="min-w-0">

                  <p
                    className="
                      text-sm
                      font-bold
                      text-[#062B49]
                      group-hover:text-[#9B5B35]
                      transition-colors
                      duration-300
                      leading-5
                    "
                  >
                    {category.title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      leading-5
                    "
                  >
                    {category.description}
                  </p>

                </div>

                <FiArrowRight
                  size={17}
                  className="
                    shrink-0
                    text-[#9B5B35]
                    opacity-70
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                />

              </Link>
            ))}

          </div>

        </div>
      )}

    </div>
  );
};

export default ServicesMenu;