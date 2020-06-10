import React from "react";
import styles from "../CSS/Volunteering.module.css";

function Volunteering(props) {
  return (
    <div className={styles.volunteeringContainer}>
      <div className={styles.textContainer}>
        <p className={styles.volunteeringInfo}>
          <h3 className={styles.volunteeringTitle}>Volunteering</h3>
          If you'd like to come and help out at the rescue centre then please
          contact us to see if we have any openings. We sometimes need
          volunteers to help with cleaning out the hutches, rinsing out and
          refilling water bottles, cleaning food bowls, toys and beds,
          disinfecting hutches, feeding the animals, grooming, nail trimming and
          weighing them.
        </p>
      </div>
      <img src="/hutches.jpg" alt="hutches" className={styles.hutches} />
    </div>
  );
}

export default Volunteering;
