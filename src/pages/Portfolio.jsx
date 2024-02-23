import ProjectFormatter from "../components/ProjectFormatter"
import projects from "../assets/project-details"

export default function Portfolio(){
    return(
        <div>
            {<ProjectFormatter projects={projects}/>}
        </div>       
    )
}