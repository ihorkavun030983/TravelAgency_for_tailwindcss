import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/Images/travel.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
                <img src="/Images/travel2.png" className="rounded-lg shadow-md w-full h-auto" alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
                <p className="text-gray-700 mb-4">Whe are a passionate travel agency committed to providing the best travel experiences for our clients. Our team of dedicated professionals works tirelessly to ensure your trips are seamless and unforgettable. </p>
                
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">Our mission is to create amazing travel experiences that inspire and enrich the lives of our clients. We believe in personalized service, attention to detail, and providing exceptional value.  </p>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
