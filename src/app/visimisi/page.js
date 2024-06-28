import React from "react";

export default function VisiMisi() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-full md:max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-center mb-6 text-green-700 border-b-4 border-green-700 pb-2">
          Visi, Misi, dan Motto
        </h3>
        <div className="mb-8">
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
              Visi
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Menjadikan Klinik Pratama Kartika sebagai penyedia layanan
              kesehatan unggulan di Kabupaten Pandeglang yang mampu bersaing di
              era global.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
              Misi
            </h4>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                Pelayanan yang ramah, profesional, dan berkeadilan.
              </li>
              <li className="mb-2">
                Meningkatkan mutu pelayanan secara berkelanjutan.
              </li>
              <li className="mb-2">
                Membangun kemitraan yang kuat dengan masyarakat dan pihak
                terkait.
              </li>
              <li>
                Menyediakan pelayanan medis dasar yang berkualitas dengan biaya
                terjangkau.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
              Motto
            </h4>
            <p className="text-gray-700">
              Amanah, profesionalisme, dan dedikasi dalam melayani dengan
              sepenuh hati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
