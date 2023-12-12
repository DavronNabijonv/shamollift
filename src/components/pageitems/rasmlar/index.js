import React, { useState } from "react";
import styles from "./index.module.scss";
import x3 from '../../../assets/images/x3.png'
import x7 from '../../../assets/images/x7.png'
import x2 from '../../../assets/images/x2.png'
import x5 from '../../../assets/images/x5.png'
import x1 from '../../../assets/images/x1.png'
import x4 from '../../../assets/images/x4.png'
import x6 from '../../../assets/images/x6.png'

export default function Rasmlar() {

  const [tog, setTog] = useState(false)

  return (
    <div className={styles.rasm}>
      <p className={styles.ttl}>Те кто доверял нам</p>
      <div className={styles.grp}>
        <div className={tog? styles.one :styles.grp1}>
          <img src={x3} />
          <img src={x7} />
          <img src={x2} />
          <img src={x4} />
        </div>
        <div className={tog?styles.one:styles.grp1}>
          <img src={x5} />
          <img src={x1} />
          <img src={x3} />
        </div>
        <div className={tog? styles.one :styles.grp1}>
          <img src={x2} />
          <img src={x4} />
          <img src={x6} />
        </div>
      </div>
      <button onClick={()=>{setTog(!tog)}}>Ko`proq ko`rish</button>
    </div>
  );
}
