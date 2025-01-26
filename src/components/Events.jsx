import React from "react";

const events = [
  {
    img: "flag-hosting.avif",
    title: "Flag Hoisting",
    description: "National Flag Hoisting Ceremony.",
  },
  {
    img: "parade.webp",
    title: "Parade",
    description: "Cultural parade showcasing India's diversity.",
  },
  {
    img: "cultural.jpg",
    title: "Cultural Events",
    description: "Patriotic songs and performances.",
  },
];

const Events = ({ eventsRef }) => {
  return (
    <section id="events" className="bg-gray-100 py-24" ref={eventsRef}>
      <div className="mx-auto text-center">
        <h3 className="text-3xl font-semibold text-neutral-700">
          Event Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 rounded-xl hover:shadow-lg cursor-pointer"
            >
              <figure className="w-full h-56">
                <img
                  src={`/${event.img}`}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
              <div className="mt-3 flex flex-col gap-1">
                <h4 className="text-xl font-semibold">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
