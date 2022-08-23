import React, { useState, useEffect }from 'react';


const Songs = () => {
   
      return (
        <div className='songs'>
            <table>
                <tr>
                    <th>Artist</th>
                    <th>Songs</th>
                    <th>Youtube</th>                    
                </tr>
                <tr>
                    <td>Bon Jovi</td>
                    <td>Living on a prayer</td>
                    <td><a href='https://www.youtube.com/watch?v=lDK9QqIzhwk'>Click for Video</a></td>
                </tr>
                <tr>
                    <td>James Arthur</td>
                    <td>Emily</td>
                    <td><a href='https://www.youtube.com/watch?v=3xOYu05CKuI'>Click for video</a></td>
                </tr>
                
            </table>
        </div>
      );
    }

    export default Songs;
