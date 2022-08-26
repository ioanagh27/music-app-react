import React, { useState, useEffect }from 'react';
import {Card} from '../../components'


const Songs = (props) => {   
    console.log(props)    
    
   
      return (
        <div className='songs'>
            <div>
                <div>
                    <h2>Songs</h2>
                    <Card artist="Bon Jovi" title="Living on a prayer" url="https://www.youtube.com/watch?v=lDK9QqIzhwk"/>
                    <Card artist="James Arthur" title="Emily" url="https://www.youtube.com/watch?v=3xOYu05CKuI"/>
                </div>
            </div>
        
                    
                    
                
        </div>
      );
    }

    export default Songs;
