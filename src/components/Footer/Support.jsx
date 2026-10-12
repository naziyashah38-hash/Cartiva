import React from "react";

function Support() {
  const footerSections = [
    {
      title: "Get to Know Us",
      links: [
        "About Cartiva",
        "Our Story",
        "Careers",
        "Contact Us",
      ],
    },
    {
      title: "Connect with Us",
      links: [
        "Instagram",
        "Facebook",
        "Twitter",
        "Pinterest",
      ],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Cartiva",
        "Become an Affiliate",
        "Advertise Your Products",
        "Partner with Us",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Your Account",
        "Your Orders",
        "Returns & Refunds",
        "Help Center",
      ],
    },
  ];

  return (
    <footer className="bg-[#1e293b] mt-10 text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-8 py-12 md:grid-cols-4 md:gap-16">

        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-5 text-base font-bold text-[#f5dcac]">
              {section.title}
            </h3>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-[#f5dcac] hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Brand Section */}
      <div className="border-t border-gray-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 py-7">

          <a
            href="/"
            className="text-3xl font-extrabold tracking-wide text-[#f5dcac] transition hover:text-white"
          >
            cartiva
          </a>

          <p className="text-center text-sm text-gray-300">
            Your style, your choice, your Cartiva.
          </p>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#152232] px-6 py-4 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Cartiva. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Support;