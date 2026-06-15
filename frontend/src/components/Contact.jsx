function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">Contact</p>
      <h2>Get In Touch</h2>

      <div className="contact-box">
        <p>
          Email: <a href="mailto:tharagan05@gmail.com">tharagan05@gmail.com</a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/tharagan-sivanesathurai"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tharagan-sivanesathurai
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/TharaganSTH"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/TharaganSTH
          </a>
        </p>

        <p>Location: Colombo, Sri Lanka</p>
      </div>
    </section>
  );
}

export default Contact;