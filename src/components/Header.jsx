import React from "react";

const Header = ({ historyRef, eventsRef, galleryRef }) => {
  // Scroll function to scroll to a particular section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 via-white to-green-500 text-white py-2 sticky top-0 z-50 shadow-lg">
      <div className=" mx-auto flex justify-between items-center px-4">
        {/* Logo / Title */}
        <div>
          <figure>
            <img src="/logo.png" alt="Ashoka Chakra" className="w-12" />
          </figure>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <button
                onClick={() => scrollToSection(historyRef)}
                className="text-gray-800 hover:text-emerald-500 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer font-semibold"
              >
                History
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(eventsRef)}
                className="text-gray-800 hover:text-emerald-500 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer font-semibold"
              >
                Events
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(galleryRef)}
                className="text-gray-800 hover:text-emerald-500 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer font-semibold"
              >
                Gallery
              </button>
            </li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <button className="bg-white text-amber-500 font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-lg hover:bg-yellow-100 transition-all cursor-pointer">
          Get Involved
        </button>
      </div>
    </header>
  );
};

export default Header;
