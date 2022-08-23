import React, { useState, useEffect } from 'react';
import bonjovi from '../../assets/bonjovi.jpeg';
import jamesarthur from '../../assets/jamesarthur.jpeg';
import './index.css';

const Artists = () => {

      return (
        <div className='artists'>
            <table>
                <tr>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Photo</th>
                    <th>Introduction</th>
                </tr>
                <tr>
                    <td>Bon Jovi</td>
                    <td>Rock</td>
                    <td><img src={bonjovi} width= "200" height="200"></img></td>
                    <td>An American rock band formed in 1983 in Sayreville, New Jersey</td>
                </tr>
                <tr>
                    <td>James Arthur</td>
                    <td>Pop, R&B</td>
                    <td><img src={jamesarthur} width= "200" height="200"></img></td>
                    <td>James Arthur is an English singer and songwriter. He rose to fame after winning The X Factor in 2012.</td>
                </tr>
                
            </table>
        </div>
      );
    }

    export default Artists;
