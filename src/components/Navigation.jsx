//Import the needed modules to operate
import { Link } from 'react-router-dom';
import NavBar from './NavBar'

//Create a navigation bar composed of links to each page of the site
export default function Navigation() {
  return (
    //Pass in an array of data to be processed into navigation links
    <NavBar
      links={[
        <Link key={1} className="nav-link text-dark col" to="/AboutMe">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-dark col" to="/Portfolio">
          Portfolio Projects
        </Link>,
         <Link key={3} className="nav-link text-dark col" to="/Contact">
          Contact Me
        </Link>,
         <Link key={4} className="nav-link text-dark col" to="/Resume">
          Resume
        </Link>,
      ]}
    />
  );
}
