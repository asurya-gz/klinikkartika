"use client";
import React from "react";
import Link from "next/link";

export default function Hak() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8">
      <div className="max-w-4xl w-full mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-center mb-6 text-green-700 border-b-4 border-green-700 pb-2">
          Hak dan Kewajiban Pasien
        </h3>

        {/* Bagian Hak Pasien */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 border-b-2 border-gray-300 pb-1 p-2 bg-red-600 text-white">
            Hak Pasien
          </h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              Pasien berhak memperoleh informasi mengenai tata tertib dan
              peraturan yang berlaku di KLINIK KARTIKA serta hak dan
              kewajibannya
            </li>
            <li className="mb-2">
              Pasien berhak mendapatkan pelayanan yang aman, bermutu, manusiawi,
              dan adil tanpa diskriminasi sesuai dengan standar profesi
              kedokteran atau kedokteran gigi
            </li>
            <li className="mb-2">
              Pasien berhak mendapatkan informasi tentang data hasil pemeriksaan
              kesehatan dirinya termasuk jenis dan tujuan tindakan/pengobatan
              serta biaya sesuai dengan tarif yang berlaku
            </li>
            <li className="mb-2">
              Pasien berhak memberikan persetujuan atau menolak atas tindakan
              yang akan dilakukan oleh tenaga kesehatan KLINIK KARTIKA
            </li>
            <li>
              Pasien berhak menyampaikan pengaduan/keluhan, saran kritik
              pelayanan di KLINIK KARTIKA
            </li>
          </ul>
        </div>

        {/* Bagian Kewajiban Pasien */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-4 border-b-2 border-gray-300 pb-1 p-2 bg-red-600 text-white">
            Kewajiban Pasien
          </h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              Pasien wajib mematuhi tata tertib dan peraturan yang berlaku di
              KLINIK KARTIKA
            </li>
            <li className="mb-2">
              Pasien wajib menghormati hak pasien lain dan hak tenaga kesehatan
              serta petugas lainnya yang bekerja di KLINIK KARTIKA
            </li>
            <li className="mb-2">
              Pasien wajib memberikan informasi yang benar, jelas, lengkap, dan
              jujur tentang masalah kesehatannya kepada petugas kesehatan KLINIK
              KARTIKA
            </li>
            <li className="mb-2">
              Pasien wajib mematuhi rencana terapi yang direkomendasikan oleh
              petugas kesehatan di KLINIK KARTIKA dan telah disetujui setelah
              mendapatkan penjelasan sesuai dengan ketentuan peraturan
              perundang-undangan
            </li>
            <li className="mb-2">
              Pasien wajib menerima segala konsekuensi atas keputusan pribadinya
              untuk menolak rencana terapi yang direkomendasikan atau tidak
              mematuhi petunjuk yang diberikan
            </li>
            <li>
              Pasien wajib memberikan imbalan jasa atas pelayanan yang diterima
              sesuai tarif yang berlaku
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
