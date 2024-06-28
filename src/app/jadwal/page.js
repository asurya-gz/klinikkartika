import React from "react";

export default function JadwalPraktik() {
  return (
    <div className="h-[65vh] bg-white py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Jadwal Praktik Dokter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Dokter 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <img
              className="w-32 h-32 rounded-full mb-4"
              src="/herfika.jpg"
              alt="Dokter Herfika"
            />
            <h3 className="text-xl font-bold mb-2">Dokter Herfika</h3>
            <p className="text-gray-600 mb-2">Dokter Umum</p>
            <ul className="text-gray-700">
              <li className="mb-1">Rabu: 14.00 - 20.00</li>
              <li className="mb-1">Kamis: 14.00 - 20.00</li>
            </ul>
          </div>

          {/* Dokter 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <img
              className="w-32 h-32 rounded-full mb-4"
              src="/amaliya.jpg"
              alt="Dokter Amaliya"
            />
            <h3 className="text-xl font-bold mb-2">Dokter Amaliya</h3>
            <p className="text-gray-600 mb-2">Dokter Umum</p>
            <ul className="text-gray-700">
              <li className="mb-1">Jumat: 14.00 - 20.00</li>
              <li className="mb-1">Sabtu: 14.00 - 20.00</li>
            </ul>
          </div>

          {/* Dokter 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <img
              className="w-32 h-32 rounded-full mb-4"
              src="/agin.jpg"
              alt="Dokter Agin"
            />
            <h3 className="text-xl font-bold mb-2">Dokter Agin</h3>
            <p className="text-gray-600 mb-2">Dokter Umum</p>
            <ul className="text-gray-700">
              <li className="mb-1">Senin: 14.00 - 20.00</li>
              <li className="mb-1">Selasa: 14.00 - 20.00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
