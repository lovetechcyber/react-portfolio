import data from "./data";
import "./portfolio.css";
import Card from "./../../components/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

function Portfolio() {
  return (
    <section id="portfolio" className="work">
      <h2>My Works</h2>
      <div className="slide1">
        <div className="work_container">
          <Carousel showArrows={true} className="slide">
            {data.map((item) => (
              <Card key={item.id} className="work_card">
                <h4>{item.title}</h4>
                <span className="work_portrait">
                  {item.Image}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary"
                  >
                    Visit Site
                  </a>
                  <p>{item.description}</p>
                </span>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
