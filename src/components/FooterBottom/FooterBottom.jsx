import React, { useContext } from 'react'
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import { LangContext } from '../../context/LangContext';
import s from './style.module.css'
import { icons } from '../../data/icons';

export default function FooterBottom() {
    const {activeLang} = useContext(LangContext)

    const footer_bottom = activeLang === "en" ? data_en.footer_bottom : data_de.footer_bottom;
  return (
    <div className={s.footer_bottom}>

             {footer_bottom.map((elem) => <p key={elem.id}>{elem.text}</p>)}
                <ul className={s.social_icons}> 
                    {icons.map((el) => (<li key={el.id}>{el.icon}</li>))}
                </ul>
        </div>

  )
}

