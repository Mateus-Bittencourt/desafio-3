import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer id="Footer" className={styles.footer}>
      <ul>
        <li>
          <a href="https://www.instagram.com/bittencourtonrails/">
            <FaInstagram size={30}></FaInstagram>
          </a>
        </li>
        <li>
          <a href="https://github.com/Mateus-Bittencourt">
            <FaGithub size={30}></FaGithub>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mateusmbittencourt/">
            <FaLinkedin size={30}></FaLinkedin>
          </a>
        </li>
      </ul>
      <p>Copyright ©2024 All rights reserved</p>
    </footer>
  );
}

export default Footer;
