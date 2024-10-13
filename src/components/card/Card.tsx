import './Card.css'
type CardProp={
    children:JSX.Element,
    bgColor:string
}
const Card = ({children,bgColor}:CardProp) => {
  return (
    <div className='card' style={{backgroundColor:bgColor}}>{children}</div>
  )
}

export default Card