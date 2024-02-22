import email from '../assets/email image.png';
import GitHub from '../assets/github-icon-design-vector-png_115671.png';
import linkedIn from '../assets/linkedInIcon.png';

const Footer = () =>{
    return(
        <section classNameName="container-fluid contactLinks">
            <div className="row">
                <div className="col" id="email">
                    <a className="emailToolTip" href="mailto:me@alexmessina.dev"> <img className="contactImage" src={email} alt="This is an icon of a letter representing email" id="email"/></a>
                    <a className="contactLink" href="mailto:me@alexmessina.dev">me@alexmessina.dev</a>
                </div>
                <div className="col" id="gitHub">
                    <a className="githubToolTip" href="https://github.com/ExecutorKarthan"> <img className="contactImage" src={GitHub} alt="This is an icon of the octocat - the symbol of Github"/></a>
                    <a className="contactLink" href="https://github.com/ExecutorKarthan">https://github.com/ExecutorKarthan</a>
                </div>
                <div className="col" id="linkedIn">
                    <a className="linkedInToolTip" href="https://www.linkedin.com/in/joseph-messina-36503049/"><img className="contactImage" src={linkedIn} alt="'This is an icon of 'IN' which is the symbol for LinkedIn"/></a>
                    <a className="contactLink" href="https://www.linkedin.com/in/joseph-messina-36503049/">https://www.linkedin.com/in/joseph-messina-36503049/</a>
                </div>
            </div>
        </section>
    )
}
export default Footer;