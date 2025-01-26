import React, { useState } from "react";
import { useEffect } from "react";

const quotes = [
  "Be the change you wish to see in the world. - Mahatma Gandhi",
  "Swaraj is my birthright and I shall have it. - Bal Gangadhar Tilak",
  "A nation’s culture resides in the hearts and in the soul of its people. - Mahatma Gandhi",
  "We are Indians, firstly and lastly. - B.R. Ambedkar",
  "The sanctity of law can be maintained only so long as it is the expression of the will of the people. - Bhagat Singh",
  "A country’s greatness lies in its undying ideals of love and sacrifice that inspire the mothers of the race. - Sarojini Naidu",
  "Freedom is not worth having if it does not include the freedom to make mistakes. - Mahatma Gandhi",
  "Democracy means nothing if people are not able to work the democracy for the common good. - Chandra Bhanu Gupta",
  "Faith is the foundation of our republic and unity is its strength. - Sardar Vallabhbhai Patel",
  "Citizenship consists in the service of the country. - Jawaharlal Nehru",
  "True democracy is not merely about the rights to vote and elect leaders, but it is the duty to make the right choices for the greater good. - Narendra Modi",
  "Let new India arise out of peasants' cottage, grasping the plough, out of huts, cobbler and sweeper. - Swami Vivekananda",
  "The preservation of freedom is not the task of soldiers alone. The whole nation has to be strong. - Lal Bahadur Shastri",
  "Forget not that the grossest crime is to compromise with injustice and wrong. Remember the eternal law: you must give, if you want to get. - Netaji Subhas Chandra Bose",
  "If yet your blood does not rage, then it is water that flows in your veins. For what is the flush of youth, if it is not of service to the motherland? - Chandra Shekhar Azad",
  "Ask not what your country can do for you. Ask what you can do for your country. - John F. Kennedy (applicable universally)",
  "The power to question is the basis of all human progress. - Indira Gandhi",
  "India has no dearth of brave young men and women and if they get the opportunity and help, we can compete with other nations in space exploration and one day we will proudly plant our flag on the moon. - Atal Bihari Vajpayee",
  "The future depends on what we do in the present. - Mahatma Gandhi",
  "The constitution is not a mere lawyer's document, it is a vehicle of life, and its spirit is always the spirit of age. - B.R. Ambedkar",
];
const QuotesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]);

  // Move to the next quote with opacity animation
  const nextQuote = () => {
    setFade(false); // Start fading out
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
      setFade(true); // Start fading in
    }, 500); // Match the fade-out duration
  };

  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-16">
      <div className=" mx-auto text-center px-6 md:px-12">
        <h3 className="text-4xl font-semibold text-white leading-tight mb-6">
          Inspirational Quotes
        </h3>
        <p
          className={`mt-4 italic text-xl text-white transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {quotes[current]}
        </p>
        <button
          className="mt-8 bg-white text-saffron px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-200 transform transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={nextQuote}
        >
          Next Quote
        </button>
      </div>
    </section>
  );
};

export default QuotesCarousel;
