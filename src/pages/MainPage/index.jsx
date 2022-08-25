import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Header, Artists, Songs, SearchForm} from '../../components';

const MainPage = () => {

    const [showData, setShowData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function searchApi() {
            setIsLoading(true);
            const result = await axios.get(``)
        }
    })

  return (
    <>
      <Header/>
      <SearchForm/>
      <Artists/>
      <Songs/>
    </>
    
  )
}

export default MainPage;
