import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Top Doctors to Book
        </h1>
        <p className="text-gray-600">
          Simply browse through our extensive list of trusted doctors
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xlg overflow-hidden bg-gray-100 
                      transform transition-all duration-300 ease-in-out 
                      hover:shadow-xl hover:translate-y-[-10px] cursor-pointer"
          >
            <img
              src={item.image}
              alt={`Doctor ${item.name}`}
              className="w-full h-48 object-cover transition-transform duration-300 
                         group-hover:scale-105"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-500">Available</p>
                </div>
              </div>
              <h3 className="font-semibold font-medium text-lg text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
          }}
          className="px-5 py-2 text-gray-700 bg-blue-90 rounded-full 
           font-medium text-lg tracking-wide
           border border-gray-200 cursor-pointer"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
