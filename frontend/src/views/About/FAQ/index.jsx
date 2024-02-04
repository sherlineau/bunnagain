import { useEffect, useState } from 'react'
import Accordian from '../../../components/Accordian'
import Header from '../../../components/Header'

import './index.css'

const index = () => {
  // initialize data state and fetch data from json
  const [data, setData] = useState([])

  // function to get data
  const getData = async() => {
    fetch("/faq.json")
      .then(res => res.json())
      .then(res => setData(res))
  }

  // on load, fetch data
  useEffect( ()=> {
    getData()
  })

  return (
    <section className='faq'>
      <Header title="Frequently Asked Questions"/>
      <div className="container">
        {
          data.map((i,index) => {return <Accordian data={i} key={index}/>})
        }
      </div>
    </section>
  )
}

export default index