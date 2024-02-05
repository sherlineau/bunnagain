import './index.css'
import Header from "../../components/Header"
import Button from "../../components/Button"
import placeholder from '../../assets/images/placeholder-image.webp'

const index = () => {
  return (
    <section className='donate'>
      <Header title="Donate"/>
      <div className="container">
        <p className="grid-item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perspiciatis debitis ab repudiandae tempore, accusantium, fuga nostrum pariatur nihil, voluptate ipsum voluptates quas ad officiis dolores nisi deleniti minima quis!
        </p>
          <div className="options grid-item">
            <img src={placeholder} alt="" />
            <Button text="Amazon Smile"/>
          </div>
          <div className="options grid-item">
            <img src={placeholder} alt="" />
            <Button text="Venmo"/>
          </div>
          <div className="options grid-item">
            <img src={placeholder} alt="" />
            <Button text="Paypal"/>
          </div>
      </div>
    </section>
  )
}

export default index