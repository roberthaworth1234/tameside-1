import React from "react";
import styles from "../CSS/About.module.css";

function About(props) {
  return (
    <div className={styles.aboutPageContainer}>
      <center>
        <img src="/resident4.jpg" alt="rabbit" className={styles.rabbitImage} />
      </center>
      <p className={styles.welcomeText}>
        <h3 className={styles.aboutHeader}>About Us</h3>
        Tameside Guinea pig and Rabbit rescue was formed in 2002 by Elaine
        Padley, to help unwanted guinea pigs and rabbits find homes. Elaine has
        cared for countless rabbits and guinea pigs over the years and strives
        to find them loving homes. She checks the teeth of every animal that
        comes into her care, bathes and grooms them, trims their nails, and for
        rabbits she's neuters and microchips them.
      </p>
      <center>
        <img src="/piggy1.jpg" alt="rabbit" className={styles.GPImage} />
      </center>
    </div>
  );
}

export default About;
