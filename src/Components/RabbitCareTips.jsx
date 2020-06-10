import React from "react";
import styles from "../CSS/RabbitCareTips.module.css";

function RabbitCareTips(props) {
  return (
    <div className={styles.outerContainer}>
      <ul>
        <h3>Rabbit Care Tips</h3>
        <p>
          For some fantastic care tips and information on rabbits, please visit
          the following websites:
        </p>
        <li>
          <a href="http://www.therabbithouse.com/guide_size.asp">
            The Rabbit House - For all aspects of rabbit care including living
            space guide
          </a>
        </li>
        <li>
          <a href="https://www.guineapigcagesstore.com/about-candccages">
            C&C Cages - For enclosures and runs
          </a>
        </li>
        <li>
          <a href="https://rabbitwelfare.co.uk/rabbit-care-advice/ownership/think-you-want-a-rabbit/">
            Rabbit Welfare Website - For all aspects of rabbit care
          </a>
        </li>
        <li>
          <a href="https://www.bluecross.org.uk/pet-advice/caring-your-rabbit">
            Blue Cross - For all aspects of rabbit care
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=rvausPZOJ5A">
            Nail trimming video
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=PUdq_UhMQAQ">
            Grooming video
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=nPDGACnkPvc">
            Scent gland cleaning video
          </a>
        </li>
      </ul>
    </div>
  );
}
export default RabbitCareTips;
