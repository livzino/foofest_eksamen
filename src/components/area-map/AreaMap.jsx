import styles from "./AreaMap.module.css";
import { useState } from "react";
import Image from "next/image";

function AreaMap(props) {
  const [showStage, setShowStage] = useState("");

  return (
    <main>
      <div className={styles.componentWrapper}>
        <section className={styles.labelWrapper}>
          <div className={props.activeStages.includes("Vanaheim") ? `${styles.show} ${styles.vanaheim}` : `${styles.hide} ${styles.vanaheim}`}>
            <h3>Vanaheim</h3>
            <p>Stage</p>
          </div>
          <div className={props.activeStages.includes("Midgard") ? `${styles.show} ${styles.midgard}` : `${styles.hide} ${styles.midgard}`}>
            <h3>Midgard</h3>
            <p>Stage</p>
          </div>
          <div className={props.activeStages.includes("Jotunheim") ? `${styles.show} ${styles.jotunheim}` : `${styles.hide} ${styles.jotunheim}`}>
            <h3>Jotunheim</h3>
            <p>Stage</p>
          </div>
          <div className={props.activeStages.includes("Svartheim") ? `${styles.show} ${styles.svartheim}` : `${styles.hide} ${styles.svartheim}`}>
            <h3>Svartheim</h3>
            <p>Camping site</p>
          </div>
          <div className={props.activeStages.includes("Niflheim") ? `${styles.show} ${styles.niflheim}` : `${styles.hide} ${styles.niflheim}`}>
            <h3>Niflheim</h3>
            <p>Camping site</p>
          </div>
          <div className={props.activeStages.includes("Helheim") ? `${styles.show} ${styles.helheim}` : `${styles.hide} ${styles.helheim}`}>
            <h3>Helheim</h3>
            <p>Camping site</p>
          </div>
          <div className={props.activeStages.includes("Muspelheim") ? `${styles.show} ${styles.muspelheim}` : `${styles.hide} ${styles.muspelheim}`}>
            <h3>Muspelheim</h3>
            <p>Camping site</p>
          </div>
          <div className={props.activeStages.includes("Helheim") ? `${styles.show} ${styles.alfheim}` : `${styles.hide} ${styles.alfheim}`}>
            <h3>Alfheim</h3>
            <p>Camping site</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AreaMap;
