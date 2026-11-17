import { NavLink } from 'react-router-dom';
import content from '../content';

const { site, nav } = content;

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-navy-800 text-white'
      : 'text-blue-100 hover:bg-navy-800 hover:text-white'
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b-4 border-accent-500 bg-navy-900">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <NavLink to="/" className="text-lg font-semibold text-white">
          {site.name}{' '}
          <span className="text-sm font-normal text-blue-200">({site.pronouns})</span>
        </NavLink>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/Resume"
            className="ml-2 rounded-md bg-accent-500 px-3 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-accent-400"
          >
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}