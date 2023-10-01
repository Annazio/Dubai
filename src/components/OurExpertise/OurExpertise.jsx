import React, { useContext } from 'react'
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import { LangContext } from '../../context/LangContext';
import  s from './style.module.css'



export default function OurExpertise() {
    const {activeLang} = useContext(LangContext)

    const expertise_heading = activeLang === "en" ? data_en.expertise_heading : data_de.expertise_heading;
    const expertise_title = activeLang === "en" ? data_en.expertise_title : data_de.expertise_title;
    const expertise_description = activeLang === "en" ? data_en.expertise_desсription : data_de.expertise_description;
  
  return (
    <div className='contaainer'>
        <div className='expertise'>
            {expertise_heading.map((elem) => <p key={elem.id} className={s.expertise_heading}>{elem.text}</p>)}
            {expertise_title.map((elem) => <h2 key={elem.id}>{elem.text}</h2>)}
            {expertise_description.map((elem) => <p key={elem.id}>{elem.text}</p>)}
          
        </div>
    </div>
  )
}
