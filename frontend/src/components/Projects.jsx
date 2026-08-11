const projects = [
  {
    title: "Disease NER & Synonym Generalization",
    subtitle: "Final Year Research Project",
    problem: "Biomedical models struggle with unseen disease synonyms.",
    solution: "Integrated BioBERT and contrastive learning into a unified model for disease NER and synonym generalization, deployed as a low-latency browser extension using the BC5CDR and NCBI Disease datasets.",
    tags: ["Python", "BioBERT", "NLP", "React"],
    links: [
      // {
      //   label: "View Code",
      //   url: "https://github.com/...",
      //   style: "primary",
      // }
    ]
  },


  {
    title: "Baby Eye Tracking System",
    subtitle: "Software Development Group Project",
    problem: "Vision-related issues in infants are hard to detect early without specialized clinical equipment.",
    solution: "Built a machine learning-based application that tracks baby eye movements using screen-based visual stimuli, aimed at early detection of vision problems.",
    tags: ["Machine Learning", "Python"],
    links: [
      // {
      //   label: "View Code",
      //   url: "https://github.com/TharaganSTH",
      //   style: "primary",
      // }
    ]
  },

  {
    title: "Raspberry Pi Sensor Data Logger",
    subtitle: "Individual IoT Project",
    problem: "Needed a way to continuously capture and visualize environmental readings without manual logging.",
    solution: "Connected a BME280 sensor to a Raspberry Pi Pico W to collect temperature, humidity, and pressure data, with Python scripts to display readings, host a local web server, and log timestamped entries to Google Sheets.",
    tags: ["Python", "IoT", "Raspberry Pi", "Google Sheets API"],
    links: [
      // {
      //   label: "View Code",
      //   url: "https://github.com/TharaganSTH",
      //   style: "primary",
      // }
    ]
  },

  {
    title: "Excel Sheet Format Converter",
    subtitle: "Individual Java Application",
    problem: "Rockland needed large Excel files manually reformatted, which was slow and error-prone.",
    solution: "Developed a Java application that converts and standardizes Excel sheet formats, automating data formatting using Apache POI to improve accuracy and reduce manual effort.",
    tags: ["Java", "Apache POI"],
    links: [
      // {
      //   label: "View Code",
      //   url: "https://github.com/TharaganSTH",
      //   style: "primary",
      // }
    ]
  },

  {
    title: "Directed Graph Cycle Detector",
    subtitle: "Algorithm Project",
    problem: "Needed a reliable way to determine whether a directed graph is acyclic.",
    solution: "Implemented a custom graph data structure and a sink elimination algorithm in Java, including input parsing and cycle detection for non-acyclic graphs.",
    tags: ["Java", "Data Structures", "Algorithms"],
    links: [
      // {
      //   label: "View Code",
      //   url: "https://github.com/TharaganSTH",
      //   style: "primary",
      // }
    ]
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
            <h4>{project.subtitle}</h4>

            <div className="project-info">
                <strong>Problem</strong>
                <p>{project.problem}</p>
            </div>

            <div className="project-info">
                <strong>Solution</strong>
                <p>{project.solution}</p>
            </div>

            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>

            <div className="project-actions">
                {project.links?.map((link) => (
                    <a
                    key={link.label}
                    href={link.url}
                    className={`project-btn ${link.style ?? "primary"}`}
                    >
                    {link.label}
                    </a>
                ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;