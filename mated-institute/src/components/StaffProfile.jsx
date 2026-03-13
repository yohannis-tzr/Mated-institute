import React, { useState } from 'react';
import './StaffProfile.css';
import staffPhoto from '../photos/staff.webp';
import tewodrosPhoto from '../photos/tewodros.webp';
import malePhoto from '../photos/male-mated.png';
import femalePhoto from '../photos/female-mated.png';

const staffProfiles = [
  {
    id: 1,
    name: 'Tewodros Endale',
    role: 'Team Leader, Senior Consultant & Trainer',
    photo: tewodrosPhoto,
    qualifications: 'MSc & B.A in Accounting & Finance, ACCA Scholar, CPA, Management Consultant, Certified in (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '+251 94 191 4141',
    email: 'tewodros@matedinstitute.com'
  },
  {
    id: 2,
    name: 'Assefaw Nigussie',
    role: 'Senior Accountant & Training Coordinator',
    photo: malePhoto,
    qualifications: 'BA Degree in Accounting and Finance',
    phone: '',
    email: ''
  },
  {
    id: 3,
    name: 'Fikre Menta',
    role: 'Senior Consultant & Trainer',
    photo: malePhoto,
    qualifications: 'MSc & B.A in Accounting & Finance, ACCA member, FCCA (Fellow), Dip IFRS, Certified in (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '',
    email: ''
  },
  {
    id: 4,
    name: 'Alemgena Zerihun Nedi',
    role: 'Senior Consultant & Trainer',
    photo: femalePhoto,
    qualifications: 'BA Degree in Accounting, ACCA Scholar, Certified in (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '',
    email: ''
  },
  {
    id: 5,
    name: 'Bisrat Eshetu',
    role: 'IVS Senior Consultant & Trainer',
    photo: malePhoto,
    qualifications: 'MBA, BSc in Agricultural Engineering, Certified in (Asset Valuation Training, IFRS, IFRS for SMEs, IPSAS)',
    phone: '',
    email: ''
  },
  {
    id: 6,
    name: 'Kifle Woldemariam',
    role: 'Senior Consultant & Trainer',
    photo: malePhoto,
    qualifications: '',
    phone: '',
    email: ''
  },
  {
    id: 7,
    name: 'Wogayehu W/yesus',
    role: 'Senior Consultant & Trainer',
    photo: femalePhoto,
    qualifications: 'MSc & B.A in Accounting & Finance, ACCA Scholar, Certified in (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '',
    email: ''
  },
  {
    id: 8,
    name: 'Tesfamichael Fentaw Demissie',
    role: 'Senior Consultant & Trainer',
    photo: malePhoto,
    qualifications: 'Master of Business Administration (MBA), Bachelor of Arts (BA) Degree in Accounting, ACCA member, Dip IFRS, Certified in (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '',
    email: ''
  },
  {
    id: 9,
    name: 'Bezuwork Mamo',
    role: 'Senior Consultant & Trainer',
    photo: femalePhoto,
    qualifications: 'Masters of Business Administration (MBA) in Accounting and Finance, BA in Accounting, ACCA – professional level, Certified in (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '',
    email: ''
  },
  {
    id: 10,
    name: 'Eisa Addisu Ali',
    role: 'IVS Senior Consultant & Trainer',
    photo: femalePhoto,
    qualifications: 'BSc in Civil Engineering, Certified in (Asset Valuation Training, IFRS, IFRS for SMEs, IPSAS)',
    phone: '',
    email: ''
  },
  {
    id: 11,
    name: 'Martha Girma',
    role: 'Office Assistant, Consultant & Trainer',
    photo: femalePhoto,
    qualifications: 'B.A in Accounting & Finance, ACCA Scholar, CPA, TOT (IFRS, IFRS for SMEs, IPSAS, Asset Valuation)',
    phone: '',
    email: ''
  }
];

const credentials = [
  'International IFRS Diploma Certified: Association of Chartered Certified Accountants (ACCA), UK',
  'IFRS Training of Trainers Certified: Accounting and Auditing Board of Ethiopia (AABE)',
  'IFRS for SMEs Training of Trainers Certified: Association of Chartered Certified Accountants (ACCA), UK',
  'ACCA Associates, IFRS Dip, et',
  'ACCA scholar: Association of Chartered Certified Accountants (ACCA), UK',
  'Consultant, Trainer, Lecturer and Industrial Accountant: Multinational Organizations and Ethiopian Universities over 19 years',
  'PhD, MSc and BA in Accounting and Finance, Management, Leadership, Investment and other Ethiopian Universities & Abroad',
];

const StaffProfile = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleStaffClick = (staff) => {
    setSelectedStaff(staff);
  };

  const closeModal = () => {
    setSelectedStaff(null);
  };
  return (
    <main className="staff-profile">
      <section className="staff-hero">
        <div className="staff-hero-overlay" />
        <div className="staff-hero-content">
          <h1>Our Staff Profile</h1>
          <p>Meet our consultants.</p>
        </div>
      </section>

      <section className="staff-details">
        <div className="container">
          <div className="staff-photo-section">
            <img src={staffPhoto} alt="Our Staff" className="main-staff-photo" />
          </div>
          
          <div className="profile-content">
            <div className="profile-intro">
              <h2>Our Staff Profile</h2>
              <p>
                The institute's staff is composed of professionals in various fields of experience to support
                the operation on consultancy and trainings required by our prospective customers. They have a team
                spirit of professional and most of them have strong credentials in Asset Valuation, IFRS for SMEs,
                IFRS implementation on various industries at different senior level professional experts.
              </p>
            </div>

            <div className="credentials">
              <h3>Delivering Value</h3>
              <ul>
                {credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="team-grid">
            <h3>Meet Professional Team Members</h3>
            <div className="avatars">
              {staffProfiles.map((member) => (
                <div key={member.id} className="avatar" onClick={() => handleStaffClick(member)}>
                  <div className="avatar-header">
                    <i className="fas fa-user-tie avatar-icon"></i>
                    <img src={member.photo} alt={member.name} className="avatar-img" />
                  </div>
                  <div className="avatar-name">{member.name}</div>
                  <div className="avatar-role">
                    <i className="fas fa-briefcase role-icon"></i>
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedStaff && (
        <div className="staff-modal-overlay" onClick={closeModal}>
          <div className="staff-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-content">
              <div className="modal-header">
                <img src={selectedStaff.photo} alt={selectedStaff.name} className="modal-photo" />
                <div className="modal-info">
                  <h2>{selectedStaff.name}</h2>
                  <p className="modal-role">{selectedStaff.role}</p>
                </div>
              </div>
              <div className="modal-details">
                {selectedStaff.qualifications && (
                  <div className="modal-section">
                    <h3>Qualifications</h3>
                    <p>{selectedStaff.qualifications}</p>
                  </div>
                )}
                {(selectedStaff.phone || selectedStaff.email) && (
                  <div className="modal-section">
                    <h3>Contact Information</h3>
                    {selectedStaff.phone && <p><strong>Phone:</strong> {selectedStaff.phone}</p>}
                    {selectedStaff.email && <p><strong>Email:</strong> <a href={`mailto:${selectedStaff.email}`}>{selectedStaff.email}</a></p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default StaffProfile;
