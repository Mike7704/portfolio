import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <h2>About Me</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image src={"/images/profile-pic.png"} width={256} height={256} alt="profile image" />
        </div>
        <div className={styles.aboutText}>
          <p>Hi, I&apos;m Michael Cowley, a first-class graduate with a passion for software development.</p>
          <p>
            Throughout my academic journey, I&apos;ve tackled challenging projects and coursework that have strengthened
            my programming and problem solving skills. My recent completion of a comprehensive software development boot
            camp has further refined my skills, equipping me with practical knowledge in modern technologies such as
            React, Next.js, and PostgreSQL to develop full-stack applications.
          </p>
          <p>
            I am eager to apply my skills and start a career as a software developer and contribute to innovative
            real-world projects. I&apos;m always looking for opportunities to learn and grow, and I&apos;m excited to
            take on new challenges.
          </p>
        </div>
      </div>
      <div className={styles.aboutSkills}>
        <h3>Technical Skills</h3>
        <ul>
          <li>Programming languages: Java, JavaScript, HTML, CSS, Python</li>
          <li>Development frameworks: JavaFX, React, Next.js, PostgreSQL, Express.js, Node.js, Tailwind CSS</li>
          <li>Tools: Eclipse, Visual Studio Code, Git/GitHub</li>
        </ul>
      </div>
      <div className={styles.aboutLinks}>
        <h3>Connect with Me</h3>
        <ul>
          <li>
            <a href="https://github.com/Mike7704" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/michaelcowley2001/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
