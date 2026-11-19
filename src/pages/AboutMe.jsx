import HeadShot from '../assets/Headshot.jpg'
import Card from '../components/Card'
import ExpandableCard from '../components/ExpandableCard'
import content from '../content'

const { heading, photoAlt, bio, sections } = content.about

function Entry({ heading, subheading, location, dates, text, explanation, bullets }) {
  const meta = [subheading, location].filter(Boolean).join(' · ')
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-semibold text-slate-900">{heading}</h3>
        {dates && <p className="shrink-0 text-sm font-medium text-slate-500">{dates}</p>}
      </div>
      {meta && <p className="text-sm text-brand-700">{meta}</p>}
      {text && <p className="mt-2 text-slate-700">{text}</p>}
      {explanation && <p className="mt-3 list-disc space-y-2 pl-5 text-slate-700">{explanation}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function AboutMe() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-navy-900">{heading}</h1>

      <Card>
        <img
          className="float-right mb-4 ml-6 w-40 rounded-lg shadow sm:w-64"
          src={HeadShot}
          alt={photoAlt}
        />
        <div className="space-y-4 text-lg leading-relaxed text-slate-700">
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="clear-both" />
      </Card>

      {sections.map(({ title, blurb, entries }) => (
        <ExpandableCard key={title} title={title} blurb={blurb}>
          <ul className="divide-y divide-slate-200">
            {entries.map((entry) => (
              <Entry key={`${entry.heading}-${entry.dates || ''}`} {...entry} />
            ))}
          </ul>
        </ExpandableCard>
      ))}
    </section>
  )
}