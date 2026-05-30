import React, { useState } from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import CountdownTimer from './components/CountdownTimer';
import EventTimeline from './components/EventTimeline';
import VenueMap from './components/VenueMap';
import RSVPForm from './components/RSVPForm';
import { MailOpen, Heart, MessageCircle, ChevronDown } from 'lucide-react';

// Dynamic Petal falling background effect
const Petals = () => {
  const petalsCount = 20;
  const petals = Array.from({ length: petalsCount });
  return (
    <div className="petals-container">
      {petals.map((_, idx) => {
        const left = Math.random() * 100;
        const size = Math.random() * 12 + 8; // random width/height between 8px and 20px
        const delay = Math.random() * 10;
        const duration = Math.random() * 12 + 8; // duration between 8s and 20s
        const rotation = Math.random() * 360;

        return (
          <span 
            key={idx} 
            className="petal" 
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${rotation}deg)`
            }}
          />
        );
      })}
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'mr'

  const handleOpenInvitation = (selectedLang) => {
    setLang(selectedLang);
    setIsOpen(true);
    setIsPlaying(true);
    // Force viewport to top instantly so the entrance animation starts from the first page
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const translations = {
    en: {
      shloka: '|| Shree Ganeshaya Namah ||',
      title: 'Wedding Invitation',
      quote: '“Two hearts binding as one, beginning a lifetime of love and joy.”',
      coupleIntro: 'Introducing',
      coupleTitle: 'The Couple',
      groomName: 'Mohit',
      groomRole: 'Groom',
      groomBio: 'A modern gentleman with a heart of gold, ready to start this beautiful new chapter of life hand-in-hand.',
      blessings: 'With the Blessings of Our Families',
      brideName: 'Anjali',
      brideRole: 'Bride',
      brideBio: 'A graceful soul with a captivating smile, looking forward to creating lifetime memories with her partner.',
      timelineIntro: 'Ceremonies',
      timelineTitle: 'Wedding Schedule',
      venueIntro: 'Where & When',
      venueTitle: 'Event Location',
      updatesIntro: 'Stay Informed',
      updatesTitle: 'Wedding Updates',
      whatsappTitle: 'Join Our WhatsApp Group',
      whatsappDesc: 'We have created a WhatsApp group to share live announcements, timings, coordinates, and event photos. Please join the group by clicking the button below.',
      whatsappBtn: 'Join WhatsApp Group',
      footerThankYou: 'Thank you for being a part of our joy',
      footerCopyright: '© 2026 Mohit & Anjali. Crafted with love.'
    },
    mr: {
      shloka: '|| श्री गणेशाय नमः ||',
      title: 'लग्नपत्रिका',
      quote: '“दोन जीवांचे रेशीमबंध जुळताना, आयुष्यभराच्या प्रवासाची सुरुवात करताना...”',
      coupleIntro: 'वर-वधू परिचय',
      coupleTitle: 'वधू आणि वर',
      groomName: 'मोहित',
      groomRole: 'वर (नवरदेव)',
      groomBio: 'सुस्वभावी आणि हुशार तरुण, आयुष्याच्या या नवीन प्रवासाची सुरुवात करण्यास सज्ज.',
      blessings: 'आमच्या कुटुंबाच्या आशीर्वादाने',
      brideName: 'अंजली',
      brideRole: 'वधू (नवरीदेवी)',
      brideBio: 'अतिशय मनमिळावू आणि सुंदर तरुणी, तिच्या जोडीदारासोबत आयुष्यभराच्या आठवणी सजवण्यास उत्सुक.',
      timelineIntro: 'कार्यक्रम पत्रिका',
      timelineTitle: 'विवाह सोहळा',
      venueIntro: 'पत्ता आणि स्थान',
      venueTitle: 'समारंभाचे ठिकाण',
      updatesIntro: 'अद्यतने (Updates)',
      updatesTitle: 'लग्नाची अद्यतने',
      whatsappTitle: 'आमच्या व्हॉट्सॲप ग्रुपमध्ये सामील व्हा',
      whatsappDesc: 'आम्ही लग्नाचे अपडेट्स, वेळापत्रक आणि फोटो शेअर करण्यासाठी एक व्हॉट्सॲप ग्रुप तयार केला आहे. कृपया खालील बटनावर क्लिक करून सामील व्हा.',
      whatsappBtn: 'व्हॉट्सॲप ग्रुप जॉइन करा',
      footerThankYou: 'आमच्या आनंदात सहभागी झाल्याबद्दल धन्यवाद',
      footerCopyright: '© २०२६ मोहित आणि अंजली. प्रेमाने तयार केले.'
    }
  };

  const cur = translations[lang] || translations.en;

  return (
    <div className="app-container">
      {/* Cover Page / Invitation lock screen overlay */}
      <div className={`invitation-overlay ${isOpen ? 'opened' : ''}`}>
        <div className="overlay-mandala"></div>
        <div className="overlay-content">
          <div className="shree-ganesh" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <div>|| Shree Ganeshaya Namah ||</div>
            <div style={{ fontSize: '0.85em', fontWeight: '500', opacity: 0.85 }}>|| श्री गणेशाय नमः ||</div>
          </div>
          <h1 className="overlay-names" style={{ borderBottom: 'none', paddingBottom: '0' }}>MOHIT & ANJALI</h1>
          <h2 className="overlay-names-mr" style={{ fontFamily: 'Cinzel, serif', fontSize: '2rem', color: 'var(--gold)', marginBottom: '25px', borderBottom: '2px solid var(--gold)', paddingBottom: '15px' }}>मोहित आणि अंजली</h2>
          <p className="overlay-invitation-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', lineHeight: '1.4' }}>
            <span>Save the Date • 8th & 9th July 2026</span>
            <span style={{ fontSize: '0.85em', opacity: 0.85, textTransform: 'none' }}>८ & ९ जुलै २०२६</span>
          </p>
          
          <div className="overlay-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="open-invite-btn" onClick={() => handleOpenInvitation('en')}>
              <MailOpen size={18} />
              <span>English</span>
            </button>
            <button className="open-invite-btn" onClick={() => handleOpenInvitation('mr')}>
              <MailOpen size={18} />
              <span>मराठी (Marathi)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main website layout shown after opening */}
      <div className={`main-content ${isOpen ? 'visible' : ''}`}>
        {/* Animated Swaying Gold Lanterns */}
        <div className="hanging-lanterns">
          <div className="lantern-rope-container">
            <div className="lantern-rope"></div>
            <div className="lantern">
              <div className="lantern-body"></div>
            </div>
          </div>
          <div className="lantern-rope-container">
            <div className="lantern-rope"></div>
            <div className="lantern" style={{ animationDelay: '1s' }}>
              <div className="lantern-body"></div>
            </div>
          </div>
          <div className="lantern-rope-container">
            <div className="lantern-rope"></div>
            <div className="lantern" style={{ animationDelay: '0.5s' }}>
              <div className="lantern-body"></div>
            </div>
          </div>
        </div>

        {/* Dynamic Flower Petal Rain Background */}
        <Petals />

        {/* 1. HERO SECTION */}
        <section className="hero-section">
          <div className="hero-header">
            <div className="shree-ganesh" style={{ color: 'var(--maroon-light)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <div>|| Shree Ganeshaya Namah ||</div>
              {lang === 'mr' && (
                <div style={{ fontSize: '0.85em', fontWeight: '500', opacity: 0.85 }}>|| श्री गणेशाय नमः ||</div>
              )}
            </div>
            <h1 className="wedding-title" style={{ fontSize: '2.5rem', color: 'var(--maroon)' }}>{cur.title}</h1>
            <p className="invitation-quote">{cur.quote}</p>
          </div>

          <div className="hero-toon-container">
            <img 
              src="/couple_hero_toon.png" 
              alt="Mohit and Anjali Wedding Caricature" 
              className="hero-toon-image" 
            />
          </div>

          <div className="hero-footer">
            <div className="hero-date-venue" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span>8th & 9th July 2026</span>
              {lang === 'mr' && (
                <span style={{ fontSize: '0.85em', opacity: 0.85 }}>८ & ९ जुलै २०२६</span>
              )}
            </div>
            <div className="hero-place">{lang === 'mr' ? 'इन्दू बँक्वेट्स अँड लॉन्स, नाशिक' : 'Indu Banquets & Lawns, Nashik'}</div>
            
            {/* Countdown timer for July 8th, 2026, 5:00 PM (Engagement Ceremony start time) */}
            <CountdownTimer targetDate="2026-07-08T17:00:00" lang={lang} />
          </div>

          {/* Animated Scroll Down Indicator */}
          <div className="scroll-indicator">
            <span>{lang === 'mr' ? 'खाली स्क्रोल करा' : 'Scroll Down'}</span>
            <ChevronDown size={20} className="bounce-arrow" />
          </div>
        </section>

        {/* 2. THE BRIDE & GROOM STORY */}
        <section className="couple-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">{cur.coupleIntro}</span>
            <h2 className="section-title">{cur.coupleTitle}</h2>
          </div>

          <div className="couple-cards-container">
            {/* Groom Card */}
            <div className="couple-member-card">
              <img 
                src="/groom_toon.png" 
                alt="Mohit Groom Toon" 
                className="couple-toon-avatar"
              />
              <h3 className="couple-name">{cur.groomName}</h3>
              <p className="couple-role">{cur.groomRole}</p>
              <p className="couple-bio">{cur.groomBio}</p>
              <div className="parent-info">
                <span className="parent-label">{cur.blessings}</span>
              </div>
            </div>

            {/* Heart Divider Icon */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gold)', margin: '10px 0' }}>
              <Heart size={36} fill="var(--gold)" className="animate-pulse" />
            </div>

            {/* Bride Card */}
            <div className="couple-member-card">
              <img 
                src="/bride_toon.png" 
                alt="Anjali Bride Toon" 
                className="couple-toon-avatar"
              />
              <h3 className="couple-name">{cur.brideName}</h3>
              <p className="couple-role">{cur.brideRole}</p>
              <p className="couple-bio">{cur.brideBio}</p>
              <div className="parent-info">
                <span className="parent-label">{cur.blessings}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SCHEDULE / TIMELINE */}
        <section className="schedule-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">{cur.timelineIntro}</span>
            <h2 className="section-title">{cur.timelineTitle}</h2>
          </div>
          <EventTimeline lang={lang} />
        </section>

        {/* 4. VENUE MAP */}
        <section className="venue-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">{cur.venueIntro}</span>
            <h2 className="section-title">{cur.venueTitle}</h2>
          </div>
          <VenueMap lang={lang} />
        </section>

        {/* 5. WEDDING UPDATES */}
        <section className="updates-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">{cur.updatesIntro}</span>
            <h2 className="section-title">{cur.updatesTitle}</h2>
          </div>
          
          <div className="updates-card">
            <div className="updates-info">
              <h2>{cur.whatsappTitle}</h2>
              <p>{cur.whatsappDesc}</p>
              <a 
                href="https://chat.whatsapp.com/E8n9nLsQhGNHNmJE2lX0bV?mode=gi_t" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-group-btn"
              >
                <MessageCircle size={18} />
                <span>{cur.whatsappBtn}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. RSVP FORM */}
        <section className="rsvp-section section-padding">
          <RSVPForm lang={lang} />
        </section>

        {/* 6. AUDIO PLAYER */}
        <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

        {/* 7. FOOTER */}
        <footer className="wedding-footer">
          <p>{cur.footerThankYou}</p>
          <div className="footer-hashtag" style={{ color: 'var(--gold)' }}>{lang === 'mr' ? '#मोहितचीअंजली' : '#MohitKiAnjali'}</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '20px' }}>
            {cur.footerCopyright}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
