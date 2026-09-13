import React from "react";
import {
  FiCloud,
  FiShield,
  FiRefreshCw,
  FiArrowRight,
} from "react-icons/fi";

const Cloud = () => {
  const features = [
    {
      icon: <FiCloud />,
      title: "Cloud Infrastructure",
      text: "Flexible cloud infrastructure designed to support modern business workloads.",
    },
    {
      icon: <FiRefreshCw />,
      title: "Cloud Migration",
      text: "Plan and move applications, workloads and data to cloud environments.",
    },
    {
      icon: <FiShield />,
      title: "Cloud Security",
      text: "Security-focused solutions to help protect cloud workloads and business data.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#062B49]">

        <div className="
          absolute
          -right-32
          -top-32
          w-80
          h-80
          rounded-full
          bg-[#9B5B35]/20
          blur-3xl
        " />

        <div className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-20
          sm:py-24
          lg:py-28
        ">

          <p className="
            text-[#C9875D]
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
          ">
            Solutions
          </p>

          <h1 className="
            mt-3
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-white
          ">
            Cloud Solutions
          </h1>

          <p className="
            mt-5
            max-w-2xl
            text-sm
            sm:text-base
            lg:text-lg
            text-white/70
            leading-7
          ">
            Scalable cloud infrastructure, migration and security
            solutions for modern businesses.
          </p>

        </div>

      </section>


      {/* CONTENT */}

      <section className="
        px-5
        sm:px-8
        lg:px-12
        py-16
        sm:py-20
        lg:py-24
      ">

        <div className="max-w-7xl mx-auto">

          <h2 className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-[#062B49]
          ">
            Modern Cloud Technology
          </h2>

          <p className="
            mt-4
            max-w-3xl
            text-sm
            sm:text-base
            text-gray-600
            leading-7
          ">
            Our cloud solutions help organizations improve
            scalability, availability, security and operational
            efficiency across their technology environments.
          </p>


          <div className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">

            {features.map((item) => (
              <div
                key={item.title}
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

                <div className="
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
                ">
                  {item.icon}
                </div>

                <h3 className="
                  mt-5
                  text-lg
                  font-bold
                  text-[#062B49]
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-2
                  text-sm
                  text-gray-600
                  leading-6
                ">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">

        <div className="
          max-w-7xl
          mx-auto
          bg-[#062B49]
          px-6
          sm:px-10
          py-10
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-6
        ">

          <h2 className="
            text-2xl
            sm:text-3xl
            font-bold
            text-white
          ">
            Ready to move to the cloud?
          </h2>

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

export default Cloud;