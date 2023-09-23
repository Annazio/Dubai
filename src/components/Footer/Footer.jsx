import Logo from '../Logo/Logo'
import  s from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import ButtonUI from '../UI/ButtonUI/ButtonUI';

export default function Footer() {
  const [activeLang, setActiveLang] =useState('en');
  
  const buy_links = activeLang === "en" ? data_en.buy_links : data_de.buy_links;
  const services_links = activeLang === "en" ? data_en.services_links : data_de.services_links;
  const information_links = activeLang === "en" ? data_en.information_links : data_de.information_links;
  const about_company_links = activeLang === "en" ? data_en.about_company_links : data_de.company_links;
  const contact_links = activeLang === "en" ? data_en.contact_links : data_de.contact_links;
  const header_btn = activeLang === "en" ? data_en.header_btn : data_de.header_btn;

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer_wrapper}>
          <Logo />

            <div className={s.options_wrapper}>
              
              <div className={s.buy}>
                <ul className={s.buy_list}> Buy
                {buy_links.map((element) => (
                                    <li key={element.id}>
                                        <a href={element.link}>{element.title}</a>
                                    </li>
                                ))}
                </ul>
              </div>   

              <div className="services">   
                <ul className="services_list"> Services
                {services_links.map((element) => (
                                    <li key={element.id}>
                                        <a href={element.link}>{element.title}</a>
                                    </li>
                                ))}
                </ul>
              </div>

              <div className="information">
                <ul className="information_list"> Information
                {information_links.map((element) => (
                                    <li key={element.id}>
                                        <a href={element.link}>{element.title}</a>
                                    </li>
                                ))}
                </ul>
              </div>


              <div className="about_company">
                <ul className="about_company_list"> About company
                {about_company_links.map((element) => (
                                    <li key={element.id}>
                                        <a href={element.link}>{element.title}</a>
                                    </li>
                                ))}
                </ul>
              </div>

              <div className="contact">
                <ul className="contact_list"> Contact
                {contact_links.map((element) => (
                                    <li key={element.id}>
                                        <a href={element.link}>{element.title}</a>
                                    </li>
                                ))}
                </ul>
                <ButtonUI text={header_btn} />
              </div>

            </div>

        </div>
      </div>
    </footer>
    
  )
}

