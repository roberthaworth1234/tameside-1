import React, { Component } from "react";
import styles from "../CSS/SponsorIndividual.module.css";
import Animals from "../TestData/AnimalData.js";

class SponsorIndividual extends Component {
  state = {
    animals: Animals,
    residentName: this.props.name,
  };

  render() {
    const { animals, residentName } = this.state;
    return (
      <div className={styles.individualDetailsContainer}>
        {animals.map((animal) => {
          if (
            animal.status === "Permanent resident" &&
            animal.name === residentName
          ) {
            return (
              <div className={styles.gridContainer}>
                <div>
                  <center>
                    <img
                      src={animal.imageUrl}
                      alt="residentAnimal"
                      className={styles.residentPhoto}
                    />
                  </center>
                </div>
                <div>
                  <center>
                    <h3>{animal.name}</h3>
                    <p className={styles.residentText}>
                      {animal.name} is a {animal.gender} {animal.breed}{" "}
                      {animal.species}. {animal.History}
                    </p>

                    <p className={styles.supportText}>
                      If you want to help support the rescue centre with{" "}
                      {animal.name}'s veterinary care bills and to live a happy
                      life as permanent resident of the centre, then please
                      consider setting up a monthly direct debit to the
                      sanctuary and paying whatever you can each month to
                      support {animal.gender === "Male" ? "him" : "her"}, and
                      we'll be happy to keep you updated on{" "}
                      {animal.gender === "Male" ? "his" : "her"} progress.
                    </p>

                    <button className={styles.sponsorButton}>
                      Sponsor {animal.name}
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

export default SponsorIndividual;
