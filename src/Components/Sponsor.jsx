import React, { Component } from "react";
import styles from "../CSS/Sponsor.module.css";
import Animals from "../TestData/AnimalData.js";
import { Link } from "@reach/router";

class Sponsor extends Component {
  state = {
    animals: Animals,
  };
  render() {
    console.log(this.state.animals);
    const { animals } = this.state;
    return (
      <div className={styles.outerContainer}>
        <div className={styles.titleContainer}>
          <center>
            <h3 className={styles.title}>Permanent Residents</h3>
            <p className={styles.infoText}>
              Not all the rabbits and Guinea pigs are able to be re-homed as
              they have additional needs, so they remain at the rescue centre,
              or with Paula our guinea pig foster carer.
              <br></br>
              <br></br>
              Click on a resident to learn more about them.
            </p>
          </center>
        </div>
        <div className={styles.sponsorContainer}>
          {animals.map((animal) => {
            if (animal.status === "Permanent resident") {
              return (
                <Link to={animal.name}>
                  <div className={styles.residentCard}>
                    <center>
                      <h4 className={styles.residentName}>{animal.name}</h4>
                      <img
                        src={animal.imageUrl}
                        alt="residentAnimal"
                        className={styles.residentImage}
                      />
                    </center>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Sponsor;
