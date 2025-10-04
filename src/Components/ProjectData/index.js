import emoji from '../../assets/emoji-game.png';
import jobby from '../../assets/jobby-apps.png';
import wiki from '../../assets/wiki.png';  

const ProjectData = [
  {
    id: 1,
    title: 'Wiki Search',
    description: 'A full-stack application that allows users to search for Wikipedia articles. Built with React and Node.js.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/AnandhaKumar2004/Wikipedia',
    liveLink: 'https://wikipediawebak.ccbp.tech/', 
    imageUrl: wiki,
  },
  {
    id: 2,
    title: 'Emoji Game',
    description: 'A fun emoji guessing game built with React. Players must guess the correct emoji based on the provided clues.',
    technologies: ['React', 'CSS'],
    githubLink: 'https://github.com/AnandhaKumar2004/EmojiGame_React',
    liveLink: 'https://emojigameak.ccbp.tech/',
    imageUrl: emoji ,
  },
  {
    id: 3,
    title: 'Joby Apps',
    description: 'A job listing application built with React. Users can browse and apply for jobs.',
    technologies: ['React', 'CSS'],
    githubLink: 'https://github.com/AnandhaKumar2004/JobbyApp',
    liveLink: 'https://jobbyappsak.ccbp.tech/',
    imageUrl: jobby,
  },
  // Add more projects with image URLs
];

export default ProjectData;