import React, { useState, useEffect } from 'react';

const Artist = ({name, genre, img, introduction}) => {

      return (
        <div className='artist'>            
            <h3>Artist</h3>
            <div>
                <p>{name}</p>
                <p>{genre}</p>
                <img src={img} width="200" height="200"/>
                <p>{introduction}</p>
            </div>                            
        </div>
      );
    }

    export default Artist;
