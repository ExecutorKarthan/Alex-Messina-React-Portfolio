//Create an array to store all the data for each project as an object for easy access.
const projects = 
[
        // {
        //     title: ``,
        //     repoLink:``,
        //     image: ``,
        //     description: ``,
        //     programmingConcepts:``,
        //     technologies:``,
        // },
    {
        id: 7,
        title: `Worth the Watch`,
        repoLink:`https://github.com/ExecutorKarthan/Worth-the-Watch`,
        image: `../assets/WorththeWatch.gif`,
        description: `This is a movie review site that my team and I produced as a project. 
            It will allow a user to create a username and password, then search the movie database for movies and their corresponding reviews.
            The user can then add their own reviews to movie in the database, add movies to review manually or query an API to add movies to review
            in an automated fashion.`,
        programmingConcepts:`Model-View-Controller, Routing, HTML templating, API, Tokenization, SQL Modeling`,
        technologies:`HTML, CSS, Bootstrap, MySQL, Bcrypt, Session, Dotenv, 
            Express, Handlebars, Sequelize, Mysql2, The Movie DB API`,
    },
    {
        id: 6,
        title: `SQL Employee Manager`,
        repoLink:`https://github.com/ExecutorKarthan/SQL-Employee-Manager`,
        image: `../assets/SQL-Manager-Demo.gif`,
        description: `This is a command line app that uses several SQL tables that all interact with each other. It allows the user to 
            add employees, change their roles and supervisors, add departments and more! This project specifically focused on making schemas within
            SQL models. This was designed to be a completely backend app with a bare-bones UI.`,
        programmingConcepts:`SQL Modeling, SQL model association`,
        technologies:`MySQL, Bcrypt, Inquirer, Dotenv, Sequelize, Mysql2`,
    },
    {
        id: 5,
        title: `SVG Logo Maker`,
        repoLink:`https://github.com/ExecutorKarthan/SVG-Logo-Maker`,
        image: `../assets/SVG-Logo-Maker.gif`,
        description: `This is a command line app that creates logos given user input. It will create a vector graphic using three user inputted letters,
            a selected shape, and two color selections: one for the shape and the other for the background. I also used unit tests to double check my work prior
            to the program running.`,
        programmingConcepts:`SQL Modeling, SQL model association, Responsive Web-pages`,
        technologies:`MySQL, Bcrypt, Inquirer, Dotenv, Sequelize, Mysql2`,
    },
    {
        id: 4,
        title: `5 Day Forecast`,
        repoLink:`https://github.com/ExecutorKarthan/5-day-forecast`,
        image: `../assets/5-day-Forecast Demo.gif`,
        description: `This is a responsive forecast app that will check the current weather conditions of a searched city. It will also display the forecasted weather 
            conditions in stylized cards below the current day. The app uses local storage to keep track of searched cities, keeping a list of the cities 
            below that allows for quick data retrieval.`,
        programmingConcepts:`User Responsive Web-pages, API interaction, Local storage, Fetch Requests`,
        technologies:`Javascript, OpenWeather, HTML, CSS`,
    },
    {
        id: 3,
        title: `SipSync`,
        repoLink:`https://github.com/ExecutorKarthan/sipsync`,
        image: `../assets/SipSync Demo Video.gif`,
        description: `This was a meal-drink paring website that my team and I put together as a project.It allows the user to select an alcohol type or drink type 
            or meal category, then the algorithm would fetch a list of possible pairings for the requested item(s). It supports multiple category selections, 
            adjusting its search to match the additional criterion.`,
        programmingConcepts:`Recursion, Local storage, HTML, CSS, API interaction, Fetch requests, User Responsive Web-pages`,
        technologies:`Javascript, The Cocktail Database, The Meal Database, Tailwind, CSS, HTML`,
    },
    {
        id: 2,
        title: `HTML Portfolio Site`,
        repoLink:`https://github.com/ExecutorKarthan/Alex-Messina-Portfolio`,
        image: `../assets/fullPageLayout1.png`,
        description: `This is my original portfolio site! This was the first HTML project that I built and updated before I knew how REACT worked. 
        I like to showcase it as a marker of where I started. I have done some updates to it, namely in formatting.`,
        programmingConcepts:`Front-end interactivity`,
        technologies:`HTML, CSS, Bootstrap`,
    },
    {
        id: 1,
        title: `AIP Manager`,
        repoLink:`https://github.com/ExecutorKarthan/AIP-Manager`,
        image: `No GUI Made`,
        description: `This is a series of scripts I wrote to help a friend of mine with his Google Sheet project. At the school we worked at, students were
        allowed to travel between teacher's rooms during Academic Intervention Period (AIP). My colleague of developed a system of Google sheets so it would
        be easier for students and teachers to know where they need to report to. I knew that maintaining these Google sheets was a tedious, 
        time-consuming task for him, so I developed these automated scripts to cut down the workload. Because of my work, it takes less than 20 minutes a week
        to maintain the sheets (instead of the several hours it was before); they could be updated faster (within 24 hours instead of 2 weeks); and
        they have less occurrences of errors. After the program was launched, I started getting requests for several enhancing features 
        that I had not considered in my original design. As a result, they were added to the benefit of the school as a whole.`,
        programmingConcepts:`Object Orient Programming, Algorithm Design `,
        technologies:`Google Apps Scripts, Google APIs, Google Sheets`,
    },
    {
        id: 0,
        title: `Dividend Stock Screener`,
        repoLink:`https://github.com/ExecutorKarthan/Dividend-Stock-Screener`,
        image: `No GUI Made`,
        description: `This is a stock screener that I developed early in my early programming days. It uses a yahoo finance API to get stock data and save it
        to a Postgres database. From this data, I can screen stocks based on several criteria, namely dividend yield. This is the very first major passion 
        project I embarked on. This project is functional, but will receive a major overhaul in the future as it has no front end and I think it can be 
        better executed in javascript with my new knowledge of web APIs.`,
        programmingConcepts:`Object Orient Programming, Web Scraping, File I/O, Database interaction, Algorithm Design `,
        technologies:`Python, Selenium, Third-party API's`,
    },
]

export default projects;