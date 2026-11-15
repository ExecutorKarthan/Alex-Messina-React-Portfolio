import JapanSelfie from '../assets/JapanSelfie.png'
import Card from '../components/Card'
import content from '../content'

const { heading, photoAlt, bio, experience, education, skills } = content.about

export default function AboutMe() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-navy-900">{heading}</h1>

      <Card>
        <img
          className="float-right mb-4 ml-6 w-40 rounded-lg shadow sm:w-64"
          src={JapanSelfie}
          alt={photoAlt}
        />
        <div className="space-y-4 text-lg leading-relaxed text-slate-700">
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="clear-both" />
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Experience">
          <ul className="space-y-5">
            {experience.map(({ role, org, dates, summary }) => (
              <li key={`${role}-${org}`}>
                <p className="font-semibold text-slate-900">{role}</p>
                <p className="text-sm text-brand-700">{org}</p>
                {dates && <p className="text-sm text-slate-500">{dates}</p>}
                {summary && <p className="mt-1 text-slate-700">{summary}</p>}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Education">
          <ul className="space-y-5">
            {education.map(({ school, program, dates }) => (
              <li key={`${school}-${program}`}>
                <p className="font-semibold text-slate-900">{program}</p>
                <p className="text-sm text-brand-700">{school}</p>
                {dates && <p className="text-sm text-slate-500">{dates}</p>}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Skills">
        <div className="space-y-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">{group}</p>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}