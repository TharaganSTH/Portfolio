function CareerProfile() {
  return (
    <section id="profile" className="section">
      <p className="section-label">Career Profile</p>

      <h2>Building reliable software with continuous learning.</h2>

      <div className="profile-grid">

        <div className="profile-card">
          <h3>Who I Am</h3>

          <p>
            Software Engineering graduate with internship experience in web
            development and business software.
            I enjoy solving real-world problems through clean, maintainable
            software.
          </p>
        </div>

        <div className="profile-card">
          <h3>Specialization</h3>

          <p>
            Currently focused on Full-Stack Development while continuously expanding 
            my knowledge in Internet of Things (IoT), Machine Learning (ML), and cloud technologies.
          </p>
        </div>

        <div className="profile-card">
          <h3>Career Goal</h3>

          <p>
            Seeking an opportunity to contribute to a collaborative engineering
            team where I can continue learning while delivering software that
            creates measurable business value.
          </p>
        </div>

      </div>
    </section>
  );
}

export default CareerProfile;