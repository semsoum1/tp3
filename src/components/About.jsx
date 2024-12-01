import React from 'react'

function About({description,name,image}) {
  return (
    <div className='about'>
      
      <img src={image} alt={`${name}`} />
      <p><strong>Nom :</strong> {name}</p>
      <p>{description} </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus 
      illo illum vero repellendus, unde eius dicta laudantium esse rem eos aut eum itaque 
      consequuntur, magnam, placeat cumque ullam? Dolore!</p>
    
    </div>
  )
}

export default About;