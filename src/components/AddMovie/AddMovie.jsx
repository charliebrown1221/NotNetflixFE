import React,{useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AWS from 'aws-sdk'
import"./AddMovie.css"
import {Key_Id, Secret_Access_Key} from "./apiKeys"
import {genres} from "../Genres/Genres"


window.Buffer = window.Buffer || require("buffer").Buffer;


const S3_BUCKET ='notnetflix2';
const REGION ='us-east-1';


AWS.config.update({
    accessKeyId:    Key_Id,
    secretAccessKey: Secret_Access_Key
})

const AddMovie = (props) => {

const [addName,setAddName]=useState('')
const [user, token] = useAuth();
const [selectedFile, setSelectedFile] = useState(null);
const [movieDataToUpload, setMovieDataToUpload] = useState({})


const setMovieDetails=(movie)=>{

    function helperFromOtherFile(){
       return genres.filter((el) =>{
            if(movie.genre_ids.includes(el.id))
            {
                console.log(el.name)
                console.log(el.id, movie.genre_ids)
                return true
            }
        }).map(el=>el.name).join(", ")

        }

    let results = helperFromOtherFile(movie.genres)
    
    let newMovie ={
        "name":movie.title,
        "overview": movie.overview,
        "year":movie.release_date,
        "genres": results,
        "poster_path":movie.poster_path
        };
        console.log(newMovie)
        console.log("result" ,results)
        setMovieDataToUpload(newMovie)
       
}

  function handelPost(event){
    event.preventDefault()
    props.getData(addName)
       
        
        

    }
        const uploadMovie= async ()=>{

            let newMovie = {...movieDataToUpload, "fileName":selectedFile.name}
           console.log(newMovie)
            try {
                let response = await axios.post('http://127.0.0.1:8000/api/movies/add/',newMovie, {
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  });
                   if (response.status===201){
                    props.getAllMovies()
                   }
        
            } catch (error) {
                console.log("uploadMovie" ,error.response.data)
            }
        }
       
    
        const handleFileInput = (e) => {
            setSelectedFile(e.target.files[0]);
        }
    
        const uploadFile = async () => {
    
          
            console.log(selectedFile)
            var base64data = await selectedFile.arrayBuffer()
            const myBucket = new AWS.S3.ManagedUpload({
                params: { Bucket: S3_BUCKET, Key:  selectedFile.name, ContentType: 'video/mp4',Body:  base64data},
                region: REGION,
            })
            myBucket.send()
            console.log("sending?")
            
        }

        const uploadBoth = ()=>{
            uploadFile()
            uploadMovie()
            console.log("upload",uploadBoth)
        }
    
    
      

    return (
         <>
         <h1 className="text-color">Upload can take up to 5 minutes</h1>
         {props.movieData.map(el => <div><button onClick={()=>setMovieDetails(el)}>{el.title} {el.release_date}</button></div>)}

        <input className="text-color" type="file" onChange={handleFileInput}/>
        
            <button className="btn" onClick={() => uploadBoth()}> Upload </button>
         <form onSubmit={handelPost}>
            <div>
             
              <input  type="text" value={addName} onChange={(event)=> setAddName(event.target.value)} />
              <button className="btn"  type="submit">Get Movie Details</button>
              </div>
            
        </form>
        
         </> 
    );
}
 
export default AddMovie;