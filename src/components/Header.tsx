import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#portfolio">Portfolio</Link></li>
          <li><Link href="#blog">Blog</Link></li>
        </ul>
        <a href="#contact" className={styles.contactButton}>Let’s Talk</a>
      </nav>
    </header>
  );
}
