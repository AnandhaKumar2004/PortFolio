import './index.css';
import backend from '../../assets/backend.png';
import uiux from '../../assets/uiux.png';
import webDev from '../../assets/webDev.png';  // exact case match
import fullstack from '../../assets/fullstack.png';

const Solutions = () => {
  return (
    <div className='services'>
      <h1>My Services</h1>
      <p>Here are some of the services I offer:</p>
      <div className='service-cards'>
        <div className='service-card'>
          <img src={uiux} alt="UI UX" />
          <h2>UI/UX Design</h2>
          <p>I create user-friendly and visually appealing designs that enhance user experience and engagement.</p>
        </div>
        <div className='service-card'>
          <img src={webDev} alt="Web Development" />
          <h2>Web Development</h2>
          <p>I build responsive and high-performance web applications using the latest technologies and best practices.</p>
        </div>
        <div className='service-card'>
          <img src={backend} alt="Backend Development" />
          <h2>Backend Development</h2>
          <p>I have experience in building robust backend systems using Node.js, Express, and MongoDB.</p>
        </div>
        <div className='service-card'>
          <img src={fullstack} alt="Full Stack Development" />
          <h2>Full Stack Development</h2>
          <p>I am proficient in both front-end and back-end development, allowing me to build complete web applications from start to finish.</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
