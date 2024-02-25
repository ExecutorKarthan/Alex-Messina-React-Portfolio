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
        id: 4,
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
        id: 3,
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
        id: 2,
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
        id: 1,
        title: `5 Day Forecast`,
        repoLink:`https://executorkarthan.github.io/5-day-forecast/`,
        image: `../assets/5-day-Forecast Demo.gif`,
        description: `This is a responsive forecast app that will check the current weather conditions of a searched city. It will also display the forecasted weather 
            conditions in stylized cards below the current day. The app uses local storage to keep track of searched cities, keeping a list of the cities 
            below that allows for quick data retrieval.`,
        programmingConcepts:`User Responsive Web-pages, API interaction, Local storage, Fetch Requests`,
        technologies:`Javascript, OpenWeather, HTML, CSS`,
    },
    {
        id: 0,
        title: `SipSync`,
        repoLink:`https://github.com/ExecutorKarthan/sipsync`,
        image: `../assets/SipSync Demo Video.gif`,
        description: `This was a meal-drink paring website that my team and I put together as a project.It allows the user to select an alcohol type or drink type 
            or meal category, then the algorithm would fetch a list of possible pairings for the requested item(s). It supports multiple category selections, 
            adjusting its search to match the additional criterion.`,
        programmingConcepts:`Recursion, Local storage, HTML, CSS, API interaction, Fetch requests, User Responsive Web-pages`,
        technologies:`Javascript, The Cocktail Database, The Meal Database, Tailwind, CSS, HTML`,
    },
]

export default projects;