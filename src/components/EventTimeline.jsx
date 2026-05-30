import React from 'react';
import { Clock, MapPin, Shirt, Calendar } from 'lucide-react';

const events = [
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
];

const EventTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      
      {events.map((event, idx) => (
        <div key={event.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-dot" style={{ backgroundColor: event.iconColor }}>
            <Calendar size={16} color="#fff" />
          </div>
          
          <div className="timeline-content-card">
            <div className="event-card-image-wrapper">
              <img src={event.image} alt={event.title} className="event-card-image" />
            </div>
            
            <span className="event-date-badge">{event.date}</span>
            <h3 className="event-title">{event.title}</h3>
            
            <div className="event-detail-item">
              <Clock size={16} className="detail-icon" />
              <span>{event.time}</span>
            </div>
            
            <div className="event-detail-item">
              <MapPin size={16} className="detail-icon" />
              <span>Indu Banquets & Lawns, Nashik</span>
            </div>
            
            <div className="event-theme-box">
              <Shirt size={16} className="theme-icon" />
              <span>Theme: <strong>{event.theme}</strong></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
