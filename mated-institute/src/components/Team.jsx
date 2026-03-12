import React from 'react';
import './Team.css';

const Team = () => {
  const team = [
    {
      name: "Tewodros Endale",
      position: "Chief Executive Officer",
      expertise: "Strategic Management, IFRS, Organizational Development",
      experience: "20+ years in consulting"
    },
    {
      name: "Wogayehu W/yesus",
      position: "Deputy CEO",
      expertise: "Financial Management, Auditing, Training",
      experience: "18+ years in finance"
    },
    {
      name: "Dr. Alemayehu Geda",
      position: "Senior Consultant",
      expertise: "Economics, Research, Policy Analysis",
      experience: "25+ years in academia"
    },
    {
      name: "Tigist Haile",
      position: "Training Director",
      expertise: "IFRS, IPSAS, Professional Development",
      experience: "15+ years in training"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <h2>Our Leadership Team</h2>
        <p className="section-subtitle">
          A dedicated team of professionals specializing in different areas
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <div className="image-placeholder-small">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-expertise">{member.expertise}</p>
              <p className="team-experience">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;