import React,{useEffect,useState} from "react";
import axios from 'axios'
import useAuth from "../../hooks/useAuth";
import './Favorite.css'



const UnfavoriteButton = (props) => {
    const [user,token] = useAuth()
  
  
  
  async function UnfavoritedMovie(){
    console.log(props.movieId)
    try {
        let response = await axios.delete(`http://127.0.0.1:8000/api/favorites/delete/${props.movieId}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
           if (response.status===204){
            
           }
  
    } catch (error) {
        console.log("Favorite" ,error.response.data)
    }
  }
  
  
  
       
      return ( 
        <>
      
         <b className="btn4" onClick={() => UnfavoritedMovie()}>💔 </b>
         
        
        
      
      
        </>
      
        );
  }
   
  export default UnfavoriteButton;