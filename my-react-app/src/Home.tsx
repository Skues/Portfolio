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
                    <p>Full stack mobile fitness progression to track workouts, visualise progress, and predict future performance using machine learning.</ p>
                    <ul>
                        <li>Built using React Native for compatible front end</li>
                        <li>Developed a RESTful API using Flask to handle endpoints and data transfer.</ li>
                        <li>Python's pandas, scikit-learn and numPy were all used for creating the model and synthetic data (more info on the GitHub README)</li>
                        <li>SQLAlchemy database.</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/FitnessApp' target='_blank'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>YourWeather (change name)</h2>
                    <p>Web application that uses real-time weather data to provide advice targetted at getting better sleep, based on user preferences. </p>
                    <ul>
                        <li>Retrieves detailed weather data from a public API.</li>
                        <li>Analyses conditions during the user's sleep hours and provides advice.</li>
                        <li>Backend built using <b>Python Flask</b>.</li>
                        <li>Frontend developed with <b>HTML</ b> and <b>CSS</ b>.</li>
                        <li>Integrated with a <b>MySQL</b > database to store and retrieve user preferences.</li>
                        <li>Hosted on <b>Docker</b> .</li>

                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/YourWeather' target='_blank'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>AI Train Chatbot</h2>
                    <p>Led a successful university group project to build an AI chatbot for a UK train operating company.</p>
                    <ul><li>The two main aims were:</li>
                        <ul>
                            <li>Help customers find the cheapest available ticket for their journey.</li>
                            <li>Estimating delays using a machine learning model trained on 3 years of historical data.</li>
                        </ul>
                        <li>Developed both frontend and backend with Python.</li>
                        <li>Used spaCy for NLP with a custom spaCy model to recognise train stations.</li>
                        <li>Selenium was used to scrape real-time train station data.</li>
                        <li>Built and trained the delay prediction model using Pandas and scikit-learn.</li>
                        <li>Planned and led the project to a high standard.</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/AI-Train-Chatbot' target='_blank'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>Steam Watch</h2>
                    <p>For fun backend project used to track my friends playtime on Steam and to, eventually, visually rank it on most time wasted.</p>
                    <ul>
                        <li>Gathers friend list data based on a SteamID</li>
                        <li>Identifies most played games:</li>
                        <ul><li>Within the last 2 weeks</li>
                            <li>Overall</li>
                        </ul>
                        <li>Ranked on the most time played and displays which games were played</li>
                        <li>Build in Go using SteamAPI</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/steam-watch' target='_blank'>Link</a>
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
            <a href='https://github.com/Skues' target='_blank'>
                <img className="githubLogo" src='/pictures/githublogo.svg' />
            </a>
            <a href='mailto:alfieskues2006@gmail.com' target='_blank'>
                <img className='emailLogo' src='/pictures/emailLogo.svg' />
            </a>
            <a href='https://uk.linkedin.com/in/alfie-skues-16240329a' target='_blank'>
                <img className='linkedinLogo' src='/pictures/linkedin-app-white-icon.svg' />
            </a>
        </div >
    )
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}

export default Home
