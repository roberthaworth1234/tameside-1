import React, { Component } from "react";
import styles from "../CSS/NavbarLinks.module.css";
import { Link } from "@reach/router";

class NavbarLinks extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <button className={styles.aboutButton}>
            <Link to="/about">About</Link>
          </button>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropButton}>Guinea Pigs</button>
          <div className={styles.dropdownContent}>
            <Link to="/boars">Boars</Link>
            <Link to="/sows">Sows</Link>
            <Link to="/gpCareTips">Care Tips</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropButton}>Rabbits</button>
          <div className={styles.dropdownContent}>
            <Link to="/bucks">Bucks</Link>
            <Link to="/does">Does</Link>
            <Link to="/rabbitCareTips">Care Tips</Link>
          </div>
        </div>
        <div className={styles.columnImage}>
          <Link to="/">
            <img
              src="/TamesideTextandLogo.png"
              alt="logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropButton}>Services</button>
          <div className={styles.dropdownContent}>
            <Link to="/adoption">Adoption</Link>
            <Link to="/grooming">Grooming</Link>
            <Link to="/boarding">Boarding</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropButton}>Help Us</button>
          <div className={styles.dropdownContent}>
            <Link to="/donations">Donations</Link>
            <Link to="/volunteering">Volunteering</Link>
            <Link to="/sponsor">Sponsor</Link>
          </div>
        </div>

        <div className={styles.linksContainer}>
          <button className={styles.contactButton}>
            <Link to="/contactUs">Contact Us</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default NavbarLinks;
