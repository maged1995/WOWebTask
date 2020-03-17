import React from 'react';
import PropTypes from "prop-types";

const Search = ({ search, setSearch, submitSearch }) => {

  return (
    <div id='photos-search'>
      <div id='photos-search-buttons'>
        <button id="clear" onClick={setSearch('')}> Clear </button>
        <button id="search" onClick={submitSearch}> Apply </button>
      </div>
      <input id="photos-search-input" type="text" onChange={setSearch} placeholder="wed" />
    </div>

  );

};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};

export default Search;
