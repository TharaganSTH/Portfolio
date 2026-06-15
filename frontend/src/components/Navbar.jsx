function Navbar({ activeSection }) {
  const links = [
    { id: "header", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="navbar">
      <div className="nav-logo">T. S.</div>

      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`nav-link ${activeSection === link.id ? "active" : ""}`}
          >
            <a href={`#${link.id}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;