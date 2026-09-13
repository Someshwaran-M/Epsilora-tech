import React from "react";
import {
  FiServer,
  FiWifi,
  FiShield,
  FiHardDrive,
  FiArrowRight,
} from "react-icons/fi";

const DataCenter = () => {
  const features = [
    {
      icon: <FiServer />,
      title: "Infrastructure",
      text: "Reliable data center infrastructure designed for business-critical workloads.",
    },
    {
      icon: <FiWifi />,
      title: "Networking",
      text: "Connected and efficient networking solutions for data center environments.",
    },
    {
      icon: <FiShield />,
      title: "Security",
      text: "Infrastructure security solutions to help protect systems and business data.",
    },
    {
      icon: <FiHardDrive />,
      title: "Servers & Storage",
      text: "Scalable server and storage technologies for modern data centers.",
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
            Data Center Solutions
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
            Secure and reliable data center infrastructure,
            networking, servers and storage solutions.
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
      ">

        <div className="max-w-7xl mx-auto">

          <h2 className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-[#062B49]
          ">
            Reliable Data Center Infrastructure
          </h2>

          <p className="
            mt-4
            max-w-3xl
            text-sm
            sm:text-base
            text-gray-600
            leading-7
          ">
            Build dependable data center environments with
            infrastructure designed for performance, availability
            and business continuity.
          </p>


          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
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

    </div>
  );
};

export default DataCenter;