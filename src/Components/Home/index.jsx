import './index.css'
import { useNavigate } from 'react-router-dom'  // if using v6

const Home = () => {
const navigate = useNavigate();

  const onMoreAboutMeClick = () => {
    navigate("/about"); // v6
  };

  return (
    <div className="home">
      <div className="intro">
        <h1>Hello, my name is <span className='orange'>Anandha Kumar</span></h1>
        <h2>I'm a <span className='orange'>Full Stack Developer</span></h2>
        <p>
          I'm a Full Stack Developer passionate about building modern, 
          user-friendly web applications. My expertise includes front-end 
          development, back-end development, database management, and 
          problem-solving. As a fresher, I am eager to learn, adapt quickly 
          to new technologies, and contribute to innovative projects.
        </p>
        <button className='btn' onClick={onMoreAboutMeClick}>
          More About Me
        </button>
      </div>
      <div className="profile-photo">
        <img src="../src/assets/profilePhoto.png" alt="Profile" className="profile-photo" />
      </div>
    </div>
  );
};

export default Home;
