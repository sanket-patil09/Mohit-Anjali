import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const HOST_WHATSAPP_NUMBER = "919922080746"; 

const RSVPForm = ({ lang = 'en' }) => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'attending', // 'attending' or 'declined'
    guests: '1',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const translations = {
    en: {
      title: 'RSVP',
      subtitle: 'Please let us know if you can make it before 15th June 2026',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your full name',
      attendanceLabel: 'Attendance',
      acceptLabel: 'Joyfully Accept',
      declineLabel: 'Regretfully Decline',
      guestsLabel: 'Number of Guests (including you)',
      guestUnit: 'Guest',
      guestsUnit: 'Guests',
      wishesLabel: 'Best Wishes / Wishes for the Couple',
      wishesPlaceholder: 'Leave a warm message for Mohit and Anjali...',
      submitBtn: 'Send RSVP via WhatsApp',
      successHeader: 'Thank you, {name}!',
      successRedirect: 'Redirecting to WhatsApp to share your response with the family...',
      acceptNote: "Can't wait to celebrate with you! 🥳💃",
      declineNote: "We will miss you! Sending all our love. 💖",
      waAttendingHeading: "*I am super excited to attend your wedding!* 🎉",
      waDeclinedHeading: "*Sadly, I won't be able to make it to the wedding.* 😔",
      waLabelName: "Name",
      waLabelAttendance: "Attendance",
      waLabelGuests: "Number of Guests",
      waLabelWishesAttending: "Message for you",
      waLabelWishesDeclined: "Wishes for you",
      waAttendingFooter: "Can't wait for 8th July! See you soon! ❤️",
      waDeclinedFooter: "Sending you both all my love and blessings for your new journey! ❤️"
    },
    mr: {
      title: 'उपस्थिती (RSVP)',
      subtitle: 'कृपया १५ जून २०२६ पूर्वी तुमचे येणे निश्चित करा',
      nameLabel: 'तुमचे नाव',
      namePlaceholder: 'तुमचे पूर्ण नाव लिहा',
      attendanceLabel: 'उपस्थिती',
      acceptLabel: 'आनंदाने येणार',
      declineLabel: 'येणे शक्य नाही',
      guestsLabel: 'एकूण पाहुणे (तुमच्यासह)',
      guestUnit: 'पाहुणा',
      guestsUnit: 'पाहुणे',
      wishesLabel: 'वर-वधूंसाठी शुभेच्छा संदेश',
      wishesPlaceholder: 'मोहित आणि अंजलीसाठी तुमचा शुभेच्छा संदेश लिहा...',
      submitBtn: 'व्हॉट्सॲपद्वारे RSVP पाठवा',
      successHeader: 'धन्यवाद, {name}!',
      successRedirect: 'प्रतिसाद पाठवण्यासाठी तुम्हाला व्हॉट्सॲपवर पाठवले जात आहे...',
      acceptNote: "आम्ही तुमची वाट पाहत आहोत! 🥳💃",
      declineNote: "आम्ही तुम्हाला मिस करू! तुमची माया आणि प्रेम सदैव असू द्या. 💖",
      waAttendingHeading: "*मी तुमच्या लग्नाला उपस्थित राहण्यासाठी खूप उत्सुक आहे!* 🎉",
      waDeclinedHeading: "*दुर्दैवाने, मला लग्नाला उपस्थित राहता येणार नाही.* 😔",
      waLabelName: "नाव",
      waLabelAttendance: "उपस्थिती",
      waLabelGuests: "पाहुण्यांची संख्या",
      waLabelWishesAttending: "तुमच्यासाठी संदेश",
      waLabelWishesDeclined: "शुभेच्छा संदेश",
      waAttendingFooter: "८ जुलैला भेटू! लवकरच भेटू! ❤️",
      waDeclinedFooter: "तुम्हा दोघांनाही पुढील प्रवासासाठी अनेक शुभेच्छा आणि आशीर्वाद! ❤️"
    }
  };

  const currentTrans = translations[lang] || translations.en;

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
      messageBody = `Hi Mohit & Anjali! 👋\n\n${currentTrans.waAttendingHeading}\n\nHere are my RSVP details:\n✨ *${currentTrans.waLabelName}:* ${formData.name.trim()}\n👥 *${currentTrans.waLabelGuests}:* ${formData.guests}`;
      if (formData.message.trim()) {
        messageBody += `\n💌 *${currentTrans.waLabelWishesAttending}:* "${formData.message.trim()}"`;
      }
      messageBody += `\n\n${currentTrans.waAttendingFooter}`;
    } else {
      messageBody = `Hi Mohit & Anjali! 👋\n\n${currentTrans.waDeclinedHeading}\n\nHere are my RSVP details:\n✨ *${currentTrans.waLabelName}:* ${formData.name.trim()}`;
      if (formData.message.trim()) {
        messageBody += `\n💌 *${currentTrans.waLabelWishesDeclined}:* "${formData.message.trim()}"`;
      }
      messageBody += `\n\n${currentTrans.waDeclinedFooter}`;
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
        <h2>{currentTrans.title}</h2>
        <p>{currentTrans.subtitle}</p>
      </div>

      {isSubmitted ? (
        <div className="rsvp-success-message">
          <CheckCircle size={48} className="success-icon animate-bounce" />
          <h3>{currentTrans.successHeader.replace('{name}', formData.name)}</h3>
          <p>{currentTrans.successRedirect}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name">{currentTrans.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={currentTrans.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{currentTrans.attendanceLabel}</label>
            <div className="radio-group">
              <label className={`radio-label ${formData.status === 'attending' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="status"
                  value="attending"
                  checked={formData.status === 'attending'}
                  onChange={handleChange}
                />
                {currentTrans.acceptLabel}
              </label>
              <label className={`radio-label ${formData.status === 'declined' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="status"
                  value="declined"
                  checked={formData.status === 'declined'}
                  onChange={handleChange}
                />
                {currentTrans.declineLabel}
              </label>
            </div>
            {formData.status === 'attending' ? (
              <p className="rsvp-status-note accept">{currentTrans.acceptNote}</p>
            ) : (
              <p className="rsvp-status-note decline">{currentTrans.declineNote}</p>
            )}
          </div>

          {formData.status === 'attending' && (
            <div className="form-group">
              <label htmlFor="guests">{currentTrans.guestsLabel}</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? currentTrans.guestUnit : currentTrans.guestsUnit}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">{currentTrans.wishesLabel}</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder={currentTrans.wishesPlaceholder}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="rsvp-submit-btn">
            <span>{currentTrans.submitBtn}</span>
            <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
};

export default RSVPForm;
