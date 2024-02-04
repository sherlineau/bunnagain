import "./index.css"

const index = (props) => {
    const {text} = props
  return (
    <button className='button'>{text}</button>
  )
}

export default index