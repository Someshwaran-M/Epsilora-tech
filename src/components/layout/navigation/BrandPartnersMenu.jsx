import React from "react";
import { FiChevronDown } from "react-icons/fi";

const BrandPartnersMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
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

  return (
    <div className="relative w-full lg:w-auto">

      {/* ================= BUTTON ================= */}
      <button
        type="button"
        onClick={() => handleMenu("partners")}
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
        <span>Brand Partners</span>

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

      {/* ================= DROPDOWN ================= */}
      {openMenu === "partners" && (
        <div
          className="
            fixed
            left-3
            right-3
            top-[72px]
            z-[9999]

            w-auto
            max-w-none

            max-h-[calc(100vh-88px)]
            overflow-y-auto

            bg-white
            shadow-2xl
            border-t-4
            border-[#9B5B35]

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
            lg:w-[700px]
            lg:max-w-[700px]
            lg:max-h-[75vh]
            lg:p-5
          "
        >

          {/* ================= HEADER ================= */}
          <div className="mb-4 md:mb-5">

            <p
              className="
                text-[10px]
                sm:text-[11px]
                uppercase
                tracking-[0.16em]
                sm:tracking-[0.18em]
                text-[#9B5B35]
                font-semibold
              "
            >
              Our Technology Ecosystem
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
              Brand Partners
            </h3>

          </div>

          {/* ================= LOGOS ================= */}
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
              <a
                key={name}
                href="/technology/partners"
                onClick={() => setOpenMenu(null)}
                className="
                  group

                  h-[68px]
                  sm:h-[74px]
                  md:h-[82px]

                  bg-white

                  flex
                  items-center
                  justify-center

                  p-2
                  sm:p-3

                  hover:bg-[#f8f6f4]

                  transition-all
                  duration-300
                "
              >
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="
                    max-w-full
                    max-h-7
                    sm:max-h-8
                    md:max-h-10

                    object-contain

                    grayscale
                    opacity-80

                    group-hover:grayscale-0
                    group-hover:opacity-100

                    transition-all
                    duration-300
                  "
                />
              </a>
            ))}

          </div>

        </div>
      )}
    </div>
  );
};

export default BrandPartnersMenu;