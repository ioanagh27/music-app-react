import React, { useState, useEffect }from 'react';
import {Card} from '../../components'


const Songs = () => {
    const [showLike, setShowLike] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
       
    
   
      return (
        <div className='songs'>
            <table>
                <tbody>
                    <tr>
                        <th>Artist</th>
                        <th>Songs</th>
                        <th>Youtube</th>                    
                    </tr>
                    <Card name="Bon Jovi" title="Living on a prayer" url="https://www.youtube.com/watch?v=lDK9QqIzhwk"/>
                    <Card name="James Arthur" title="Emily" url=""/>
                    
                    {/* <tr>
                        <td>James Arthur</td>
                        <td>Emily</td>
                        <td><a href='https://www.youtube.com/watch?v=3xOYu05CKuI'>Click for video</a></td>
                        <td><button type='button' onClick={handleClick}>{showLike && isClicked ? "Unlike" : "Like"}</button></td>
                    </tr> */}
                </tbody>
                
            </table>
        </div>
      );
    }

    export default Songs;
