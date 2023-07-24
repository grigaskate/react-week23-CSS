import st from './style.module.scss'
import Item from '../Item/Item'

export default function Cards(props) {
  return (
    <div className={st.container}>
      {props.arr.map((item, index)=>(
        <Item item={item} key={index}/>
      ))}
    </div>
  )
}
