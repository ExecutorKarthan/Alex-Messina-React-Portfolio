import content from '../content'

const { heading, intro, items } = content.resources

function FolderIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
    </svg>
  )
}

export default function Resources() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-navy-900">{heading}</h1>
      <p className="mt-2 max-w-2xl text-slate-700">{intro}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map(({ title, description, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 rounded-xl border border-slate-200 border-t-4 border-t-accent-500 bg-white p-6 shadow-md transition hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
          >
            <FolderIcon className="h-14 w-14 shrink-0 text-accent-500 transition group-hover:text-brand-600" />
            <div>
              <h2 className="text-lg font-semibold text-navy-900 group-hover:text-brand-700">{title}</h2>
              {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
              <p className="mt-3 text-sm font-medium text-brand-700">Open folder in Google Drive →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}