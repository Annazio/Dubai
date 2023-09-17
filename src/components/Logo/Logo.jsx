import s from './Logo.module.css'
import logo_img from "../../assets/logo.png"

export default function Logo() {
  return (
    <div className={s.logo_wrapper}>
       <img src={logo_img} alt="" />
    </div>
  )
}
