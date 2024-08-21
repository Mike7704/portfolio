import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import "@/styles/projects.css";

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
    <AnimateIn classNameStyle="animation-container">
      <Link className="card-container" href={`/pizzas/${project.id}`}>
        <div className="container-overlay" />
        <div className="image-container">
          <Image
            className="image"
            src={`/images/projects/${project.image_url}.jpg`}
            width={256}
            height={256}
            alt={`${project.title} image`}
          />
        </div>
        <div className="text-container">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </AnimateIn>
  );
}
