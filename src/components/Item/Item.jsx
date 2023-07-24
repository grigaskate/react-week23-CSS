import st from './style.module.scss'

export default function Item(props) {
  return (
    <div className={`${st.container} ${st[props.item.color]}`}>
      <>
        {props.item.flag ? (
            <div className={st.nameBig}>Безлимитный {props.item.rate}</div>
        ):(
            <div className={st.name}>Безлимитный {props.item.rate}</div>
        )}
      </>
      <div className={st.price}>{props.item.rate}</div>
      <div className={st.rub} >руб/мес</div>
      <div className={st.speed}>до {props.item.speed} Мбит/сек</div>
      <div className={st.description}>Объем включенного трафика не ограничен</div>
    </div>
  )
}
