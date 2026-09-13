import React from "react";
import {
  FiServer,
  FiGrid,
  FiSettings,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const ServerServer = () => {
  const solutions = [
    {
      icon: <FiServer />,
      title: "Enterprise Servers",
      text: "Reliable server infrastructure for demanding business workloads.",
    },
    {
      icon: <FiGrid />,
      title: "Server Racks",
      text: "Structured rack and cabinet solutions for organized infrastructure.",
    },
    {
      icon: <FiSettings />,
      title: "Server Management",
      text: "Technology solutions that support efficient server administration.",
    },
    {
      icon: <FiShield />,
      title: "Infrastructure Security",
      text: "Infrastructure designed with reliability and protection in mind.",
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
            Hardware
          </p>

          <h1 className="
            mt-3
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-white
          ">
            Server & Server Management
          </h1>

          <p className="
            mt-5
            max-w-2xl
            text-sm
            sm:text-base
            lg:text-lg
            leading-7
            text-white/70
          ">
            Server infrastructure and management solutions for
            reliable, scalable and efficient business environments.
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

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="w-9 h-[2px] bg-[#9B5B35]" />

              <span className="
                text-[#9B5B35]
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
              ">
                Server Infrastructure
              </span>

            </div>

            <h2 className="
              mt-4
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-[#062B49]
            ">
              Built For Reliable Operations
            </h2>

            <p className="
              mt-4
              text-sm
              sm:text-base
              text-gray-600
              leading-7
            ">
              Epsilora Technology delivers server and infrastructure
              solutions that help organizations maintain reliable
              and efficient IT operations.
            </p>

          </div>


          {/* SOLUTIONS */}
          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">

            {solutions.map((item) => (
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


          {/* KEY AREAS */}
          <div className="mt-14">

            <h3 className="
              text-xl
              sm:text-2xl
              font-bold
              text-[#062B49]
            ">
              Key Infrastructure Areas
            </h3>

            <div className="
              mt-6
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
            ">

              {[
                "Server Systems",
                "Cabinets & Racks",
                "KVM Switch Products",
                "Server Memory",
                "Server Processors",
                "Server Management",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    p-5
                    bg-[#f8f6f4]
                    border-l-2
                    border-[#9B5B35]
                  "
                >

                  <FiArrowRight className="text-[#9B5B35]" />

                  <span className="
                    text-sm
                    font-semibold
                    text-[#062B49]
                  ">
                    {item}
                  </span>

                </div>
              ))}

            </div>

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
          sm:py-12
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-6
        ">

          <div>

            <h2 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
            ">
              Need a reliable server infrastructure?
            </h2>

            <p className="
              mt-2
              text-sm
              text-white/60
            ">
              Discuss your server and infrastructure requirements
              with our experts.
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

export default ServerServer;