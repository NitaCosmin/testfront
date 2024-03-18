import React, { useState } from "react";
import "../CSS/ProjectCard.css";
import ProjectCardBackground from "../Imagini/ProjectCardBeckground.png";
import DepProfileImage from "../DepartmentCard-images/DepProfileImage.png";
import { Button } from 'primereact/button';
import FavoriteButton from "../Imagini/FavoriteButton.png";

const ProjectCard = () => {
    
  
  return (  
   
    <div className="ProjectCardContainer">
      <img src={ProjectCardBackground} alt="" className="ProjectBeckgroundCard-Style" />
      <div className="ProjectCardContent">
        <img src={DepProfileImage} alt="" className="ProjectImg-Style" />
         <div className="ProjectCardFields">
          <div className="ProjectFildGap">
            <div className="ProjectFieldContentLabel">Desing</div>
            <div className="ProjectFieldNameLabel">Department Name</div>
          </div>
          <div className="ProjectFildGap">
            <div className="ProjectFieldContentLabel">Dorel</div>
            <div className="ProjectFieldNameLabel">Department Manager</div>
          </div>
          <div className="ProjectFildGap">
            <div className="ProjectFieldContentLabel">15</div>
            <div className="ProjectFieldNameLabel">Members</div>
          </div>

        </div>
        
        <div className="Projectexpendbutton">
          <Button label=">" />

        </div> 
        <p className="ProjectDate">25 Feb 2024</p>
        <button className="image-button">
            <img src={FavoriteButton} alt="" className="FavoriteButton" />
        </button>


      </div>
      

    </div>
    
    
    
        
    
     
    
  );
};

export default ProjectCard;
