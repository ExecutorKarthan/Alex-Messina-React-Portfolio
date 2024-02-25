import JapanSelfie from '../assets/JapanSelfie.png'

function AboutMe () {
    return(
        <section className="container-fluid aboutMe">
            <div className="row">
                <h2 className ="text-center h1" id="aboutMe"> About me</h2>
                <p className="text-wrap" id="meParagraph">             
                    <img className="float-end" id="profilePic" src={JapanSelfie} alt="This is a photo of a man in a blue kimono surrounded by hanging japanese flowers."></img>       
                    Hello! My name is Alex Messina and I am an inquisitive, life-long learner that enjoys exploring challenges.
                    I am a firm believer in honest self-reflection as a path to improvement and view criticism as an opportunity to engage in that 
                    self-reflection. I think that collaboration is the ideal tool to produce the best quality product as it allows for a larger body 
                    of knowledge and unique perspectives to be applied to the problem in question. 
                    I tend to spend my free time programming to help someone make a repetitive, tedious task doable faster. At the moment, I do not have much 
                    free time as I am currently working toward completing my Web Developer Boot Camp through Washington University - St. Louis. I have leveraged 
                    what I am learning to produce the projects that you see below, as well as more you can find on my GithHub page.
                </p>
            </div>
        </section>
    )
}

export default AboutMe;