import './Services.css'
import Image1 from '../../assests/robott.png'
import Image2 from '../../assests/airobot.png'
import Image3 from '../../assests/robot.png'

const data = [
    {
        id: 1,
        image: Image1,
        title:"Grafic Design",
        description: 'My aim is to bring across your message and identiful in the most creative way. I have acquired the skills and knowledge necessary to make your project a success. ',
    },
    {
        id: 2,
        image: Image2,
        title:"Web developer",
        description: 'My aim is to bring across your message and identiful in the most creative way. I have acquired the skills and knowledge necessary to make your project a success. ',
    },
    
    {
        id: 3,
        image: Image3,
        title:"ReactJs",
        description: 'My aim is to bring across your message and identiful in the most creative way. I have acquired the skills and knowledge necessary to make your project a success. ',
    },
];

const Services = () => {
    return(
      <section className="services container section" id='services'>
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description})=> {
                return(
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />
                    
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                );
            })}
        </div>
      </section>   
    )
}

export default Services