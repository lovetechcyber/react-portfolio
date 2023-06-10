import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

function Header() {
  return (
    <header id='header'>
     <div className='container header_container'>
      <div className='header_profile'>
       <img src={HeaderImage} alt='Header Portrait' />
      </div>
      <h3>Okwubali Prince</h3>
      <p>
      You are a click away from building your dream website or web app. 
      Send me the details of your project for a modern, mobile, responsive, highly performanhe website today!
      </p>
      <div className='header_cta'>
      <a href='#contact' className='btn primary'>Let's Talk</a>
      <a href='#portfolio'className='btn light'>My Work's</a>
      </div>
      <div className='header_socials'>
      {
        data.map(item => <a key = {item.id} href={item.link} target = '_blank' role='noopener noreferrer' rel="noreferrer">
        {item.icon} </a> )
      }
      </div>
     </div>
    </header>
  )
}

export default Header