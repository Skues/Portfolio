import './App.css'
import "./Navbar.css"
import Navbar from './Navbar';

function Home() {

    return (
        <>
            <div>
                <Navbar />
                <AboutMe />
                <ProjectsPreview />
                <Todos />
                <Connect />
                <button onClick={topFunction}>↑</button>
            </div>
        </>
    )
}
// function Navbar() {
//     return (
//         <nav className='navbar'>
//             <div className='navbar-left'>
//                 <p>AWSkues</p>
//             </div>
//             <div className='navbar-right'>
//                 <ul className='navbar-links'>
//                     <li>
//                         <a className='hoverUnderline' href='/'>Home</a>
//                     </li>
//                     <li><a className='hoverUnderline' href='#projectAnchor'>Projects</a></li>
//                     <li><a className='hoverUnderline' href='#todoAnchor'>Todos</a></li>
//                     <li><a className='hoverUnderline' href='#connectAnchor'>Connect</a></li>
//                 </ul>
//
//             </div>
//         </nav>
//
//     )
// }
function AboutMe() {
    return (
        <div className='aboutDiv'>
            <div className='mainSection'>
                <div className='nameSection'>
                    <h1 className='home'>Alfie Skues</h1>
                    {/* <p>icon United Kingdom</p> */}
                    <p>I am a 21 year old Computer Science graduate from the University of East Anglia.
                        I specialise in backend development and have hands-on experience building full stack applications, which you can explore in my projects (link).</p>
                    {/* <p>add bullet point list of interests</p> */}
                    {/* <img src='/pictures/coraline-dad-type.gif' alt='meIRL' width={100} height={100} /> */}
                    <p>I enjoy solving my own problems with code and constantly learning new tools, languages and techniques. Outside of programming, I am a bodybuilder and ex top 100 Brawlhalla player.</p>
                    <p>Write what you enjoy doing, why you enjoy programming, type of things you made, what do you do in your free time</p>
                </div>
                <div className='imageHover'></div>
                {/* // Credit to my beautiful girlfriend for drawing this */}
            </div>
        </div>
    )
}
function ProjectsPreview() {
    return (
        <div className='projectDiv'>
            {/* <ProjectModal /> */}
            <h1 id='projectAnchor'>Projects</h1>
            <p>Here are my some of my projects that I have worked on for the past few months. </p>
            <ul className='projectList'>
                <li className='individualProject'>
                    <h2>Fitness App (change name)</h2>
                    <p>Full stack fitness progression mobile application, which allows users to log workouts, visualise progress and see potential predictions through a custom machine learning model. Built using React Native for compatible front end, created a RESTful Flask API to handle endpoints and data transfer. Python's pandas, scikit-learn and numPy were all used for creating the model and synthetic data (more info on the GitHub README). SQLAlchemy database.</p>
                    <a href='https://github.com/Skues/FitnessApp' target='_blank'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>YourWeather (change name)</h2>
                    <p>Web application which gathers real-time weather data from an API and does basic weather app features but with the aim of providing advice towards the user's sleep, based on their preferences. For example, if the user likes a cooler room when they sleep, the app will tell the user the state of the weather during their typical sleeping time, then give advice on how to mitigate certain weather conditions. Backend is made with Python's Flask and the front end is built entirely with HTML and CSS. Integrate with a MySQL server to store user data. </p>
                    <a href='https://github.com/Skues/YourWeather' target='_blank'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>AI Train Chatbot</h2>
                    <p>Lead a successful group university project with the aim to create an intelligent chatbot for a train operating company. The two main objectives were to help customers find the cheapest available ticket for their intended journey, in the UK. And to estimate the delay of a train journey using a machine learning model, trained on 3 years of train data. Backend and frontend were built in Python with spaCy for NLP, Selenium for scraping, and scikit-learn for the ML model.</p>
                    <a href='https://github.com/Skues/AI-Train-Chatbot' target='_blank'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>Steam Watch</h2>
                    <p>For fun backend project used to track my friends playtime on Steam and to, eventually, visually rank it on most time wasted. Gathers friend list data based on someone's SteamID, then tracks all their recently played games (last 2 weeks) and total playtime. After all this data is gathered, they will all be ranked on the most time played and which games they all played. Built in Go and uses SteamAPI for the data.</p>
                    <a href='https://github.com/Skues/steam-watch' target='_blank'>Link</a>
                </li>
            </ul>

            <a href='/projects' >More Projects</a>
        </div >
    )
}

function Todos() {
    return (
        <div id='todoDiv' className='todoDiv'>
            <h1 id='todoAnchor'>My todo list:</h1>

            <p>Here's what I'm currently working on:</p>
            <ul className='todoList'>
                <li className='todoItem'>Interpreter in Go</li>
                <li className='todoItem'>Finish developing Fitness app</li>
                <li className='todoItem'>J*b</li>
            </ul>
        </div>
    )
}

function Connect() {
    return (
        <div className='connectDiv'>
            <h1 id='connectAnchor'>Connect</h1>
            <p>Feel free to connect or contact me!</p>
            <a href='mailto:alfieskues2006@gmail.com'>Email</a>
            <a href='https://github.com/Skues'>GitHub</a>
            <a href='https://uk.linkedin.com/in/alfie-skues-16240329a'>LinkedIn</a>
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}

export default Home
