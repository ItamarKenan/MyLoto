'use client'; 

import React, { useState, useEffect } from 'react';
import LatestDraw from '../components/LatestDraw';
import DrawArchive from '../components/DrawArchive'
import TopStatistics from '../components/TopStatistics';
export default function Home() {
  const [drawData, setDrawData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('/api/draw-data')
      .then((res) => {
        if (!res.ok) throw new Error('שגיאה בתקשורת עם השרת');
        return res.json();
      })
      .then((data) => {
        setDrawData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []); 

  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>שגיאה: {error}</div>;
  if (!drawData) return <div style={{ textAlign: 'center', marginTop: '50px' }}>טוען נתונים...</div>;

  return (
    <main style={mainMobileWrapper}>
      <header style={appHeader}>
        <h1 style={logoStyle}>MyLoto</h1>
      </header>
      <LatestDraw draw={drawData.draws.root.pais.chances.chance[0]} />   
      <DrawArchive chances={drawData.draws.root.pais.chances.chance} />
      <TopStatistics statsData={drawData.stats} />
    </main>
  );
}


const mainMobileWrapper = {
  direction: 'rtl',             
  backgroundColor: '#f4f7f6',    
  minHeight: '100vh',            
  padding: '16px',               
  fontFamily: 'sans-serif',
};

const appHeader = {
  textAlign: 'center',
  padding: '20px 0',
};

const logoStyle = {
  color: '#004a99',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: 0,
};