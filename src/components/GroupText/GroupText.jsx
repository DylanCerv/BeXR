import React from 'react'
import './GroupText.css'

export default function GroupText({title, primaryText, secondaryText, }) {
  return (
    <article className='group-text'>
      <h3 className='group-text-title color-primary barlow-condensed-bold' data-aos="fade-left" data-aos-duration="1000" >{title}</h3>
      <div>
        <p className='group-text-texts color-primary group-text-primary' data-aos="fade-left" data-aos-duration="1000" >{primaryText}</p>
        <p className='group-text-texts color-secondary ' data-aos="fade-left" data-aos-duration="1000" >{secondaryText}</p>
      </div>
    </article>
  )
}
