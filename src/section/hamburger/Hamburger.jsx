import { useState } from "react";
import "./hamburger.css";
import { GiHamburgerMenu } from "react-icons/gi";
import data from "../hamburger/data";

const Hamburger = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="hamburger">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu  className="menu-icon" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="nav_menu">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Hamburger;
