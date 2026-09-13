import React from "react";
import {
  FiCpu,
  FiServer,
  FiMonitor,
  FiSettings,
  FiArrowRight,
} from "react-icons/fi";

const PcServer = () => {
  const components = [
    {
      icon: <FiCpu />,
      title: "Processors",
      text: "High-performance processors for business computing and enterprise workloads.",
    },
    {
      icon: <FiServer />,
      title: "Server Components",
      text: "Reliable components designed for scalable server infrastructure.",
    },
    {
      icon: <FiMonitor />,
      title: "PC Components",
      text: "Quality components for professional desktops and business systems.",
    },
    {
      icon: <FiSettings />,
      title: "Infrastructure Support",
      text: "Technology components that support dependable IT infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062B49]">

        <div className="
          absolute
          -left-32
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
            PC & Server
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
            Professional PC and server components built to support
            reliable business computing and enterprise infrastructure.
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
                PC & Server Solutions
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
              Reliable Computing Infrastructure
            </h2>

            <p className="
              mt-4
              text-sm
              sm:text-base
              text-gray-600
              leading-7
            ">
              We provide dependable PC and server components to
              support business applications, workloads and modern
              IT environments.
            </p>

          </div>


          {/* COMPONENTS */}
          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">

            {components.map((item) => (
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


          {/* COMPONENT LIST */}
          <div className="mt-14">

            <h3 className="
              text-xl
              sm:text-2xl
              font-bold
              text-[#062B49]
            ">
              Key Components
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
                "Memory (RAM)",
                "Motherboards",
                "Processors (CPU)",
                "Sound Cards",
                "Video Cards (GPU)",
                "Server Components",
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
              Looking for PC or server hardware?
            </h2>

            <p className="
              mt-2
              text-sm
              text-white/60
            ">
              Let our team help you choose the right components.
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

export default PcServer;