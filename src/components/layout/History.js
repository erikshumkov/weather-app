import React from 'react';

const History = ({ storageLocation, getHistoryLocation, clearStorage }) => (
  <div className='history-comp'>
    <ul className='latest-search-list'>
      {storageLocation.map((item, i) => (
        <li
          className='latest-search-li'
          key={i}
          onClick={getHistoryLocation}
          value={i}
        >
          {item}
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
