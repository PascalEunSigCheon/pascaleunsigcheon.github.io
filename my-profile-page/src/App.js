import logo from './logo.svg';
import './App.css';
import test_img from './test-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { setStyle } from 'framer-motion';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function CreateProjectCard({proj_img, proj_img_alt, proj_title, proj_desc, proj_link}) {
  return(
    <div className='project'>
      <a href={proj_link} target="_blank" rel="noreferrer"><img className='project-img' src={proj_img} alt={proj_img_alt} width='80px'></img></a>
      <h3 className='project-title'>{proj_title}</h3>
      <p className='project-description'>{proj_desc}</p>
      <a className='project-link' target="_blank" rel="noreferrer" href={proj_link}>View project &gt;</a>
    </div>
  )
}

function App() {

  const [btnStyleWork, setBtnStyleWork] = useState("btn-selected");
  const [btnStyleEducation, setBtnStyleEducation] = useState("btn-deselected");
  const [ulStyleWork, setUlStyleWork] = useState("show-history");
  const [ulStyleEducation, setUlStyleEducation] = useState("hide-history");


  const workEducationSelector = (event) => {

    if (btnStyleWork==="btn-selected") setBtnStyleWork("btn-deselected");
    else setBtnStyleWork("btn-selected")
    if (btnStyleEducation==="btn-selected") setBtnStyleEducation("btn-deselected");
    else setBtnStyleEducation("btn-selected")

    if (ulStyleWork==="show-history") setUlStyleWork("hide-history");
    else setUlStyleWork("show-history")
    if (ulStyleEducation==="show-history") setUlStyleEducation("hide-history");
    else setUlStyleEducation("show-history")

    console.log({ulStyleWork})

  }

  return (
    <div id='portfolio'>
      <header>
        <div id='header-div'>
          <div id='header-left'>
            <h1>Pascal Eun Sig Cheon</h1>
          </div>
          <div id='header-right'></div> 
        </div>
      </header>
      <main>
        <div id="intro-block">
          <div id="intro-txt">
            <h1 id="intro-hello">Hello I am a...</h1>
            <p id="intro-study-loc">Masters software engineering student based in Paris, France</p>
            <p id="intro-ds">Former data Scientist 4+ years</p>
            <p id="intro-phd">PhD Mathematics</p>
            <div id="intro-socials">
              <button id="cv-button">CV <a className='intro-social-link' target='_blank' rel="noreferrer">< FontAwesomeIcon icon={faDownload} /></a></button>
              <a className='intro-social-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faEnvelope} /></a>
              <a className='intro-social-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faGithub} /></a>
              <a className='intro-social-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faLinkedin} /></a>
              <a className='intro-social-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
          <img id="intro-img" src={test_img} width='50px'></img>
        </div>

        <div id="work-education">
          <div id="work-education-btns">
            <button className={btnStyleWork} onClick={workEducationSelector} id="btn-work">Work</button>
            <button className={btnStyleEducation} onClick={workEducationSelector} id="btn-education">Education</button>
          </div>

          <div id="work-education-history">
            <ul className={ulStyleWork}>

              <li className="li-work-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='work-history-info'>
                  <div className="work-history-title">Data Scientist</div>
                  <div className='work-history-company'>Fonterra &middot; Full-time</div>
                  <div className='work-history-period'>Sep 2023 - Jan 2025 &middot; 1 yr 5 mos</div>
                  <div className='work-history-location'>Auckland, New Zealand</div>
                  <ul className='work-history-description'>
                    <li>Developed manufacturing schedule optimiser app using Gurobi, Julia, and Python to replace the existing suboptimal manual process. The optimiser is planned to be used daily over 28 sites across New Zealand helping to process about 16 billion litres of milk everyday. The app is estimated to save the company $3‑10M annually.</li>
                    <li>Developed energy consumption prediction model using random forest regressor, Scikit‑Learn, Databricks, and MLflow. This resulted in saving the company $218K annually.</li>
                    <li>Implemented an incremental-loading logic for a large output table which was being fully-loaded daily. My implementation reduced the daily computing time from over 90+ minutes to consistent 15 minutes which allowed the reporting to be made efficiently at a critical time for the stakeholder. The Databricks notebooks I developed for this project is now the standard template across the team for similar processes.</li>
                  </ul>
                </div>
              </li>

              <li className="li-work-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='work-history-info'>
                  <div className="work-history-title">Data Engineer</div>
                  <div className='work-history-company'>Luma Analytics &middot; Full-time</div>
                  <div className='work-history-period'>Feb 2022 - Sep 2023 &middot; 1 yr 8 mos</div>
                  <div className='work-history-location'>Auckland, New Zealand</div>
                  <ul className='work-history-description'>
                    <li>I did this</li>
                    <li>I did this</li>
                    <li>I did this</li>
                  </ul>
                </div>
              </li>

              <li className="li-work-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='work-history-info'>
                  <div className="work-history-title">Mathematical Research Scientist</div>
                  <div className='work-history-company'>Market Economics &middot; Full-time</div>
                  <div className='work-history-period'>Jan 2020 - Jan 2022 &middot; 2 yr 1 mos</div>
                  <div className='work-history-location'>Auckland, New Zealand</div>
                  <ul className='work-history-description'>
                    <li>I did this</li>
                    <li>I did this</li>
                    <li>I did this</li>
                  </ul>
                </div>
              </li>
              
            </ul>

            <ul id="education-history" className={ulStyleEducation}>

              <li className="li-education-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='education-history-info'>
                  <div className="education-history-university">EPITA</div>
                  <div className='education-history-programme'>Master of Computer Science &middot; Software Engineering</div>
                  <div className='education-history-period'>Feb 2025 - Present</div>
                  <div className='education-history-location'>Auckland, New Zealand</div>
                  <ul className='education-history-description'>
                    <li>I did this</li>
                    <li>I did this</li>
                  </ul>
                </div>
              </li>
              
              <li className="li-education-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='education-history-info'>
                  <div className="education-history-university">University of Auckland</div>
                  <div className='education-history-programme'>Doctor of Philosophy &middot; Mathematics</div>
                  <div className='education-history-period'>2016 - 2019</div>
                  <div className='education-history-location'>Auckland, New Zealand</div>
                  <ul className='education-history-description'>
                    <li>I did this</li>
                    <li>I did this</li>
                    <li>I did this</li>
                  </ul>
                </div>
              </li>
              
              <li className="li-education-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='education-history-info'>
                  <div className="education-history-university">University of Auckland</div>
                  <div className='education-history-programme'>Bachelor of Science Honours &middot; Applied Mathematics</div>
                  <div className='education-history-period'>2015 - 2016</div>
                  <div className='education-history-location'>Auckland, New Zealand</div>
                  <ul className='education-history-description'>
                    <li>I did this</li>
                    <li>I did this</li>
                    <li>I did this</li>
                  </ul>
                </div>
              </li>
              
              <li className="li-education-history">
                <a target='_blank' rel="noreferrer" href="https://www.google.com"><img className="work-history-img" src={test_img} ></img></a>
                <div className='education-history-info'>
                  <div className="education-history-university">University of Auckland</div>
                  <div className='education-history-programme'>Bachelor of Science &middot; Applied Mathematics, Physics</div>
                  <div className='education-history-period'>2012 - 2015</div>
                  <div className='education-history-location'>Auckland, New Zealand</div>
                  <ul className='education-history-description'>
                    <li>I did this</li>
                    <li>I did this</li>
                    <li>I did this</li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>

        </div>

        <div id="project-section">
          <h1 id='project-section-title'>Projects</h1>

          <div id='project-list'>
            <CreateProjectCard
              proj_img={test_img}
              proj_img_alt={'Goodbye'}
              proj_title={'some title'}
              proj_desc={'some description.'}
              proj_link={'https://www.google.com'}
            />
            
            <CreateProjectCard
              proj_img={test_img}
              proj_img_alt={'Goodbye'}
              proj_title={'some title'}
              proj_desc={'some description.'}
              proj_link={'https://www.google.com'}
            />
            
            <CreateProjectCard
              proj_img={test_img}
              proj_img_alt={'Goodbye'}
              proj_title={'some title'}
              proj_desc={'some description.'}
              proj_link={'https://www.google.com'}
            />
            
            <CreateProjectCard
              proj_img={test_img}
              proj_img_alt={'Goodbye'}
              proj_title={'some title'}
              proj_desc={'some description.'}
              proj_link={'https://www.google.com'}
            />
            
            <CreateProjectCard
              proj_img={test_img}
              proj_img_alt={'Goodbye'}
              proj_title={'some title'}
              proj_desc={'some description.'}
              proj_link={'https://www.google.com'}
            />
            
          </div>
        </div>

      </main>
      <footer>
        <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faEnvelope} /></a>
        <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faLinkedin} /></a>
        <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faGithub} /></a>
      </footer>
    </div>
  );
}

export default App;
