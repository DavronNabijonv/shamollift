import React, { useContext } from 'react'
import styles from './index.module.scss'
import { mahsulot } from '../../db/mahsulotlar'

export default function Mahsulotlar() {
  return (
    <div className={styles.mahsulot}>
        <p className={styles.mttl}>Наша продукция</p>
        <div className={styles.mbody}>
            {mahsulot.map((r)=>(
                <div className={styles.mgrp}>
                    <img src={r.img} />
                    <p>{r.ttl}</p>
                    <button>Подробное</button>
                </div>
            ))}
        </div>
    </div>
  )
}
