import Logo from '../Logo/Logo'
import  s from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import ButtonUI from '../UI/ButtonUI/ButtonUI';
import { LangContext } from '../../context/LangContext';
import FooterBottom from '../FooterBottom/FooterBottom';

export default function Footer() {
  const {activeLang} = useContext(LangContext)

  const footer_links = 
  activeLang === "en" ? data_en.footer_links : data_de.footer_links;
  
  // const buy_links = activeLang === "en" ? data_en.buy_links : data_de.buy_links;
  // const services_links = activeLang === "en" ? data_en.services_links : data_de.services_links;
  // const information_links = activeLang === "en" ? data_en.information_links : data_de.information_links;
  // const about_company_links = activeLang === "en" ? data_en.about_company_links : data_de.about_company_links;
  // const contact_links = activeLang === "en" ? data_en.contact_links : data_de.contact_links;
  // const header_btn = activeLang === "en" ? data_en.header_btn : data_de.header_btn;

  return (
    <footer className={s.footer}>
        <div className="container">
            <div className={s.footer_wrapper}>
                <Logo />

                <ul className={s.options_wrapper}>
                    {footer_links.map((elem) => (
                        <li key={elem.id}className={s.column}>
                            <span>{elem.title}</span>
                            <ul className={s.links_list}>
                                {elem.links.map((link) => (
                                    <li key={link.id}>
                                        <NavLink to={link.link}>{link.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                            {elem.button ? (
                                    <div className={s.footer_btn}>
                                        <ButtonUI text={elem.button} />{" "}
                                    </div>
                                ) : (
                                    ""
                                )}
                        </li>
                    ))}
                </ul>
            </div>
            <FooterBottom />
        </div>
        
    </footer>
)
                                }