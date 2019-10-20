import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './normalize.css';
import './App.css';

import apiKey from './config';
import Header from './components/layout/Header';
import Icon from './components/layout/Icon';
import Stats from './components/layout/Stats';
import Search from './components/layout/Search';
import History from './components/layout/History';
import Footer from './components/layout/Footer';

// Full page loader
import Loader from './components/pages/Loader';

// IMPROVEMENTS
//  - Style app, media queries
//  - Full page loader, add opacity transition when loader turns false.
//  - Favorites
//  - Pre determined saved locations 3 big cities

const Skycons = require('skycons')(window);
const skycons = new Skycons({ color: '#fff' });

const App = () => {
  // Full screen loader
  const [isLoading, setisLoading] = useState(true);
  const [showHistoryList, setShowHistoryList] = useState(false);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: '59.32932',
    lng: '18.06858'
  });

  const skyconsRef = useRef();

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCity(value);
    setCoordinates(latLng);
    if (address) {
      const loc = [
        { city: value, lat: latLng.lat, lng: latLng.lng },
        ...location
      ];
      localStorage.setItem('location', JSON.stringify(loc));
      setLocation(loc);
      setAddress('');
    }
  };

  const clearStorage = () => {
    location.splice(0);
    localStorage.clear();
    setCoordinates({ lat: '59.32932', lng: '18.06858' });
  };

  const getHistoryLocation = ({ currentTarget }) => {
    setCoordinates({
      lat: location[currentTarget.value].lat,
      lng: location[currentTarget.value].lng
    });
    setCity(location[currentTarget.value].city);
  };

  useEffect(() => {
    if (localStorage.location !== undefined) {
      const getStorage = localStorage.getItem('location');
      const parseStorage = JSON.parse(getStorage);
      setLocation(parseStorage);
    }
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey.darksky}/${coordinates.lat},${coordinates.lng}?units=si`
      )
      .then(res => {
        setWeather(res.data.currently);
        skycons.set(skyconsRef.current, res.data.currently.icon);
        skycons.play();

        // Full page intro loader
        setTimeout(() => {
          setisLoading(false);
        }, 1500);
      })
      .catch(error => {
        console.log(error);
      });
  }, [coordinates]);

  return (
    <div className='App'>
      <div className='wrapper'>
        {/* Full page intro loader  */}
        {isLoading ? <Loader /> : null}

        <Header coordinates={coordinates} city={city} />

        <Icon
          skyconsRef={skyconsRef}
          weather={weather}
          coordinates={coordinates}
          city={city}
        />

        <Stats weather={weather} />

        <Search
          address={address}
          setAddress={setAddress}
          handleSelect={handleSelect}
        />

        {localStorage.length > 0 ? (
          <button
            className='history-btn'
            onClick={() => setShowHistoryList(!showHistoryList)}
          >
            {showHistoryList ? 'Close history' : 'Show history'}
          </button>
        ) : null}

        {showHistoryList ? (
          <History
            getHistoryLocation={getHistoryLocation}
            clearStorage={clearStorage}
            location={location}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default App;
