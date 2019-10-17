import React from 'react';

const History = ({ getHistoryLocation, clearStorage, location }) => (
  <div className='history-comp'>
    <ul className='latest-search-list'>
      {location.map((item, i) => (
        <li
          className='latest-search-li'
          key={i}
          onClick={getHistoryLocation}
          value={i}
        >
          {item.city}
        </li>
      ))}
    </ul>
    {localStorage.length > 0 ? (
      <button className='clear-history-btn' onClick={clearStorage}>
        Clear history
      </button>
    ) : null}
  </div>
);

export default History;
