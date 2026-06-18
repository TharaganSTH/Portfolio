// function Navbar({ activeSection }) {
// //   const links = [
// //     { id: "header", label: "Home" },
// //     { id: "skills", label: "Skills" },
// //     { id: "projects", label: "Projects" },
// //     { id: "contact", label: "Contact" },
// //   ];
//   const links = [
//     { id: "header", label: "Home" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "experience", label: "Experience" },
//     { id: "contact", label: "Contact" },
//     ];

//   return (
//     <nav id="navbar">
//       <div className="nav-logo">T. S.</div>

//       <ul>
//         {links.map((link) => (
//           <li
//             key={link.id}
//             className={`nav-link ${activeSection === link.id ? "active" : ""}`}
//           >
//             <a href={`#${link.id}`}>{link.label}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import logo from "../assets/STH_SE_turbo_final_light.png";
function Navbar({ activeSection }) {
  const links = [
    { id: "header", label: "Home" },
    { id: "profile", label:"Profile"},
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="navbar">
      <div className="nav-logo"><img src={logo} alt="S.T.H"/></div>

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