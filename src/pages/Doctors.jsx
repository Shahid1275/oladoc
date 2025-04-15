import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const [filteredDoc, setFilteredDoc] = useState([]);
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // Debug: Check what specialties exist in your data
  useEffect(() => {
    const uniqueSpecialties = [...new Set(doctors.map((d) => d.speciality))];
    console.log("Existing specialties:", uniqueSpecialties);
  }, [doctors]);

  const normalizeName = (name) => {
    return name.trim().toLowerCase().replace(/\s+/g, " ");
  };

  const applyfilter = () => {
    if (speciality) {
      const decodedSpeciality = decodeURIComponent(speciality);
      console.log("Filtering for:", decodedSpeciality);

      const filtered = doctors.filter(
        (doctor) =>
          normalizeName(doctor.speciality) === normalizeName(decodedSpeciality)
      );

      console.log("Found doctors:", filtered);
      setFilteredDoc(filtered);
    } else {
      setFilteredDoc(doctors);
    }
  };

  useEffect(() => {
    applyfilter();
  }, [doctors, speciality]);

  // Rest of your component...

  return (
    <div className="">
      <p className="text-gray-600">Browse Through the doctors specialists.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Specialties List - left side */}
        <div>
          <div className="flex flex-col gap-4 text-gary-600 text:sm ">
            <div className="space-y-2">
              <p
                onClick={() => {
                  speciality === "General Physician"
                    ? navigate("/doctors")
                    : navigate("/doctors/General Physician");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                  speciality === "General Physician"
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
              >
                General Physician
              </p>
              <p
                onClick={() => {
                  speciality === "Gynecologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Gynecologist");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                  speciality === "Gynecologist"
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
              >
                Gynecologist
              </p>
              <p
                onClick={() => {
                  speciality === "Dermatologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Dermatologist");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                  speciality === "Dermatologist"
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
              >
                Dermatologist
              </p>
              <p
                onClick={() => {
                  speciality === "Pediatricians"
                    ? navigate("/doctors")
                    : navigate("/doctors/Pediatricians");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                  speciality === "Pediatricians"
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
              >
                Pediatricians
              </p>
              <p
                onClick={() => {
                  speciality === "Neurologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Neurologist");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                  speciality === "Neurologist"
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
              >
                Neurologist
              </p>
              <p
                onClick={() => {
                  speciality === "Gastroenterologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Gastroenterologist");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all rounded cursor-pointer ${
                  speciality === "Gastroenterologist"
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
              >
                Gastroenterologist
              </p>
            </div>
          </div>
        </div>

        {/* Doctors Grid - left side with previous styling */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className="border border-blue-200 rounded-lg overflow-hidden bg-gray-100 
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
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
