import Nav from "react-bootstrap/Nav";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
      <li>
          <Nav.Link href="#Projects">Projetos</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Blog">Blog</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Footer">Contato</Nav.Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
