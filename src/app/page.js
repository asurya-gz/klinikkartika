"use client";
import React from "react";
import Utama from "./utama/page";
import Pelayanan from "./pelayanan/page";
import VisiMisi from "./visimisi/page";
import Hak from "./hnk/page";
import WhatsAppFloating from "./wa/page";
import JadwalPraktik from "./jadwal/page";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-1">
        <div id="utama">
          <Utama />
        </div>
        <div id="visi">
          <VisiMisi />
        </div>
        <div id="pelayanan">
          <Pelayanan />
        </div>
        <div>
          <Hak />
        </div>
        <JadwalPraktik />
        <WhatsAppFloating />
      </div>
    </div>
  );
}
