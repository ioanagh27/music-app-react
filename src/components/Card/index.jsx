import React, { useState, useEffect }from 'react';
import "./index.css"

function Card({data}) {
    const [showLike, setShowLike] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        if(isClicked) {
            setShowLike("Liked") 
        } else {
            setShowLike("Like")
        }
        setIsClicked(!isClicked)
    }
    
console.log(data)
  return (
    <div >    
        <div className="container">
            <h3>{data.artist}</h3>
            <em>{data.title}</em> <br/>
            <a href={data.url}>Click for video</a>
            <p>{data.lyrics}</p>
            <button type='button' onClick={handleClick}>{showLike && isClicked ? "Unlike" : "Like"}</button>
        </div>                
    </div>

  )
}

export default Card
