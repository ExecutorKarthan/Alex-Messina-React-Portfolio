//Import images for use
import forecast from '../assets/5-day-Forecast Demo.gif'
import pwGen from '../assets/Password-Generator-Demo.gif'
import quiz from '../assets/Responsive Quiz Demo.gif'
import sip from '../assets/SipSync Demo Video.gif'
import sqlMan from '../assets/SQL-Manager-Demo.gif'
import svg from '../assets/SVG-Logo-Maker.gif'
import workDay from '../assets/Work Day Scheduler - data entry and retention.gif'
import worth from '../assets/WorththeWatch.gif'
import bee from '../assets/Bee-porter Demo.gif'
import mis from '../assets/Medical-Imaging-Sim Demo.gif'
import llm from '../assets/LLM-Explorer.gif'

//Create a function to process each project object into a renderable item to be displayed
export default function ProjectFormatter({projects})  {
    //Create an map to select the proper image for each project
    const imgMap = new Map([
        [`../assets/LLM-Explorer.gif`, llm],
        [`../assets/Medical-Imaging-Sim Demo.gif`, mis],
        [`../assets/Bee-porter Demo.gif`, bee],
        ['../assets/5-day-Forecast Demo.gif', forecast],
        ['../assets/Password-Generator-Demo.gif', pwGen],
        ['../assets/Responsive Quiz Demo.gif', quiz],
        ['../assets/SipSync Demo Video.gif', sip],
        ['../assets/SQL-Manager-Demo.gif', sqlMan],
        ['../assets/SVG-Logo-Maker.gif', svg],
        ['../assets/Work Day Scheduler - data entry and retention.gif', workDay],
        ['../assets/WorththeWatch.gif', worth],
    ])
    //Return what needs to be rendered
    return(
        //For each project in  a map, process its rendering
        projects.map((project) =>(
            //Create a section for each project using its unique id
            <section className="row" key={project.id}>
                <div className="workBox col-md-auto p-2">
                    {/* Create a title for the project */}
                    <h3 className="text-center" ><u><strong>{project.title}</strong></u></h3>
                    {/* Display its repo link to GitHub */}
                    <div className="row"><a className="repoLink text-center fs-10 p-1" href={project.repoLink}> {project.repoLink}</a></div>
                    {/* Create a column to hold its gif, project description, programming concepts and technologies used for it to work */}
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
