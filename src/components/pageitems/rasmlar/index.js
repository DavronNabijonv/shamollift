import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import '../../../style/index.scss'
import x3 from '../../../assets/images/x3.png'
import x7 from '../../../assets/images/x7.png'
import x2 from '../../../assets/images/x2.png'
import x5 from '../../../assets/images/x5.png'
import x1 from '../../../assets/images/x1.png'
import x4 from '../../../assets/images/x4.png'
import x6 from '../../../assets/images/x6.png'

export default function Rasmlar() {

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
    <div className={styles.rasm}>
      <p className={styles.ttl}>Те кто доверял нам</p>
      <div className={styles.grp}>
        <div className={innerWidth<600? styles.one :styles.grp1}>
          <img src={x3} className={styles.img} />
          <img src={x7} className={styles.img} />
          <img src={x2} className={styles.img} />
          <img src={x4} className={styles.img} />
        </div>
        <div className={innerWidth<600?styles.one:styles.grp1}>
          <img src={x5} className={styles.img} />
          <img src={x1} className={styles.img} />
          <img src={x3} className={styles.img} />
        </div>
        <div className={innerWidth<600? styles.one :styles.grp1}>
          <img src={x2} className={styles.img} />
          <img src={x4} className={styles.img} />
          <img src={x6} className={styles.img} />
        </div>
      </div>
      {/* <button onClick={()=>{setTog(!tog)}}>Ko`proq ko`rish</button> */}
    </div>
  );
}
