import React, { useEffect } from "react";
import styles from "./index.module.scss";
import deco1 from "../../../assets/images/deco1.png";
import deco3 from "../../../assets/images/deco3.png";

export default function Haqida() {

  useEffect(() => {
    const handleScroll = () => {
      let reveals = document.querySelectorAll(".mg");
      let windowHeight = window.innerHeight;

      for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealBottom = reveals[i].getBoundingClientRect().bottom;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint && revealBottom >= 0) {
          reveals[i].classList.add("animate__fadeInLeft");
        } else {
          reveals[i].classList.remove("animate__fadeInLeft");
        }
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.haqida}>
      <div className={styles.f1}>
        <img src={deco1} className="mg animate__animated" />
        <div className={styles.txtgrp}>
          <p className={styles.ttl}>О КОМПАНИИ</p>
          <p className={styles.txt}>
            «Для нас лифт – это уникальный механизм, а не просто квадратный
            короб, который перемещает Вас вверх-вниз. Поездка в нашем лифте –
            это абсолютно неповторимый опыт для любого пассажира. В основе
            создания лифта лежат технологии высочайшего уровня, благодаря чему
            меняется восприятие лифтав целом».
          </p>
          <img src={deco1} />
          <p className={styles.txt}>
            Мы компания Shamollift, предоставляющая нашим клиентам самое
            передовое лифтовое оборудование и полный спектр услуг от
            проектирования до технического обслуживания пассажирских, кухонных,
            строительных, автомобильных и грузовых лифтов, а также эскалаторов.
          </p>
        </div>
      </div>
      <div className={styles.alone}>
        <img src={deco3} />
      </div>
      <div className={styles.f2}>
        <div className={styles.txtgrp}>
          <p className={styles.txt}>
            Компания была создана в 2008 году в Турции, с тех пор компания с
            каждым годом все совершенствует свою продукцию занимая достойное
            место на мировом рынке лифтового оборудования. Компания занимается
            производством лифтов, пассажирского, грузового типа, основанных на
            гидравлике и электрике. Благодаря накопленному опыту, лифты
            Shamollift отличаются надежностью, легкостью установки и удобством
            обслуживания. На территорию Узбекистана продукция бренда поступает
            уже полностью укомплектованной и готовой к установке. На территорию
            Узбекистана продукция бренда поступает уже полностью
            укомплектованной и готовой к установке.
          </p>
        </div>
        <img src={deco3} />
      </div>
    </div>
  );
}
