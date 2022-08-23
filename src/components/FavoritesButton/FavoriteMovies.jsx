import React,{ useState }  from 'react';
import "./Favorite.css"
import UnfavoriteButton from './UnfavoriteButton';

const FavoriteMovies = ({favoriteMovieData}) => {
  const [showDetailsFav, setShowDetailsFav]= useState(false)

  const handleClick =()=>{
      setShowDetailsFav(!showDetailsFav)
  }
  const handleClose=()=>{
      setShowDetailsFav(!showDetailsFav)
  }
    return ( 
    <>
    {favoriteMovieData.map((el)=>{
        console.log('favoriteMovieData',favoriteMovieData)
      return( 
        <div className='movieF'>
            
        <img  src={`https://image.tmdb.org/t/p/w200${el.poster_path}` }onClick={()=>handleClick()} />
        {showDetailsFav ?
        
           < >
           <div className='infoF'>
            <div className='nameF'>{el.name}  </div>
           <div className='btn3'><b onClick={()=>handleClose()} >X</b></div>
           <UnfavoriteButton movieId={el.id}></UnfavoriteButton>
           <div className='videoF' ><a href={`https://notnetflix2.s3.amazonaws.com/${el.fileName}`}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">  <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg> </a></div>
           <div className='yearF'>{el.year}</div>
           <div className='genreF'>{el.genres}</div>
           <div className='overF'>{el.overview}</div>
           
           </div>
           </>
            :null}</div>)
      })}
    </>
     );
}
 
export default FavoriteMovies;