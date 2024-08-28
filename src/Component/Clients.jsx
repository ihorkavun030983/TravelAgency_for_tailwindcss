import React from "react";


const clients = [
  {
    name: 'John Doe',
    image: '/Images/client1.png',
    text: "This travel agency provided excellent service and helped us plan the perfect vacations. Highly recommend!",
    location: 'New York, USA',
  },
  {
    name: 'Jane Smith',
    image: '/Images/client2.png',
    text: "Amazing experience! The tour guides were knowledgeable and the destinations were breathtaking.",
    location: 'London, UK',
  },
  {
    name: 'Alice Johnson',
    image: '/Images/client3.png',
    text: "Great customer service and fantastic travel packages. Will definitely book with them again.",
    location: 'Sydney, Australia',
  },
];

const Clients = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((clients, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer 
            transform transition duration-300 hover:scale-110">
              <img src={clients.image} alt="" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                <h4 className="text-xl font-bold mb-2">{clients.name}</h4>
                <p className="text-gray-600">{clients.location}</p>
                <p className="text-gray-600 italic">{clients.text}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
