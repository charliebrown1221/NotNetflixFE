import react, { useState } from 'react'
import FavoritesButton from '../FavoritesButton/FavoritesButton'
import "./Video.css"

const VideoItem = (props)=>{
    const [showDetails, setShowDetails]= useState(false)

    const handleClick =()=>{
        setShowDetails(!showDetails)
    }
    const handleClose=()=>{
        setShowDetails(!showDetails)
    }

    return(
        < >
        <div className='movie'>
            
        <img  src={`https://image.tmdb.org/t/p/w200${props.video.poster_path}` }onClick={()=>handleClick()} />
        {showDetails ?
        
           < >
           <div className='info'>
            <div className='name'>{props.video.name}  </div>
           <div className='btn1'><b onClick={()=>handleClose()} >X</b></div>
           <FavoritesButton movieId={props.video.id}></FavoritesButton>
           <div className='video' ><a href={`https://notnetflix2.s3.amazonaws.com/${props.video.fileName}`}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">  <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg> </a></div>
           <div className='year'>{props.video.year}</div>
           <div className='genre'>{props.video.genres}</div>
           <div className='over'>{props.video.overview}</div>
           
           </div>
           </>
            :null}</div>
          </>
    )
}
export default VideoItem;