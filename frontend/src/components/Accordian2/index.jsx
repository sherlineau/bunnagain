/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import '../Accordian/index.css'


const Index = (props) => {
  // destructure
  const { title, children }  = props
  const [expanded, setExpanded] = useState(false)


  return (
    <div className='accordian'>
        <div onClick={(e)=> setExpanded(!expanded)} className="row space-between">
            <h4>{title}</h4>
            {expanded ? <FaMinus className="icon" /> : <FaPlus className="icon"/>}
        </div> 
            
        <div className={`content ${expanded ? "open": "close"}`}>
          {children}
        </div>

        <div className="line"></div>
    </div>
  )
}

export default Index

