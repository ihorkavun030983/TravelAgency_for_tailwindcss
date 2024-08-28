import React from "react";

const destinations = [
  {
    image: "Images/bali.png",
    title: "Bali, Indonesia",
    description:
      "Провинция Индонезии, по большей части расположенная на одноименном острове.",
  },
  {
    image: "Images/newyork.png",
    title: "New York, USA",
    description:
      "Туристическая столица США, cамый крупный город страны и один из крупнейших городов Мира. Нью-Йорк расположен на восточном побережье США",
  },
  {
    image: "Images/paris.png",
    title: "Paris, France",
    description:
      "Столица и крупнейший город Франции. Находится на севере государства, в центральной части Парижского бассейна, на реке Сена",
  },
  {
    image: "Images/tokio.png",
    title: "Tokio, Japan",
    description:
      "Столица и крупнейший город Японии, её административный, финансовый, промышленный и политический центр.",
  },
];

const PopularDestination = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destination</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((city, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md owerflow-hidden cursor-pointer">
              <img src={city.image} alt={city.title} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
