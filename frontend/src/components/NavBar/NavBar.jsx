import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import logo from './assets/NotNetflix.jpg'

const Navbar = () => {
  
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  
    
  
 
  
  return (<>
    

    <div className="navBar">
      
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            
            <img src={logo}height="100%" width="100%"></img>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          
        </li>
      </ul>
    <div className="user">{user ? <p >Welcome {user.username}</p> : null}</div>
      
       
      
    </div></>
  );
};

export default Navbar;
