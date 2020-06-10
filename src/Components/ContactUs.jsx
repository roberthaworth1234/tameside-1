import React from "react";
import styles from "../CSS/ContactUs.module.css";

function ContactUs(props) {
  return (
    <div className={styles.directionsContainer}>
      <img src="/TamesideMap.png" alt="road map" className={styles.roadMap} />
      <div>
        <h3 className={styles.directionsHeader}>Directions:</h3>
        <p className={styles.directions}>
          <h4 className={styles.subheader}>By car:</h4>
          We're a short distance away from the M60 outer ring road. You can
          leave the M60 at either J23 or J24.
        </p>
        <p className={styles.directions}>
          <h4 className={styles.subheader}>By train:</h4>
          We're a 15 minute walk from Guide Bridge Train Station, a 20 minute
          walk from Fairfield Train Station and a 30 minute walk from Denton
          Train Station.
        </p>

        <h3 className={styles.contactsHeader}>Contact Us:</h3>
        <p className={styles.details}>
          Email: tamesiderescue@gmail.com
          <br></br>
          <br></br>
          Mobile: 07738 831872
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
