import React from 'react';
import { FaFlask, FaLaptopCode, FaProjectDiagram, FaShieldAlt, FaShippingFast, FaUsers } from 'react-icons/fa';

const ServicesCard = () => {
  const servicesData = [
    { id: 1, title: 'Full Stack Web Development', icon: <FaLaptopCode size={60} /> },
    { id: 2, title: 'API Development', icon: <FaFlask size={60} /> },
    { id: 3, title: 'Project Management', icon: <FaProjectDiagram size={60} /> },
    { id: 4, title: 'Deployment Strategies', icon: <FaShippingFast size={60} /> },
    { id: 5, title: 'Web Application Security', icon: <FaShieldAlt size={60} /> },
    { id: 6, title: 'Client Collaboration', icon: <FaUsers size={60} /> },
  ];

  return (
    <div className="flex gap-5 flex-wrap max-w-[1120px]">
      {servicesData.map(service => (
        <div
          key={service.id}
          className="group bg-[#FFFFFF1A] max-w-[350px] w-full h-[220px] p-8 rounded shadow-lg flex justify-center transition-all duration-300 hover:bg-yellow-500 cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="text-yellow-500 group-hover:text-white transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300">
              {service.icon}
            </span>
            <div className="text-white font-bold group-hover:text-black transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300">
              <h3 className="mb-5">{service.title}</h3>
            </div>
            <div className="border-b border-yellow-500 w-5 group-hover:border-black transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300">
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;

