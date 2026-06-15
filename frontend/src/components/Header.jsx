import heroImg from "../assets/hero.png";

function Header() {
  return (
    <section id="header">
      <div id="intro">
        <p className="section-label">Portfolio — 2025</p>
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

          <a
            href="/Tharagan-Sivanesathurai-Resume.pdf"
            download="Tharagan_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="photo-wrap">
          <span className="bracket br-tl"></span>
          <span className="bracket br-tr"></span>
          <span className="bracket br-bl"></span>
          <span className="bracket br-br"></span>

          <img src={heroImg} className="hero-img" alt="Tharagan Sivanesathurai" />
        </div>
      </div>
    </section>
  );
}

export default Header;