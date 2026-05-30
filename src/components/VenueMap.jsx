import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

const VenueMap = () => {
  const directionsUrl = "https://www.google.com/maps/place/INDU+BANQUETS+%26+LAWNS/@20.0028277,73.8288029,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddea8869cce46b:0x225ec7d965b4cb4a!8m2!3d20.0028277!4d73.8288029!16s%2Fg%2F11b6t7h1cx";

  return (
    <div className="venue-card">
      <div className="venue-info">
        <h2>The Venue</h2>
        <div className="venue-name">
          <MapPin className="venue-icon" size={24} />
          <h3>INDU BANQUETS & LAWNS</h3>
        </div>
        <p className="venue-address">
          Nashik-Pune Road, near Muktidham, Nashik Road, Nashik, Maharashtra 422101
        </p>
        <div className="venue-contact-info">
          <p>All wedding ceremonies will take place in the main Grand Banquet Hall.</p>
        </div>
        <a 
          href={directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="directions-btn"
        >
          <Navigation size={16} />
          <span>Get Directions</span>
        </a>
      </div>

      <div className="map-embed-container">
        <iframe
          title="Indu Banquets and Lawns Location Map"
          src="https://maps.google.com/maps?q=INDU%20BANQUETS%20%26%20LAWNS%20Nashik&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default VenueMap;
