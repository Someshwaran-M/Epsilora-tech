import React from "react";
import {
  FiCpu,
  FiZap,
  FiBarChart2,
  FiRadio,
  FiArrowRight,
} from "react-icons/fi";

const Emerging = () => {
  const technologies = [
    {
      icon: <FiCpu />,
      title: "AI & Machine Learning",
      text: "Intelligent technologies that support automation, analysis and better business decisions.",
    },
    {
      icon: <FiZap />,
      title: "Automation & Robotics",
      text: "Automation technologies designed to improve operational efficiency.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Data & Analytics",
      text: "Technology solutions that help organizations turn data into useful insights.",
    },
    {
      icon: <FiRadio />,
      title: "IoT & Smart Solutions",
      text: "Connected technologies for smarter infrastructure and business environments.",
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
            Emerging Technology
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
            Explore modern technologies that help businesses
            innovate, automate and build smarter operations.
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
            Technology For The Future
          </h2>

          <p className="
            mt-4
            max-w-3xl
            text-sm
            sm:text-base
            text-gray-600
            leading-7
          ">
            Our emerging technology solutions help organizations
            explore new opportunities through intelligent systems,
            automation, analytics and connected technologies.
          </p>


          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">

            {technologies.map((item) => (
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

export default Emerging;