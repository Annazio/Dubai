import React, { useContext } from 'react'
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import { LangContext } from '../../context/LangContext';
import  s from './style.module.css'



export default function OurExpertise() {
    const {activeLang} = useContext(LangContext)

    const expertise_heading = activeLang === "en" ? data_en.expertise_heading : data_de.expertise_heading;
    const expertise_title = activeLang === "en" ? data_en.expertise_title : data_de.expertise_title;
    const expertise_description = activeLang === "en" ? data_en.expertise_description : data_de.expertise_description;
  
  return (
    <div className='container'>
        <div className={s.expertise}>
          <span className={s.expertise_heading}>{expertise_heading}</span>
          <h2>{expertise_title}</h2>
          <p>{expertise_description}</p>
        </div>
    </div>
  )
}
