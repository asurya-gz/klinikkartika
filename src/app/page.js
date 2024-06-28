import React from "react";
import Utama from "./utama/page";
import Pelayanan from "./pelayanan/page";
import VisiMisi from "./visimisi/page";
import Hak from "./hnk/page";
import WhatsAppFloating from "./wa/page";
import JadwalPraktik from "./jadwal/page";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div id="utama" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Utama />
      </div>
      <div id="visi" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <VisiMisi />
      </div>
      <div id="pelayanan" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Pelayanan />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hak />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <JadwalPraktik />
      </div>
      <WhatsAppFloating />
    </div>
  );
}
