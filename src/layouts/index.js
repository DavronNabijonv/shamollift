import React, { useEffect, useState } from "react";
import Asosiy from "../components/pageitems/asosiy";
import Haqida from "../components/pageitems/haqida";
import Mahsulotlar from "../components/pageitems/mahsulotlar";
import Xizmatlar from "../components/pageitems/xizmatlar";
import Tarmoq from "../components/pageitems/tarmoqlar";
import Rasmlar from "../components/pageitems/rasmlar";
import Aloqa from "../components/pageitems/aloqa";
import Footer from "./footer";
import Navbar from "./navbar";
import MahsulotlarSwiper from "../components/swiper";
import XizmatSwiper from "../components/xizmatswiper";
import AsosiySwiper from "../components/asosiyswiper";

export default function Deploy() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div id="asosiy">
        {/* <Asosiy /> */}
        <AsosiySwiper/>
      </div>
      <div id="haqida">
        <Haqida />
      </div>
      <div id="mahsulot">
        {innerWidth<600? <MahsulotlarSwiper/> :<Mahsulotlar />}
      </div>
      <div id="xizmat">
        {innerWidth<600? <XizmatSwiper /> : <Xizmatlar />}
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
