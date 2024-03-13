import React, { useState } from 'react'
import './SectionForm.css'

const isEmpty = (value) => value.trim() === '';

export default function SectionForm() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setFormSubmitted(true);
            
        } catch (error) {
            
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (isEmpty(value)) {
            e.target.classList.add('error-void');
        } else {
            e.target.classList.remove('error-void');
        }
    };

  return (
    <section id='Contacto' className='section-form'>
        <div className='form-animation blur-circle blur-circle-1' />
        <div className='form-animation blur-circle blur-circle-2' />
        <div className='form-animation blur-circle blur-circle-3' />

        <h2 className='title-form barlow-condensed-bold' data-aos="fade-left" data-aos-duration="1000">Contacto</h2>
        
        <form className='form-contact' method='POST' data-aos="fade-left" data-aos-duration="1000" onSubmit={handleSubmit}>
            <div className='first-inputs'>
                <input
                    className={`input ${formSubmitted && isEmpty(formData.nombre) ? 'error-void' : ''}`}
                    type="text"
                    placeholder='Nombre'
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    className={`input ${formSubmitted && isEmpty(formData.email) ? 'error-void' : ''}`}
                    type="email"
                    placeholder='Email'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <textarea
                className={`input text-area ${formSubmitted && isEmpty(formData.mensaje) ? 'error-void' : ''}`}
                type="text"
                rows={10}
                placeholder='Mensaje'
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <input type="submit" value="Enviar" className='button-form' />
        </form>
    </section>
  )
}
