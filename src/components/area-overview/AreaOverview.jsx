import Image from "next/image";

import styles from "./AreaOverview.module.css";
import { useState } from "react";

function AreaOverview() {
  const [showStage, setShowStage] = useState("");
  const [toggleLegend, setToggleLegend] = useState("");

  return (
    <div className={styles.componentWrapper}>
      <section className={styles.labelWrapper}>
        <span
          onClick={() => {
            setShowStage("");
          }}
          className={showStage !== "" ? `${styles.show}` : `${styles.hide}`}>
          Hide labels
        </span>
        <div className={showStage === "Vanaheim" ? `${styles.show} ${styles.vanaheim}` : `${styles.hide} ${styles.vanaheim}`}>
          <h3>Vanaheim</h3>
          <p>Stage</p>
        </div>
        <div className={showStage === "Midgard" ? `${styles.show} ${styles.midgard}` : `${styles.hide} ${styles.midgard}`}>
          <h3>Midgard</h3>
          <p>Stage</p>
        </div>
        <div className={showStage === "Jotunheim" ? `${styles.show} ${styles.jotunheim}` : `${styles.hide} ${styles.jotunheim}`}>
          <h3>Jotunheim</h3>
          <p>Stage</p>
        </div>
        <div className={showStage === "Svartheim" ? `${styles.show} ${styles.svartheim}` : `${styles.hide} ${styles.svartheim}`}>
          <h3>Svartheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Niflheim" ? `${styles.show} ${styles.niflheim}` : `${styles.hide} ${styles.niflheim}`}>
          <h3>Niflheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Helheim" ? `${styles.show} ${styles.helheim}` : `${styles.hide} ${styles.helheim}`}>
          <h3>Helheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Muspelheim" ? `${styles.show} ${styles.muspelheim}` : `${styles.hide} ${styles.muspelheim}`}>
          <h3>Muspelheim</h3>
          <p>Camping site</p>
        </div>
        <div className={showStage === "Alfheim" ? `${styles.show} ${styles.alfheim}` : `${styles.hide} ${styles.alfheim}`}>
          <h3>Alfheim</h3>
          <p>Camping site</p>
        </div>
      </section>

      <section className="gridmap">
        <div>
          <Image
            src="./img/Vanaheim.svg"
            width={200}
            height={200}
            alt="Vanaheim"
            className={styles.mapWrapper}
            onClick={() => {
              setShowStage("Vanaheim");
            }}
          />
        </div>
        <div>
          <Image
            src="./img/Midgard.svg"
            width={200}
            height={200}
            alt="Midgard"
            className={styles.mapWrapper}
            onClick={() => {
              setShowStage("Midgard");
            }}
          />
        </div>
        <div>
          <Image
            src="./img/Jotunheim.svg"
            width={200}
            height={200}
            alt="Jotunheim"
            className={styles.mapWrapper}
            onClick={() => {
              setShowStage("Jotunheim");
            }}
          />
        </div>

        <div>
          <Image
            src="./img/Svartheim.svg"
            width={200}
            height={200}
            alt="Svartheim"
            className={styles.mapWrapper}
            onClick={() => {
              setShowStage("Svartheim");
            }}
          />
        </div>

        <div>
          <Image
            src="./img/Niflheim.svg"
            width={200}
            height={200}
            alt="Niflheim"
            className={styles.mapWrapper}
            onClick={() => {
              setShowStage("Niflheim");
            }}
          />
        </div>

        <Image
          src="./img/Helheim.svg"
          width={200}
          height={200}
          alt="Helheim"
          className={styles.mapWrapper}
          onClick={() => {
            setShowStage("Helheim");
          }}
        />
        <Image
          src="./img/Muspelheim.svg"
          width={100}
          height={100}
          alt="Muspelheim"
          className={styles.mapWrapper}
          onClick={() => {
            setShowStage("Muspelheim");
          }}
        />
        <Image
          src="./img/Alfheim.svg"
          width={200}
          height={200}
          alt="Alfheim"
          className={styles.mapWrapper}
          onClick={() => {
            setShowStage("Alfheim");
          }}
        />
      </section>

      <section className={styles.legendWrapper}>
        <div>
          <span
            onClick={() => {
              toggleLegend === "" ? setToggleLegend("toggled") : setToggleLegend("");
            }}>
            {toggleLegend === "" ? "SHOW" : "HIDE"}
          </span>
        </div>
        <div className={toggleLegend === "toggled" ? styles.showLegend : styles.hideLegend}>
          <ul>
            <li>
              <h4>STAGES</h4>
            </li>
            <li>Jotunheim</li>
            <li>Midgard</li>
            <li>Vanaheim</li>
          </ul>
          <ul>
            <li>
              <h4>CAMPING SITES</h4>
            </li>
            <li>Alfheim</li>
            <li>Helheim</li>
            <li>Muspelheim</li>
            <li>Niflheim</li>
            <li>Svartheim</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AreaOverview;
