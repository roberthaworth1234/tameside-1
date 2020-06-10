import React, { Component } from "react";
import styles from "../CSS/Boars.module.css";
import Animals from "../TestData/AnimalData.js";
import { Link } from "@reach/router";

class Boars extends Component {
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
            <h3 className={styles.title}>
              Boars / Male Guinea Pigs ready for adoption!
            </h3>
            <p className={styles.infoText}>
              Click on the guinea pig's page to view further details.
              <br></br>
              <br></br>
            </p>
          </center>
        </div>
        <div className={styles.GPContainer}>
          {animals.map((animal) => {
            if (
              animal.species === "Guinea Pig" &&
              animal.gender === "Male" &&
              animal.status !== "Permanent resident"
            ) {
              return (
                <Link to={animal.name}>
                  <div className={styles.individualGP}>
                    <center>
                      <h4 className={styles.GPName}>{animal.name}</h4>
                      <img
                        src={animal.imageUrl}
                        alt="residentAnimal"
                        className={styles.GPImage}
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

export default Boars;
