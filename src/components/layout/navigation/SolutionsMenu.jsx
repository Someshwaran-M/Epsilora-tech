import React, { useState } from "react";
import {
  FiArrowRight,
  FiArrowLeft,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const SolutionsMenu = ({
  openMenu,
  handleMenu,
  setOpenMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure, migration and security",
      key: "cloud",
    },
    {
      title: "Data Center Solutions",
      description:
        "Data center infrastructure and operations",
      key: "datacenter",
    },
    {
      title: "Emerging Technology",
      description:
        "AI, automation, analytics and modern technology",
      key: "emerging",
    },
    {
      title: "Information & Cyber Security",
      description:
        "Security, compliance and risk management",
      key: "information-cyber",
    },
  ];

  const solutions = {
    cloud: [
      {
        title: "Cloud Backup & Recovery",
        link:
          "/technology/solutions/cloud/cloud-backup-recovery",
      },
      {
        title: "Cloud Infrastructure",
        link:
          "/technology/solutions/cloud/cloud-infrastructure",
      },
      {
        title: "Cloud Management",
        link:
          "/technology/solutions/cloud/cloud-management",
      },
      {
        title: "Cloud Migration",
        link:
          "/technology/solutions/cloud/cloud-migration",
      },
      {
        title: "Cloud Networking",
        link:
          "/technology/solutions/cloud/cloud-networking",
      },
      {
        title: "Cloud Security",
        link:
          "/technology/solutions/cloud/cloud-security",
      },
      {
        title: "Hybrid & Multi-Cloud",
        link:
          "/technology/solutions/cloud/hybrid-multi-cloud",
      },
    ],

    datacenter: [
      {
        title: "Backup & Disaster Recovery",
        link:
          "/technology/solutions/datacenter/backup-disaster-recovery",
      },
      {
        title: "Infrastructure",
        link:
          "/technology/solutions/datacenter/infrastructure",
      },
      {
        title: "Networking",
        link:
          "/technology/solutions/datacenter/networking",
      },
      {
        title: "Security",
        link:
          "/technology/solutions/datacenter/security",
      },
      {
        title: "Servers & Storage",
        link:
          "/technology/solutions/datacenter/servers-storage",
      },
    ],

    emerging: [
      {
        title: "AI & Machine Learning",
        link:
          "/technology/solutions/emerging/ai-machine-learning",
      },
      {
        title: "Automation & Robotics",
        link:
          "/technology/solutions/emerging/automation-robotics",
      },
      {
        title: "Cloud & Edge Computing",
        link:
          "/technology/solutions/emerging/cloud-edge-computing",
      },
      {
        title: "Data & Analytics",
        link:
          "/technology/solutions/emerging/data-analytics",
      },
      {
        title: "IoT & Smart Solutions",
        link:
          "/technology/solutions/emerging/iot-smart-solutions",
      },
    ],

    "information-cyber": [
      {
        title: "Cloud & Data Security",
        link:
          "/technology/solutions/information-cyber/cloud-data-security",
      },
      {
        title: "Compliance & Risk Management",
        link:
          "/technology/solutions/information-cyber/compliance-risk-management",
      },
      {
        title: "Endpoint Security",
        link:
          "/technology/solutions/information-cyber/endpoint-security",
      },
      {
        title: "Identity & Access Management",
        link:
          "/technology/solutions/information-cyber/identity-access-management",
      },
      {
        title: "Network & Firewall Security",
        link:
          "/technology/solutions/information-cyber/network-firewall-security",
      },
      {
        title: "Security Monitoring & Response",
        link:
          "/technology/solutions/information-cyber/security-monitoring-response",
      },
      {
        title: "Vulnerability Assessment",
        link:
          "/technology/solutions/information-cyber/vulnerability-assessment",
      },
    ],
  };

  const handleSolutionsClick = () => {
    handleMenu("solutions");
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
          SOLUTIONS BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={handleSolutionsClick}
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
        <span>Solutions</span>

        <FiChevronDown
          size={14}
          className={`
            transition-transform
            duration-300
            ${
              openMenu === "solutions"
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {/* =====================================================
          MOBILE + TABLET DROPDOWN
          0px - 1023px
      ===================================================== */}

      {openMenu === "solutions" && (
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

          {/* ================================================
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
                  Solutions
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
                  Technology Solutions
                </h3>

                <p
                  className="
                    text-xs

                    text-gray-500

                    mt-2

                    leading-5
                  "
                >
                  Select a solution category
                  to explore our technology offerings.
                </p>
              </div>

              {/* CATEGORIES */}

              <div
                className="
                  max-h-[calc(100vh-220px)]
                  overflow-y-auto
                  overscroll-contain
                  pr-1
                "
              >
                {categories.map(
                  ({
                    title,
                    description,
                    key,
                  }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        handleCategoryClick(key)
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
                          "
                        >
                          {title}
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
                          {description}
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
                  )
                )}
              </div>

            </div>
          )}

          {/* ================================================
              INDIVIDUAL SOLUTIONS VIEW
          ================================================= */}

          {activeCategory && (
            <div
              className="
                flex
                flex-col

                max-h-[calc(100vh-88px)]
              "
            >

              {/* BACK */}

              <div
                className="
                  flex-shrink-0
                  bg-white
                "
              >
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
                    Back to Solutions
                  </span>
                </button>
              </div>

              {/* CATEGORY HEADER */}

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
                  Solutions
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

              {/* SOLUTION LIST */}

              <div
                className="
                  flex-1

                  overflow-y-auto

                  overscroll-contain

                  p-2

                  max-h-[calc(100vh-210px)]
                "
              >
                {solutions[activeCategory]?.map(
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
                        sm:px-4

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
          DESKTOP DROPDOWN
          1024px+
      ===================================================== */}

      {openMenu === "solutions" && (
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

              <div
                className="
                  px-3
                  py-3
                  mb-2
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
                  Solutions
                </p>

                <h3
                  className="
                    text-xl

                    font-bold
                    text-[#062B49]

                    mt-1
                  "
                >
                  Technology Solutions
                </h3>

                <p
                  className="
                    text-xs

                    text-gray-500

                    mt-2

                    leading-5
                  "
                >
                  Select a solution category
                  to explore our technology offerings.
                </p>
              </div>

              <div className="space-y-1">

                {categories.map(
                  ({
                    title,
                    description,
                    key,
                  }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        handleCategoryClick(key)
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
                          {title}
                        </p>

                        <p
                          className="
                            text-xs

                            text-gray-500

                            mt-1

                            leading-5
                          "
                        >
                          {description}
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
                  )
                )}

              </div>

            </div>
          )}

          {/* INDIVIDUAL SOLUTIONS */}

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

                Back to Solutions
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
                  Solutions
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
              </div>

              {/* LIST */}

              <div
                className="
                  max-h-[55vh]

                  overflow-y-auto

                  pr-1
                "
              >
                {solutions[activeCategory]?.map(
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

export default SolutionsMenu;