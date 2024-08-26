//Import the image for the homepage
import JapanSelfie from '../assets/JapanSelfie.png'

//Create a section talking about me and what I think, including a phot of me.
export default function AboutMe () {
    return(
        <section className="container-fluid aboutMe">
            <div className="row">
                <h2 className ="text-center h1" id="aboutMe"> About me</h2>
                <p className="text-wrap" id="meParagraph">             
                    <img className="float-end" id="profilePic" src={JapanSelfie} alt="This is a photo of a man in a blue kimono surrounded by hanging japanese flowers."></img>       
                    <p>
                    Hello! My name is Alex Messina and I am an inquisitive, life-long learner that enjoys exploring challenges.
                    I am a firm believer in honest self-reflection as a path to improvement and view criticism as an opportunity to engage in that 
                    self-reflection. I think that collaboration is the ideal tool to produce the best quality product as it allows for a larger body 
                    of knowledge and unique perspectives to be applied to the problem in question. 
                    </p>
                    <p>
                    I tend to spend my free time programming to help someone make a repetitive, tedious task doable faster. I recently completed my Web Developer 
                    Boot Camp through Washington University - St. Louis and completed an internship with Washington University Medical School's medical imaging laboratory.
                    My internship focused on building educational materials, such as a responsive web app, to make medical imaging concepts more accessible to middle and
                    high school students. You can see more of my projects, where I have leveraged my computer science and web design skills on my GithHub page. 
                    </p>
                    If you have any questions for me, you can contact me via email or use the contact form on my website. 
                </p>
            </div>
        </section>
    )
}