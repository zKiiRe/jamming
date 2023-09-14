import React from "react";
import './SearchBar.css';

function SearchBar () {
    return (
        <div className="SearchBar">
            <input placeholder="Enter a song, artist, or album name"/>
            <button className="SearchButton">Search</button>
        </div>
    );
}

export default SearchBar;