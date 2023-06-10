import './services.css';
import data from './data';
import Card from '../../components/Card'

function Services() {
    return (
        <section id='service'>
            <h2>My Services</h2>
            <p>I give the best in all the services below</p>
            <diiv className='container service_container'>
             {
                data.map(item => (
                  <Card key={item.id} className='service light'>
                  <div className='service_icon'> {item.icon} </div>
                  <div className='service_details'>
                   <h4>{item.title}</h4>
                   <p>{item.desc}</p> 
                  </div>
                  </Card>
                ))
             }
            </diiv>
        </section>
    )
}

export default Services
