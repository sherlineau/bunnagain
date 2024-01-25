import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import './index.css'


const index = (data) => {
  // destructure
  const { question, answer}  = data.data
  const [expanded, setExpanded] = useState(false)


  return (
    <div className='accordian'>
            {
                expanded ? 
                    <div onClick={(e)=> setExpanded(false)} className="row space-between accordian-header">
                        <h4>{question}</h4>
                        <FaMinus onClick={(e)=> setExpanded(false)}/>
                    </div> 
                    :
                    <div onClick={(e)=> setExpanded(true)} className="row space-between accordian-header"> 
                        <h4>{question}</h4>
                        <FaPlus onClick={(e)=> setExpanded(false)}/>
                    </div>
            }
        <div className="content" style={expanded ? {display:"block"}:{display:"none"}}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default index