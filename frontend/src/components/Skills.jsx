const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Python", "Java", "C++"],
  },
  {
    title: "Frontend Technologies",
    items: ["React.js", "HTML", "CSS"],
  },
  {
    title: "Backend & Database",
    items: ["MySQL", "FastAPI", "API Development", "OOP"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Version Control", "WordPress"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Problem Solving", "Teamwork", "Quick Learning"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">Expertise</p>
      <h2>Skills</h2>

      <div id="skills-list">
        {skills.map((skill) => (
          <div className="skill" key={skill.title}>
            <h3>{skill.title}</h3>

            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;