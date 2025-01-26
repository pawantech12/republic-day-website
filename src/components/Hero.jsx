import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-saffron via-white to-green py-16 text-center bg-[url('/flag-bg.jpg')] bg-no-repeat bg-cover bg-center h-[70vh] flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-neutral-700">
        Celebrate Republic Day
      </h2>
      <p className="text-lg mt-4 text-gray-700">
        Join us in commemorating India's spirit of unity, freedom, and
        democracy.
      </p>
      <button className="mt-6 bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-green-600 cursor-pointer font-semibold">
        Learn More
      </button>
    </section>
  );
};

export default Hero;
