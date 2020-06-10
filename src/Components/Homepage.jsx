import React, { Component } from "react";
import styles from "../CSS/Homepage.module.css";

class Homepage extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <center>
            <img
              src="/piggies1.jpg"
              alt="guineaPigs"
              className={styles.guineaPigs}
            />
          </center>
          <center>
            <img
              src="/rabbitsHutch.jpg"
              alt="rabbitGrass"
              className={styles.rabbits}
            />
          </center>
          <center>
            <img
              src="/piggy2.jpg"
              alt="guineaPigs"
              className={styles.guineaPig}
            />
          </center>
          <center>
            <p className={styles.welcomeText}>
              We are a independent rescue not linked to any other rescue center.
              We neuter all rabbits and have them micro-chipped. We check all
              our guinea pigs and rabbits teeth before adoption. There is an
              adoption fee payable before you can take your new friend/s home,
              and this money is put back into the rescue center to pay for
              food/bedding and vet bills for the animals that we care for. If
              you don't already own a rabbit or a guinea pig, then we strongly
              recommend adopting a pair of the same species and gender, as both
              rabbits and guinea pigs are social animals and need to spend time
              with their own kind. We do not recommend housing rabbits and
              guinea pigs together, for many reasons, not least of which is
              safety, as rabbits are much larger animals than guinea pigs and
              can easily injury them. For more information check out:{" "}
              <a href="https://squeaksandnibbles.com/can-rabbits-and-guinea-pigs-live-together/">
                Squeaks and Nibbles
              </a>
            </p>
          </center>
        </div>
        <div>
          <center>
            <h3 className={styles.adoptTxt}>Adopt don't shop!</h3>
          </center>
        </div>
      </>
    );
  }
}

export default Homepage;
