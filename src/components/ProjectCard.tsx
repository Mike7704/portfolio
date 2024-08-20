import Link from "next/link";
import Image from "next/image";

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
    <Link href={`/projects/${project.id}`}>
      <div className="container-overlay" />
      <div>
        <Image
          src={`/images/projects/${project.image_url}.jpg`}
          width={256}
          height={256}
          alt={`${project.image_url} image`}
        />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}
