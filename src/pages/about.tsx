import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About me</h1>
            <p className={styles.description}>
            I’m Maria Fernanda Fernandes, a front-end developer passionate about creating intuitive and visually captivating web experiences. 
            I specialize in turning ideas into functional, user-friendly, and aesthetically pleasing interfaces. 
            Let’s team up and bring innovative designs to life!
            </p>

            <section className={styles.experience}>
                <div className={styles.line}>
                <h1 className={styles.number}>3</h1>
                <p className={styles.subtitle}>Projects done</p>
                </div>

                <div className={styles.line}>
                <h1 className={styles.number}>2+</h1>
                <p className={styles.subtitle}>Years of experience</p>
                </div>

                <div className={styles.line}>
                <h1 className={styles.number}>+</h1>
                <p className={styles.subtitle}>Clients served</p>
                </div>
            </section>
        </div>
    );
}