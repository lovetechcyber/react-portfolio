import photo1 from '../../assets/work1.jpg' 
import photo2 from '../../assets/work2.jpg' 
import photo3 from '../../assets/work3.jpg' 
import photo4 from '../../assets/work4.jpg' 


const data = [
  {
    id: 1,
    title: "My Portfolio",
    link: '#header',
    description:
      "Here is my portfolio website designed with pure Reactjs and CSS3",
    Image: <img src={photo1} alt='' className='work_portrait'/>,
  },
  {
    id: 2,
    title: "Interior Design website",
    link: 'https://interdesign.netlify.app/',
    description:
      "This website is designed with boostrap and I can still design it for you with React.🔥️",
      Image: <img src={photo2} alt='' className='work_portrait' />,
  },
  {
    id: 3,
    title: "Tailoring Website",
    link: 'https://mfworld.netlify.app/',
    description:
      "Here is a website where you can show case your product, I designed this site and i can still design  for you.",
      Image: <img src={photo3} alt='' className='work_portrait'/>,
  },
  {
    id: 4,
    title: "Background Slide",
    link: 'https://slideok54.netlify.app/',
    description:
      "Background slider designed with boostrap.",
      Image: <img src={photo4} alt='' className='work_portrait'/>,
  },
];

export default data;