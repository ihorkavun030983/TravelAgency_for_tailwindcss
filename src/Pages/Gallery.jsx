import React from "react";

const Gallery = () => {
  const images = [
    "Images/bali.png",
    "Images/newyork.png",
    "Images/paris.png",
    "Images/tokio.png",
    "Images/travel2.png"
  ];
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/travel.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {images.map((image) => (
            <div className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
              <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
