import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#062b49] text-white">

      {/* ================= CTA ================= */}
      <section className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <p className="text-[#c18a61] font-semibold uppercase tracking-wider text-sm mb-2">
                Let's Build Together
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">
                Let's Build a Smarter Future Together
              </h2>

              <p className="text-gray-300 mt-2">
                Partner with EPSILORA for reliable technology solutions.
              </p>
            </div>

            <a
              href="/contact"
              className="flex items-center gap-2 bg-[#9b5b35] hover:bg-[#7e4729] px-7 py-3 font-semibold transition whitespace-nowrap"
            >
              Contact Us
              <FiArrowRight />
            </a>

          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>

            <img
              src="logo.jpeg"
              alt="EPSILORA Technology Private Limited"
              className="w-[190px] mb-5"
            />

            <p className="text-gray-300 text-sm leading-7 max-w-sm">
              EPSILORA Technology Private Limited provides reliable
              hardware, infrastructure, cybersecurity, cloud and
              professional technology solutions for modern businesses.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">

              <a
                href="#linkedin"
                className="w-9 h-9 border border-white/30 flex items-center justify-center hover:bg-[#9b5b35] hover:border-[#9b5b35] transition"
              >
                <FiLinkedin size={17} />
              </a>

              <a
                href="#facebook"
                className="w-9 h-9 border border-white/30 flex items-center justify-center hover:bg-[#9b5b35] hover:border-[#9b5b35] transition"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="#instagram"
                className="w-9 h-9 border border-white/30 flex items-center justify-center hover:bg-[#9b5b35] hover:border-[#9b5b35] transition"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#youtube"
                className="w-9 h-9 border border-white/30 flex items-center justify-center hover:bg-[#9b5b35] hover:border-[#9b5b35] transition"
              >
                <FiYoutube size={17} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">

              <li>
                <a href="/" className="hover:text-[#c18a61] transition">
                  Home
                </a>
              </li>


              <li>
                <a href="/hardware" className="hover:text-[#c18a61] transition">
                  Hardware
                </a>
              </li>

              <li>
                <a href="/solutions" className="hover:text-[#c18a61] transition">
                  Solutions
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-[#c18a61] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="/partners" className="hover:text-[#c18a61] transition">
                  Brand Partners
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-[#c18a61] transition">
                  Contact Us
                </a>
              </li>

            </ul>
          </div>

          {/* Solutions */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Solutions
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">

              <li>
                <a href="/solutions/data-center" className="hover:text-[#c18a61]">
                  Data Center Solutions
                </a>
              </li>

              <li>
                <a href="/solutions/cybersecurity" className="hover:text-[#c18a61]">
                  Information & Cybersecurity
                </a>
              </li>

            <li>
                <a
                  href="/solutions/emerging-technology"
                  className="hover:text-[#c18a61]"
                >
                  Emerging Technology
                </a>
              </li>


              <li>
                <a href="/solutions/cloud" className="hover:text-[#c18a61]">
                  Cloud Solutions
                </a>
              </li>

              
              

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold mb-5">
              Our Office
            </h3>

            <div className="space-y-5 text-sm text-gray-300">

              <div className="flex gap-3">
                <FiMapPin
                  size={20}
                  className="text-[#c18a61] flex-shrink-0 mt-1"
                />

                <p className="leading-6">
                  No. 378, Sudhiksha Apartment,
                  <br />
                  Second Floor, S1,
                  <br />
                  Sivaprakasam Nagar 2nd Main Road,
                  <br />
                  Surapet,
                  <br />
                  Chennai - 600066
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <FiPhone className="text-[#c18a61]" />
                <a href="tel:+910000000000" className="hover:text-white">
                  +91 00000 00000
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FiMail className="text-[#c18a61]" />
                <a
                  href="mailto:info@epsilora.in"
                  className="hover:text-white"
                >
                  info@epsilora.in
                </a>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">
                  CIN
                </p>

                <p className="font-medium">
                  U62099TN2026PTC191846
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-white/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="min-h-[65px] flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">

            <p>
              © {new Date().getFullYear()} EPSILORA Technology Private Limited.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-5">

              <a
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>

              <span>|</span>

              <a
                href="/terms"
                className="hover:text-white transition"
              >
                Terms of Use
              </a>

            </div>

          </div>

          {/* Powered By */}
          <div className="border-t border-white/10 py-3 text-center text-xs text-gray-400">
            Powered By{" "}
            <span className="text-[#c18a61] font-bold">
              MK Dynamic Technology
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;