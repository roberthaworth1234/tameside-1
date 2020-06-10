import React from "react";
import styles from "../CSS/Donations.module.css";

function Donations(props) {
  return (
    <div className={styles.donationsContainer}>
      <center>
        <img src="/hay.jpg" alt="hay" className={styles.hayImage} />
      </center>
      <p className={styles.donationsText}>
        <h3>Donations & Wishlist</h3>
        We have an Amazon wishlist for anyone wanting to donate supplies to the
        rescue. We gladly accept donations of the following items:{" "}
        <ul>
          <li>guinea pig and rabbit pellets and/or fresh fruit/vegetables</li>
          <li>hay and/or straw</li>
          <li>clean bedding</li>
          <li>
            clean chews / toys suitable for guinea pigs/rabbits/small fury
            animals
          </li>
          <li>
            tunnels / tubes/'chubes' / hidey huts suitable for guinea pigs
            and/or rabbits size
          </li>
          <li>clean / unused grooming brushes</li>
          <li>bags of sawdust</li>
          <li>pet carriers</li>
          <li>runs/pens/cages</li>
          <li>Critical care sachets / digestive support sachets</li>
          <li>food bowls / water bottles</li>
        </ul>
        You can either post the items to the rescue centre or you can arrange a
        visit to drop them off. Here is a link to our{" "}
        <a href="https://www.amazon.co.uk/hz/wishlist/ls/1KGIL8076QHSO/ref=cm_go_nav_hz">
          Amazon wishlist
        </a>
        <br></br>
        <br></br>
        <h3>Fundraising</h3>
        Occasionally we hold fundraising events for the rescue centre, to raise
        money for vet bills, food, bedding and supplies for the animals. All of
        our fundraising efforts can be found here:{" "}
        <a href="https://www.crowdfunder.co.uk/user/elaine-padley/profile/projects">
          Amazon donations
        </a>
      </p>
    </div>
  );
}

export default Donations;
