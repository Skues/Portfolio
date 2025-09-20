import { useState } from 'react'
import './App.css'
import "./Navbar.css"

function App() {

    return (
        <>
            <div>
                <Navbar />
                <AboutMe />
                <Projects />
                <Todos />
                <Connect />
            </div>
        </>
    )
}
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <p>AWSkues</p>
            </div>
            <div className='navbar-right'>
                <ul className='navbar-links'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li><a href='#projectAnchor'>Projects</a></li>
                    <li><a href='#todoAnchor'>Todos</a></li>
                    <li><a href='#connectAnchor'>Connect</a></li>
                </ul>

            </div>
        </nav>

    )
}
function AboutMe() {
    return (
        <>
            <h1 className='home'>Alfie Skues</h1>
            <p>icon United Kingdom</p>
            <p> click to see photo of me and it shows coraline dad</p>
            <p>I am a 21 year old CS graduate from the University of East Anglia.
                I specialise in backend development whilst also having experience developing full stack applications (proof in the projects).<br /> Write what you enjoy doing, why you enjoy programming, type of things you made, what do you do in your free time</p>
        </>
    )
}
function Projects() {
    return (
        <>

            <p>Could have a see more button at the bottom of the project list that shows all the projects including the side projects so I only have to show a few here</p>
            <h1 id='projectAnchor'>Projects</h1>
            <ul className='projectList'>
                <li className='individualProject'>
                    <h2>Full Stack Fitness App</h2>
                    <p>Project info</p>
                    <a href='github.com/Skues/project'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>AI Train Chatbot</h2>
                    <p>Project info</p>
                    <a href='github.com/Skues/project'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>YourWeather (change name)</h2>
                    <p>Project info</p>
                    <a href='github.com/Skues/project'>Link</a>
                </li>
                <li className='individualProject'>
                    <h2>Steam Watch</h2>
                    <p>Project info</p>
                    <a href='github.com/Skues/project'>Link</a>
                </li>
            </ul>
            <h4 className='sideProject'>Side Projects</h4>
            <ul className='sideProjectList'>
                <li>SSH Remote</li>
                <li>Router Scraper</li>
            </ul>
        </>
    )
}
function Todos() {
    return (
        <>
            <h1 id='todoAnchor'>My todo list:</h1>

            <ul className='todoList'>
                <li className='todoItem'>Interpreter in Go</li>
                <li className='todoItem'></li>
                <li className='todoItem'></li>
            </ul>
        </>
    )
}

function Connect() {
    return (
        <>
            <h2 id='connectAnchor'>Connect</h2>
            <p>Feel free to connect or contact me!</p>
            <a href='mailto:alfieskues2006@gmail.com'>Email</a>
            <a href='https://www.github.com/Skues'>GitHub</a>
            <a href='https://uk.linkedin.com/in/alfie-skues-16240329a'>LinkedIn</a>
        </>
    )
}


export default App
