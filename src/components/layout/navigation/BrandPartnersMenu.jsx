import React from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BrandPartnersMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
  closeMobileNavigation,
}) => {
  const partners = [
    ["AWS", "/assets/partners/aws.png"],
    ["Microsoft Azure", "/assets/partners/azure.png"],
    ["Google Cloud Platform", "/assets/partners/google-cloud.png"],
    ["Citrix", "/assets/partners/citrix.png"],
    ["VMware", "/assets/partners/vmware.png"],
    ["Cisco", "/assets/partners/cisco.png"],
    ["Palo Alto Networks", "/assets/partners/paloalto.png"],
    ["Dell Technologies", "/assets/partners/dell.png"],
    ["HPE", "/assets/partners/hpe.png"],
    ["Nutanix", "/assets/partners/nutanix.png"],
    ["Apple Business Partner", "/assets/partners/apple.png"],
    ["NetApp", "/assets/partners/netapp.png"],
    ["Vertiv", "/assets/partners/vertiv.png"],
    ["Poly", "/assets/partners/poly.png"],
    ["CommScope", "/assets/partners/commscope.png"],
    ["NVIDIA", "/assets/partners/nvidia.png"],
    ["Veeam", "/assets/partners/veeam.png"],
    ["ManageEngine", "/assets/partners/manageengine.png"],
  ];

  /* =====================================================
     OPEN PARTNERS PAGE
  ====================================================== */

  const openPartnersPage = () => {
    if (closeMobileNavigation) {
      closeMobileNavigation();
    } else {
      setOpenMenu(null);
    }

    window.location.href = "/technology/partners";
  };

  /* =====================================================
     PARTNERS BUTTON
  ====================================================== */

  const handlePartnersClick = () => {
    handleMenu("partners");
  };

  /* =====================================================
     CLOSE AFTER PARTNER SELECTION
     
     Mobile:
     - Close complete hamburger navigation
     - Close dropdown
     
     Desktop:
     - Close dropdown
  ====================================================== */

  const handleClose = () => {
    if (closeMobileNavigation) {
      closeMobileNavigation();
    } else {
      setOpenMenu(null);
    }
  };

  return (
    <div className="relative w-full lg:w-auto">

      {/* =====================================================
          BRAND PARTNERS BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={handlePartnersClick}
        className="
          w-full
          lg:w-auto

          flex
          items-center
          justify-center
          gap-2

          px-5
          xl:px-6

          py-3.5
          lg:py-4

          text-white
          text-sm
          font-semibold

          hover:bg-[#9B5B35]

          transition-all
          duration-300
        "
      >
        <span>
          Brand Partners
        </span>

        <FiChevronDown
          size={14}
          className={`
            transition-transform
            duration-300

            ${
              openMenu === "partners"
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>


      {/* =====================================================
          PARTNERS DROPDOWN
      ====================================================== */}

      {openMenu === "partners" && (
        <div
          className="
            fixed

            left-3
            right-3
            top-[72px]

            z-[9999]

            max-h-[calc(100vh-88px)]

            overflow-y-auto

            bg-white

            border
            border-gray-200

            border-t-4
            border-t-[#9B5B35]

            shadow-[0_25px_70px_rgba(0,0,0,0.20)]

            p-4

            sm:left-5
            sm:right-5
            sm:top-[76px]
            sm:p-5

            md:left-8
            md:right-8
            md:top-[80px]
            md:p-6

            lg:absolute
            lg:left-auto
            lg:right-0
            lg:top-full

            lg:w-[720px]
            lg:max-w-[720px]

            lg:max-h-[78vh]
            lg:overflow-y-auto

            lg:p-5
          "
        >

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-end
              sm:justify-between

              gap-4
              mb-5
            "
          >

            <div>

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
                Technology Ecosystem
              </p>

              <h3
                className="
                  mt-1

                  text-xl
                  sm:text-2xl

                  font-bold

                  text-[#062B49]
                "
              >
                Brand Partners
              </h3>

              <p
                className="
                  mt-1

                  max-w-md

                  text-xs
                  sm:text-sm

                  text-gray-500

                  leading-5
                "
              >
                Technology platforms and brands supporting
                our enterprise solutions.
              </p>

            </div>


            {/* =================================================
                VIEW ALL
            ================================================= */}

            <button
              type="button"
              onClick={openPartnersPage}
              className="
                inline-flex
                items-center
                gap-2

                self-start
                sm:self-auto

                text-xs
                font-semibold

                text-[#062B49]

                hover:text-[#9B5B35]

                transition-colors
              "
            >
              View All Partners

              <FiArrowRight size={13} />
            </button>

          </div>


          {/* =================================================
              PARTNER LOGOS
          ================================================= */}

          <div
            className="
              grid

              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4

              gap-px

              bg-gray-200

              border
              border-gray-200
            "
          >

            {partners.map(([name, image]) => (
              <Link
                key={name}
                to="/technology/partners"
                onClick={handleClose}
                className="
                  group

                  relative

                  min-h-[82px]
                  sm:min-h-[92px]
                  md:min-h-[100px]

                  bg-white

                  flex
                  flex-col
                  items-center
                  justify-center

                  p-3
                  sm:p-4

                  overflow-hidden

                  hover:bg-[#F8F6F4]

                  transition-all
                  duration-300
                "
              >

                {/* =================================================
                    TOP ACCENT
                ================================================= */}

                <span
                  className="
                    absolute
                    top-0
                    left-0

                    w-0
                    h-[2px]

                    bg-[#9B5B35]

                    group-hover:w-full

                    transition-all
                    duration-500
                  "
                />


                {/* =================================================
                    LOGO
                ================================================= */}

                <div
                  className="
                    h-9
                    sm:h-10
                    md:h-11

                    w-full

                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="
                      max-w-[105px]
                      sm:max-w-[120px]
                      md:max-w-[135px]

                      max-h-7
                      sm:max-h-8
                      md:max-h-9

                      object-contain

                      grayscale
                      opacity-70

                      group-hover:grayscale-0
                      group-hover:opacity-100
                      group-hover:scale-105

                      transition-all
                      duration-300
                    "
                  />

                </div>


                {/* =================================================
                    NAME
                ================================================= */}

                <span
                  className="
                    mt-2

                    text-[9px]
                    sm:text-[10px]

                    text-center

                    text-gray-500

                    group-hover:text-[#062B49]

                    font-medium

                    transition-colors
                    duration-300
                  "
                >
                  {name}
                </span>

              </Link>
            ))}

          </div>


          {/* =================================================
              FOOTER
          ================================================= */}

          <div
            className="
              mt-5
              pt-4

              border-t
              border-gray-100

              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between

              gap-3
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  text-[#062B49]
                "
              >
                Connected Technology Ecosystem
              </p>

              <p
                className="
                  mt-1

                  text-[10px]
                  sm:text-xs

                  text-gray-500
                "
              >
                Cloud • Security • Infrastructure • Computing
              </p>

            </div>


            {/* =================================================
                EXPLORE PARTNERS
            ================================================= */}

            <button
              type="button"
              onClick={openPartnersPage}
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                w-full
                sm:w-auto

                px-4
                py-2.5

                bg-[#062B49]
                hover:bg-[#9B5B35]

                text-white
                text-xs
                font-semibold

                transition-all
                duration-300
              "
            >
              Explore Partner Ecosystem

              <FiArrowRight size={13} />
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default BrandPartnersMenu;