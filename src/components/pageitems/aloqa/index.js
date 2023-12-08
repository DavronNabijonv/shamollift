import React from 'react'
import styles from './index.module.scss'
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Aloqa() {
  return (
    <div className={styles.aloqa}>
        <div className={styles.container}>
            <div className={styles.f1}>
                <p className={styles.ttl}>Связаться с нами</p>
                <form>  
                    <p className={styles.fttl}>Номер телефона <span>*</span></p>
                    <input type='text' placeholder='Номер телефона' />
                    <p className={styles.fttl}>Сообщение</p>
                    <textarea placeholder='Сообщение' />
                    <button className={styles.btn}>ОСТАВИТЬ ЗАЯВКУ <FaArrowRightLong/></button>
                </form>
                <p className={styles.tel}><FaPhoneAlt/>  +998 94 332 00 16</p>
                <p className={styles.tel}><IoMdMail/>  Shamollift@gmail.com</p>
                <p className={styles.tel}><FaLocationDot/>  Ташкент, Мирзо-Улугбекский район, Шахриабадский район</p>
            </div>
            <div className={styles.f2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.73125912176!2d68.9675292015027!3d41.282434793576456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1696856126364!5m2!1suz!2s"
              width="100%"
              styles="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    </div>
  )
}
