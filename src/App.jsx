import React, { useState } from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import CountdownTimer from './components/CountdownTimer';
import EventTimeline from './components/EventTimeline';
import VenueMap from './components/VenueMap';
import RSVPForm from './components/RSVPForm';
import { MailOpen, Heart, MessageCircle } from 'lucide-react';

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

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    // Force viewport to top instantly so the entrance animation starts from the first page
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="app-container">
      {/* Cover Page / Invitation lock screen overlay */}
      <div className={`invitation-overlay ${isOpen ? 'opened' : ''}`}>
        <div className="overlay-mandala"></div>
        <div className="overlay-content">
          <div className="shree-ganesh">|| Shree Ganeshaya Namah ||</div>
          <h1 className="overlay-names">MOHIT & ANJALI</h1>
          <p className="overlay-invitation-text">Save the Date • 8th & 9th July 2026</p>
          <button className="open-invite-btn" onClick={handleOpenInvitation}>
            <MailOpen size={20} />
            <span>Open Invitation</span>
          </button>
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
            <div className="shree-ganesh" style={{ color: 'var(--maroon-light)' }}>|| Shree Ganeshaya Namah ||</div>
            <h1 className="wedding-title" style={{ fontSize: '2.5rem', color: 'var(--maroon)' }}>Wedding Invitation</h1>
            <p className="invitation-quote">“Two hearts binding as one, beginning a lifetime of love and joy.”</p>
          </div>

          <div className="hero-toon-container">
            <img 
              src="/couple_hero_toon.png" 
              alt="Mohit and Anjali Wedding Caricature" 
              className="hero-toon-image" 
            />
          </div>

          <div className="hero-footer">
            <div className="hero-date-venue">8th & 9th July 2026</div>
            <div className="hero-place">Indu Banquets & Lawns, Nashik</div>
            
            {/* Countdown timer for July 8th, 2026, 5:00 PM (Engagement Ceremony start time) */}
            <CountdownTimer targetDate="2026-07-08T17:00:00" />
          </div>
        </section>

        {/* 2. THE BRIDE & GROOM STORY */}
        <section className="couple-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Introducing</span>
            <h2 className="section-title">The Couple</h2>
          </div>

          <div className="couple-cards-container">
            {/* Groom Card */}
            <div className="couple-member-card">
              <img 
                src="/groom_toon.png" 
                alt="Mohit Groom Toon" 
                className="couple-toon-avatar"
              />
              <h3 className="couple-name">Mohit</h3>
              <p className="couple-role">Groom</p>
              <p className="couple-bio">
                A modern gentleman with a heart of gold, ready to start this beautiful new chapter of life hand-in-hand.
              </p>
              <div className="parent-info">
                <span className="parent-label">With the Blessings of Our Families</span>
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
              <h3 className="couple-name">Anjali</h3>
              <p className="couple-role">Bride</p>
              <p className="couple-bio">
                A graceful soul with a captivating smile, looking forward to creating lifetime memories with her partner.
              </p>
              <div className="parent-info">
                <span className="parent-label">With the Blessings of Our Families</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SCHEDULE / TIMELINE */}
        <section className="schedule-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Ceremonies</span>
            <h2 className="section-title">Wedding Schedule</h2>
          </div>
          <EventTimeline />
        </section>

        {/* 4. VENUE MAP */}
        <section className="venue-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Where & When</span>
            <h2 className="section-title">Event Location</h2>
          </div>
          <VenueMap />
        </section>

        {/* 5. WEDDING UPDATES */}
        <section className="updates-section section-padding">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Stay Informed</span>
            <h2 className="section-title">Wedding Updates</h2>
          </div>
          
          <div className="updates-card">
            <div className="updates-info">
              <h2>Join Our WhatsApp Group</h2>
              <p>
                We have created a WhatsApp group to share live announcements, timings, coordinates, and event photos. 
                Please join the group by clicking the button below.
              </p>
              <a 
                href="https://chat.whatsapp.com/E8n9nLsQhGNHNmJE2lX0bV?mode=gi_t" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-group-btn"
              >
                <MessageCircle size={18} />
                <span>Join WhatsApp Group</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. RSVP FORM */}
        <section className="rsvp-section section-padding">
          <RSVPForm />
        </section>

        {/* 6. AUDIO PLAYER */}
        <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

        {/* 7. FOOTER */}
        <footer className="wedding-footer">
          <p>Thank you for being a part of our joy</p>
          <div className="footer-hashtag" style={{ color: 'var(--gold)' }}>#MohitKiAnjali</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '20px' }}>
            © 2026 Mohit & Anjali. Crafted with love.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
