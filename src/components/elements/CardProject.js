import styles from "./CardProject.module.css";
import { useState } from "react";

const CardProject = ({ img, title, text }) => {
  const [info, setInfo] = useState(false);

  const InfoOn = () => {
    setInfo(true);
  }

  const InfoOff = () => {
    setInfo(false);
  }
  return (
    <div className={styles.cardproject} onMouseEnter={InfoOn} onMouseLeave={InfoOff}>
      <img src={img} alt=" not found"></img>

      {info && (
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default CardProject;
