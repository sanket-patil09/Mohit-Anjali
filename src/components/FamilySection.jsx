import React from 'react';
import './FamilySection.css';

const FamilySection = ({ lang = 'en' }) => {
  const translations = {
    en: {
      groomFamilyTitle: "Groom's Family",
      brideFamilyTitle: "Bride's Family",
      fatherOfGroom: "Father of the Groom",
      motherOfGroom: "Mother of the Groom",
      sisterOfGroom: "Younger Sister",
      fatherOfBride: "Father of the Bride",
      motherOfBride: "Mother of the Bride",
      sisterOfBride: "Sister of the Bride",
      groomFatherName: "Mr. Suresh Chaudhari",
      groomMotherName: "Mrs. Manisha Chaudhari",
      groomSisterName: "Ms. Ekta Chaudhari",
      brideFatherName: "Mr. Kailas Patil",
      brideMotherName: "Mrs. Patil",
      brideSisterName: "Ms. Shirin Patil",
      sectionTitle: "Family",
      sectionSubtitle: "Our Pillars of Strength"
    },
    mr: {
      groomFamilyTitle: "वराचे कुटुंब",
      brideFamilyTitle: "वधूचे कुटुंब",
      fatherOfGroom: "वराचे वडील",
      motherOfGroom: "वराची आई",
      sisterOfGroom: "लहान बहीण",
      fatherOfBride: "वधूचे वडील",
      motherOfBride: "वधूची आई",
      sisterOfBride: "वधूची बहीण",
      groomFatherName: "श्री. सुरेश चौधरी",
      groomMotherName: "सौ. मनीषा चौधरी",
      groomSisterName: "कु. एकता चौधरी",
      brideFatherName: "श्री. कैलास पाटील",
      brideMotherName: "सौ. पाटील",
      brideSisterName: "कु. शिरीन पाटील",
      sectionTitle: "कुटुंब",
      sectionSubtitle: "आमचे आधारस्तंभ"
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <div className="family-section-container">
      <div className="section-title-wrapper">
        <span className="section-subtitle">{t.sectionSubtitle}</span>
        <h2 className="section-title">{t.sectionTitle}</h2>
      </div>

      <div className="family-cards-wrapper">
        {/* Groom's Family Card */}
        <div className="family-card-box groom-box">
          <div className="family-card-header">{t.groomFamilyTitle}</div>
          
          <div className="family-member-item">
            <h3 className="family-member-name">{t.groomFatherName}</h3>
            <p className="family-member-relation">{t.fatherOfGroom}</p>
          </div>
          
          <div className="family-member-item">
            <h3 className="family-member-name">{t.groomMotherName}</h3>
            <p className="family-member-relation">{t.motherOfGroom}</p>
          </div>
          
          <div className="family-member-item">
            <h3 className="family-member-name">{t.groomSisterName}</h3>
            <p className="family-member-relation">{t.sisterOfGroom}</p>
          </div>
        </div>

        {/* Decorative central vertical divider */}
        <div className="family-divider">
          <div className="divider-line"></div>
          <div className="divider-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="8" cy="12" r="5" stroke="var(--gold)" />
              <circle cx="16" cy="12" r="5" stroke="var(--gold)" />
            </svg>
          </div>
          <div className="divider-line"></div>
        </div>

        {/* Bride's Family Card */}
        <div className="family-card-box bride-box">
          <div className="family-card-header">{t.brideFamilyTitle}</div>
          
          <div className="family-member-item">
            <h3 className="family-member-name">{t.brideFatherName}</h3>
            <p className="family-member-relation">{t.fatherOfBride}</p>
          </div>
          
          <div className="family-member-item">
            <h3 className="family-member-name">{t.brideMotherName}</h3>
            <p className="family-member-relation">{t.motherOfBride}</p>
          </div>
          
          <div className="family-member-item">
            <h3 className="family-member-name">{t.brideSisterName}</h3>
            <p className="family-member-relation">{t.sisterOfBride}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
