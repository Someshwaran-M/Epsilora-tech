import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiSend,
  FiMessageSquare,
  FiHeadphones,
  FiShield,
  FiCloud,
  FiServer,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FiPhone />,
      title: "Call Us",
      value: "+91 00000 00000",
      description: "Talk to our technology experts",
      link: "tel:+910000000000",
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      value: "info@epsilora.com",
      description: "Send us your requirements",
      link: "mailto:info@epsilora.com",
    },
    {
      icon: <FiMapPin />,
      title: "Our Office",
      value: "Chennai",
      description: "Surapet, Chennai - 600066",
      link: "#location",
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      value: "Mon - Fri",
      description: "9:00 AM - 6:00 PM",
      link: "#contact-form",
    },
  ];

  const services = [
    {
      icon: <FiServer />,
      title: "Hardware Solutions",
      text: "Enterprise hardware, servers, storage and infrastructure solutions.",
    },
    {
      icon: <FiCloud />,
      title: "Cloud Solutions",
      text: "Scalable cloud infrastructure, migration, networking and security.",
    },
    {
      icon: <FiShield />,
      title: "Cyber Security",
      text: "Advanced information and cybersecurity solutions for your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#062B49]">

        {/* Background Decorations */}

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#9B5B35]/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#9B5B35]/10 blur-3xl" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            bg-[size:45px_45px]
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

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">

              <span className="w-10 h-[2px] bg-[#9B5B35]" />

              <span
                className="
                  text-[#D8A47F]
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Get In Touch
              </span>

            </div>

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                text-white
              "
            >
              Let's Build Something

              <span className="block text-[#C9875D]">
                Great Together.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                sm:text-lg
                leading-8
                text-white/70
              "
            >
              Have a technology requirement, project idea, or
              business challenge? Connect with Epsilora Technology
              and let our experts help you find the right solution.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="#contact-form"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  bg-[#9B5B35]
                  hover:bg-[#844A2A]
                  text-white
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                "
              >
                Send An Enquiry
                <FiArrowRight />
              </a>

              <a
                href="tel:+910000000000"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  border
                  border-white/30
                  hover:border-[#9B5B35]
                  hover:bg-white/5
                  text-white
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                "
              >
                <FiPhone />
                Talk To Our Experts
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}

      <section className="relative -mt-8 sm:-mt-10 z-10 px-4 sm:px-6">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            bg-white
            shadow-xl
            border
            border-gray-100
          "
        >

          {contactDetails.map((item, index) => (
            <a
              href={item.link}
              key={item.title}
              className={`
                group
                p-6
                sm:p-7
                lg:p-6
                flex
                items-start
                gap-4
                hover:bg-[#faf8f6]
                transition-all
                duration-300
                ${
                  index !== contactDetails.length - 1
                    ? "border-b sm:border-b lg:border-b-0 lg:border-r border-gray-100"
                    : ""
                }
              `}
            >

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  w-11
                  h-11
                  bg-[#062B49]
                  text-white
                  group-hover:bg-[#9B5B35]
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {item.title}
                </p>

                <h3
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    font-bold
                    text-[#062B49]
                  "
                >
                  {item.value}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {item.description}
                </p>

              </div>

            </a>
          ))}

        </div>

      </section>


      {/* =========================================================
          CONTACT FORM + INTRO
      ========================================================= */}

      <section
        id="contact-form"
        className="
          px-5
          sm:px-8
          lg:px-12
          py-20
          sm:py-24
          lg:py-28
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-start
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-5">

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
                Start A Conversation
              </span>

            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                text-[#062B49]
              "
            >
              Tell Us What

              <span className="block text-[#9B5B35]">
                You Need.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                leading-7
                max-w-xl
              "
            >
              Whether you are planning a new IT infrastructure,
              strengthening cybersecurity, moving to the cloud, or
              looking for reliable technology products, our team is
              ready to understand your requirements.
            </p>


            {/* BENEFITS */}

            <div className="mt-8 space-y-4">

              {[
                "Expert technology consultation",
                "Customized solutions for your business",
                "Enterprise-grade products and services",
                "Professional support from our experienced team",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3"
                >

                  <FiCheckCircle
                    className="text-[#9B5B35] shrink-0"
                    size={19}
                  />

                  <span className="text-sm text-gray-700">
                    {text}
                  </span>

                </div>
              ))}

            </div>


            {/* DIRECT CONTACT */}

            <div
              className="
                mt-10
                p-5
                sm:p-6
                bg-[#062B49]
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-4
              "
            >

              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  flex
                  items-center
                  justify-center
                  bg-[#9B5B35]
                  text-white
                "
              >
                <FiHeadphones size={21} />
              </div>

              <div>

                <p className="text-xs text-white/60 uppercase tracking-wider">
                  Need immediate assistance?
                </p>

                <a
                  href="tel:+910000000000"
                  className="
                    mt-1
                    block
                    text-white
                    font-semibold
                    hover:text-[#D8A47F]
                    transition
                  "
                >
                  +91 00000 00000
                </a>

              </div>

            </div>

          </div>


          {/* =====================================================
              FORM
          ===================================================== */}

          <div
            className="
              bg-white
              border
              border-gray-200
              shadow-lg
              p-6
              sm:p-8
              lg:p-10
            "
          >

            <div className="mb-7">

              <div
                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  bg-[#062B49]
                  text-white
                  mb-5
                "
              >
                <FiMessageSquare size={21} />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#062B49]
                "
              >
                Send Us An Enquiry
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in your details and our team will get back to you.
              </p>

            </div>


            <form className="space-y-5">

              {/* NAME */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#062B49]
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-gray-200
                    outline-none
                    text-sm
                    text-gray-800
                    placeholder:text-gray-400
                    focus:border-[#9B5B35]
                    transition
                  "
                />

              </div>


              {/* EMAIL + PHONE */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>

                  <label
                    className="
                      block
                      mb-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#062B49]
                    "
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="
                      w-full
                      h-12
                      px-4
                      border
                      border-gray-200
                      outline-none
                      text-sm
                      placeholder:text-gray-400
                      focus:border-[#9B5B35]
                      transition
                    "
                  />

                </div>

                <div>

                  <label
                    className="
                      block
                      mb-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#062B49]
                    "
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="
                      w-full
                      h-12
                      px-4
                      border
                      border-gray-200
                      outline-none
                      text-sm
                      placeholder:text-gray-400
                      focus:border-[#9B5B35]
                      transition
                    "
                  />

                </div>

              </div>


              {/* COMPANY */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#062B49]
                  "
                >
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-gray-200
                    outline-none
                    text-sm
                    placeholder:text-gray-400
                    focus:border-[#9B5B35]
                    transition
                  "
                />

              </div>


              {/* SERVICE */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#062B49]
                  "
                >
                  Requirement
                </label>

                <select
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    border-gray-200
                    outline-none
                    text-sm
                    text-gray-600
                    focus:border-[#9B5B35]
                    bg-white
                    transition
                  "
                  defaultValue=""
                >

                  <option value="" disabled>
                    Select your requirement
                  </option>

                  <option>Hardware Solutions</option>
                  <option>Cloud Solutions</option>
                  <option>Data Center Solutions</option>
                  <option>Cyber Security</option>
                  <option>Emerging Technology</option>
                  <option>Professional Services</option>
                  <option>Other</option>

                </select>

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#062B49]
                  "
                >
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement..."
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    border-gray-200
                    outline-none
                    resize-none
                    text-sm
                    placeholder:text-gray-400
                    focus:border-[#9B5B35]
                    transition
                  "
                />

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  bg-[#062B49]
                  hover:bg-[#9B5B35]
                  text-white
                  font-semibold
                  text-sm
                  transition-all
                  duration-300
                "
              >
                Send Enquiry
                <FiSend size={16} />
              </button>

            </form>

          </div>

        </div>

      </section>


     

      {/* =========================================================
          LOCATION SECTION
      ========================================================= */}

      <section
        id="location"
        className="
          px-5
          sm:px-8
          lg:px-12
          py-20
          sm:py-24
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          "
        >

          {/* =====================================================
              LOCATION INFO
          ===================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-5">

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
                Find Us
              </span>

            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-[#062B49]
              "
            >
              Connect With

              <span className="block text-[#9B5B35]">
                Epsilora Technology
              </span>
            </h2>

            <p
              className="
                mt-5
                text-gray-600
                leading-7
                max-w-xl
              "
            >
              Our team is available to discuss your technology
              requirements and help you identify the right
              solutions for your organization.
            </p>


            {/* ADDRESS */}

            <div className="mt-8 flex gap-4">

              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  flex
                  items-center
                  justify-center
                  bg-[#9B5B35]
                  text-white
                "
              >
                <FiMapPin />
              </div>

              <div>

                <h3 className="font-bold text-[#062B49]">
                  Epsilora Technology
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-gray-600
                    leading-6
                  "
                >
                  No. 378, Sudhiksha Apartment,
                  <br />
                  Second Floor, S1,
                  <br />
                  Sivaprakasam Nagar 2nd Main Road,
                  <br />
                  Surapet,
                  <br />
                  Chennai – 600066
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=No.+378,+Sudhiksha+Apartment,+Second+Floor,+S1,+Sivaprakasam+Nagar+2nd+Main+Road,+Surapet,+Chennai+-+600066"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#9B5B35]
                    hover:text-[#062B49]
                    transition
                  "
                >
                  Open In Google Maps
                  <FiArrowRight size={15} />
                </a>

              </div>

            </div>

          </div>


          {/* =====================================================
              GOOGLE MAP
          ===================================================== */}

          <div
            className="
              relative
              min-h-[320px]
              sm:min-h-[380px]
              lg:min-h-[450px]
              overflow-hidden
              border
              border-gray-200
              shadow-xl
              bg-gray-100
            "
          >

            <iframe
              title="Epsilora Technology Location"
              src="https://www.google.com/maps?q=No.+378,+Sudhiksha+Apartment,+Second+Floor,+S1,+Sivaprakasam+Nagar+2nd+Main+Road,+Surapet,+Chennai+-+600066&output=embed"
              className="
                absolute
                inset-0
                w-full
                h-full
                border-0
              "
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />


            {/* MAP ADDRESS OVERLAY */}

            <div
              className="
                absolute
                left-4
                right-4
                bottom-4
                sm:left-5
                sm:right-auto
                sm:max-w-sm
                bg-[#062B49]/95
                backdrop-blur-md
                border
                border-white/10
                p-4
                sm:p-5
                shadow-2xl
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                    shrink-0
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    bg-[#9B5B35]
                    text-white
                  "
                >
                  <FiMapPin size={19} />
                </div>

                <div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-[#D8A47F]
                      font-semibold
                    "
                  >
                    Our Location
                  </p>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    Epsilora Technology
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      sm:text-sm
                      leading-5
                      text-white/65
                    "
                  >
                    No. 378, Sudhiksha Apartment,
                    <br />
                    Second Floor, S1,
                    <br />
                    Sivaprakasam Nagar 2nd Main Road,
                    <br />
                    Surapet, Chennai – 600066
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;