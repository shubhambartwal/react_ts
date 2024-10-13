import { useContext } from 'react'
import './Card.css'
import { ThemeContext } from '../../context/theme/ThemeContext'

type CardProp={
    children:JSX.Element,
    bgColor:string
}
const Card = ({children,bgColor}:CardProp) => {
    const theme= useContext(ThemeContext)
  return (
    <div className={`card ${theme}`} style={{backgroundColor:bgColor}}>{children}</div>
  )
}

export default Card