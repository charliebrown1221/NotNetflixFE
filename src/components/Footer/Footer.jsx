import "./Footer.css";
import logo from './assets/long-tmdb.svg'
const Footer = () => {
  return (
    <footer>
     <img className="tmdb" src={logo} height="50%" width="20%" ></img>
      <p>Copyright © 2022</p>{" "}
    </footer>
  );
};

export default Footer;
