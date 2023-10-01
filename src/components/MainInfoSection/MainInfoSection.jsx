import React, { useContext } from 'react'
import { LangContext } from '../../context/LangContext';
import { data_de } from '../../data/data_de';
import { data_en } from '../../data/data_en';
import { images } from '../../data/images';
import s from './MainInfoSection'

export default function MainInfoSection() {

    const {activeLang} = useContext(LangContext)

  const statement = activeLang === "en" ? data_en.statement : data_de.statement;
  const author = activeLang === "en" ? data_en.author : data_de.author;
  
  const mainInfoSectionImages = images;
    

  

  return (
    <div className={s.statement}>
        {
          statement.map((elem) => (
            <p key={elem.id}>{elem.text} <span>{elem.title}</span></p>))
        }
        <div className={s.images}>
            {
               mainInfoSectionImages.map((elem) => (
                    <img key={elem.id} src={elem.image} alt={elem.alt}/>
                ))
            } 
        </div>
        <div className={s.author}>
            {
              author.map((elem) => (
                <p key={elem.id}>{elem.text}</p>))
            }
        </div>
    </div>
  )
}

