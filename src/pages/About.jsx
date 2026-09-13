import React from "react";
import {
  FiArrowRight,
  FiServer,
  FiShield,
  FiCloud,
  FiCpu,
  FiCheck,
} from "react-icons/fi";

const About = () => {
  const capabilities = [
    {
      icon: <FiServer />,
      title: "IT Infrastructure",
      description:
        "Reliable infrastructure solutions designed for performance, stability and business continuity.",
    },
    {
      icon: <FiShield />,
      title: "Cybersecurity",
      description:
        "Modern security solutions that help protect systems, networks and critical business data.",
    },
    {
      icon: <FiCloud />,
      title: "Cloud Technology",
      description:
        "Flexible cloud solutions that support scalability, accessibility and modern business operations.",
    },
    {
      icon: <FiCpu />,
      title: "Emerging Technology",
      description:
        "Innovative technologies that help organizations adapt and prepare for the future.",
    },
  ];

  const values = [
    "Reliable technology solutions",
    "Customer-focused approach",
    "Secure and scalable infrastructure",
    "Professional technical expertise",
  ];

  return (
    <main className="bg-white text-[#111111]">


      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative">

              <img
                src="about.jpeg"
                alt="EPSILORA Technology"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />

              {/* Accent Box */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-7 sm:-right-7 bg-[#9B5B35] text-white px-5 py-5 sm:px-8 sm:py-7">

                <p className="text-2xl sm:text-3xl font-bold tracking-wide">
                  EPSILORA
                </p>

                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Technology Private Limited
                </p>

              </div>

            </div>


            {/* Content */}
            <div className="pt-8 lg:pt-0">

              <p className="text-[#9B5B35] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
                Who We Are
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#111111]">

                Driving Progress
                <br />

                <span className="text-[#062B49]">
                  Through Technology
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-7 sm:leading-8">
                EPSILORA Technology Private Limited is a technology
                solutions company focused on delivering reliable
                hardware, innovative solutions and expert services
                that help businesses grow in a digital world.
              </p>

              <p className="mt-4 text-gray-600 leading-7 sm:leading-8">
                From infrastructure and data centers to cybersecurity,
                cloud and emerging technologies, we help organizations
                build secure and future-ready IT environments.
              </p>


              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 sm:mt-8">

                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-start gap-3"
                  >

                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#f7f2ee] text-[#9B5B35]">
                      <FiCheck size={14} />
                    </div>

                    <p className="text-sm sm:text-base text-gray-700">
                      {value}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>




      {/* =====================================================
          WHY EPSILORA
      ===================================================== */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Left */}
            <div>

              <p className="text-[#9B5B35] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
                Why EPSILORA
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                A Technology Partner
                <br />
                <span className="text-[#062B49]">
                  You Can Rely On
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-7 sm:leading-8 max-w-xl">
                Our focus is simple — understand your technology
                requirements, provide the right solutions and support
                your organization throughout its technology journey.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 mt-7 sm:mt-9 bg-[#062B49] text-white px-6 sm:px-7 py-3.5 sm:py-4 font-semibold hover:bg-[#9B5B35] transition-all duration-300"
              >
                Talk to Our Team
                <FiArrowRight />
              </a>

            </div>


            {/* Right */}
            <div className="border-l-2 border-[#9B5B35] pl-6 sm:pl-8 lg:pl-10">

              <div className="space-y-7 sm:space-y-9">

                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-[#062B49]">
                    01
                  </p>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold">
                    Understand
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    We understand your business and technology
                    requirements before recommending a solution.
                  </p>
                </div>


                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-[#062B49]">
                    02
                  </p>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold">
                    Implement
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    We help deploy and integrate technology with
                    reliability and efficiency.
                  </p>
                </div>


                <div>
                  <p className="text-4xl sm:text-5xl font-bold text-[#062B49]">
                    03
                  </p>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold">
                    Support
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    We remain focused on long-term support,
                    maintenance and technology success.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



    </main>
  );
};

export default About;