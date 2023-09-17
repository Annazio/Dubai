import React from 'react'
import s from './TitleSection.module.css'

export default function TitleSection() {
  return (
    <div>
        <div className={s.social_icons}>
            <a href="#"><img src="./assets/social_icons/Facebook.png" alt="" /></a>
            <a href="#"><img src="" alt="" /></a>
            <a href="#"><img src="" alt="" /></a>
            <a href="#"><img src="" alt="" /></a>
            <a href="#"><img src="" alt="" /></a>
        </div>

        <div>
            <p>Lorem Ipsum</p>
            <h1>Welcome home to luxury</h1>
            <button>Book a consultation</button>
        </div>

        <div className={s.buttons}>
            <button>Prev</button>
            <button>Next</button>
        </div>
    </div>
  )
}
