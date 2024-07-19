import ButtonA from "../elements/ButtonA";
import styles from "./Presentation.module.css";
import { useEffect, useState, useCallback, useMemo } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = useMemo(() => ["Mateus Bittencourt!", "Desenvolvedor Full-Stack"], []);
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  const toType = useCallback(() => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  }, [isDeleting, loop, period, text.length, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      toType();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, toType]);

  return (
    <div id="Presentation" className={styles.presentation}>
      <h1> Olá, eu sou {text} </h1>
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
  );
}

export default Presentation;
