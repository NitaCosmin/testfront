import React,{ useEffect } from 'react';
import "../CSS/Home.css";
import HomeBackground from '../Imagini/HomeBackground.png';
import Separator from '../Imagini/Separator.png';
import Line from '../Imagini/Line.png';
import Ellipse from '../Imagini/Ellipse.png';
import {Link } from "react-router-dom";



const Home = () => {
  
 
  return (  
  
    <div className="HomeContainer">
          <img src={HomeBackground} alt="" className="HomeBackground-STYLE" />
          <div className="HomeContent">
          <img src={Line} alt="" className="Line-STYLE" />
          <img src={Line} alt="" className="Line1-STYLE" /> 
          <img src={Separator} alt="" className="Separator-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse1-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse2-STYLE" />
          <div className="NameLabel">Team Finder</div>
          <Link to="/login" >
          <div className="ChoiceLabel">Login</div>  
          </Link>
          <Link to="/signup" >
          <div className="ChoiceLabel1">SignUp</div>  
          </Link>
         
          
          </div>
  
         
    </div>
     
    
  );
};

export default Home;
