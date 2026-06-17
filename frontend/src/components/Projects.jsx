const projects = [
  {
    title: "Disease NER & Synonym Generalization",
    subtitle: "Final Year Research Project",
    problem: "Biomedical models struggle with unseen disease synonyms.",
    solution: "Developed an end-to-end BioBERT system with synonym generalization and browser extension.",
    tags: ["Python", "BioBERT", "NLP", "React"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/...",
        style: "primary",
      },
      {
        label: "Live Demo",
        url: "https://...",
        style: "primary",
      }
    ]
  },
  {
    title: "Disease NER & Synonym Generalization",
    subtitle: "Final Year Research Project",
    problem: "Biomedical models struggle with unseen disease synonyms.",
    solution: "Developed an end-to-end BioBERT system with synonym generalization and browser extension.",
    tags: ["Python", "BioBERT", "NLP", "React"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/...",
        style: "primary",
      },
      {
        label: "Live Demo",
        url: "https://...",
        style: "primary",
      }
    ]
  },
  {
    title: "Disease NER & Synonym Generalization",
    subtitle: "Final Year Research Project",
    problem: "Biomedical models struggle with unseen disease synonyms.",
    solution: "Developed an end-to-end BioBERT system with synonym generalization and browser extension.",
    tags: ["Python", "BioBERT", "NLP", "React"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/...",
        style: "secondary",
      },
      {
        label: "Live Demo",
        url: "https://...",
        style: "primary",
      }
    ]
  },
  {
    title: "Disease NER & Synonym Generalization",
    subtitle: "Final Year Research Project",
    problem: "Biomedical models struggle with unseen disease synonyms.",
    solution: "Developed an end-to-end BioBERT system with synonym generalization and browser extension.",
    tags: ["Python", "BioBERT", "NLP", "React"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/...",
        style: "primary",
      },
      {
        label: "Live Demo",
        url: "https://...",
        style: "primary",
      }
    ]
  },
  {
    title: "Disease NER & Synonym Gralization",
    subtitle: "Final Year Research Project",
    problem: "Biomedical models struggle with unseen disease synonyms.",
    solution: "Developed an end-to-end BioBERT system with synonym generalization and browser extension.",
    tags: ["Python", "BioBERT", "NLP", "React"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/...",
        style: "primary",
      },
      {
        label: "Live Demo",
        url: "https://...",
        style: "primary",
      },
      {
        label: "Documentation",
        url: "https://...",
        style: "secondary",
      },
      {
        label: "More description",
        url: "https://...",
        style: "primary",
      },
      {
        label: "this is for the test of the button",
        url: "https://...",
        style: "secondary",
      },
      {
        label: "this is for the test of the button",
        url: "https://...",
        style: "primary",
      }
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