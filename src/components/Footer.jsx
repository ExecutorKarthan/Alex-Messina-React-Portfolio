const Footer = () =>{
    return(
        <section className="container-fluid contactLinks">
            <div className="row">
                <h2 id="contactMe">Contact Me</h2>
            </div>
            <div className="row">
                <div className="col" id="email">
                    <a className="emailToolTip" href="mailto:me@alexmessina.dev"> </a>
                    <a className="contactLink" href="mailto:me@alexmessina.dev">me@alexmessina.dev</a>
                </div>
                <div className="col" id="gitHub">
                    <a className="githubToolTip" href="https://github.com/ExecutorKarthan"> </a>
                    <a className="contactLink" href="https://github.com/ExecutorKarthan">https://github.com/ExecutorKarthan</a>
                </div>
                <div className="col" id="linkedIn">
                    <a className="linkedInToolTip" href="https://www.linkedin.com/in/joseph-messina-36503049/"></a>
                    <a className="contactLink" href="https://www.linkedin.com/in/joseph-messina-36503049/">https://www.linkedin.com/in/joseph-messina-36503049/</a>
                </div>
            </div>
        </section>
    )
}
export default Footer;