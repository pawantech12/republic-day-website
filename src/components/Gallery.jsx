import React from "react";

const images = [
  "gallery1.webp",
  "gallery2.webp",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.png",
  "gallery6.jpg",
];

const Gallery = ({ galleryRef }) => {
  return (
    <section id="gallery" className="bg-white py-24 px-5" ref={galleryRef}>
      <div className=" mx-auto text-center">
        <h3 className="text-3xl font-semibold text-neutral-700">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {images.map((image, index) => (
            <figure
              key={index}
              className="w-full h-56 cursor-pointer hover:-translate-y-1.5 transition-all ease-in-out duration-300"
            >
              <img
                src={image}
                alt={`Republic Day ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
