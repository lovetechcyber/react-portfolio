
import './App.css'
import Navbar from './section/navbar/Navbar';
import Header from './section/header/Header';
import About from './section/about/About';
import Services from './section/services/Services';
import Portfolio from './section/portfolio/Portfolio';
import Contact from './section/contact/Contact';
import Hamburger from './section/hamburger/Hamburger';


function App() {
  return (
    <main>
     <Navbar />
     <Hamburger />
     <Header />
     <About />
     <Services />
     <Portfolio />
     <Contact />
    </main>
  );
}

export default App;
