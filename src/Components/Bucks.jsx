import React, { Component } from "react";
import styles from "../CSS/Bucks.module.css";
import Animals from "../TestData/AnimalData.js";
import { Link } from "@reach/router";

class Bucks extends Component {
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
              Bucks / Male Rabbits ready for adoption!
            </h3>
            <p className={styles.infoText}>
              Click on the rabbit's page to view further details.
              <br></br>
              <br></br>
            </p>
          </center>
        </div>
        <div className={styles.rabbitContainer}>
          {animals.map((animal) => {
            if (
              animal.species === "Rabbit" &&
              animal.gender === "Male" &&
              animal.status !== "Permanent resident"
            ) {
              return (
                <Link to={animal.name}>
                  <div className={styles.individualRabbit}>
                    <center>
                      <h4 className={styles.rabbitName}>{animal.name}</h4>
                      <img
                        src={animal.imageUrl}
                        alt="residentAnimal"
                        className={styles.rabbitImage}
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

export default Bucks;
