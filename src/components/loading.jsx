import React, { useState, useEffect } from 'react';
import "./loader.css"

function loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className='loading'>
      {loading ? (
        <div>Yuklanmoqda...</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default loading