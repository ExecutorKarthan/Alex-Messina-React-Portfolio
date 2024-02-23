import forecast from '../assets/5-day-Forecast Demo.gif'
import pwGen from '../assets/Password-Generator-Demo.gif'
import quiz from '../assets/Responsive Quiz Demo.gif'
import sip from '../assets/SipSync Demo Video.gif'
import sqlMan from '../assets/SQL-Manager-Demo.gif'
import svg from '../assets/SVG-Logo-Maker.gif'
import workDay from '../assets/Work Day Scheduler - data entry and retention.gif'
import worth from '../assets/WorththeWatch.gif'

function ProjectFormatter({projects})  {
    const imgMap = new Map([
        ['../assets/5-day-Forecast Demo.gif', forecast],
        ['../assets/Password-Generator-Demo.gif', pwGen],
        ['../assets/Responsive Quiz Demo.gif', quiz],
        ['../assets/SipSync Demo Video.gif', sip],
        ['../assets/SQL-Manager-Demo.gif', sqlMan],
        ['../assets/SVG-Logo-Maker.gif', svg],
        ['../assets/Work Day Scheduler - data entry and retention.gif', workDay],
        ['../assets/WorththeWatch.gif', worth],
    ])
    return(
        projects.map((project) =>(
            <section className="row" key={project.id}>
                <div className="workBox">
                    <div className="row"><img src={imgMap.get(project.image)}/></div>
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