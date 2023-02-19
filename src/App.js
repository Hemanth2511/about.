import profil from './captain_america_avengers_infinity_war-1920x1080.jpg';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import github from './github.png';
import twitter from './twitter.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="head">
         <div className="logo">
         <h1>
          About<span>.</span>
        </h1>
         </div>
        

        <ul className="manu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="https://in.docworkspace.com/d/slOeHtqVR3unlnwY">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="profil">
        <img src={profil} alt=""/>
        </div>
        
        <div className='container'>
        <h4>Hii I’m <span>  Front-end Developer</span></h4>
          <h1>HEMANTH</h1>
          <p>I am fresher on front end developer, i explore my
knowledge in the field of information technology.<br/> To work for an  organization that provides me a platform to improve my skills and grow professionally.</p>
        </div>

        <div className='social'>
        <a href='https://instagram.com/_.h_e_m_a_n_th._?igshid=ZDdkNTZiNTM='><img src={instagram} alt="" height="20px" width="20px"/></a>
        <a href='https://linkedin.com/in/hemanth-g-a5352022b'><img src={linkedin} alt="" height="20px" width="20px"/></a>
        <a href='https://github.com/Hemanth2511'><img src={github} alt="" height="20px" width="20px"/></a>
        <a href='https://twitter.com/Hemanth64163905?s=90'><img src={twitter} alt="" height="20px" width="20px"/></a>
        
        </div>
      </header>

     
      
      
    </div>
  );
}

export default App;
