import React,{useState} from "react"; 
import "./SearchBar.css"
const SearchBar = (props) => {
   const [searchMovie, setSearchMovie]=useState('')
   
   const FilterMovies = (data) =>  {
    console.log(data)
    if(searchMovie == ""){
      props.getAllMovies()
    }
    else{
      let  results = data.filter((item)  => {
        if (item.name.toLowerCase().includes(searchMovie.toLowerCase())||item.year.includes(searchMovie)||item.genres.toLowerCase().includes(searchMovie.toLowerCase())) {
          console.log(item)
            return true;
          }})
        console.log("results",results)
        props.setGetAllMoviesData(results)
        return results;
        }
       
    }
     function handelFilter(event){
            event.preventDefault();
            FilterMovies(props.getAllMoviesData)
            console.log("search",props.getAllMoviesData)
        }


   
   return (
     <>
       <form onSubmit={handelFilter}>
        <div className="searchBar"> 
      <input placeholder="Search by Name, Genre or Year..." className="box" type='text' value={searchMovie} onChange={(event)=> setSearchMovie(event.target.value)} ></input>
      
      <button className='button' type='submit'  >Search</button>
        </div>
        </form>
     </> 
    );
}
 
export default SearchBar;