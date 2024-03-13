import React from 'react'
import './Landing.css'
import Section from '../../components/Section/Section'
import GroupText from '../../components/GroupText/GroupText'
import AutoSlideCarousel from '../../components/AutoSlideCarousel/AutoSlideCarousel'
import SectionForm from '../../components/SectionForm/SectionForm'
import Carousel3D from '../../components/Carousel3D/Carousel3D'
import Nav from '../../components/Nav/Nav'
import SectionHero from '../../components/SectionHero/SectionHero'

export default function Landing() {

  const BeXRTeam = [
    {title: "Esteban Baques Devesa", description: "Co-founder", src: "/public/avatars/Avatar-Paris.jpeg"},
    {title: "Héctor Alises Sanchez", description: "Developer", src: "/public/avatars/Avatar-Paris.jpeg"},
    {title: "Julia Lozano", description: "UX/UI Designer", src: "/public/avatars/Avatar-Julia.jpeg"},
    {title: "David Santín Montero", description: "Developer", src: "/public/avatars/Avatar-Paris.jpeg"},
    {title: "Ángel David García", description: "Technical Artist", src: "/public/avatars/Avatar-Forest.jpeg"},
    {title: "Raymundo Alvarado", description: "Curador de experiencias digitales", src: "/public/avatars/Avatar-Party.jpeg"},
  ]

  const Services = [
    {title: "Web 3.0", src: "/public/services/Man.jpg"},
    {title: "Desarrollo de OTT", src: "/public/services/3Person.jpg"},
    {title: "Retail y metaverso", src: "/public/services/2Person.jpg"},
    {title: "BeXR entretenimiento", src: "/public/services/3Person.jpg"},
  ]

  return (
    <div>
      <Nav />
      <SectionHero />
      <Section bgSecundary imageSecundary id='Nosotros'>
        <AutoSlideCarousel items={BeXRTeam} />
        <GroupText
          title={'BeXR Team'}
          primaryText={'Somos una start up dedicada al desarrollo de juegos, plataformas de entretenimiento y fan engagement, tanto para móviles como para dispositivos VR, AR y XR.'}
          secondaryText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta lectus id elit cursus, vel porta nibh rhoncus. Vivamus tempor erat non aliquet facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta lectus.'}
        />
      </Section>
      <Section bgSecundary imageSecundary id='Servicios'>
        <AutoSlideCarousel items={Services} />
        <GroupText
          title={'Servicios'}
          primaryText={'Somos una start up dedicada al desarrollo de juegos, plataformas de entretenimiento y fan engagement, tanto para móviles como para dispositivos VR, AR y XR.'}
          secondaryText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta lectus id elit cursus, vel porta nibh rhoncus. Vivamus tempor erat non aliquet facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta lectus.'}
        />
      </Section>
      <Section bgSecundary id='Proyectos'>
        <Carousel3D />
      </Section>
      
      <SectionForm />
      
    </div>
  )
}
