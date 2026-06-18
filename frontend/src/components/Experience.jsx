const experiences = [
  {
    role: "Software Engineer Intern",
    company: "BrickBloc Developments (Pvt) Ltd",
    date: "Jan 2024 – Nov 2024",
    points: [
      "Developed and maintained internal web application features using React.",
      "Assisted with FastAPI integration and basic server-side operations.",
      "Implemented frontend-backend data integration and validation.",
      "Used GitHub for version control and team collaboration.",
      "Supported testing, bug fixing, and deployment preparation.",
    ],
    tags: ["React", "FastAPI", "GitHub", "Testing"]
  },
  {
    role: "Implant Trainee",
    company: "Rockland Distilleries (Pvt) Ltd",
    date: "July 2023 – Jan 2024",
    points: [
      "Prepared daily, weekly, and monthly reports using Excel and Google Sheets.",
      "Identified and corrected data inconsistencies using validation and MySQL queries.",
      "Maintained technical documentation using Microsoft Word.",
      "Managed version-controlled documentation and queries using GitHub.",
    ],
    tags: ["React", "FastAPI", "GitHub", "Testing"]
  },
  {
    role: "Fullstack Developer",
    company: "AccuTech (Pvt) Ltd",
    date: "Nov 2025 – Apr 2026",
    points: [
      "Developed and maintained a tour agency website using WordPress.",
      "Modified websites according to client feedback.",
      "Worked on e-commerce features using WooCommerce.",
      "Created website reports and project plans for clients.",
    ],
    tags: ["React", "FastAPI", "GitHub", "Testing"]
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Career</p>
      <h2>Professional Experience</h2>

      <div className="timeline-list">
        {experiences.map((exp) => (
          <div className="timeline-card" key={exp.role}>
            <div className="timeline-top">
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
              </div>
              <span>{exp.date}</span>
            </div>

            <ul>
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="experience-tags">
            {exp.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;