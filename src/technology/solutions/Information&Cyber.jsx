import React from "react";
import {
  FiShield,
  FiLock,
  FiActivity,
  FiUserCheck,
  FiArrowRight,
} from "react-icons/fi";

const InformationCyber = () => {
  const securityAreas = [
    {
      icon: <FiShield />,
      title: "Network & Firewall Security",
      text: "Security solutions designed to protect network infrastructure and business systems.",
    },
    {
      icon: <FiLock />,
      title: "Cloud & Data Security",
      text: "Protect important business data and cloud environments with security-focused solutions.",
    },
    {
      icon: <FiActivity />,
      title: "Security Monitoring",
      text: "Monitoring and response capabilities to help identify and address security events.",
    },
    {
      icon: <FiUserCheck />,
      title: "Identity & Access Management",
      text: "Manage user access and support secure authentication across business environments.",
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
            Information & Cyber Security
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
            Security solutions designed to help protect your
            systems, networks, identities and business data.
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
            Protecting Your Digital Environment
          </h2>

          <p className="
            mt-4
            max-w-3xl
            text-sm
            sm:text-base
            text-gray-600
            leading-7
          ">
            Build a stronger security foundation with solutions
            focused on protection, monitoring, identity and risk
            management.
          </p>


          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          ">

            {securityAreas.map((item) => (
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

          <div>

            <h2 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
            ">
              Strengthen your security
            </h2>

            <p className="
              mt-2
              text-sm
              text-white/60
            ">
              Talk to our technology and security experts.
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

export default InformationCyber;