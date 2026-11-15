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

const imgMap = new Map([
  ['../assets/LLM-Explorer.gif', llm],
  ['../assets/Medical-Imaging-Sim Demo.gif', mis],
  ['../assets/Bee-porter Demo.gif', bee],
  ['../assets/5-day-Forecast Demo.gif', forecast],
  ['../assets/Password-Generator-Demo.gif', pwGen],
  ['../assets/Responsive Quiz Demo.gif', quiz],
  ['../assets/SipSync Demo Video.gif', sip],
  ['../assets/SQL-Manager-Demo.gif', sqlMan],
  ['../assets/SVG-Logo-Maker.gif', svg],
  ['../assets/Work Day Scheduler - data entry and retention.gif', workDay],
  ['../assets/WorththeWatch.gif', worth],
])

export default function ProjectFormatter({ projects }) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <article
          key={project.id}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md md:flex"
        >
          <img
            className="w-full bg-slate-100 object-contain md:w-2/5 md:shrink-0"
            src={imgMap.get(project.image)}
            alt={`Demo of ${project.title}`}
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-slate-900">{project.title}</h2>
            <a
              href={project.repoLink}
              className="break-all text-sm text-brand-600 hover:underline"
            >
              {project.repoLink}
            </a>
            <p className="mt-3 text-slate-700">{project.description}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-slate-900">Programming concepts</dt>
                <dd className="text-slate-600">{project.programmingConcepts}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Technologies used</dt>
                <dd className="text-slate-600">{project.technologies}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  )
}