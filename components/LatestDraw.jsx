import React from 'react';

const LatestDraw = ({ draw }) => {
  if (!draw) return null;

  const cards = [draw.c1, draw.c2, draw.c3, draw.c4];

  return (
    <div style={mobileCardContainer}>
      <div style={headerStyle}>
        <span style={titleStyle}>הגרלת צ'אנס אחרונה</span>
        <span style={idStyle}>מס' {draw.id}</span>
      </div>
      <div style={cardsWrapper}>
        {cards.map((card, index) => (
          <div key={index} style={mobileCardStyle}>
            <span style={cardText}>{card}</span>
          </div>
        ))}
      </div>
      <div style={timeStyle}>
        שעת הגרלה: {draw.date.split('T')[1].substring(0, 5)}
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

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#004a99',
};

const idStyle = {
  fontSize: '14px',
  color: '#888',
};

const cardsWrapper = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '15px',
};

const mobileCardStyle = {
  width: '60px',  
  height: '85px',
  backgroundColor: '#fdfdfd',
  border: '2px solid #004a99',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const cardText = {
  fontSize: '24px',
  fontWeight: '900',
  color: '#333',
};

const timeStyle = {
  textAlign: 'center',
  fontSize: '13px',
  color: '#999',
  marginTop: '10px',
};

export default LatestDraw;