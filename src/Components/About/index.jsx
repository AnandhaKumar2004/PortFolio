import './index.css'
import SkillBar from "../SkillBar";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <h2>I’m Anandha Kumar and <span className='orange'>MERN Stack Developer</span></h2>
      <p className='about-para'>I'm a MERN Stack Developer passionate about building modern, user-friendly web applications. My expertise includes front-end development, back-end development, database management, and problem-solving. As a fresher, I am eager to learn, adapt quickly to new technologies, and contribute to innovative projects.</p>
      <div className='second-half-container'>
        <div className='bio-data'>
          <p className='dob'>Date of Birth: August 15th,2004</p>
          <p className='age'>Age: 21</p>
          <p className='degree'>Degree: Bachelor of Technology</p>
          <p className='specialization'>Specialization: Artificial Intelligence and Data Science</p>
          <p className='email'>Email: anandhakumar2621@gmail.com</p>
          <p className='phone'>Phone: 9092038300</p>
          <button className='btn' onClick={() => window.open("../src/assets/resume.pdf", "_blank")}>Download Resume</button>
        </div>
        <div className='skills'>
          <SkillBar skill="HTML" percentage={90} />
          <SkillBar skill="CSS" percentage={80} />
          <SkillBar skill="JavaScript" percentage={75} />
          <SkillBar skill="Python" percentage={70} />
          <SkillBar skill="SQL" percentage={80} />
        </div>
      </div>
    </div>
  );
};

export default About;
