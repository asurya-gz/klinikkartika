"use client";
import Link from "next/link";

export default function Utama() {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4 animate-fade-in">
        Selamat datang di
      </h2>
      <h3 className="text-3xl font-bold text-green-700 mb-4 animate-fade-in">
        Klinik Kartika
      </h3>
      <div className="relative overflow-hidden rounded-full">
        <img
          src="/logoklinik.png"
          alt="Logo Klinik Kartika"
          className="w-32 h-32 my-7 transition-opacity duration-500 animate-logoOpacity"
        />
      </div>
      <Link href="#visi">
        <button className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-500">
          Mulai Lihat
        </button>
      </Link>

      {/* CSS untuk animasi */}
      <style jsx>{`
        @keyframes logoOpacity {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-logoOpacity {
          animation: logoOpacity 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
