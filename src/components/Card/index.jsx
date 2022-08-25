import React, { useState, useEffect }from 'react';

function Card({name, title, url}) {
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
    

  return (
    <div>    
        <div>
            <p>{name}</p>
            <p>{title}</p>
            <a href={url}>Click for video</a>
            <button type='button' onClick={handleClick}>{showLike && isClicked ? "Unlike" : "Like"}</button>
        </div>                
    </div>

  )
}

export default Card
