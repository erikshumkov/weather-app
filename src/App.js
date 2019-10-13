import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './normalize.css';
import './App.css';

import apiKey from './config';
import Header from './components/layout/Header';
import Stats from './components/layout/Stats';
import Search from './components/layout/Search';
import History from './components/layout/History';
import Footer from './components/layout/Footer';
import Icon from './components/layout/Icon';
import Loader from './components/pages/Loader';

const Skycons = require('skycons')(window);
const skycons = new Skycons({ color: '#fff' });

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [showHistoryList, setShowHistoryList] = useState(false);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [storageLocation, setStorageLocation] = useState([]);
  const [storageLatLng, setStorageLatLng] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: '58.41086',
    lng: '15.62157'
  });

  const skyconsRef = useRef();

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    if (address) {
      const nextState = [address, ...storageLocation];
      const cord = [latLng, ...storageLatLng];
      localStorage.setItem('places', JSON.stringify(nextState));
      localStorage.setItem('cord', JSON.stringify(cord));
      setStorageLocation(nextState);
      setStorageLatLng(cord);
      setCity(address);
      setAddress('');
    }
  };

  const clearStorage = () => {
    storageLocation.splice(0);
    storageLatLng.splice(0);
    localStorage.clear();
    setCoordinates({ lat: '58.41086', lng: '15.62157' });
  };

  const getHistoryLocation = ({ currentTarget }) => {
    setCoordinates(storageLatLng[currentTarget.value]);
    setCity(storageLocation[currentTarget.value]);
  };

  useEffect(() => {
    if (localStorage.length > 0) {
      const getStorage = localStorage.getItem('places');
      const getStorage2 = localStorage.getItem('cord');
      const parseStorage = JSON.parse(getStorage);
      const parseStorage2 = JSON.parse(getStorage2);
      setStorageLocation(parseStorage);
      setStorageLatLng(parseStorage2);
    }
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey.darksky}/${coordinates.lat},${coordinates.lng}?units=si`
      )
      .then(res => {
        setWeather(res.data.currently);
        skycons.set(skyconsRef.current, res.data.currently.icon);
        skycons.play();
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
            storageLocation={storageLocation}
            getHistoryLocation={getHistoryLocation}
            clearStorage={clearStorage}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
