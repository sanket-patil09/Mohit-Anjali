import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, lang = 'en' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  const translations = {
    en: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      expired: 'The Auspicious Moment Has Arrived!'
    },
    mr: {
      days: 'दिवस',
      hours: 'तास',
      minutes: 'मिनिटे',
      seconds: 'सेकंद',
      expired: 'शुभमंगल सावधान! शुभ मुहूर्त आला आहे!'
    }
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftData = {};

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isExpired: false
        };
      } else {
        timeLeftData = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        };
      }
      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const currentTrans = translations[lang] || translations.en;

  if (timeLeft.isExpired) {
    return (
      <div className="countdown-expired">
        <h3>{currentTrans.expired}</h3>
      </div>
    );
  }

  const items = [
    { label: currentTrans.days, value: timeLeft.days },
    { label: currentTrans.hours, value: timeLeft.hours },
    { label: currentTrans.minutes, value: timeLeft.minutes },
    { label: currentTrans.seconds, value: timeLeft.seconds }
  ];

  return (
    <div className="countdown-container">
      {items.map((item, idx) => (
        <div key={idx} className="countdown-item">
          <div className="countdown-number">{item.value.toString().padStart(2, '0')}</div>
          <div className="countdown-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
