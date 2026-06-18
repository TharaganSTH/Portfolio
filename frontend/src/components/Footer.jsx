// function Footer() {
//   return (
//     <footer id="footer">
//       <p>&copy; 2025 Tharagan Sivanesathurai. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p className="footer-label">Available for opportunities</p>

        <h2>Let&apos;s build something meaningful.</h2>

        <div className="footer-links">
          <a href="mailto:tharagan05@gmail.com">Email</a>
          <a
            href="https://linkedin.com/in/tharagan-sivanesathurai"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TharaganSTH"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="footer-copy">
          &copy; 2025 Tharagan Sivanesathurai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;