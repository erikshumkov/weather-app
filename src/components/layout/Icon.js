import React, { Fragment } from 'react';

const Icon = ({ skyconsRef, weather, coordinates, city }) => (
  <Fragment>
    <h2 className='big-city'>
      {coordinates.lat === '59.32932' && coordinates.lng === '18.06858'
        ? 'Stockholm, Sverige'
        : city}
    </h2>

    <div className='icon-temp'>
      <canvas
        className='icon'
        ref={skyconsRef}
        id='icon'
        width='64'
        height='64'
      />

      <h1 className='temp-big'>{Math.round(weather.temperature)} C</h1>
    </div>

    <h3>{weather.summary}</h3>
  </Fragment>
);

export default Icon;
