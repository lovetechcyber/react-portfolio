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
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    Image: <img src={photo1} alt='' className='work_portrait'/>,
  },
  {
    id: 2,
    title: "Interior Design website",
    link: 'https://interdesign.netlify.app/',
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      Image: <img src={photo2} alt='' className='work_portrait' />,
  },
  {
    id: 3,
    title: "Tailoring Website",
    link: 'https://mfworld.netlify.app/',
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      Image: <img src={photo3} alt='' className='work_portrait'/>,
  },
  {
    id: 4,
    title: "Background Slide",
    link: 'https://slideok54.netlify.app/',
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      Image: <img src={photo4} alt='' className='work_portrait'/>,
  },
];

export default data;