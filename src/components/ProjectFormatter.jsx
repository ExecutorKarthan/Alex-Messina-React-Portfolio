import images from '../assets'

function ProjectFormatter({projects})  {
    console.log(projects)
    return(
        projects.map((project) =>(
            <section className="row" key={project.id}>
                <div className="workBox">
                    <div className="row"><img src={require(project.img).default}/></div>
                    <div className="row"><a className="text-center repoLink fs-6" href={project.repoLink}> {project.repoLink}</a></div>
                    <div className="row">
                        <p className="appDescription">
                            {project.description}
                        </p>
                        <p className="progConcepts"> 
                            <u><strong>Programming Concepts:</strong></u> {project.programmingConcepts}
                        </p>
                        <p className="techUsed">
                            <u><strong>Technologies used:</strong></u> {project.technologies}
                        </p>
                        </div>
                </div>
            </section>
        ))
    );
}

export default ProjectFormatter;