import React, { Fragment } from 'react';

const Icon = ({ skyconsRef, weather, coordinates, city }) => (
  <Fragment>
    <h2 className='big-city'>
      {coordinates.lat === '58.41086' && coordinates.lng === '15.62157'
        ? 'Linköping, Sverige'
        : city}
    </h2>

    <canvas
      className='icon'
      ref={skyconsRef}
      id='icon'
      width='64'
      height='64'
    />

    <h3>{weather.summary}</h3>

    <h1 className='temp-big'>{Math.round(weather.temperature)} C</h1>
  </Fragment>
);

export default Icon;
