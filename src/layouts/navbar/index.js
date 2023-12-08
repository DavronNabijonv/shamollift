import React, { useState } from "react";
import styles from "./index.module.scss";
import { LuMenuSquare } from "react-icons/lu";
import logo from "../../assets/images/logo.png";

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <div className={styles.responsive}>
          <a href={props.asosiy} className={styles.alone}>
            <img src={logo} />
          </a>
          <LuMenuSquare
            className={styles.resp}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <div className={styles.nvg} style={toggle?{display:"flex"}:{}} >
          <a
            href={props.haqida}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            О КОМПАНИИ
          </a>
          <a
            href={props.mahsulot}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            ПРОДУКЦИЯ
          </a>
          <a
            href={props.xizmat}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            Услуги
          </a>
          <a
            href={props.aloqa}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            <button>Bog`lanish</button>
          </a>
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={() => {
          toggle && setToggle(!toggle);
        }}
        style={toggle ? { height: "800px" } : {}}
      ></div>
    </div>
  );
}
