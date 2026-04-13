import React from 'react';

const LatestDraw = ({ draw }) => {
  if (!draw) return null;

  const dateObj = new Date(draw.date);
  const formattedDate = dateObj.toLocaleDateString('he-IL'); 
  const formattedTime = draw.date.split('T')[1].substring(0, 5);

  const suits = [
    { label: '♣', color: '#333' },   
    { label: '♥', color: '#e44141' }, 
    { label: '♦', color: '#e44141' }, 
    { label: '♠', color: '#333' }    
  ];

  const cards = [draw.c1, draw.c2, draw.c3, draw.c4];

  return (
    <div style={mobileCardContainer}>
      <div style={headerStyle}>
        <span style={titleStyle}>הגרלת צ'אנס אחרונה</span>
        <span style={idStyle}>מס' {draw.id}</span>
      </div>

      <div style={cardsWrapper}>
        {cards.map((cardValue, index) => (
          <div key={index} style={mobileCardStyle}>
            <span style={cardValueText}>{cardValue}</span>
            <span style={{ 
              fontSize: '20px', 
              color: suits[index].color 
            }}>
              {suits[index].label}
            </span>
          </div>
        ))}
      </div>

      <div style={dateTimeContainer}>
        <span>תאריך: <strong>{formattedDate}</strong></span>
        <span style={divider}>|</span>
        <span>שעה: <strong>{formattedTime}</strong></span>
      </div>
    </div>
  );
};


const mobileCardContainer = {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '20px',
  boxSizing: 'border-box',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  marginBottom: '16px',
  border: '1px solid #f0f0f0',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const titleStyle = { fontSize: '18px', fontWeight: 'bold', color: '#004a99' };
const idStyle = { fontSize: '14px', color: '#888' };
const cardsWrapper = { display: 'flex', justifyContent: 'space-around', alignItems: 'center', direction: 'ltr' };

const mobileCardStyle = {
  width: '65px',  
  height: '95px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  gap: '5px' 
};

const cardValueText = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#333',
};


const dateTimeContainer = {
  textAlign: 'center',
  fontSize: '14px',
  color: '#666',
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderTop: '1px solid #f0f0f0',
  paddingTop: '15px'
};

const divider = {
  color: '#ddd',
  fontWeight: 'normal'
};

export default LatestDraw;