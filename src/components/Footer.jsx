import emailIcon from '../assets/email image.png';
import GitHub from '../assets/github-icon-design-vector-png_115671.png';
import linkedIn from '../assets/linkedInIcon.png';
import content from '../content';

const { email, githubUrl, linkedinUrl } = content.site;

const contacts = [
  { href: `mailto:${email}`, icon: emailIcon, label: email },
  { href: githubUrl, icon: GitHub, label: 'GitHub' },
  { href: linkedinUrl, icon: linkedIn, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6">
        {contacts.map(({ href, icon, label }) => (
          <li key={label}>
            <a href={href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-700">
              <img src={icon} alt="" className="h-6 w-6 object-contain" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}