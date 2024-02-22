import { Link } from 'react-router-dom';
import NavBar from './NavBar'

export default function Navigation() {
  return (
    <NavBar
      links={[
        <Link key={1} className="nav-link text-dark" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-dark" to="/Portfolio">
          Portfolio Projects
        </Link>,
         <Link key={3} className="nav-link text-dark" to="/Contact">
          Contact Me
        </Link>,
         <Link key={4} className="nav-link text-dark" to="/Resume">
          Resume
        </Link>,
      ]}
    />
  );
}
