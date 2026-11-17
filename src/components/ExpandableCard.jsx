export default function ExpandableCard({ title, blurb, children }) {
  return (
    <details className="group rounded-xl border border-slate-200 border-t-4 border-t-brand-600 bg-white shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-6 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 [&::-webkit-details-marker]:hidden">
        <div>
          <h2 className="text-xl font-semibold text-navy-900">{title}</h2>
          {blurb && <p className="mt-1 text-sm text-slate-600">{blurb}</p>}
        </div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="border-t border-slate-200 px-6 pb-6 pt-5">{children}</div>
    </details>
  )
}