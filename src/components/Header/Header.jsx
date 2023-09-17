 import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import  s from './Header.module.css'
import { nav_links } from '../../data/nav.links'
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useState } from 'react';

export default function Header() {
  const [isLang_active, setLangActive] =useState(false);
  const handleClick = () => {

  }
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
          <ButtonUI text="Book a consultation" />
            <div className={s.lang_wrapper}>
              <button className={s.lang_item} onClick={handleClick}>EN</button>
              <button className={s.lang_item} onClick={handleClick}>DE</button>
            </div>
            <span className={s.phone}>+7 (212) 674-25-10</span>
          </div>
        </div>
      </div>

    </header>
  )
}
