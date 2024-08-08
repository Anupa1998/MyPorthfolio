import React from 'react'
import img from '../../assets/My.png'

function ImgComponent({bgcolor}) {
  return (
    <div>
        <img src={img} className={`rounded-full max-w-80 ${bgcolor} custom-glow`} alt="" />
    </div>
  )
}

export default ImgComponent