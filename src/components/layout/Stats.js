import React from 'react';

const Stats = ({ weather }) => (
  <div className='stats'>
    <div className='wind'>
      <h3>Wind:</h3>
      <span>{Math.round(weather.windSpeed)} M/S</span>
    </div>
    <div className='temp'>
      <h3>Temp:</h3>
      <span>{Math.round(weather.temperature)} C</span>
    </div>
    <div className='humid'>
      <h3>Humidity:</h3>
      <span>{Math.round(weather.humidity * 100)} %</span>
    </div>
  </div>
);

export default Stats;
