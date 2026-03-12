import React from 'react';
import './Departments.css';

const Departments = () => {
  const departments = [
    'Management Department',
    'Finance Department',
    'Audit Department',
    'Taxation Department',
    'IT Department',
    'Research Department'
  ];

  return (
    <section id="departments" className="departments">
      <div className="container">
        <h2>Our Departments</h2>
        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="department-card">
              <h3>{dept}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;