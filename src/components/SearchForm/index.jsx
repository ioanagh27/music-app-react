import React, {useState, useEffect} from 'react';

const SearchForm = ({handleSearchSubmission}) => {

    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");


    function handleArtistInput(e) {
        console.log(e)
        const newArtistInput = e.target.value;
        setArtist(newArtistInput);
    }

    function handleTitleInput(e) {
        const newTitleInput = e.target.value;
        setTitle(newTitleInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearchSubmission(artist, title);
    }
    

    return <form onSubmit={handleSubmit} id="search-form" required>
                <label htmlFor='search-box'></label>
                <input type="text" onChange={handleArtistInput} value={artist} placeholder="Search for a singer"/>
                <label htmlFor='search-box'></label>
                <input type="text" onChange={handleTitleInput} value={title} placeholder="Search for a song"/>
                <input type="submit" value="Search"/>
            </form>
        
}

export default SearchForm;
