import React, { Component } from "react";
import styles from "../CSS/IndividualBuck.module.css";
import Animals from "../TestData/AnimalData.js";

class IndividualBuck extends Component {
  state = {
    animals: Animals,
    animalName: this.props.name,
  };

  render() {
    const { animals, animalName } = this.state;
    return (
      <div className={styles.individualDetailsContainer}>
        {animals.map((animal) => {
          if (
            animal.status !== "Permanent resident" &&
            animal.name === animalName
          ) {
            return (
              <div className={styles.gridContainer}>
                <div>
                  <center>
                    <img
                      src={animal.imageUrl}
                      alt="animal"
                      className={styles.animalPhoto}
                    />
                  </center>
                </div>
                <div>
                  <center>
                    <h3>{animal.name}</h3>
                    <p className={styles.animalText}>
                      {animal.name} is a {animal.gender} {animal.breed}{" "}
                      {animal.species}.{" "}
                      {animal.gender === "Male" ? "He" : "She"} is{" "}
                      {animal.colour} in colour.{" "}
                      {animal.gender === "Male" ? "He" : "She"}{" "}
                      {animal.microChipped === "Yes"
                        ? "is microchipped"
                        : "is not microchipped"}
                      . {animal.gender === "Male" ? "He" : "She"} is{" "}
                      {animal.neutured == "Yes" ? "neutered" : "not neutered"}.{" "}
                      {animal.gender === "Male" ? "He" : "She"} has/is{" "}
                      {animal.healthConditions === "None"
                        ? "no health conditions"
                        : animal.healthConditions}
                      . {animal.gender === "Male" ? "He" : "She"}{" "}
                      {animal.paired === true
                        ? "is currently paired with another rabbits at the rescue"
                        : "comes alone, but will need a friend"}
                      .
                    </p>
                    <p className={styles.animalText}>
                      {animal.name} is {animal.status}.
                    </p>
                    <button className={styles.reserveButton}>
                      Adopt {animal.name}
                    </button>
                    <button className={styles.visitButton}>
                      Book a sanctuary visit
                    </button>
                  </center>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default IndividualBuck;
