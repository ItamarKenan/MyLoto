import React, { useState } from 'react';

const DrawArchive = ({ chances }) => {
  const [inputValue, setInputValue] = useState('');
  const [foundDraw, setFoundDraw] = useState(chances[0]);
  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    if (!inputValue) {
      setFoundDraw(chances[0]);
      setIsError(false);
      return;
    }

    const result = chances.find(draw => draw.id.toString() === inputValue);

    if (result) {
      setFoundDraw(result);
      setIsError(false);
    } else {
      setFoundDraw(null);
      setIsError(true);
    }
  };

  const suitIcons = ['♣', '♥', '♦', '♠'];
  const suitColors = ['#333', '#e44141', '#e44141', '#333'];

  return (
    <div style={archiveContainer}>
      <h3 style={archiveTitle}>חיפוש בארכיון</h3>

      <div style={searchBoxWrapper}>
        <input
          type="number"
          placeholder="מס' הגרלה..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={searchInputStyle}
        />
        <button onClick={handleSearch} style={searchButtonStyle}>
          חפש
        </button>
      </div>

      <div style={resultWrapper}>
        {foundDraw && (
          <div style={drawRow}>
            <div style={drawInfo}>
              <span style={drawId}>תוצאות הגרלה מס׳ {foundDraw.id}</span>
              <div style={dateTimeRow}>
                <span>{foundDraw.date.split('T')[0].split('-').reverse().join('/')}</span>
                <span style={{ margin: '0 5px' }}>|</span>
                <span style={{ fontWeight: 'bold', color: '#333' }}>
                  {foundDraw.date.split('T')[1].substring(0, 5)}
                </span>
              </div>
            </div>
            
            <div style={drawResults}>
              {[foundDraw.c1, foundDraw.c2, foundDraw.c3, foundDraw.c4].map((val, i) => (
                <span key={i} style={{ color: suitColors[i], marginLeft: '8px', fontWeight: 'bold' }}>
                  {val}{suitIcons[i]}
                </span>
              ))}
            </div>
          </div>
        )}

        {isError && (
          <div style={errorStyle}>לא נמצאה הגרלה שמספרה "{inputValue}"</div>
        )}
      </div>
    </div>
  );
};


const archiveContainer = {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '20px',
  boxSizing: 'border-box',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  marginBottom: '16px',
};

const archiveTitle = { fontSize: '18px', color: '#333', margin: '0 0 15px 0', textAlign: 'right' };

const searchBoxWrapper = { display: 'flex', gap: '10px', marginBottom: '20px' };

const searchInputStyle = {
  flex: 2,
  padding: '12px',
  borderRadius: '10px',
  border: '1px solid #ddd',
  fontSize: '16px',
  boxSizing: 'border-box',
  textAlign: 'right',
  outline: 'none'
};

const searchButtonStyle = {
  flex: 1,
  backgroundColor: '#004a99',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const resultWrapper = {
  borderTop: '1px solid #f0f0f0',
  paddingTop: '15px',
  minHeight: '60px'
};

const drawRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const drawInfo = { display: 'flex', flexDirection: 'column', gap: '4px' };
const drawId = { fontSize: '15px', fontWeight: 'bold', color: '#004a99' };

const dateTimeRow = {
  fontSize: '12px',
  color: '#999',
  display: 'flex',
  alignItems: 'center'
};

const drawResults = { direction: 'ltr', fontSize: '18px' };
const errorStyle = { textAlign: 'center', color: '#d9534f', fontSize: '14px', fontWeight: 'bold', padding: '10px' };

export default DrawArchive;