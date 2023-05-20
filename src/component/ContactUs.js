import React from "react";
import styles from "../component/css//ContactUs.module.css";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import location from "../images/location.svg";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactDetail}>
        <h3>Contact Us</h3>
        <div className={styles.contactWays}>
          <img src={location} alt="location" />
          <p>Iran,Tehran</p>
        </div>
        <div className={styles.contactWays}>
          <img src={phone} alt="phone" />
          <p>+98902923****</p>
        </div>
        <div className={styles.contactWays}>
          <img src={email} alt="email" />
          <p>negar.prv@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
