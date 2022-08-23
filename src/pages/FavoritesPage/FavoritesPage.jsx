import React,{useEffect,useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import FavoritesButton from "../../components/FavoritesButton/FavoritesButton";
import FavoriteMovies from "../../components/FavoritesButton/FavoriteMovies";


const Favorites = (props) => {
const [favoriteMovieData ,setFavoriteMovies]=useState([])
const [user, token] = useAuth();


useEffect(() => {
    allFavoriteMovies()
  }, []);

async function allFavoriteMovies(){
    try {
        let response = await axios.get('https://cors-everywhere-me.herokuapp.com/http://NotNetflixBE-env.eba-ppyfwk2x.us-east-1.elasticbeanstalk.com/api/favorites/all/', {
            headers: {
              Authorization: "Bearer " + token,
            },
          });

       
        setFavoriteMovies(response.data)
        console.log('allFavoriteMovies',response.data)
    } catch (error) {
        console.log("allFavoriteMovies err",error.response.data)
    }
}

async function favoritedMovie(id){
    console.log(id)
    try {
        let response = await axios.post(`https://cors-everywhere-me.herokuapp.com/http://NotNetflixBE-env.eba-ppyfwk2x.us-east-1.elasticbeanstalk.com/api/favorites/add/${id}`,{}, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
           if (response.status===201){
            allFavoriteMovies()
           }

    } catch (error) {
        console.log("Favorite" ,error.response.data)
    }
}




 




    return ( <>
        
       <div>
        
        <FavoriteMovies favoriteMovieData={favoriteMovieData}/>
        <FavoritesButton favoritedMovie={favoritedMovie}/></div>
        </>
     );
}
 
export default Favorites;