import React,{useEffect,useState} from "react";
import axios from 'axios'
import useAuth from "../../hooks/useAuth";
import './Favorite.css'
const FavoritesButton = (props) => {
  const [user,token] = useAuth()



async function favoritedMovie(){
  console.log(props.movieId)
  try {
      let response = await axios.post(`https://cors-everywhere-me.herokuapp.com/http://NotNetflixBE-env.eba-ppyfwk2x.us-east-1.elasticbeanstalk.com/api/favorites/add/${props.movieId}`,{}, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
         if (response.status===201){
          
         }

  } catch (error) {
      console.log("Favorite" ,error.response.data)
  }
}



     
    return ( 
      <>
    
       <b className="btn2" onClick={() => favoritedMovie()}>❤️ </b>
       
      
      
    
    
      </>
    
      );
}
 
export default FavoritesButton;