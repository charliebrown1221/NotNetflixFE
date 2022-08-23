import React,{useEffect,useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./VideoPage.css"
import { useNavigate, Link } from "react-router-dom";
import Videos from "../../components/Videos/Videos"
import SearchBar from "../../components/SearchBar/SearchBar"
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/NavBar/NavBar";
import Favorites from "../FavoritesPage/FavoritesPage";
import FavoriteMovies from "../../components/FavoritesButton/FavoriteMovies";
import { Route, Routes } from "react-router-dom";

const VideoPage = (props) => {
    
    const[getMovieData, setGetMovieData]=useState([])
    const[getAllMoviesData, setGetAllMoviesData]=useState([])
    // const[upload , setUpload]=useState([])
    const [user, token] = useAuth();

    useEffect(() => {
        getAllMovies()
      }, []);

    async function getData(getInfo){
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_tmdb_key}&query=${getInfo}`)
            console.log("get DB data: ", response.data.results)
            setGetMovieData(response.data.results)
            
        } catch (error) {
            console.log("getData",error.response.data)
        }
    }
    async function getAllMovies(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/movies/all/')
            console.log("get BE Movie data: ", response.data)
            setGetAllMoviesData(response.data)
            
        } catch (error) {
            console.log("getAllMovies",error.response.data)
        }
    }

 

    
    
    
    

    
    return ( 
    <>
    {/* <Navbar /> */}
    <Menu  getMovieData={getMovieData} getData={getData} getAllMovies={getAllMovies}  />
    <SearchBar getAllMoviesData={getAllMoviesData}  setGetAllMoviesData={setGetAllMoviesData} getAllMovies={getAllMovies}/> 
    <div><Link to="/favorite" style={{ textDecoration: "none", color: "white" }}>
            <b className="fav" >Favorites</b>
          </Link>
  </div><div>
    <Videos getAllMoviesData={getAllMoviesData} />
    </div>
    
    
    
    </> 
    );
}
 
export default VideoPage;