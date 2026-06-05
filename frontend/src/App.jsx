import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
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
          </div>
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
