import s from "./ButtonUI.module.css";

export default function ButtonUI({ text }) {
    return <button className={s.ui_btn}>{text}</button>;
}