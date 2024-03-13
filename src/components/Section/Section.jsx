import React from 'react'
import './Section.css'

export default function Section({
    children,
    imageSecundary = false,
    bgSecundary,
    className,
    id,
}) {
  return (
    <section id={id} className={`section ${bgSecundary && 'bg-sections section-secundary '} ${className}`} >
        {imageSecundary &&
          <img
            className='imageSecundarySection'
            src="/sections/Franjas secciones.png"
            alt=""
          />
        }
        {children}
    </section>
  )
}
