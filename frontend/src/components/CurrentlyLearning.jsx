function CurrentlyLearning() {
  const learning = [
    "React Fundamentals",
    "JavaScript Deepening",
    "Backend APIs",
    "SQL & Databases",
    "Clean Code",
    "Software Engineering Best Practices",
  ];

  return (
    <section id="learning" className="section learning-section">
      <p className="section-label">Current Focus</p>
      <h2>Currently Learning</h2>

      <div className="learning-list">
        {learning.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default CurrentlyLearning;