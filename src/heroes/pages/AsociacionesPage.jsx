import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AsociacionesPage = () => {

    const MarvelImg = '/heroes/Marvel_Logo.png'
    const DcImg = '/heroes/DC_Comics_logo.png'
    const navigate = useNavigate()

  return (
    <div className='row mt-5'>
    <h1>Asociaciones</h1>
    <hr/>
  
      <div className="col-4 card-body">
      <img 
        src={DcImg}
        alt='dc'
        className="img-thumbnail animate__animated animate__bounceIn"
        style={{width: '18rem', cursor: true ? 'pointer' : 'default'}}
        onClick={() => navigate('/dc')}
        />
         
      </div>
      <img 
        src={MarvelImg}
        alt='dc'
        className="img-thumbnail animate__animated animate__bounceIn"
        style={{width: '50rem', cursor: true ? 'pointer' : 'default'}}
        onClick={() => navigate('/marvel')}
        
        />
    </div>
  )
}
