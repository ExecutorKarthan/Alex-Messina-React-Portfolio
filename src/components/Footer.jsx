const Footer = () =>{
    return(
        <section class="container-fluid contactLinks">
                    <div class="row">
                        <h2 id="contactMe">Contact Me</h2>
                    </div>
                    <div class="row">
                        <div class="col" id="email">
                            <a class="emailToolTip" href="mailto:me@alexmessina.dev"> </a>
                            <a class="contactLink" href="mailto:me@alexmessina.dev">me@alexmessina.dev</a>
                        </div>
                        <div class="col" id="gitHub">
                            <a class="githubToolTip" href="https://github.com/ExecutorKarthan"> </a>
                            <a class="contactLink" href="https://github.com/ExecutorKarthan">https://github.com/ExecutorKarthan</a>
                        </div>
                        <div class="col" id="linkedIn">
                            <a class="linkedInToolTip" href="https://www.linkedin.com/in/joseph-messina-36503049/"></a>
                            <a class="contactLink" href="https://www.linkedin.com/in/joseph-messina-36503049/">https://www.linkedin.com/in/joseph-messina-36503049/</a>
                        </div>
                    </div>
                </section>
    )
}
export default Footer;