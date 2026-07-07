import heroImg from "../assets/My pic.jpg";

function Header() {
  return (
    <section id="header">
      <div id="intro">
        <p className="section-label">Portfolio</p>
        <h3>Software Engineer</h3>
      </div>

      <div id="center">
        <div id="intro-text">
          <h1 className="intro-name">Tharagan<br />Sivanesathurai.</h1>

          <p>
            A passionate and enthusiastic Software Engineer with hands-on
            experience in software development through multiple industry
            internships. Skilled in React.js, JavaScript, Python, Java, API
            integration, and database management. Experienced in building web
            applications, IoT solutions, and AI-powered systems. Eager to
            contribute to innovative projects and grow as a full-stack or
            backend developer.
          </p>


          <div className="hero-buttons">
            <a
                href="/Tharagan-Sivanesathurai-Resume.pdf"
                download="Tharagan_Resume.pdf"
                className="download-btn"
            >
                Download Resume
            </a>
            <a href="#projects" className="secondary-btn">View Projects</a>
          </div>


        </div>

        <div className="photo-wrap">
          <span className="bracket br-tl"></span>
          <span className="bracket br-tr"></span>
          <span className="bracket br-bl"></span>
          <span className="bracket br-br"></span>

          <img src={heroImg} className="hero-img" alt="Tharagan Sivanesathurai" />
          <p>_</p>
        </div>
      </div>
    </section>
  );
}

export default Header;