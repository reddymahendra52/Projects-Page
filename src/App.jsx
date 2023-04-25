import React from 'react';
import './App.css';

{/** Icons */ }
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import FaceIcon from '@mui/icons-material/Face';

{/** Illustration on the page */ }
import illustration from './assets/illustration.svg'

{/** Importing projects data */ }
import Mernprojects from '../Projects Data/MERNProjects.json';
import Reactprojects from '../Projects Data/ReactProjects.json';
import BasicProjects from '../Projects Data/BasicProjects.json';

const App = () => {
  return (
    <div className="projects-container">
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">Welcome to Projects Showwcase</h1>
          <p className="hero-skills">Discover my unique creative endeavors.Meticulously crafted with a keen eye for aesthetics and a deep understanding of user
            experience, my projects showcase unwavering commitment to excellence.</p>
          <p className="hero-subtitle">Welcome to my world of projects, where passion meets expertise.</p>
        </div>
        <div className="hero-right">
          <img src={illustration} alt="" />
        </div>
      </section>
      <section className="projects-section">

        {/** MERN Projects */}
        <div className="title">
          <h2 className='projects-heading'>MERN stack Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {Mernprojects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-tile" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="tile-footer">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-icons">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <GitHubIcon />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <OpenInNewOutlinedIcon />
                </a>
              </div>
            </a>
          ))}
        </div>

        {/** React Projects */}
        <div className="title">
          <h2 className='projects-heading'>React Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {Reactprojects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-tile" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="tile-footer">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-icons">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <GitHubIcon />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <OpenInNewOutlinedIcon />
                </a>
              </div>
            </a>
          ))}
        </div>

        {/** Fundamental Projects */}
        <div className="title">
          <h2 className='projects-heading'>Fundamental Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {BasicProjects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-tile" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="tile-footer">
                <h2 className="project-title">{project.title}</h2>
                {/* <p className="project-description">{project.description}</p> */}
              </div>
              {/* <div className="project-icons">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <GitHubIcon />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                  <OpenInNewOutlinedIcon />
                </a>
              </div> */}
            </a>
          ))}
        </div>
      </section>
      <section>
        <p className="footer-copyright">© 2023 Mutukundu Mahendra Reddy. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/reddymahendra52" target="_blank" rel="noopener noreferrer" className="project-icon">
            <GitHubIcon />
          </a>
          <a href="https://reddymahendra52.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-icon">
            <LanguageIcon />
          </a>
          <a href="https://www.linkedin.com/in/reddymahendra52/" target="_blank" rel="noopener noreferrer" className="project-icon">
            <LinkedInIcon />
          </a>
          <a href="https://reddymahendra52.mmm.page/main" target="_blank" rel="noopener noreferrer" className="project-icon">
            <FaceIcon />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
