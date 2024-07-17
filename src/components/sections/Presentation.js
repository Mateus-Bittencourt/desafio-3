import ButtonA from "../elements/ButtonA";
import styles from "./Presentation.module.css";
import { useEffect, useState } from "react";



const Presentation = () => {

  const [text, setText] = useState("Mateus Bittencourt");


  return (
    <div id="Presentation" className={styles.presentation}>

    <h1> Olá, eu sou {text} <br></br>
    Desenvolvedor Full-Stack </h1>
    <p>
      Sou um apaixonado desenvolvedor web com expertise de dois anos,
      <br></br>
      focado no desenvolvimento de aplicações web e REST API.
      <br></br>
      Minhas principais habilidades residem em Ruby on Rails e Node.js,
      <br></br>
      com uma notável experiência no desenvolvimento de sistemas Core Banking,
      <br></br>
      integração de APIs e aplicativos móveis.
    </p>

    <ButtonA
      text="Download resumo"
      link="https://github.com/Mateus-Bittencourt"
    ></ButtonA>

    <br></br>
  </div>
  )
}

export default Presentation;
