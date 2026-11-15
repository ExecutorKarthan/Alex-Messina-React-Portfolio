export default function Card({ title, children, className = '' }) {
  return (
    <section
      className={`rounded-xl border border-slate-200 border-t-4 border-t-brand-600 bg-white p-6 shadow-md ${className}`}
    >
      {title && <h2 className="mb-3 text-xl font-semibold text-navy-900">{title}</h2>}
      {children}
    </section>
  )
}