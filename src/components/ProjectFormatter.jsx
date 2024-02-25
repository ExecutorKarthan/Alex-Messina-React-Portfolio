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
                <div className="workBox col-md-auto p-2">
                    <h3 className="text-center" ><u><strong>{project.title}</strong></u></h3>
                    <div className="row"><a className="repoLink text-center fs-10 p-1" href={project.repoLink}> {project.repoLink}</a></div>
                    <div className="col">
                        <img className="workImage img-responsive float-start p-2" src={imgMap.get(project.image)}/>
                        <p className="appDescription fs-10">
                            {project.description}
                        </p>
                        <div className="row">
                            <p className="prompt col-5 ">Programming Concepts:</p>
                            <p className="progConcepts col"> {project.programmingConcepts} </p>
                        </div>
                        <div className="row">
                            <p className="prompt col-5">Technologies used:</p>
                            <p className="techUsed col"> {project.technologies} </p>
                        </div>
                    </div>
                </div>
            </section>
        ))
    );
}

export default ProjectFormatter;