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
    <tr>
    <td>{name}</td>
    <td>{title}</td>
    <td><a href={url}>Click for Video</a></td>
    <td><button type='button' onClick={handleClick}>{showLike && isClicked ? "Unlike" : "Like"}</button></td>
</tr>
  )
}

export default Card
