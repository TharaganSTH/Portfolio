const activities = [
  {
    title: "Code Sprint",
    desc: "Participated in an IEEE Code Sprint event with the SDGP team.",
  },
  {
    title: "Stage Craft",
    desc: "Competed in an IIT Stage Craft event with a dance team.",
  },
];

function Activities() {
  return (
    <section id="activities" className="section">
      <p className="section-label">Beyond Work</p>
      <h2>Curricular Activities</h2>

      <div className="activities-list">
        {activities.map((activity) => (
          <div className="activity-card" key={activity.title}>
            <h3>{activity.title}</h3>
            <p>{activity.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;