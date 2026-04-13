import React from 'react';

const TopStatistics = ({ statsData }) => {
  if (!statsData) return null;

  const { max_num, max_app } = statsData.root.maxapplist;
  const rawValue = max_num.value; 

  const decodeCard = (val) => {
    const [numPart, suitPart] = val.split('+');
    const numbers = { 
        "11": "7", 
        "12": "8", 
        "13": "9", 
        "14": "10", 
        "15": "J", 
        "16": "Q", 
        "17": "K", 
        "18": "A" 
        };
    
    const suits = { 
      "1": { label: "♠", color: "#333" },
      "2": { label: "♥", color: "#e44141" },
      "3": { label: "♦", color: "#e44141" },
      "4": { label: "♣", color: "#333" }
    };

    return {
      name: numbers[numPart] || numPart,
      suit: suits[suitPart] || { label: "", color: "#333" }
    };
  };

  const hotCard = decodeCard(rawValue);

  return (
    <div style={statsWrapper}>
      <h3 style={statsTitle}>הקלף החם (10 הגרלות אחרונות)</h3>
      <div style={contentLayout}>
        <div style={bigCardStyle}>
          <span style={bigCardValue}>{hotCard.name}</span>
          <span style={{ fontSize: '30px', color: hotCard.suit.color }}>
            {hotCard.suit.label}
          </span>
        </div>
        <div style={textDetails}>
          <span style={countText}>{max_app}</span>
          <span style={subText}>פעמים ב-10 ההגרלות האחרונות</span>
        </div>
      </div>
    </div>
  );
};


const statsWrapper = {
  width: '100%',
  backgroundColor: '#fff9e6', 
  borderRadius: '16px',
  padding: '20px',
  boxSizing: 'border-box',
  border: '1px solid #ffeeba',
  marginBottom: '16px',
};

const statsTitle = { fontSize: '16px', color: '#856404', margin: '0 0 15px 0' };

const contentLayout = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
};

const bigCardStyle = {
  width: '80px',
  height: '110px',
  backgroundColor: '#fff',
  border: '2px solid #856404',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const bigCardValue = { fontSize: '24px', fontWeight: 'bold', color: '#333' };

const textDetails = { display: 'flex', flexDirection: 'column' };
const countText = { fontSize: '32px', fontWeight: 'bold', color: '#856404' };
const subText = { fontSize: '13px', color: '#666' };

export default TopStatistics;