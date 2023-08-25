import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href = {CV} download className='btn'>Curriculum vitae</a>
        <a href="#contact"className='btn btn-primary'>Let's connect</a>
    </div>
  )
}

export default CTA