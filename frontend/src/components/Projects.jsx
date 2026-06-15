const projects = [
  {
    title: "Disease NER & Synonym Generalization",
    desc: "Final year project focused on improving disease Named Entity Recognition using BioBERT and contrastive learning. Developed a browser extension capable of real-time biomedical text understanding.",
  },
  {
    title: "Excel Sheet Format Converter",
    desc: "Developed a Java application for Rockland Distilleries that converts and standardizes Excel sheet formats using Apache POI.",
  },
  {
    title: "Baby Eye Tracking System",
    desc: "Group software development project using machine learning techniques to monitor infant eye movements for early vision issue detection.",
  },
  {
    title: "Raspberry Pi Sensor Data Logger",
    desc: "Built an IoT solution using Raspberry Pi Pico W and BME280 sensors to collect temperature, humidity, and pressure data.",
  },
  {
    title: "Directed Graph Cycle Detection Algorithm",
    desc: "Developed a Java program to determine whether a directed graph is acyclic using sink elimination and custom graph data structures.",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">Selected Work</p>
      <h2>Projects</h2>

      <div id="projects-list">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;