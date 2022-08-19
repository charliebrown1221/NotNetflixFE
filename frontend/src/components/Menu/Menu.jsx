import React from "react";
import './Menu.css'
import AddMovie from '../AddMovie/AddMovie'



const Menu = (props) => {


 

    return (  
        <div className="wrapper">

        <input type="checkbox" id="navigation" />
        <div className="menu">
        <label for="navigation">
            +
        </label></div>
        
        <nav>
            <ul>
                
                <li className="scroll">
                <AddMovie movieData={props.getMovieData} getData={props.getData} getAllMovies={props.getAllMovies} />
                </li>
                
            </ul>
           
        </nav>
        </div>
     );
}
 
export default Menu;