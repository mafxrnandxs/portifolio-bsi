import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Desenvolvedora Frontend</title>
        <meta name="description" content="Portfólio de uma desenvolvedora frontend apaixonada por tecnologia e design." />
      </Head>

      <Header />

      <main className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.subtitle}>Front-end Developer</p>
          <h1>Hi There, I’m <br /><span className={styles.name}>Maria Fernanda Fernandes</span></h1>
          <p className={styles.description}>
            Welcome to my portfolio of stunning web experiences. 
            Dive into my projects, and let’s collaborate to build something amazing together!
          </p>

          <div className={styles.buttons}>
            <a href="/contact" className={styles.hireMe}>Hire Me</a>
            <a href="/experiences" className={styles.portfolio}>Portfolio</a>
          </div>
        </section>
      </main>

      <About />
      <Skills />
      <Contact />
    </>
  );
}
