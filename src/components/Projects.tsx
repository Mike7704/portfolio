import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/components/ProjectCard";
import { fetchProjects } from "@/utils/utils";
import "@/styles/projects.css";

export default async function Projects() {
  // Fetch all projects from database
  const projects = await fetchProjects();
  const typedProjects = projects.rows as Project[];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.rows.length > 0 ? (
        <div className="projects-grid">
          {typedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Project Found</p>
      )}
    </section>
  );
}
