
import React from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Cloud Solutions",
    description: "Cloud infrastructure, migration and security",
    link: "/technology/solutions#cloud-solutions",
  },
  {
    title: "Data Center Solutions",
    description: "Data center infrastructure and operations",
    link: "/technology/solutions#data-center-solutions",
  },
  {
    title: "Emerging Technology",
    description: "AI, automation, analytics and modern technology",
    link: "/technology/solutions#emerging-technology",
  },
  {
    title: "Information & Cyber Security",
    description: "Security, compliance and risk management",
    link: "/technology/solutions#information-cyber-security",
  },
];

const SolutionsMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
  closeMobileNavigation,
}) => {
  const isOpen = openMenu === "solutions";

  const handleSolutionsClick = () => {
    handleMenu("solutions");
  };

  const handleClose = () => {
    if (closeMobileNavigation) {
      closeMobileNavigation();
    } else if (setOpenMenu) {
      setOpenMenu(null);
    }
  };

  const renderCategories = (mobile = false) => (
    <div className={mobile ? "space-y-1" : "space-y-1"}>
      {categories.map((category, index) => (
        <Link
          key={category.title}
          to={category.link}
          onClick={handleClose}
          className="group flex w-full items-center justify-between gap-4 rounded-sm px-4 py-4 transition-colors duration-300 hover:bg-[#F7F9FB] active:bg-[#F7F9FB] sm:py-4"
        >
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 shrink-0 text-[10px] font-bold tracking-wider text-[#9B5B35]/70">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <p className="text-sm font-bold leading-5 text-[#062B49] transition-colors duration-300 group-hover:text-[#9B5B35] sm:text-base">
                {category.title}
              </p>

              <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs">
                {category.description}
              </p>
            </div>
          </div>

          <FiArrowRight
            size={17}
            className="shrink-0 text-[#9B5B35] transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      ))}
    </div>
  );

  const renderHeader = () => (
    <div className="border-b border-gray-200 px-5 py-5 sm:px-6">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-[2px] w-7 bg-[#9B5B35]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9B5B35]">
          Solutions
        </p>
      </div>

      <h3 className="text-xl font-bold text-[#062B49]">
        Technology Solutions
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
        Explore our technology solutions on one page.
      </p>
    </div>
  );

  return (
    <div className="relative w-full font-['Roboto',sans-serif] lg:w-auto">
      {/* SOLUTIONS BUTTON */}
      <button
        type="button"
        onClick={handleSolutionsClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#9B5B35] active:bg-[#9B5B35] lg:w-auto lg:px-6 lg:py-4"
      >
        <span>Solutions</span>

        <FiChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* MOBILE AND TABLET DROPDOWN */}
      {isOpen && (
        <div className="fixed left-3 right-3 top-[72px] z-[99999] max-h-[calc(100dvh-88px)] overflow-y-auto rounded-b-md border-t-4 border-[#9B5B35] bg-white shadow-2xl sm:left-5 sm:right-5 sm:top-[76px] md:left-8 md:right-8 md:top-[80px] lg:hidden">
          {renderHeader()}

          <div className="p-2 sm:p-3">
            {renderCategories(true)}
          </div>

          <div className="border-t border-gray-100 px-5 py-3">
            <p className="text-[10px] leading-5 text-gray-400">
              Select a solution to explore its section.
            </p>
          </div>
        </div>
      )}

      {/* DESKTOP DROPDOWN */}
      {isOpen && (
        <div className="absolute left-0 top-full z-[99999] mt-1 hidden w-[410px] max-w-[calc(100vw-24px)] overflow-hidden rounded-b-md border-t-4 border-[#9B5B35] bg-white shadow-[0_20px_50px_rgba(6,43,73,0.15)] lg:block">
          {renderHeader()}

          <div className="p-2">
            {renderCategories()}
          </div>

          <div className="border-t border-gray-100 bg-[#F7F9FB] px-5 py-3">
            <p className="text-[10px] font-medium text-gray-500">
              Cloud · Infrastructure · Security · Innovation
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionsMenu;
