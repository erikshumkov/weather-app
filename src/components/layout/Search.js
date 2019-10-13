import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const Search = ({ address, setAddress, handleSelect }) => (
  <section className='search-section'>
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            className='google-search-field'
            {...getInputProps({ placeholder: 'Type address..' })}
          />

          <div className='google-ul'>
            {suggestions.map(suggestion => {
              const style = {
                backgroundColor: suggestion.active ? '#41b6e6' : '#000'
              };

              return (
                <div
                  className='google-suggestion'
                  {...getSuggestionItemProps(suggestion, { style })}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  </section>
);

export default Search;
