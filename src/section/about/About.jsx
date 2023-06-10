import AboutImage from "../../assets/about.JPG";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import "./about.css";
import data from "./../about/data";
import Card from "../../components/Card";

function About() {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImage} alt="About portrait" />
          </div>
        </div>
        <div className="about_rigth">
          <h2>About Me</h2>
          <div className="about_cards">
            {data.map(item => (
              <Card key={item.id} className="about_card">
                <span className="about_card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
             ))
            }
          </div>
          <p>I'm Prince a skilled frontend developer known for my exceptional talents 
          in web development. With an aptitude for creating visually stunning and user-friendly 
          interfaces, I bring a touch of royalty to the digital realm. My passion for coding and 
          design is evident in my work, where I combine my technical expertise with a keen eye for aesthetics. 
          Whether I'm crafting captivating websites or developing responsive mobile applications, I consistently 
          deliver high-quality solutions that exceed expectations. With my sharp problem-solving skills and 
          commitment to staying up-to-date with the latest industry trends, I am always ready to conquer new 
          challenges and elevate the user experience. </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
