//Import the needed formatter and the project data
import ProjectFormatter from "../components/ProjectFormatter"
import projects from "../assets/project-details"

//Render the portfolio page after the project data has been processed by the formatter
export default function Portfolio(){
    return(
        <div>
            {<ProjectFormatter projects={projects}/>}
        </div>       
    )
}