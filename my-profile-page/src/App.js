import logo from './logo.svg';
import './App.css';
import test_img from './test-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

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
      <img className='project-img' src={proj_img} alt={proj_img_alt} width='80px'></img>
      <h3 className='project-title'>{proj_title}</h3>
      <p className='project-description'>{proj_desc}</p>
      <a className='project-link' target="_blank" rel="noreferrer" href={proj_link}>View project &gt;</a>
    </div>
  )
}

function App() {
  return (
    <div id='portfolio'>
      <header>
        MY NAME BIG
      </header>
      <main>
        <div id="intro-block">
          <div id="intro-txt">
            <h1 id="intro-hello">Hello Pascal here.</h1>
            <p id="intro-study-loc">Masters software engineering student based in Paris, France</p>
            <p id="intro-ds">Former data Scientist 4+ years</p>
            <p id="intro-phd">PhD Mathematics</p>
            <div id="intro-socials">
              <button id="cv-button">CV</button>
              <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faDownload} /></a>
              <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faEnvelope} /></a>
              <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faGithub} /></a>
              <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faLinkedin} /></a>
              <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faYoutube} /></a>
              <a className='footer-link' target='_blank' rel="noreferrer" href='https://www.google.com'>< FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
          <img id="intro-img" src={test_img} width='50px'></img>
        </div>
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
