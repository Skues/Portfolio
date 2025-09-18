import { useState } from 'react'
import './App.css'

function App() {

    return (
        <>
            <div>
                <h1> Hello </h1>
                <p> testing test ttsetinstisntinteststs</p>
                <Name_contact />
                <hr />
                <About />
                <hr />
                <Skills_experience />
                <hr />
            </div>
        </>
    )
}

function Name_contact() {
    return (
        <>
            <div>
                <p style={{ fontWeight: "bold" }}>Alfie Skues</p>
                <p>Aspiring FAANG Software Engineer</p>
                <p>gmail@gmail.com 07654321234</p>
            </div>
        </>
    )
}


function About() {
    return (
        <>

            <p style={{ fontWeight: "bold" }}> About me </p>
            <p> Very skilled and high initiative . Seeking an easy and top 1% paying job within the next 2 weeks. <br />
                I am qualified almost everywhere and have done lots of things throughout my life<br />
                Highly motivated to utilise all my skills and technologies.

            </p>
        </>
    )
}

function Skills_experience() {
    return (
        <>
            <p style={{ fontWeight: "bold" }}>Skills </p>
            <ul>
                <li>Proficient programming (Scratch)</li>
                <li>Installed Windows</li>
                <li>Microsoft Office </li>
                <li>Lots of forms of communication including<br /> talking, writing, typing and more!</li>
            </ul>
            <hr />
            <p style={{ fontWeight: "bold" }}>Experience </p>

        </>
    )
}
export default App
