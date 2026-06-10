import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  return (
    <>

      <section id="navbar">
        <nav>
          <ul className='nav-link'>
            <li><a href="#header">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </section>

      <section id="header">
        <div id="intro">
          <h1>Tharagan</h1>
          <h3>Software Engineer</h3>
        </div>
        <div id="center">
          <div id="intro-text">
            <h2>Introduction</h2>
            <p>
              Apassionate and enthusiastic software engineer with hands-on internship experience in real-world software
              development. Skilled in designing, developing, and maintaining software solutions with a strong foundation in
              programming, problem-solving, and collaborative teamwork. Eagerto contribute to innovative projects, learn
              from experienced professionals, and grow as a full-stack or backend developerin a dynamic tech environment.
            </p>
            <div id = "resume">
              <a 
                href="/manual.pdf"
                download="Tharagan_Resume.pdf"
                className="download-btn"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
          </div>
        </div>
      </section>


      <section id="skills">
        <h2>Skills</h2>
        <div id="skills-list">
          <div className="skill">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Django</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>SQL & NoSQL Databases</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div id="projects-list">
          <div className="project">
            <h3>Project 1: Personal Portfolio Website</h3>
            <p>
              Developed a responsive personal portfolio website using React and CSS to showcase my skills, projects, and experience. Implemented interactive features and optimized performance for a seamless user experience.
            </p>
          </div>
          <div className="project">
            <h3>Project 2: E-commerce Platform</h3>
            <p>
              Built a full-stack e-commerce platform using Node.js, Express, and MongoDB. Implemented user authentication, product management, and a shopping cart system. Deployed the application on AWS for scalability.
            </p>
          </div>
          <div className="project">
            <h3>Project 3: Chat Application</h3>
            <p>
              Created a real-time chat application using Socket.io and React. Implemented features such as private messaging, group chats, and user presence indicators. Deployed the application on Heroku for accessibility.
            </p>
          </div>
        </div>
      </section>  

      <section id="contact">  
        <h2>Contact</h2>
        <p>Email:example@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tharagan/">https://www.linkedin.com/in/tharagan/</a></p>
        <p>GitHub: <a href="https://github.com/tharagan">https://github.com/tharagan</a></p>
      </section>

      <section id="footer"> 
        <footer id="footer-content">
          <p>&copy; 2024 Tharagan. All rights reserved.</p>
        </footer>
      </section>
    </>
  )
}

export default App
