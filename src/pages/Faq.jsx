import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What technology services does Epsilora provide?",
    answer:
      "Epsilora provides professional technology services including IT consulting, cybersecurity, IT infrastructure, hardware solutions, software solutions, networking, and technology support.",
  },
  {
    question: "How can Epsilora help improve our IT infrastructure?",
    answer:
      "We assess your existing technology environment, identify areas for improvement, and recommend reliable, scalable, and cost-effective infrastructure solutions based on your business requirements.",
  },
  {
    question: "Does Epsilora provide cybersecurity solutions?",
    answer:
      "Yes. We provide cybersecurity-focused solutions designed to help businesses protect their systems, networks, data, and digital infrastructure from evolving security risks.",
  },
  {
    question: "Can Epsilora provide customized technology solutions?",
    answer:
      "Yes. Every business has different requirements. Our team works closely with clients to understand their goals and provide technology solutions tailored to their operational and business needs.",
  },
  {
    question: "Do you provide ongoing technical support?",
    answer:
      "Yes. Epsilora can provide ongoing technical assistance and support to help businesses maintain reliable technology operations and address technical issues efficiently.",
  },
  {
    question: "Does Epsilora work with small and medium-sized businesses?",
    answer:
      "Yes. Our technology solutions can be adapted to businesses of different sizes, from growing organizations to larger enterprises.",
  },
  {
    question: "How do I get started with Epsilora?",
    answer:
      "Simply contact our team and share your technology requirements. We will understand your needs, discuss suitable solutions, and guide you through the next steps.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b5b35] sm:mb-3 sm:text-sm">
            FAQ
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#062b49] sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
            Find answers to common questions about our technology services
            and solutions.
          </p>

        </div>


        {/* =========================
            FAQ LIST
        ========================== */}
        <div className="mt-8 space-y-3 sm:mt-10">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  overflow-hidden
                  border
                  bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#9b5b35]/50 shadow-sm"
                      : "border-gray-200 hover:border-[#9b5b35]/40"
                  }
                `}
              >

                {/* =========================
                    QUESTION BUTTON
                ========================== */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-4
                    text-left
                    sm:px-6
                    sm:py-5
                  "
                >

                  <span
                    className={`
                      min-w-0
                      pr-2
                      text-sm
                      font-semibold
                      leading-6
                      transition-colors
                      duration-300
                      sm:text-base
                      ${
                        isOpen
                          ? "text-[#9b5b35]"
                          : "text-[#062b49]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>


                  {/* Icon */}
                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#9b5b35] text-white"
                          : "bg-[#062b49] text-white"
                      }
                    `}
                  >
                    {isOpen ? (
                      <FiMinus size={16} />
                    ) : (
                      <FiPlus size={16} />
                    )}
                  </span>

                </button>


                {/* =========================
                    ANSWER
                ========================== */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="min-h-0 overflow-hidden">

                    <div className="border-t border-gray-100 px-4 pb-5 pt-4 sm:px-6 sm:pb-6">

                      <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div className="mt-9 text-center sm:mt-11">

          <p className="text-sm text-gray-500">
            Still have questions?
          </p>

          <a
            href="/contact"
            className="
              mt-3
              inline-flex
              w-full
              max-w-[220px]
              items-center
              justify-center
              bg-[#062b49]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#9b5b35]
              sm:w-auto
            "
          >
            Contact Our Team
          </a>

        </div>

      </div>
    </section>
  );
};

export default FAQ;