import React, { useState, useEffect } from 'react';
import bonjovi from '../../assets/bonjovi.jpeg';
import jamesarthur from '../../assets/jamesarthur.jpeg';
import Artist from './Artist';



const Artists = () => {

      return (
        <div className='artists'>
            <Artist name="Bon Jovi" genre="Rock" img={bonjovi} introduction="An American rock band formed in 1983 in Sayreville, New Jersey"/>
            <Artist name="James Arthur" genre="Pop, R&B" img={jamesarthur} introduction="James Arthur is an English singer and songwriter. He rose to fame after winning The X Factor in 2012."/>               
    
        </div>
      );
    }

    export default Artists;
