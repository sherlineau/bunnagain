import { Link } from 'react-router-dom'
import './index.css'
import Header from '../Header'
import Button from '../Button'

const index = () => {
  return (
    <section className='learn'>
      <Header title="Learn Before You Leap"/>
      <div className="container">
        <h1>Your kids want an Easter Bunny?</h1>
        <h2>LEARN BEFORE YOU LEAP!</h2>

        <p>
          A pet rabbit is a long term investment, and a commitment that you must but sure you can make.  BunnAgain Rabbit Rescue is offering your family an opportunity to preview rabbit ownership and help out a rescue rabbit at the same time!
        </p>

        <p>For a $30.00 donation, you will be loaned a rabbit, cage or pen, instructions & supplies for a 2 weeks. <span className="emphasis">Application and interview required.</span></p>

        <p>Those cute baby bunnies will grow up into adults, and will still need your time and attention.  This is a great way to see if your family is ready for the commitment!!</p>

        <ul>
          <li>Rescues will get the one on one attention they crave.</li>
          <li>Kids will get a reality check and learn about the responsibilities of rabbit care.</li>
          <li>Parents will have an option to return the bet without having made a huge investment.</li>
          <li>All donations will help feed, house, and care for the rescue rabbits.</li>
        </ul>
        
        <h2>IT&apos;S A WIN-WIN DEAL!!!</h2>
        <Link to="/adoption-application"><Button text="Submit an Application Today"/></Link>

      </div>
    </section>
  )
}

export default index