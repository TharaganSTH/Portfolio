import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [activeSection, setActiveSection] = useState('header')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5})

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])


  return (
    <>

      <section id="navbar">
        <nav>
          <ul>
            <li className={`nav-link ${activeSection === 'header' ? 'active' : ''}`}><a href="#header">Home</a></li>
            <li className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}><a href="#skills">Skills</a></li>
            <li className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}><a href="#projects">Projects</a></li>
            <li className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}><a href="#contact">Contact</a></li>
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
              A passionate and enthusiastic Software Engineer with hands-on experience
              in software development through multiple industry internships. Skilled in
              React.js, JavaScript, Python, Java, API integration, and database
              management. Experienced in building web applications, IoT solutions, and
              AI-powered systems. Eager to contribute to innovative projects and grow
              as a full-stack or backend developer.
            </p>
            <div id = "resume">
              <a 
                href="/Tharagan-Sivanesathurai-Resume.pdf"
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


      {/* <section id="skills">
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
      </section> */}

      <section id="skills">
        <h2>Skills</h2>

        <div id="skills-list">
          <div className="skill">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li> 
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>

          <div className="skill">
            <h3>Frontend Technologies</h3>
            <ul>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="skill">
            <h3>Backend & Database</h3>
            <ul>
              <li>MySQL</li>
              <li>FastAPI</li>
              <li>API Development & Integration</li>
              <li>Object-Oriented Programming (OOP)</li>
            </ul>
          </div>

          <div className="skill">
            <h3>Tools</h3>
            <ul>
              <li>GitHub</li>
              <li>Version Control</li>
              <li>WordPress</li>
            </ul>
          </div>

          <div className="skill">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Quick Learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section id="projects">
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
      </section>   */}

      <section id="projects">
        <h2>Projects</h2>

        <div id="projects-list">

          <div className="project">
            <h3>Disease NER & Synonym Generalization</h3>
            <p>
              Final year project focused on improving disease Named Entity Recognition
              using BioBERT and contrastive learning. Developed a browser extension
              capable of real-time biomedical text understanding using BC5CDR and
              NCBI Disease datasets.
            </p>
          </div>

          <div className="project">
            <h3>Excel Sheet Format Converter</h3>
            <p>
              Developed a Java application for Rockland Distilleries that converts and
              standardizes Excel sheet formats. Utilized Apache POI to automate
              formatting and improve efficiency when handling large Excel files.
            </p>
          </div>

          <div className="project">
            <h3>Baby Eye Tracking System</h3>
            <p>
              Group software development project using machine learning techniques
              to monitor infant eye movements through screen-based visual stimuli
              for early vision issue detection.
            </p>
          </div>

          <div className="project">
            <h3>Raspberry Pi Sensor Data Logger</h3>
            <p>
              Built an IoT solution using Raspberry Pi Pico W and BME280 sensors
              to collect temperature, humidity, and pressure data. Logged readings
              to Google Sheets and displayed data through a local web server.
            </p>
          </div>

          <div className="project">
            <h3>Directed Graph Cycle Detection Algorithm</h3>
            <p>
              Developed a Java program to determine whether a directed graph is
              acyclic using sink elimination and custom graph data structures.
            </p>
          </div>

        </div>
      </section>

      {/* <section id="contact">  
        <h2>Contact</h2>
        <p>Email:example@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tharagan/">https://www.linkedin.com/in/tharagan/</a></p>
        <p>GitHub: <a href="https://github.com/tharagan">https://github.com/tharagan</a></p>
      </section> */}

      <section id="contact">
        <h2>Contact</h2>

        <p>
          Email:
          <a href="mailto:tharagan05@gmail.com">
            tharagan05@gmail.com
          </a>
        </p>

        <p>
          LinkedIn:
          <a
            href="https://linkedin.com/in/tharagan-sivanesathurai"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tharagan-sivanesathurai
          </a>
        </p>

        <p>
          GitHub:
          <a
            href="https://github.com/TharaganSTH"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/TharaganSTH
          </a>
        </p>

        <p>Location: Colombo, Sri Lanka</p>
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
