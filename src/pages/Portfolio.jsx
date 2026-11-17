import ProjectFormatter from "../components/ProjectFormatter"
import projects from "../assets/project-details"

export default function Portfolio() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold text-slate-900">Projects</h1>
      <ProjectFormatter projects={projects} />
    </section>
  )
}