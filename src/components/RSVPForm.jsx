import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

// Note: Replace this with the actual phone number (include country code, e.g., '919876543210')
const HOST_WHATSAPP_NUMBER = "919922080746"; 

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending', // 'attending' or 'declined'
    guests: '1',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    let messageBody = '';
    
    if (formData.status === 'attending') {
      messageBody = `Hi Mohit & Anjali! 👋\n\n*I am super excited to attend your wedding!* 🎉\n\nHere are my RSVP details:\n✨ *Name:* ${formData.name.trim()}\n👥 *Number of Guests:* ${formData.guests}`;
      if (formData.message.trim()) {
        messageBody += `\n💌 *Message for you:* "${formData.message.trim()}"`;
      }
      messageBody += `\n\nCan't wait for 8th July! See you soon! ❤️`;
    } else {
      messageBody = `Hi Mohit & Anjali! 👋\n\n*Sadly, I won't be able to make it to the wedding.* 😔\n\nHere are my RSVP details:\n✨ *Name:* ${formData.name.trim()}`;
      if (formData.message.trim()) {
        messageBody += `\n💌 *Wishes for you:* "${formData.message.trim()}"`;
      }
      messageBody += `\n\nSending you both all my love and blessings for your new journey! ❤️`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${HOST_WHATSAPP_NUMBER}&text=${encodeURIComponent(messageBody)}`;
    
    setIsSubmitted(true);
    
    // Open WhatsApp after a short delay to show success state
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      setFormData({
        name: '',
        status: 'attending',
        guests: '1',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="rsvp-card">
      <div className="rsvp-header">
        <h2>RSVP</h2>
        <p>Please let us know if you can make it before 15th June 2026</p>
      </div>

      {isSubmitted ? (
        <div className="rsvp-success-message">
          <CheckCircle size={48} className="success-icon animate-bounce" />
          <h3>Thank you, {formData.name}!</h3>
          <p>Redirecting to WhatsApp to share your response with the family...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Attendance</label>
            <div className="radio-group">
              <label className={`radio-label ${formData.status === 'attending' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="status"
                  value="attending"
                  checked={formData.status === 'attending'}
                  onChange={handleChange}
                />
                Joyfully Accept
              </label>
              <label className={`radio-label ${formData.status === 'declined' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="status"
                  value="declined"
                  checked={formData.status === 'declined'}
                  onChange={handleChange}
                />
                Regretfully Decline
              </label>
            </div>
            {formData.status === 'attending' ? (
              <p className="rsvp-status-note accept">Can't wait to celebrate with you! 🥳💃</p>
            ) : (
              <p className="rsvp-status-note decline">We will miss you! Sending all our love. 💖</p>
            )}
          </div>

          {formData.status === 'attending' && (
            <div className="form-group">
              <label htmlFor="guests">Number of Guests (including you)</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">Best Wishes / Wishes for the Couple</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Leave a warm message for Mohit and Anjali..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="rsvp-submit-btn">
            <span>Send RSVP via WhatsApp</span>
            <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
};

export default RSVPForm;
