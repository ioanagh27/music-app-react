import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Header, Artists, Songs, SearchForm, Card} from '../../components';

const MainPage = () => {

    const [showData, setShowData] = useState([{id: 1, artist: "Coldplay", title: "Yellow", url: "https://www.youtube.com/watch?v=yKNxeF4KMsY", lyrics: "Hello World"}, {id: 2, artist: "Maroon 5", title: "Sugar", url: "https://www.youtube.com/watch?v=09R8_2nJtjg", lyrics: "Hello Summer"}]);
    const [artist, setArtist] = useState('Coldplay');
    const [title, setTitle] = useState('Yellow')
    const [isLoading, setIsLoading] = useState(true);

    console.log(showData)

    // useEffect(() => {
    //     async function searchApi() {
    //         console.log(1)
    //         setIsLoading(true);
    //         console.log(2)
    //         const result = await axios.get(`https://private-anon-260fef7a1b-lyricsovh.apiary-mock.com/v1/${artist}/${title}`);
    //         console.log(3)
    //         console.log(result)
    //         setShowData(result.data);
    //         console.log(result.data)
    //         setIsLoading(false)
    //     }

    //     searchApi();
    // }, [artist, title]);

    function handleSearch(artist, title) {
        console.log(artist)
        console.log(title)
        setArtist(artist);
        setTitle(title)
    }

  return (
    <>
      <Header/>
      <SearchForm handleSearchSubmission={handleSearch}/>
     
      {showData.map((s) => <Card key={s["artist"]["id"]} data={s}/>  )}       
      <Artists/>
    </>
    
  )
}

export default MainPage;
