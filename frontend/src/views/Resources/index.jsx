import './index.css'
import Header from '../../components/Header'
import Accordian2 from '../../components/Accordian2'

const index = () => {
  return (
    <section className='resources'>
      <Header title="Rabbit 101" />
      <div className="container">

      <Accordian2 title="8 common myths about rabbits">
        <ol>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
        </ol>
      </Accordian2>

      </div>
    </section>
  )
}

export default index