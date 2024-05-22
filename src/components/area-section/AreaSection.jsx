import React from "react";
import AreaOverview from "../area-overview/AreaOverview";
import Button from "../Button";
import styles from "./AreaSection.module.css";
function AreaSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div>
        <p>Welcome to FooFest, the dream destination for K-pop lovers! Immerse yourself in a vibrant world filled with the beats and vibes of your favorite idols. Camp in areas themed after top groups like BTS, BLACKPINK, and TWICE, each offering its own unique atmosphere. Enjoy spectacular performances on stages inspired by legends like BIGBANG and SHINee. Celebrate, connect with fellow fans, and make unforgettable memories at FooFest – where K-pop comes to life in the most magical way!</p>
        <Button />
      </div>
      <AreaOverview></AreaOverview>
    </section>
  );
}

export default AreaSection;
