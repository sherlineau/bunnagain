import './index.css'

const index = (props) => {
    const {title} = props

  return (
    <h1 className="header">{title}</h1>
  )
}

export default index