import React from "react";
import {
  MdLocalHospital,
  MdAccessTime,
  MdAssignment,
  MdLocalPharmacy,
  MdHome,
  MdSettings,
} from "react-icons/md";

export default function Pelayanan() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center py-12">
      <h3 className="text-3xl font-bold text-green-700 mb-8">
        Pelayanan Di <br />
        Klinik Kartika
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
          <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl font-bold mr-4">
            <MdLocalHospital />
          </span>
          <p className="text-lg text-gray-800">
            Pelayanan Medik dan Dasar Klinik
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
          <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl font-bold mr-4">
            <MdAccessTime />
          </span>
          <p className="text-lg text-gray-800">Pelayanan UGD 24 Jam</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
          <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl font-bold mr-4">
            <MdAssignment />
          </span>
          <p className="text-lg text-gray-800">Pelayanan Rujukan</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
          <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl font-bold mr-4">
            <MdLocalPharmacy />
          </span>
          <p className="text-lg text-gray-800">Pelayanan Kefarmasian</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
          <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl font-bold mr-4">
            <MdHome />
          </span>
          <p className="text-lg text-gray-800">Pelayanan Home Care</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
          <span className="h-10 w-10 rounded-full flex items-center justify-center bg-red-500 text-white text-xl font-bold mr-4">
            <MdSettings />
          </span>
          <p className="text-lg text-gray-800">Pelayanan Sterilisasi</p>
        </div>
      </div>
    </div>
  );
}
