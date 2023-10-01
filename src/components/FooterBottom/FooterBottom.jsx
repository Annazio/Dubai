import React, { useContext } from 'react'
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import { LangContext } from '../../context/LangContext';
import s from './FooterBottom.module.css'
import { icons } from '../../data/icons';
import { Link } from 'react-router-dom';

export default function FooterBottom() {
    const {activeLang} = useContext(LangContext)

    const footer_bottom = activeLang === "en" ? data_en.footer_bottom : data_de.footer_bottom;
  return (
      <div className="container">
          <div className={s.content}>
             {footer_bottom.map((elem) => <p key={elem.id}>{elem.text}</p>)}

                <ul className={s.social_icons}> 
                    {icons.map((el) => (<li className={s.icon} key={el.id}>
                      <Link to="#">{el.icon}</Link>
                      </li>))}
                </ul>
          </div>
      </div>
    

  )
}

