import React, { useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const HardwareMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: "Data Storage",
      description: "Storage devices and solutions",
      key: "data-storage",
    },
    {
      title: "PC & Server",
      description: "Computer and server components",
      key: "pc-server",
    },
    {
      title: "Server & Server Management",
      description: "Server infrastructure and management",
      key: "server-management",
    },
  ];

  const hardware = {
    "data-storage": [
      {
        title: "CD / DVD Media",
        link: "/technology/hardware/datastorage/cd-dvd-media",
      },
      {
        title: "Flash Drives (USB)",
        link: "/technology/hardware/datastorage/flash-drives-usb",
      },
      {
        title: "Hard Disk Drives (HDD)",
        link: "/technology/hardware/datastorage/hard-disk-drives-hdd",
      },
      {
        title: "Network Attached Storage (NAS)",
        link: "/technology/hardware/datastorage/network-attached-storage-nas",
      },
      {
        title: "Solid State Drives (SSD)",
        link: "/technology/hardware/datastorage/solid-state-drives-ssd",
      },
      {
        title: "Storage Networking",
        link: "/technology/hardware/datastorage/storage-networking",
      },
      {
        title: "Tape & Floppy Drives",
        link: "/technology/hardware/datastorage/tape-floppy-drives",
      },
      {
        title: "Tape Cartridges",
        link: "/technology/hardware/datastorage/tape-cartridges",
      },
    ],

    "pc-server": [
      {
        title: "Memory (RAM)",
        link: "/technology/hardware/pc-server/memory-ram",
      },
      {
        title: "Motherboards",
        link: "/technology/hardware/pc-server/motherboards",
      },
      {
        title: "Processors (CPU)",
        link: "/technology/hardware/pc-server/processors-cpu",
      },
      {
        title: "Sound Cards",
        link: "/technology/hardware/pc-server/sound-cards",
      },
      {
        title: "Video Cards (GPU)",
        link: "/technology/hardware/pc-server/video-cards-gpu",
      },
    ],

    "server-management": [
      {
        title: "Cabinets or Racks",
        link:
          "/technology/hardware/server-server-management/cabinets-racks",
      },
      {
        title: "KVM Switch Products",
        link:
          "/technology/hardware/server-server-management/kvm-switch-products",
      },
      {
        title: "Memory (RAM)",
        link:
          "/technology/hardware/server-server-management/memory-ram",
      },
      {
        title: "Processors (CPU)",
        link:
          "/technology/hardware/server-server-management/processors-cpu",
      },
      {
        title: "Servers",
        link:
          "/technology/hardware/server-server-management/servers",
      },
    ],
  };

  const handleHardwareClick = () => {
    handleMenu("hardware");
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
    <div className="relative w-full md:w-auto">

      {/* =====================================================
          HARDWARE BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={handleHardwareClick}
        className="
          w-full
          md:w-auto

          flex
          items-center
          justify-center
          gap-2

          px-5
          sm:px-6
          lg:px-6

          py-3.5
          md:py-4

          text-white
          text-sm
          font-semibold

          hover:bg-[#9B5B35]
          active:bg-[#9B5B35]

          transition-all
          duration-300
        "
      >
        <span>Hardware</span>

        <FiChevronDown
          size={14}
          className={`
            transition-transform
            duration-300
            ${
              openMenu === "hardware"
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {/* =====================================================
          MOBILE DROPDOWN
          Below 768px
      ===================================================== */}

      {openMenu === "hardware" && (
        <div
          className="
            fixed
            left-3
            right-3
            top-[72px]

            z-[9999]

            max-h-[calc(100vh-88px)]

            overflow-hidden

            bg-white

            shadow-2xl

            border-t-4
            border-[#9B5B35]

            rounded-lg

            md:hidden
          "
        >

          {/* ================================
              MOBILE CATEGORY VIEW
          ================================= */}

          {!activeCategory && (
            <div className="p-3">

              <div className="px-2 py-3 mb-2">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#9B5B35]
                    font-bold
                  "
                >
                  Hardware
                </p>

                <h3
                  className="
                    text-lg
                    font-bold
                    text-[#062B49]
                    mt-1
                  "
                >
                  Technology Hardware
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-500
                    mt-2
                    leading-5
                  "
                >
                  Select a hardware category
                  to explore products.
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

                      gap-3

                      text-left

                      px-3
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
                          font-bold
                          text-[#062B49]
                          group-hover:text-[#9B5B35]
                          transition
                        "
                      >
                        {category.title}
                      </p>

                      <p
                        className="
                          text-[11px]
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
                        group-active:translate-x-1
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />

                  </button>
                ))}

              </div>

            </div>
          )}

          {/* ================================
              MOBILE PRODUCTS VIEW
          ================================= */}

          {activeCategory && (
            <div className="flex flex-col max-h-[calc(100vh-88px)]">

              {/* BACK */}

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
                    Back to Hardware
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
                  Hardware
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

              {/* SCROLLABLE ITEMS */}

              <div
                className="
                  overflow-y-auto
                  overscroll-contain

                  p-2

                  flex-1
                "
              >

                {hardware[activeCategory]?.map(
                  ({ title, link }) => (
                    <Link
                      key={title}
                      to={link}
                      onClick={handleClose}
                      className="
                        group

                        w-full

                        flex
                        items-center
                        justify-between

                        gap-3

                        px-3
                        py-3.5

                        rounded-md

                        text-sm
                        font-medium

                        text-[#111111]

                        hover:bg-[#f8f6f4]
                        active:bg-[#f8f6f4]

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

                          text-[#9B5B35]

                          opacity-70

                          group-hover:translate-x-1

                          transition-all
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
          TABLET + DESKTOP DROPDOWN
          768px and above
      ===================================================== */}

      {openMenu === "hardware" && (
        <div
          className="
            hidden
            md:block

            absolute
            left-0
            top-full

            z-[9999]

            w-[380px]
            lg:w-[410px]

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
                  Hardware
                </p>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#062B49]
                    mt-1
                  "
                >
                  Technology Hardware
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-500
                    mt-2
                    leading-5
                  "
                >
                  Select a hardware category
                  to explore products.
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
                          font-bold
                          text-[#062B49]
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

          {/* PRODUCT VIEW */}

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
                <FiArrowLeft size={16} />

                Back to Hardware
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
                    font-bold
                  "
                >
                  Hardware
                </p>

                <h3
                  className="
                    text-xl
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

              {/* PRODUCTS */}

              <div
                className="
                  max-h-[55vh]
                  overflow-y-auto
                  pr-1
                "
              >

                {hardware[activeCategory]?.map(
                  ({ title, link }) => (
                    <Link
                      key={title}
                      to={link}
                      onClick={handleClose}
                      className="
                        group

                        flex
                        items-center
                        justify-between

                        gap-4

                        px-4
                        py-3.5

                        rounded-md

                        text-sm
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

export default HardwareMenu;