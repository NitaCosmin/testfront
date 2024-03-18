import Navbar from "./Navbar";
import '../CSS/Projects.css';
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ProjectCard from "../JSX/ProjectCard";



const Projects = () => {


    const [isOpen, setIsOpen] = useState(false); // Starea pentru deschiderea/închiderea dropdown-ului
    const [selectedOption, setSelectedOption] = useState(null); // Starea pentru opțiunea selectată din dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Închide dropdown-ul după selectarea unei opțiuni
    };

    const projects = [
        // { name: "DESIGN CHUANAJU", membres: "15", date: "25 FEB 2022" },
        // { name: "DESIGN CHUANAJU", membres: "15", date: "25 FEB 2022" },
        // { name: "DESIGN CHUANAJU", membres: "15", date: "25 FEB 2022" },
        { name: "DESIGN", projectDepartment:"CHUANAJU" ,membres: "15", date: "25 FEB 2022" }
    ];
    
   return(
    <div className="Container">
        <Navbar />
        <div className="workspaceProjects">

            <div className="headerProjects">
                <div className="namePageProject"><p className="titleProjects">Projects</p></div>
                <div className="addProjects"><Link><MdAdd/></Link> <div className="tooltipProj">Add project</div></div>
                <div className="searchProject"><input className="inputSearchProject" type="text" placeholder="search"/><div className="tooltipInputProj">search by project name</div></div>
                <div className="dropdownProject">
                        <div className="dropdownToggle" onClick={toggleDropdown}>
                            Sort by
                        </div>
                        {isOpen && (
                            <div className="dropdownMenu">
                                <div className="dropdownItem" onClick={() => handleOptionSelect("Option 1")}>Option 1</div>
                                <div className="dropdownItem" onClick={() => handleOptionSelect("Option 2")}>Option 2</div>
                                <div className="dropdownItem" onClick={() => handleOptionSelect("Option 3")}>Option 3</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* <div className="myProjects">
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="projectDetails">
                            <img src="/path/to/your/image.jpg" alt="Project thumbnail" />

                                <h2>{project.name}</h2>
                                <h2>{project.name}</h2>
                                <h2>{project.projectDepartment}</h2>
                                <p>{project.membres}</p>
                                <p>{project.date}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="ProjectListContainer">
                 <ProjectCard/>
                 <ProjectCard/>
                 <ProjectCard/>
                 <ProjectCard/>
                 <ProjectCard/>
                 <ProjectCard/>
                 <ProjectCard/>
                 <ProjectCard/>

                </div>

                
        </div>

    </div>


   );
      
    
  };
  
  export default Projects;