import React from "react";
import {
  FiBriefcase,
  FiSettings,
  FiDatabase,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const ConsultingProfessional = () => {
  const services = [
    {
      icon: <FiBriefcase />,
      title: "Technology Consulting",
      text: "Professional guidance to help organizations plan and improve their technology infrastructure.",
    },
    {
      icon: <FiSettings />,
      title: "Infrastructure Services",
      text: "Expert support for modern IT infrastructure, systems and technology environments.",
    },
    {
      icon: <FiDatabase />,
      title: "Migration Services",
      text: "Plan and execute technology migrations with a structured and reliable approach.",
    },
    {
      icon: <FiShield />,
      title: "Security Services",
      text: "Professional technology services focused on improving infrastructure security and reliability.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49]">

        <div
          className="
            absolute
            -right-32
            -top-32
            w-80
            h-80
            rounded-full
            bg-[#9B5B35]/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-20
            sm:py-24
            lg:py-28
          "
        >

          <p
            className="
              text-[#C9875D]
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
            "
          >
            Services
          </p>

          <h1
            className="
              mt-3
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-white
            "
          >
            Consulting & Professional Services
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              text-white/70
            "
          >
            Expert consulting, migration and professional services
            designed to help businesses build reliable and efficient
            technology environments.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          py-16
          sm:py-20
          lg:py-24
        "
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="w-9 h-[2px] bg-[#9B5B35]" />

              <span
                className="
                  text-[#9B5B35]
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
              >
                Professional Expertise
              </span>

            </div>

            <h2
              className="
                mt-4
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-bold
                text-[#062B49]
              "
            >
              Technology Expertise That
              <span className="text-[#9B5B35]">
                {" "}Moves Your Business Forward
              </span>
            </h2>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                text-gray-600
                leading-7
              "
            >
              Our consulting and professional services help
              organizations assess, plan, migrate and improve their
              technology environments with practical and reliable
              solutions.
            </p>

          </div>


          {/* SERVICES */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
            "
          >

            {services.map((service) => (
              <div
                key={service.title}
                className="
                  group
                  p-6
                  sm:p-7
                  border
                  border-gray-200
                  hover:border-[#9B5B35]
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    bg-[#062B49]
                    text-white
                    group-hover:bg-[#9B5B35]
                    transition-all
                    duration-300
                  "
                >
                  {service.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    text-[#062B49]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-gray-600
                    leading-6
                  "
                >
                  {service.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          KEY SERVICE AREAS
      ===================================================== */}

      <section
        className="
          bg-[#f8f6f4]
          px-5
          sm:px-8
          lg:px-12
          py-16
          sm:py-20
        "
      >

        <div className="max-w-7xl mx-auto">

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-[#062B49]
            "
          >
            Our Professional Service Areas
          </h2>

          <div
            className="
              mt-7
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
          >

            {[
              "Active Directory Migration",
              "Data Center Relocation",
              "Network Assessment",
              "Server Virtualization",
              "Virtual Environment Security",
              "Desktop Infrastructure",
              "VMware Health Check",
              "Technology Migration",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  p-5
                  bg-white
                  border-l-2
                  border-[#9B5B35]
                "
              >

                <FiArrowRight
                  className="text-[#9B5B35] shrink-0"
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#062B49]
                  "
                >
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          py-16
          sm:py-20
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            bg-[#062B49]
            px-6
            sm:px-10
            py-10
            sm:py-12
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-6
          "
        >

          <div>

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-white
              "
            >
              Need professional technology support?
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/60
              "
            >
              Talk to our experts about your business requirements.
            </p>

          </div>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-6
              py-3
              bg-[#9B5B35]
              hover:bg-[#844A2A]
              text-white
              text-sm
              font-semibold
              transition-all
            "
          >
            Contact Us
            <FiArrowRight />
          </a>

        </div>

      </section>

    </div>
  );
};

export default ConsultingProfessional;