import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import './index.css'


const index = (data) => {
  // destructure
  const { question, answer}  = data.data
  const [expanded, setExpanded] = useState(false)


  return (
    <div className='accordian'>
        <div onClick={(e)=> setExpanded(!expanded)}className="row space-between accordian-header">
            <h4>{question}</h4>
            {expanded ? <FaMinus /> : <FaPlus />}
        </div> 
            
        <div className="content" style={expanded ? {display:"block"}:{display:"none"}}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default index