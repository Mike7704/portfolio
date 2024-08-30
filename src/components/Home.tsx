import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <section className={`section ${styles.homeSection}`}>
      <div className={styles.textContainer}>
        <h1>Michael Cowley</h1>
        <p>Software Developer</p>
      </div>
    </section>
  );
}
