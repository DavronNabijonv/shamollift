import React from "react";
import Asosiy from "../components/pageitems/asosiy";
import Haqida from "../components/pageitems/haqida";
import Mahsulotlar from "../components/pageitems/mahsulotlar";
import Xizmatlar from "../components/pageitems/xizmatlar";
import Tarmoq from "../components/pageitems/tarmoqlar";
import Rasmlar from "../components/pageitems/rasmlar";
import Aloqa from "../components/pageitems/aloqa";
import Footer from "./footer";
import Navbar from './navbar'

export default function Deploy() {
  return (
    <div>
      <Navbar />
      <div id="asosiy">
        <Asosiy />
      </div>
      <div id="haqida">
        <Haqida />
      </div>
      <div id="mahsulot">
        <Mahsulotlar />
      </div>
      <div id="xizmat">
        <Xizmatlar />
      </div>
      <Tarmoq />
      <Rasmlar />
      <div id="aloqa">
        <Aloqa />
      </div>
      <Footer />
    </div>
  );
}
