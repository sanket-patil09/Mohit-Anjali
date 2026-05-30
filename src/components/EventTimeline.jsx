import React from 'react';
import { Clock, MapPin, Shirt, Calendar } from 'lucide-react';

const EventTimeline = ({ lang = 'en' }) => {
  const translations = {
    en: {
      venue: 'Indu Banquets & Lawns, Nashik',
      themeLabel: 'Theme:',
      events: [
        {
          id: 1,
          date: 'Wednesday, 8th July 2026',
          time: '5:00 PM onwards',
          title: 'Engagement',
          theme: 'Modern Retro Style',
          iconColor: '#e056fd',
          image: '/engagement_toon.png'
        },
        {
          id: 2,
          date: 'Wednesday, 8th July 2026',
          time: '7:00 PM onwards',
          title: 'Haldi Ceremony',
          theme: 'Purple & Pink Theme',
          iconColor: '#f0932b',
          image: '/haldi_toon.png'
        },
        {
          id: 3,
          date: 'Wednesday, 8th July 2026',
          time: '9:00 PM onwards',
          title: 'Sangeet Night',
          theme: 'Modern Retro Style',
          iconColor: '#ff7979',
          image: '/sangeet_toon.png'
        },
        {
          id: 4,
          date: 'Thursday, 9th July 2026',
          time: '8:00 AM onwards',
          title: 'Vaidik Rituals',
          theme: 'Marathi / South Indian Clothing Theme',
          iconColor: '#eb4d4b',
          image: '/vaidik_toon.png'
        },
        {
          id: 5,
          date: 'Thursday, 9th July 2026',
          time: '12:30 PM',
          title: 'Mangalashtak',
          theme: 'Traditional Wedding Attire',
          iconColor: '#22a6b3',
          image: '/mangalashtak_toon.png'
        }
      ]
    },
    mr: {
      venue: 'इन्दू बँक्वेट्स अँड लॉन्स, नाशिक',
      themeLabel: 'पोशाख थीम:',
      events: [
        {
          id: 1,
          date: 'बुधवार, ८ जुलै २०२६',
          time: 'सायंकाळी ५:०० वाजल्यापासून',
          title: 'साखरपुडा (Engagement)',
          theme: 'मॉडर्न रेट्रो स्टाईल',
          iconColor: '#e056fd',
          image: '/engagement_toon.png'
        },
        {
          id: 2,
          date: 'बुधवार, ८ जुलै २०२६',
          time: 'सायंकाळी ७:०० वाजल्यापासून',
          title: 'हळदीचा कार्यक्रम (Haldi)',
          theme: 'जांभळा आणि गुलाबी थीम',
          iconColor: '#f0932b',
          image: '/haldi_toon.png'
        },
        {
          id: 3,
          date: 'बुधवार, ८ जुलै २०२६',
          time: 'रात्री ९:०० वाजल्यापासून',
          title: 'संगीत संध्या (Sangeet)',
          theme: 'मॉडर्न रेट्रो स्टाईल',
          iconColor: '#ff7979',
          image: '/sangeet_toon.png'
        },
        {
          id: 4,
          date: 'गुरुवार, ९ जुलै २०२६',
          time: 'सकाळी ८:०० वाजल्यापासून',
          title: 'वैदिक विधी (Vaidik)',
          theme: 'मराठी / साऊथ इंडियन पोषाख थीम',
          iconColor: '#eb4d4b',
          image: '/vaidik_toon.png'
        },
        {
          id: 5,
          date: 'गुरुवार, ९ जुलै २०२६',
          time: 'दुपारी १२:३० वाजता',
          title: 'मंगलाष्टक (विवाह मुहूर्त)',
          theme: 'पारंपारिक विवाह पोशाख',
          iconColor: '#22a6b3',
          image: '/mangalashtak_toon.png'
        }
      ]
    }
  };

  const currentTrans = translations[lang] || translations.en;

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      
      {currentTrans.events.map((event, idx) => (
        <div key={event.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-dot" style={{ backgroundColor: event.iconColor }}>
            <Calendar size={16} color="#fff" />
          </div>
          
          <div className="timeline-content-card">
            <div className="event-card-image-wrapper">
              <img src={event.image} alt={event.title} className="event-card-image" />
            </div>
            
            <span className="event-date-badge" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
              <span>{translations.en.events.find(e => e.id === event.id).date}</span>
              {lang === 'mr' && (
                <span style={{ fontSize: '0.85em', opacity: 0.85, fontWeight: '500', textTransform: 'none' }}>
                  {translations.mr.events.find(e => e.id === event.id).date}
                </span>
              )}
            </span>
            <h3 className="event-title">{event.title}</h3>
            
            <div className="event-detail-item">
              <Clock size={16} className="detail-icon" />
              <span>{event.time}</span>
            </div>
            
            <div className="event-detail-item">
              <MapPin size={16} className="detail-icon" />
              <span>{currentTrans.venue}</span>
            </div>
            
            <div className="event-theme-box">
              <Shirt size={16} className="theme-icon" />
              <span>{currentTrans.themeLabel} <strong>{event.theme}</strong></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
