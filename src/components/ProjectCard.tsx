import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import styles from "@/styles/projects.module.css";

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
  tools_languages: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <AnimateIn classNameStyle={styles.animationContainer}>
      <Link className={styles.cardContainer} href={`${project.link}`}>
        <div className={styles.containerOverlay} />
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={`/images/projects/${project.image_url}.jpg`}
            width={1920}
            height={1080}
            alt={`${project.title} image`}
          />
        </div>
        <div className={styles.textContainer}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </AnimateIn>
  );
}
