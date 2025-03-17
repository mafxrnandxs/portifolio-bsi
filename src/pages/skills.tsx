import styles from '../styles/Skills.module.css';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: 'React', percentage: 60 },
  { name: 'Next.js', percentage: 70 },
  { name: 'Firebase', percentage: 45 },
  { name: 'JavaScript', percentage: 95 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'MySQL', percentage: 50 },
];

const Skills: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Core Developing Skills</h2>
      <p className={styles.description}>
        I specialize in creating visually stunning and highly functional web experiences. 
        From crafting responsive UI designs to optimizing user interactions, my focus is 
        on delivering seamless, engaging, and impactful digital solutions.
      </p>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <span>{skill.name}</span>
            <div className={styles.progressBar}>
              <div 
                className={styles.progress} 
                style={{ width: `${skill.percentage}%` }} 
              />
            </div>
            <span>{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
