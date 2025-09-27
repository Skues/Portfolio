import './App.css'
import "./Navbar.css"
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

function Home() {

    return (
        <>
            <div>
                <Navbar />
                <ScrollTracker />
                <AboutMe />
                <ProjectsPreview />
                <Todos />
                <Connect />
                <button className="topButton" onClick={topFunction}>↑</button>
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
        <div className='aboutDiv' id='aboutAnchor'>
            <div className='mainSection'>
                <div className='nameSection'>
                    <h1 className='home'>Alfie Skues</h1>
                    {/* <p>icon United Kingdom</p> */}
                    <p>I'm a full-stack developer specialising in building backend systems. As a recent First Class Computer Science graduate from the University of East Anglia, I have hands-on experience building high quality applications from the ground up.</p>
                    <p>I enjoy solving my own problems with code and constantly learning new tools, languages and techniques. Outside of programming, I go to the gym and play video games (ex top 100 Brawlhalla).</p>
                </div>
                <div className='imageHover'></div>
                {/* // Credit to my beautiful girlfriend for drawing this */}
            </div>
        </div>
    )
}
function ProjectsPreview() {
    let [viewMore, setViewMore] = useState(false);
    return (
        <div className='projectDiv'>
            {/* <ProjectModal /> */}
            <h1 id='projectAnchor'>Projects</h1>
            <p>Here are my some of my projects that I have worked on for the past few months. </p>
            <ul className='projectList'>
                <li className='individualProject'>
                    <h2>Progressive</h2>
                    <p>Full stack mobile fitness progression to track workouts, visualise progress, and predict future performance using machine learning.</ p>
                    <ul>
                        <li>Built using <b>React</b> <b>Native</b> for compatible front end</li>
                        <li>Developed a <b>RESTful</b> API using <b>Flask</b> to handle endpoints and data transfer.</ li>
                        <li><b>Python's pandas</b>, <b>scikit-learn</b> and <b>numPy</b> were all used for creating the model and synthetic data (more info on the GitHub README)</li>
                        <li><b>SQLAlchemy</b> database.</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/Progressive' target='_blank'>View on GitHub</a>
                </li>
                <li className='individualProject'>
                    <h2>YourWeather</h2>
                    <p>Web application that uses real-time weather data to provide advice targetted at getting better sleep, based on user preferences. </p>
                    <ul>
                        <li>Retrieves detailed weather data from a public API.</li>
                        <li>Analyses conditions during the user's sleep hours and provides advice.</li>
                        <li>Backend built using <b>Python Flask</b>.</li>
                        <li>Frontend developed with <b>HTML</ b> and <b>CSS</ b>.</li>
                        <li>Integrated with a <b>MySQL</b > database to store and retrieve user preferences.</li>
                        <li>Hosted on <b>Docker</b>.</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/YourWeather' target='_blank'>View on GitHub</a>
                </li>
                <li className='individualProject'>
                    <h2>AI Train Chatbot</h2>
                    <p>Led a successful university group project to build an AI chatbot for a UK train operating company.</p>
                    <ul><li>The two main aims were:</li>
                        <ul>
                            <li>Help customers find the cheapest available ticket for their journey.</li>
                            <li>Estimating delays using a machine learning model trained on 3 years of historical data.</li>
                        </ul>
                        <li>Developed both frontend and backend with <b>Python</b>.</li>
                        <li>Used <b>spaCy</b> for <b>NLP</b> with a custom spaCy model to recognise train stations.</li>
                        <li><b>Selenium</b> was used to scrape real-time train station data.</li>
                        <li>Built and trained the delay prediction model using <b>Pandas</b> and <b>scikit-learn</b>.</li>
                        <li>Planned and led the project to a high standard.</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/AI-Train-Chatbot' target='_blank'>View on GitHub</a>
                </li>
                <li className='individualProject'>
                    <h2>Steam Watch</h2>
                    <p>For fun backend project used to track my friends playtime on Steam and to, eventually, visually rank it on most time wasted.</p>
                    <ul>
                        <li>Gathers friend list data using a SteamID.</li>
                        <li>Identifies most played games:</li>
                        <ul><li>Within the last 2 weeks</li>
                            <li>Overall</li>
                        </ul>
                        <li>Ranked on the most time played and displays the top games.</li>
                        <li>Build in Go using SteamAPI.</li>
                    </ul>
                    <br />
                    <a className="linkButton" href='https://github.com/Skues/steam-watch' target='_blank'>View on GitHub</a>
                </li>
            </ul>

            <button onClick={viewMoreProjects} className='moreProjectsBtn'>
                <span>{viewMore ? "View Less Projects" : "View More Projects"}</span>
                <img src="/pictures/folder.png" className='folderIcon'></img>
            </button>

            {viewMore && (
                <ExtraProjects />
            )}
        </div >
    )
    function viewMoreProjects() {
        setViewMore(!viewMore)
    }
    function ExtraProjects() {
        return (
            <>
                <ul className='extraProjects'>
                    <li>
                        <h3>Router Scraper</h3><p>Cross-platform CLI Tool that gathers information about a network including default IP and network frequencies. </p>
                        <p>Technologies used: Python, ctypes</p> <a href="https://github.com/Skues/RouterScraper" target='_blank'>Link</a>
                    </li>
                    <li>
                        <h3>Blackjack Simulation</h3><p>Simulation project with the goal of finding the best gameplay, card counting, and betting strategy within 10000 games of Blackjack. Wrote a 40 page report on the design, execution and evaluation of the project.</p>
                        <p>Technologies used: Python, Matplotlib, numPy, LaTeX </p><a href="https://github.com/Skues/Blackjack-Project" target='_blank'>Link</a>
                    </li>
                    <li>
                        <h3>Ashen</h3><p>Stealth game made in Unity focused on AI senses locating the player and pathfinding towards them.</p>
                        <p>Technologies used: C#, Unity</p>
                        <a href="https://github.com/Skues/Ashen-Stealth-Game" target='_blank'>Link</a>
                    </li>
                    <li>
                        <h3>SSH Remote</h3><p>Python program that uses SSH to control a system and become a remote control.</p>
                        <p>Technologies used: Python, SSH, wtype</p>
                        <a href="https://github.com/Skues/ssh-remote" target='_blank'>Link</a>

                    </li>
                    <li>
                        <h3>Portfolio website</h3><p>I built my portfolio website using React, Typescript and CSS. This website is currently a work in progress and is constantly being improved.</p>
                        <p>Technologies used: React, CSS, Typescript</p>
                        <a href="https://github.com/Skues/Portfolio" target='_blank'>Link</a>

                    </li>
                    {/* <li> */}
                    {/*     <h3>.config</h3><p>Personal Linux files.</p> */}
                    {/*     <p>Technologies used: Arch, btw</p> */}
                    {/*     <a href="https://github.com/Skues/.config">Link</a> */}
                    {/**/}
                    {/* </li> */}
                    <p>(some links may not work as they are currently private repos)</p>

                </ul>
            </>
        )
    }
}

function Todos() {
    return (
        <div id='todoDiv' className='todoDiv'>
            <h1 id='todoAnchor'>Work In Progress</h1>

            <ul className='todoList'>
                <li className='todoItem'>Building an Interpreter in Go for the Lox programming language</li>
                <li className='todoItem'>Refining and adding more features to Progressive</li>
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

function ScrollTracker() {
    const [activeSection, setActiveSection] = useState("aboutAnchor")
    const sections = ["aboutAnchor", "projectAnchor", "todoAnchor", "connectAnchor"]
    useEffect(() => {
        const handleScroll = () => {
            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="scrollTracker">
            {sections.map(id => (
                <div
                    key={id}
                    className={`scrollCheckpoint ${activeSection === id ? 'active' : ''}`}
                    onClick={() => scrollToSection(id)}
                />
            ))}
        </div>
    );
}

export default Home
