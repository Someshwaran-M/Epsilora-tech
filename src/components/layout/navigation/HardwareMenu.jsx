
import React from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HardwareMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
  closeMobileNavigation,
}) => {
  const productsPath = "/products";

  const categories = [
    {
      title: "Data Center",
      description: "Data center infrastructure and storage",
      link: `${productsPath}#data-center`,
    },
    {
      title: "Servers, Desktops & Laptops",
      description: "Enterprise computers and server systems",
      link: `${productsPath}#servers-devices`,
    },
    {
      title: "Firewall",
      description: "Network protection and access control",
      link: `${productsPath}#firewall`,
    },
    {
      title: "Cybersecurity",
      description: "Protect your business and digital assets",
      link: `${productsPath}#cybersecurity`,
    },
  ];

  const handleHardwareClick = () => {
    handleMenu("hardware");
  };

  const handleClose = () => {
    if (closeMobileNavigation) {
      closeMobileNavigation();
    } else if (setOpenMenu) {
      setOpenMenu(null);
    }
  };

  const renderCategories = (mobile = false) =>
    categories.map((category) => (
      <Link
        key={category.title}
        to={category.link}
        onClick={handleClose}
        className={`group flex w-full items-center justify-between gap-4 rounded-md px-4 transition-all duration-300 hover:bg-[#F5F8FA] ${
          mobile ? "py-4 sm:py-5" : "py-4"
        }`}
      >
        <div className="min-w-0">
          <p className="text-sm font-bold text-[#062B49] transition-colors duration-300 group-hover:text-[#9B5B35] sm:text-base">
            {category.title}
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            {category.description}
          </p>
        </div>

        <FiArrowRight
          size={18}
          className="shrink-0 text-[#9B5B35] transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    ));

  const renderHeader = (mobile = false) => (
    <div
      className={`border-b border-gray-200 ${
        mobile ? "px-5 py-5 sm:px-6" : "px-5 py-5"
      }`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9B5B35] sm:text-[11px]">
        Products
      </p>

      <h3 className="mt-1 text-lg font-bold text-[#062B49] sm:text-xl">
        Products & Technology
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
        Explore our complete product solutions.
      </p>
    </div>
  );

  return (
    <div className="relative w-full lg:w-auto">
      {/* Products Button */}
      <button
        type="button"
        onClick={handleHardwareClick}
        aria-expanded={openMenu === "hardware"}
        aria-haspopup="true"
        className="
          flex w-full items-center justify-center gap-2
          px-5 py-3.5 text-sm font-semibold text-white
          transition-all duration-300
          hover:bg-[#9B5B35] active:bg-[#9B5B35]
          lg:w-auto lg:px-6 lg:py-4
        "
      >
        <span>Products</span>

        <FiChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            openMenu === "hardware" ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mobile and Tablet Menu */}
      {openMenu === "hardware" && (
        <div
          className="
            fixed left-3 right-3 top-[72px] z-[9999]
            max-h-[calc(100vh-95px)] overflow-y-auto
            rounded-lg border-t-4 border-[#9B5B35]
            bg-white shadow-2xl
            sm:left-5 sm:right-5 sm:top-[76px]
            md:left-8 md:right-8 md:top-[80px]
            lg:hidden
          "
        >
          {renderHeader(true)}

          <div className="space-y-1 p-3 sm:p-4">
            {renderCategories(true)}
          </div>

          <div className="border-t border-gray-100 px-5 py-3">
            <Link
              to={productsPath}
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-md bg-[#062B49] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9B5B35]"
            >
              Explore All Products
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      {openMenu === "hardware" && (
        <div
          className="
            absolute left-0 top-full z-[9999] hidden
            w-[410px] max-w-[calc(100vw-24px)]
            overflow-hidden rounded-b-lg border-t-4
            border-[#9B5B35] bg-white shadow-2xl lg:block
          "
        >
          {renderHeader()}

          <div className="space-y-1 p-3">
            {renderCategories()}
          </div>

          <div className="border-t border-gray-100 p-3">
            <Link
              to={productsPath}
              onClick={handleClose}
              className="flex items-center justify-center gap-2 rounded-md bg-[#062B49] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9B5B35]"
            >
              Explore All Products
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HardwareMenu;
