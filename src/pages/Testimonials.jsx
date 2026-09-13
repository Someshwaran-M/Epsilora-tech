import React from "react";
import {
  FiStar,
  FiArrowDown,
} from "react-icons/fi";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Manager",
    review:
      "Epsilora provided a reliable and well-structured technology solution that aligned perfectly with our business requirements. Their team was professional, responsive, and committed throughout the project.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    review:
      "The Epsilora team helped us strengthen our cybersecurity approach with practical and effective solutions. Their expertise and attention to detail gave us greater confidence in our technology environment.",
  },
  {
    name: "Arun Prakash",
    role: "Managing Director",
    review:
      "Working with Epsilora was a great experience. They understood our challenges quickly and provided clear, practical technology recommendations that helped us make better business decisions.",
  },
  {
    name: "Suresh Menon",
    role: "Business Head",
    review:
      "Epsilora delivered exactly what we needed — professional service, dependable technology, and excellent support. Their team demonstrated strong technical knowledge from start to finish.",
  },
  {
    name: "Karthik R",
    role: "Technology Lead",
    review:
      "We were impressed by Epsilora's approach to solving complex technology requirements. Their solutions were reliable, scalable, and designed with our long-term business goals in mind.",
  },
  {
    name: "Anitha Krishnan",
    role: "Operations Manager",
    review:
      "Epsilora combines technical expertise with a strong understanding of business needs. Their professional approach and consistent support made the entire engagement smooth and efficient.",
  },
];

const Testimonials = ({ onFaqClick, faqOpen }) => {
  return (
    <section
      id="testimonials"
      className="bg-[#f8f7f5] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b5b35] sm:text-sm">
            Testimonials
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#062b49] sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Trusted by businesses for reliable technology, infrastructure,
            cybersecurity, and professional services.
          </p>

        </div>


        {/* =========================
            TESTIMONIAL CARDS
        ========================== */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                h-full
                min-h-[330px]
                flex-col
                border
                border-gray-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#9b5b35]/50
                hover:shadow-xl
                sm:p-6
                lg:p-7
              "
            >

              {/* TOP ACCENT */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  bg-[#9b5b35]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />


              {/* STARS */}
              <div className="mb-5 flex items-center gap-1 text-[#c18a61]">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={16}
                    className="fill-current"
                  />
                ))}

              </div>


              {/* REVIEW */}
              <p
                className="
                  flex-1
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-[15px]
                  lg:text-base
                "
              >
                "{testimonial.review}"
              </p>


              {/* CLIENT INFORMATION */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  border-t
                  border-gray-200
                  pt-5
                "
              >

                {/* Initial Avatar */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#062b49]
                    text-xs
                    font-bold
                    text-white
                    sm:h-12
                    sm:w-12
                    sm:text-sm
                  "
                >
                  {testimonial.name
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>


                {/* Client Details */}
                <div className="min-w-0">

                  <h3 className="truncate text-sm font-bold text-[#062b49] sm:text-base">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* =========================
            FAQ BUTTON
        ========================== */}
        <div className="mt-10 flex justify-center sm:mt-12">

          <button
            type="button"
            onClick={onFaqClick}
            aria-expanded={faqOpen}
            className="
              group
              inline-flex
              w-full
              max-w-[290px]
              items-center
              justify-center
              gap-3
              bg-[#062b49]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#9b5b35]
              sm:w-auto
              sm:max-w-none
              sm:px-7
            "
          >

            {faqOpen
              ? "Close Frequently Asked Questions"
              : "Frequently Asked Questions"}

            <FiArrowDown
              size={18}
              className={`
                transition-transform
                duration-300
                ${
                  faqOpen
                    ? "rotate-180"
                    : "group-hover:translate-y-1"
                }
              `}
            />

          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;