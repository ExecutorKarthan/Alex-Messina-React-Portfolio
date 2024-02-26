//Imported needed modules
import email from '../assets/email image.png';
import GitHub from '../assets/github-icon-design-vector-png_115671.png';
import linkedIn from '../assets/linkedInIcon.png';

//Create a footer to appear on each of the rendered pages
const Footer = () =>{
    return(
        <section className="container-fluid contactLinks">
            <div className="row">
                {/* Create a column that contains a link and icon for my email address */}
                <div className="col" id="email">
                    <a className="emailToolTip" href="mailto:me@alexmessina.dev"> <img className="contactImage" src={email} alt="This is an icon of a letter representing email" id="email"/></a>
                    <a className="contactLink" href="mailto:me@alexmessina.dev">me@alexmessina.dev</a>
                </div>
                {/* Create a column that contains a link and icon for my GitHub page */}
                <div className="col" id="gitHub">
                    <a className="githubToolTip" href="https://github.com/ExecutorKarthan"> <img className="contactImage" src={GitHub} alt="This is an icon of the octocat - the symbol of Github"/></a>
                    <a className="contactLink" href="https://github.com/ExecutorKarthan">https://github.com/ExecutorKarthan</a>
                </div>
                {/* Create a column that contains a link and icon for my LinkedIn page */}
                <div className="col" id="linkedIn">
                    <a className="linkedInToolTip" href="https://www.linkedin.com/in/joseph-messina-36503049/"><img className="contactImage" src={linkedIn} alt="'This is an icon of 'IN' which is the symbol for LinkedIn"/></a>
                    <a className="contactLink" href="https://www.linkedin.com/in/joseph-messina-36503049/">https://www.linkedin.com/in/joseph-messina-36503049/</a>
                </div>
            </div>
        </section>
    )
}

//Export the function for use
export default Footer;