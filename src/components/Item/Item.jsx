import st from './style.module.scss'


export default function Item({item: {color, flag, rate, speed}}) {
  const nameStyle = `${flag ? st.nameBig : st.name}`;

  return (
    <div className={`${st.container} ${st[color]}`}>
    <div className={nameStyle}>Безлимитный {rate}</div>
    <div className={st.price}>{rate}</div>
    <div className={st.rub} >руб/мес</div>
    <div className={st.speed}>до {speed} Мбит/сек</div>
    <div className={st.description}>Объем включенного трафика не ограничен</div>
    </div>
  )
}