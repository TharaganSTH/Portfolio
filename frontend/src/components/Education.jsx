const education = [
  {
    title: "B.Eng. in Software Engineering",
    place: "Informatics Institute of Technology",
    result: "Software Engineering - Second Upper",
    date: "2021 – 2025",
  },
  {
    title: "Advanced Level",
    place: "Colombo Hindu College",
    result: "",
    date: "2012 – 2019",
  },
];

function Education() {
  return (
    <section id="education" className="section">
      <p className="section-label">Background</p>
      <h2>Education</h2>

      <div className="education-list">
        {education.map((item) => (
          <div className="education-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            {item.result && <p>{item.result}</p>}
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;