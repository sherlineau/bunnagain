import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import './index.css'


const Index = (data) => {
  // destructure
  const { question, answer}  = data.data
  const [expanded, setExpanded] = useState(false)


  return (
    <div className='accordian'>
        <div onClick={(e)=> setExpanded(!expanded)} className="row space-between">
            <h4>{question}</h4>
            {expanded ? <FaMinus className="icon" /> : <FaPlus className="icon"/>}
        </div> 
            
        <div className={`content ${expanded ? "open": "close"}`}>
          {answer}
        </div>

        <div className="line"></div>
    </div>
  )
}

export default Index

