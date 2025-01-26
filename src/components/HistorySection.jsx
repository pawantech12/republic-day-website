import React from "react";

const HistorySection = ({ historyRef }) => {
  return (
    <section id="history" className="bg-white py-24" ref={historyRef}>
      <div className="mx-auto text-center">
        <h3 className="text-3xl font-bold text-orange-400">
          History of Republic Day
        </h3>
        <p className="text-gray-700 mt-4">
          Republic Day is celebrated on 26th January every year to honor the day
          the Constitution of India came into effect in 1950. It marks the
          transition of India into an independent republic.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
