import React,{useEffect,useState} from "react";
import VideoItem from './VideoItem'


const Videos = ({getAllMoviesData})=> {

     
    return (  
      <div>
       {getAllMoviesData.map((el)=>{
      return <VideoItem video={el} ></VideoItem>
      })}
      </div>
    );
}
 
export default Videos;