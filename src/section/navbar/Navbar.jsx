import './navbar.css'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import logo from '../../assets/logo.JPG'


function Navbar() {
  return (
    <nav>
     <div className='container nav_container'>
     <a href='index.html' className='nav_logo'>
     <img src={logo} alt='logo' />
     </a>
     <ul className='nav_menu'>
     {
      data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
     }
     </ul>
     <button id='theme_logo'>{IoIosColorPalette}</button>
     </div>
    </nav>
  )
}

export default Navbar