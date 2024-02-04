import './index.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/Button'

const index = () => {
  return (
    <section className='admissions'>
      <Header title="Found a Rabbit?"/>
      <div className="container text-center">
        <p>Dear cherished friends and fellow bunny lovers,</p>

        <p>Regrettably, due to circumstances beyond my control, I find myself unable to accept any new intakes until I can secure stable housing. The aftermath of Hurricane Ida has left my home in ruins, and the shortage of available fosters compounds the challenge of accommodating new bunnies. While we continue to have rabbits ready for adoption or fostering, the capacity to take on additional ones is currently restricted.</p>

        <p>For those seeking adoption information, we humbly request donations to support vaccines, surgeries for our existing rabbits, and those we have committed to helping. Additionally, contributions will aid in maintaining supplies for our dedicated fosters. If you are in a situation where you need to rehome your bunny, the Louisiana SPCA is a valuable resource.</p>

        <p>Although we can still provide courtesy posts for your bunnies, unfortunately, we lack new resources for housing. We continually welcome volunteers and fosters to join our cause, so if you are interested, please consider filling out our application.</p>
        <Link to="/adoption-application"><Button text="Application"/></Link>


        <p>Your understanding during this challenging time is immensely appreciated.</p>

        <p>Gratefully,</p>
        <p>Donna Rome</p>
        <p>Founder and President</p>
      </div>
    </section>
  )
}

export default index