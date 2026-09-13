import React from "react";
import {
  FiCpu,
  FiCloud,
  FiShield,
  FiDatabase,
  FiArrowUpRight,
  FiCheckCircle,
  FiLayers,
} from "react-icons/fi";

const Innovation = () => {
  const technologyPillars = [
    {
      number: "01",
      icon: <FiCpu />,
      title: "Intelligent Operations",
      description:
        "Transform everyday operations with intelligent automation, smarter workflows and technology that helps teams work more effectively.",
    },
    {
      number: "02",
      icon: <FiCloud />,
      title: "Connected Infrastructure",
      description:
        "Create a dependable technology foundation where cloud, servers, networks and applications operate together seamlessly.",
    },
    {
      number: "03",
      icon: <FiShield />,
      title: "Digital Resilience",
      description:
        "Build stronger digital environments designed to protect critical systems, reduce disruption and support business continuity.",
    },
    {
      number: "04",
      icon: <FiDatabase />,
      title: "Business Intelligence",
      description:
        "Turn business information into useful insights that help organizations understand opportunities and make confident decisions.",
    },
  ];

  const capabilities = [
    "Technology Modernization",
    "Intelligent Infrastructure",
    "Cloud Transformation",
    "Cyber Security",
    "Automation & Optimization",
    "Data Intelligence",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Top Right Brown Shape */}

        <div
          className="
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-[#9B5B35]/5
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        {/* Bottom Left Blue Shape */}

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-80
            w-80
            rounded-full
            bg-[#062B49]/5
            blur-3xl
          "
        />

        {/* Small Brown Accent */}

        <div
          className="
            absolute
            right-[8%]
            top-[20%]
            hidden
            h-2
            w-2
            rounded-full
            bg-[#9B5B35]
            lg:block
          "
        />

        <div
          className="
            absolute
            left-[8%]
            bottom-[25%]
            hidden
            h-2
            w-2
            rounded-full
            bg-[#9B5B35]
            lg:block
          "
        />

      </div>


      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">


        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#9B5B35]" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#9B5B35]
                "
              >
                Innovation & Technology
              </span>

            </div>


            <h2
              className="
                mt-5
                max-w-3xl
                text-3xl
                font-bold
                leading-tight
                text-[#062B49]
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              Technology Built
              <span className="block text-[#9B5B35]">
                For What's Ahead
              </span>
            </h2>

          </div>


          {/* RIGHT */}

          <div>

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-gray-600
                sm:text-base
              "
            >
              Epsilora Technology brings together modern
              infrastructure, intelligent systems and security
              expertise to help organizations build technology
              environments that are ready for what comes next.
            </p>

          </div>

        </div>


        {/* ===================================================
            INTRODUCTION LINE
        =================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-y
            border-gray-200
            py-6
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              max-w-3xl
              text-sm
              font-medium
              leading-6
              text-[#062B49]
              sm:text-base
            "
          >
            We turn technology opportunities into practical
            solutions that improve performance, strengthen
            resilience and create long-term value.
          </p>


          <div className="flex shrink-0 items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#9B5B35]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-gray-400
              "
            >
              EPSILORA TECHNOLOGY
            </span>

          </div>

        </div>


        {/* ===================================================
            TECHNOLOGY PILLARS
        =================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-4
          "
        >

          {technologyPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="
                group
                relative
                overflow-hidden
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#9B5B35]/50
                hover:shadow-xl
                sm:p-7
                lg:p-8
              "
            >

              {/* Brown Top Border */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[3px]
                  bg-[#9B5B35]
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />


              {/* Number */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-[#9B5B35]
                  "
                >
                  {pillar.number}
                </span>


                <FiArrowUpRight
                  className="
                    text-lg
                    text-gray-300
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#9B5B35]
                  "
                />

              </div>


              {/* Icon */}

              <div
                className="
                  mt-8
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border
                  border-[#9B5B35]/25
                  bg-[#9B5B35]/5
                  text-2xl
                  text-[#9B5B35]
                  transition-all
                  duration-500
                  group-hover:border-[#9B5B35]
                  group-hover:bg-[#9B5B35]
                  group-hover:text-white
                "
              >
                {pillar.icon}
              </div>


              {/* Title */}

              <h3
                className="
                  mt-6
                  text-lg
                  font-bold
                  text-[#062B49]
                  sm:text-xl
                "
              >
                {pillar.title}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                {pillar.description}
              </p>


              {/* Bottom */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    h-[2px]
                    w-8
                    bg-[#9B5B35]
                    transition-all
                    duration-500
                    group-hover:w-14
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-gray-400
                  "
                >
                  Explore
                </span>

              </div>

            </div>
          ))}

        </div>


        {/* ===================================================
            APPROACH SECTION
        =================================================== */}

        <div
          className="
            mt-16
            grid
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          "
        >

          {/* LEFT CONTENT */}

          <div>

            <div className="flex items-center gap-3">

              <FiLayers className="text-xl text-[#9B5B35]" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#9B5B35]
                "
              >
                Our Innovation Approach
              </span>

            </div>


            <h3
              className="
                mt-5
                text-2xl
                font-bold
                leading-tight
                text-[#062B49]
                sm:text-3xl
                lg:text-4xl
              "
            >
              Innovation should solve
              <span className="text-[#9B5B35]">
                {" "}real challenges.
              </span>
            </h3>


            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              We focus on where technology can create measurable
              improvement. From modernizing existing environments
              to introducing new capabilities, our approach is
              designed around business needs, operational realities
              and long-term scalability.
            </p>


            <div className="mt-7 flex items-center gap-3">

              <div
                className="
                  h-10
                  w-1
                  bg-[#9B5B35]
                "
              />

              <p
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-[#062B49]
                "
              >
                Practical technology.
                <br />
                Meaningful outcomes.
              </p>

            </div>

          </div>


          {/* RIGHT CAPABILITIES */}

          <div
            className="
              border
              border-gray-200
              bg-[#f8f7f5]
              p-6
              sm:p-8
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#9B5B35]
                  "
                >
                  Technology Focus
                </p>

                <h4
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-[#062B49]
                  "
                >
                  Areas We Explore
                </h4>

              </div>


              <div
                className="
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  border-[#9B5B35]/20
                  bg-white
                  text-xl
                  text-[#9B5B35]
                  sm:flex
                "
              >
                <FiCpu />
              </div>

            </div>


            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-x-8
                gap-y-4
                sm:grid-cols-2
              "
            >

              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-gray-200
                    pb-4
                  "
                >

                  <FiCheckCircle
                    className="
                      shrink-0
                      text-[#9B5B35]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#062B49]
                    "
                  >
                    {capability}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* ===================================================
            FINAL CTA
        =================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            bg-[#062B49]
            p-7
            sm:p-10
            lg:mt-20
            lg:p-12
          "
        >

          {/* CTA Accent */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              bg-[#9B5B35]/20
              blur-3xl
            "
          />


          <div
            className="
              relative
              grid
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C98255]
                "
              >
                The Next Step
              </p>


              <h3
                className="
                  mt-3
                  max-w-3xl
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Let's create technology
                that moves your business forward.
              </h3>


              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                Tell us where you want to go. We'll help you
                identify the technology, infrastructure and
                expertise needed to get there.
              </p>

            </div>


            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-[#9B5B35]
                bg-[#9B5B35]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#844A2A]
                hover:border-[#844A2A]
              "
            >
              Start a Conversation
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Innovation;