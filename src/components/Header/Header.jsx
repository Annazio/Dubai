 import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import  s from './Header.module.css'
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useContext, useState } from 'react';
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import { LangContext } from '../../context/LangContext';

export default function Header() {
  const {activeLang, setActiveLang} = useContext(LangContext);
  
  const nav_links = activeLang === "en" ? data_en.nav_links : data_de.nav_links;
  const header_btn = activeLang === "en" ? data_en.header_btn : data_de.header_btn;

  
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header_wrapper}>
          <div className={s.header_left}>
          <NavLink to="/">
              <Logo />
          </NavLink>
          <nav>
          <ul className={s.nav_list}>
                                {nav_links.map((element) => (
                                    <li key={element.id}>
                                        <NavLink className={s.nav_link} to={element.link}>
                                            {element.title}
                                        </NavLink>
                                    </li>
                                ))}
            </ul>
          </nav>
          </div>
          <div className={s.header_right}>
          <ButtonUI text={header_btn} />
            <div className={s.lang_wrapper}>
              <button 
              className={`${s.lang_item} ${
                s[activeLang === "en" ? "active" : ""] || ""
            }`} onClick={() => setActiveLang("en")}>EN</button>
              <button className={`${s.lang_item} ${
                s[activeLang === "de" ? "active" : ""] || ""
            }`} onClick={() => setActiveLang("de")}>DE</button>
            </div>
            <span className={s.phone}>+7 (212) 674-25-10</span>
          </div>
        </div>
      </div>

    </header>
  )
}
