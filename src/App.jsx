import React, { useState, useEffect } from 'react';
import './App.css';

import {Header, Artists, Songs} from './components';

const App = () => {

  return (
    <>
      <Header/>
      <Artists/>
      <Songs/>
    </>
    
  )
}

export default App;
