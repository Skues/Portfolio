import Navbar from "./Navbar";

function Projects() {
    return (
        <>
            <Navbar />
            <h1>Projects Page</h1>
            <ul className="projectList">
                <li>
                    <section>Fitness App</section><p>Description</p><a href="https://github.com/Skues/link">Link</a>
                </li>
                <li>
                    <section>YourWeather</section><p>Description</p><a href="https://github.com/Skues/link">Link</a>
                </li>
                <li>
                    <section>AI Train Chatbot</section><p>Description</p><a href="https://github.com/Skues/link">Link</a>
                </li>
                <li>
                    <section>Steam Watch</section><p>Description</p><a href="https://github.com/Skues/link">Link</a>
                </li>
            </ul>
        </>
    )
}
export default Projects;
