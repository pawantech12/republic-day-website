import React, { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HistorySection from "./components/HistorySection";
import Events from "./components/Events";
import QuotesCarousel from "./components/QuotesCarousel";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  // Create references for each section
  const historyRef = useRef(null);
  const eventsRef = useRef(null);
  const galleryRef = useRef(null);

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden sm:block">
        <Header
          historyRef={historyRef}
          eventsRef={eventsRef}
          galleryRef={galleryRef}
        />
        <Hero />
        <HistorySection historyRef={historyRef} />
        <Events eventsRef={eventsRef} />
        <QuotesCarousel />
        <Gallery galleryRef={galleryRef} />
        <Footer />
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex items-center justify-center min-h-screen bg-gray-100 text-center">
        <p className="text-gray-800 text-lg font-medium">
          This application is only available on desktop. Please switch to a
          larger screen to view the content.
        </p>
      </div>
    </div>
  );
};

export default App;
