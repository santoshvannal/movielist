import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div>
            <Link to="/"><span>HomePage</span></Link>
            <Link to="/movies/Feverite"><span>Feverits</span></Link>
            
            
        </div>
    )
}


export default Header;